<template>
	<div class="container">
		<div class="search" v-show="this.users != false">
			<span class="type">用户</span>
			<router-link :to="'/UserDetail/'+ item.id" tag="div" v-for="item of users" :key="item.id">
				<div @click="userListClick" class="search-list" :id="item.id">
					<div class="left">
						<img :src="item.imgUrl" alt />
						<div class="info">
							<div class="name" v-html="item.name"></div>
							<div class="email" v-html="item.email"></div>
						</div>
					</div>
					<div class="right">
						<div v-if="item.isFriend" class="talk">发消息</div>
						<div v-else class="add">添加</div>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import data from '../../common/js/data';
import { mapState } from 'vuex'
export default {
	name: 'SearchList',
	data() {
		return {

		}
	},
	beforeMount() {
		this.$store.commit('empty')
	},
	mounted() {
		this.getFriends();
	},
	computed: {
		...mapState(['userArr']),
		users: function () {

			return this.userArr.length == 0 ? [] : this.userArr;
		},

	},

	methods: {
		getFriends: function () {
			if (data.friends()) {
				this.friends = data.friends();
				this.friends.forEach((item) => {
					item.imgUrl = './static/img/' + item.imgUrl;
				})

			}
		},
		userListClick() {
			// console.log(e.target) 
			// 这里使用e.currentTarget，当点击事件发生在绑定事件对象的子元素上时
			// 它会始终返回绑定事件的对象，而e.target 会返回绑定点击事件的元素的子元素。
			// console.log(e.currentTarget.id)
			// this.$store.commit('getUserData', e.currentTarget.id)
		}

	}
}
</script>

<style lang="less" scoped>
@import '../../common/style.less';

.container {
	display: flex;
	align-items: center;
	flex-direction: column;
	padding-top: 50px;

	.type {
		font-size: @font-size-lg;
		height: 6vh;
		float: left;
		line-height: 6vh;
		margin-left: 1.5rem;
	}
	.search-list {
		&:active {
			background-color: @bg-color-hover;
		}
		width: 100vw;
		height: 65px;
		padding: @spacing-row-sm @spacing-row-base;
		display: flex;
		align-items: center;
		border-bottom: solid 1px @border-color;
		.left {
			padding: 0 @spacing-row-base;
			display: flex;
			flex: 1;
			justify-content: right;
			align-items: center;
			height: 100%;
			img {
				.img-size-sm();
				border-radius: @border-radius-base;
			}
			.info {
				font-size: @font-size-sm;
				color: @text-color;
				margin-left: 1rem;
				display: flex;
				flex-direction: column;
				align-items: flex-start;

				.name {
					font-size: @font-size-base;
					margin-bottom: 0.5rem;
				}
				.email {
					color: @text-color-grey;
				}
			}
		}
		.right {
			padding: 0 @spacing-row-sm;
			display: flex;
			align-items: center;
			height: 100%;
			div {
				border-radius: @border-radius-base;
				height: 45%;
				line-height: 26px;
				width: 55px;
				font-size: @font-size-sm;
			}

			.add {
				background-color: rgba(74, 170, 255, 0.1);
				color: #4aaaff;
			}

			.talk {
				background-color: @color-primary;
				color: @text-color;
			}
		}
	}
}
</style>