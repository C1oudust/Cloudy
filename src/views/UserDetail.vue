<template>
	<div class="container">
		<div class="top-bar">
			<div class="left">
				<img src="../assets/images/detail/back.png" alt />
			</div>

			<div class="right">
				<!-- <router-link to="/More"> -->
				<div class="more">
					<img src="../assets/images/detail/more.png" alt />
				</div>
				<!-- </router-link> -->
			</div>
		</div>
		<main>
			<div class="bg">
				<div class="mask"></div>
				<img src="static/img/one.jpg" alt />
			</div>
			<div class="user">
				<div class="user-img">
					<img class="img" src="static/img/one.jpg" alt />
					<div class="sex" :style="{background:sexColor}">
						<img src="../assets/images/detail/male.png" alt />
					</div>
				</div>
				<div class="nick">{{user.nick}}</div>
				<p class="remark" v-if="sendMsg" v-text="'('+user.remark+')'"></p>
				<p class="content">{{user.content}}</p>
				<div class="button add" v-if="addFriend">加好友</div>
				<div class="button edit" v-else-if="!isUser">编辑</div>
				<div class="button msg" v-else-if="sendMsg">发消息</div>
			</div>
		</main>
	</div>
</template>

<script>
export default {
	name: 'UserDetail',
	data() {
		return {
			sexColor: "rgb(34, 158, 216)",// rgb(255,93,91)
			isUser: false,
			isFriend: false,
			user: {
				nick: '云尘',
				remark: '云尘',
				content: '我是云尘，一个热爱生活的文艺青年。初次见面，请多关照！'
			}

		}
	},
	computed: {
		addFriend: function () {
			return this.isUser && !this.isFriend;
		},
		sendMsg: function () {
			return this.isUser && this.isFriend;
		}

	}
}
</script>

<style lang="less" scoped>
@import '../common/style.less';
.container {
	overflow: hidden;
	.top-bar {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 50px;
		padding: 0 @spacing-col-base;
		.left {
			img {
				.img-size-xs();
			}
		}
		.right {
			float: right;
			margin-right: @spacing-row-lg;
			.more {
				img {
					.img-more;
				}
			}
		}
	}
	main {
		width: 100vw;
		height: 100vh;
		z-index: -1;
		.bg {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			.mask {
				width: 100%;
				height: 100%;
			}
			img {
				z-index: -1;
				position: absolute;
				top: -10%;
				left: -10%;
				opacity: 0.6;

				width: 120%;
				height: 110%;
				filter: blur(8px);
			}
		}
		.user {
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			.user-img {
				position: relative;
				.img {
					width: 256px;
					height: 256px;
					border-radius: @border-radius-lg;
					margin-top: 15vh;
					box-sizing: content-box;
					border: 4px solid @bg-color;
				}
				.sex {
					position: absolute;
					bottom: 5%;
					right: 5%;
					width: 46px;
					height: 46px;
					border-radius: @border-radius-circle;
					display: flex;
					justify-content: center;
					align-items: center;
					img {
						.img-size-xs();
					}
				}
			}

			.nick {
				font-size: @font-size-lg;
				margin-top: @spacing-col-lg;
			}
			.remark {
				margin-top: @spacing-col-base;
				color: @text-color-grey;
			}
			.content {
				width: 50vw;
				height: 30vh;
				word-wrap: normal;
				margin-top: @spacing-col-base;
				text-justify: inter-ideograph;
				text-align: justify;
				color: @text-color-grey;
			}
			.button {
				text-align: center;
				line-height: 50px;
				width: 60vw;
				height: 50px;
				border-radius: @border-radius-base;
				position: absolute;
				bottom: 20px;
			}
			.add {
				background: linear-gradient(90deg, #48c6ef 0%, #6f86d6 100%);

				color: @text-color-inverse;
			}
			.edit {
				background: linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%);
				color: @text-color-inverse;
			}
			.msg {
				background: linear-gradient(90deg, #48c6ef 0%, #6f86d6 100%);
				color: @text-color-inverse;
			}
		}
	}
}
</style>