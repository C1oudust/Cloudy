<template>
	<div class="container" @click="closePanel">
		<div class="top-bar">
			<div class="left">
				<img src="../assets/images/detail/back.png" alt />
			</div>

			<div class="right">
				<!-- <router-link to="/More"> -->
				<div v-show="!addFriend" class="more">
					<img src="../assets/images/detail/more.png" alt />
				</div>
				<!-- </router-link> -->
			</div>
		</div>
		<main>
			<div class="bg">
				<div :class="{blue:add}" class="mask"></div>
				<img src="static/img/one.jpg" alt />
			</div>
			<div class="user">
				<transition name="fade">
					<div v-show="!add">
						<div class="user-img">
							<div class="userimg">
								<img class="img" src="static/img/one.jpg" alt />
								<div class="sex" :style="{background:sexColor}">
									<img src="../assets/images/detail/male.png" alt />
								</div>
							</div>
						</div>
						<div class="nick">{{user.nick}}</div>
						<p class="remark" v-if="sendMsg" v-text="'('+user.remark+')'"></p>
						<p class="content">{{user.content}}</p>
					</div>
				</transition>
				<div class="button add" @click="handleAddFriend" v-if="addFriend">加好友</div>
				<div class="button edit" v-else-if="!isUser">编辑</div>
				<div class="button msg" v-else-if="sendMsg">发消息</div>
				<transition name="button-slide">
					<div class="button send" @click="handleSendAdd" v-if="add">发送</div>
				</transition>
			</div>
		</main>
		<transition name="slide" mode="out-in">
			<div id="add-friend" class="add-friend" v-if="add">
				<div class="user-img">
					<img class="img" src="static/img/one.jpg" alt />
				</div>
				<div class="nick">{{user.nick}}</div>
				<textarea
					class="add-content"
					name="content"
					id
					cols="30"
					rows="10"
					v-text="unick+'请求加为好友'"
					maxlength="198"
				></textarea>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'UserDetail',
	data() {
		return {
			unick: '云尘',
			sexColor: "rgb(34, 158, 216)",// rgb(255,93,91)
			isUser: true,
			isFriend: false,
			add: false,
			userimg: 'userimg',
			userimg2: 'userimg2',
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
		},

	},
	methods: {
		handleAddFriend() {
			this.add = true;
		},
		handleSendAdd() {


		},
		closePanel(e) {
			if (this.add) {
				var addPanel = document.getElementById('add-friend');
				if (e.clientY < addPanel.offsetTop && e.clientY > 50) {
					this.add = false;

				}
			}

		}
	}

}
</script>

<style lang="less" scoped>
@import '../common/style.less';

.slide-enter-active {
	animation: slideIn 0.5s;
}

.slide-leave-active {
	animation: slideOut 0.5s forwards;
}
.button-slide-enter-active {
	animation: slideIn 0.5s;
}

.button-slide-leave-active {
	animation: slideIn 0.2s reverse;
}

@keyframes slideIn {
	0% {
		transform: translateY(100%);
	}
	100% {
		transform: translateY(0);
	}
}
@keyframes slideOut {
	100% {
		transform: translateY(100%);
	}
	0% {
		transform: translateY(0);
	}
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

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

			.blue {
				background-color: rgba(50, 137, 218, 0.5);
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
				transition: 0.5s;
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
			// .userimg2 {
			// 	position: absolute;
			// 	transition: 0.5s;
			// 	.img {
			// 		width: 128px;
			// 		height: 128px;
			// 		border-radius: @border-radius-circle;
			// 		box-sizing: content-box;
			// 		border: 2px solid @bg-color;
			// 		box-shadow: 4px 10px 20px 1px rgba(0, 0, 0, 0.3);
			// 	}
			// 	.sex {
			// 		display: none;
			// 	}
			// }
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
			.send {
				z-index: 2;
				background: linear-gradient(90deg, #48c6ef 0%, #6f86d6 100%);
				color: @text-color-inverse;
			}
		}
	}

	.add-friend {
		transition: 2s;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 75vh;
		border-radius: @border-radius-lg;
		background-color: @bg-color;

		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		.user-img {
			position: absolute;

			top: 32px;
			.img {
				width: 128px;
				height: 128px;
				border-radius: @border-radius-circle;
				box-sizing: content-box;
				// border: 2px solid @bg-color;
				box-shadow: 2px 5px 20px 1px rgba(0, 0, 0, 0.3);
			}
		}
		.nick {
			padding-top: 22vh;
			margin-right: 65vw;
			font-size: @font-size-lg;
			color: @text-color;
			line-height: 50px;
		}
		.add-content {
			margin-top: 10px;
			border: none;
			border-radius: @border-radius-base;
			background-color: rgba(241, 241, 241, 0.9);
			width: 80%;
			height: 32vh;
			padding: 15px;
			resize: none;
			outline: none;
			color: @text-color-grey;

			&:focus {
				color: @text-color;
			}
		}
	}
}
</style>