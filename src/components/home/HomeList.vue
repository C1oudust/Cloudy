<template>
	<div class="container">
		<div class="apply">
			<div class="friend-list">
				<div class="left">
					<span class="tip">9</span>
					<img src="../../../public/static/img/add_user.png" alt />
				</div>
				<div class="right">
					<div class="info">
						<div class="name">好友申请</div>
						<div class="time">13:43</div>
					</div>
					<div class="msg">茫茫人海，相遇即是缘分！</div>
				</div>
			</div>
		</div>
		<div class="friends">
			<div class="friend-list" v-for="item in friends" :key="item.id">
				<div class="left">
					<div class="tip">
						<p>{{item.tip}}</p>
					</div>
					<img :src="item.imgUrl" alt />
				</div>
				<div class="right">
					<div class="info">
						<div class="name">{{item.name}}</div>
						<div class="time">{{changeTime(item.time)}}</div>
					</div>
					<div class="msg">{{item.content}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import data from '../../common/js/data';
import myfun from '../../common/js/myfun'
export default {
	name: 'HomeList',
	data() {
		return {
			friends: []
		}
	},
	mounted() {
		this.getFriends();
	},
	methods: {
		changeTime: function (date) {
			return myfun.formatDataTime(date)
		},
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
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: @font-size-base;
	padding: 0 @spacing-col-base;
	padding-top: 50px;
	.apply {
		.friend-list {
			.left {
				position: relative;
				border-radius: @border-radius-base;
				background-color: @color-primary;

				.img-size-base();
				img {
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					.img-size-sm();
				}
			}
		}
	}
	.friends {
		height: 100rem;
	}
	.friend-list {
		&:active {
			background-color: @bg-color-hover;
		}
		width: 100vw;
		padding: @spacing-col-base @spacing-row-base;
		display: flex;
		align-items: center;
		border-bottom: solid 1px @border-color;
		.left {
			position: relative;
			.img-size-base();
			.tip {
				font-size: @font-size-sm;
				position: absolute;
				top: -5px;
				left: 50px;
				height: 20px;
				min-width: 20px;
				color: @text-color-inverse;
				background-color: @color-warning;
				border-radius: @border-radius-circle;

				display: flex;
				justify-content: center;
				align-items: center;
				p {
					font-size: @font-size-sm;
				}
			}
			img {
				.img-size-base();
				border-radius: @border-radius-base;
			}
		}
		.right {
			padding: 0 @spacing-row-base;
			display: flex;
			flex: 1;
			flex-direction: column;
			justify-content: right;
			height: 100%;
			.info {
				padding-bottom: @spacing-col-sm;
				display: flex;
				justify-content: space-between;
				.time {
					color: @text-color-grey;
					font-size: @font-size-sm;
				}
			}
			.msg {
				font-size: @font-size-sm;
				color: @text-color-grey;
				text-align: left;
				max-width: 70vw;
				.ellipsisText();
			}
		}
	}
}
</style>