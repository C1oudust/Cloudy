<template>
	<div class="container">
		<div class="search">
			<span class="type">用户</span>
			<div class="search-list" v-for="item in friends" :key="item.id">
				<div class="left">
					<img :src="item.imgUrl" alt />
					<div class="name">{{item.name}}</div>
				</div>
				<div class="right">
					<div v-if="hadAdd" class="talk">发消息</div>
					<div v-else class="add">添加</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import data from '../../common/js/data';
export default {
	name: 'SearchList',
	data() {
		return {
			hadAdd: false,
			friends: []
		}
	},
	mounted() {
		this.getFriends();
	},
	methods: {
		getFriends: function () {
			if (data.friends()) {
				this.friends = data.friends();
				this.friends.forEach((item) => {
					item.imgUrl = './static/img/' + item.imgUrl;
				})

			}
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
		font-size: @font-size-base;
		height: 5vh;
		float: left;
		line-height: 5vh;
		margin-left: 1.5rem;
	}
	.search-list {
		&:active {
			background-color: @bg-color-hover;
		}
		width: 100vw;
		height: 50px;
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
			.name {
				font-size: @font-size-sm;
				color: @text-color;
				margin-left: 1rem;
			}
		}
		.right {
			padding: 0 @spacing-row-sm;
			display: flex;
			align-items: center;
			height: 100%;
			div {
				border-radius: @border-radius-base;
				height: 60%;
				line-height: 25px;
				width: 50px;
				font-size: @font-size-xs;
				margin: auto 0;
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