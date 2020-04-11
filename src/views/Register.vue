<template>
	<div class="container">
		<div class="top-bar">
			<div class="right">
				<router-link to="/Login" tag="div">
					<div class="login">登录</div>
				</router-link>
			</div>
		</div>
		<div class="logo">
			<img src="@/assets/images/login/logo.png" alt />
		</div>
		<main>
			<div class="title">注册</div>
			<div class="input-box">
				<div class="input">
					<input @blur="verifyUserName" type="text" placeholder=" " />
					<span class="input-label" data-placeholder="Username">用户名</span>
					<p v-show="userNameExisted">用户名已存在</p>
					<img v-show="usernameRight" class="success" src="@/assets/images/register/right.png" alt />
				</div>
			</div>
			<div class="input-box">
				<div class="input">
					<input @input="verifyEmail" type="text" placeholder=" " />
					<span class="input-label" data-placeholder="Username">邮箱</span>
					<p v-show="emailError">邮箱格式不正确</p>
					<p v-show="emailExisted">邮箱已被注册</p>

					<img v-show="emailRight" class="success" src="@/assets/images/register/right.png" alt />
				</div>
			</div>
			<div class="input-box">
				<div class="input">
					<input @input="getPwd" :type="pwdType" placeholder=" " />
					<span class="input-label" data-placeholder="Password">密码</span>

					<div @click="eyesClick">
						<img :src="eye" alt />
					</div>
				</div>
			</div>
			<div class="btn">
				<div @click="register" :class="[{loginBtnActive:canRegister},loginBtn]">注册</div>
			</div>
		</main>
	</div>
</template>

<script>
import my from '../common/js/myfun'
export default {
	name: 'RegisterPage',
	data() {
		return {
			userNameExisted: false,
			usernameRight: true,
			emailExisted: false,
			emailRight: false,
			emailError: false,
			pwdType: 'password',
			eye: require("@/assets/images/register/eye_2.png"),
			loginBtn: 'loginBtn',
			userName: '',
			email: '',
			pwd: ''
		}
	},
	watch: {
		loginBtnActive: function () {
			return this.canRegister;
		}
	},
	computed: {
		canRegister: function () {
			return this.usernameRight && this.emailRight && this.pwd != ""
		}
	},
	methods: {
		eyesClick() {
			this.close = !this.close
			this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
			this.eye = this.eye == require("@/assets/images/register/eye_2.png") ? require("@/assets/images/register/eye.png") : require("@/assets/images/register/eye_2.png");
		},
		verifyUserName(e) {
			var uname = e.target.value;
			this.userName = uname;
		},
		verifyEmail(e) {
			var email = e.target.value;
			if (email != "") {
				var re = my.verifyEmail(email)
				this.emailRight = re;
				this.emailError = !re;
				this.email = email;

			}
			else {
				this.emailRight = this.emailError = false;
				this.pwd = "";
			}

		},
		getPwd(e) {
			this.pwd = e.target.value;
		},
		register() {
			var info = {
				username: this.userName,
				email: this.email,
				password: this.pwd,
			}

			console.log(info)
		}
	}
};
</script>

<style lang="less" scoped>
@import '../common/style.less';
.top-bar {
	z-index: 99;
	position: fixed;
	top: 0;
	left: 0;

	width: 100vw;
	height: 50px;
	background: @bg-color;
	padding-right: @spacing-col-lg;

	.right {
		float: right;
		line-height: 50px;
		padding: 0 @spacing-col-base;

		height: 100%;
		.login {
			font-size: @font-size-base;
			font-weight: 500;
			color: @text-color;
		}
	}
}

.logo {
	img {
		position: absolute;
		left: 50%;
		top: 25vh;
		transform: translate(-50%, -50%);
		.img-size-base();
	}
}

main {
	width: 80%;
	position: absolute;
	left: 50%;
	top: 55%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	.title {
		font-size: @font-size-lg;
		margin: @spacing-col-base 0;
	}

	.input-box {
		border-bottom: 2px solid #adadad;
		position: relative;
		margin: @spacing-col-lg 0;
		width: 100%;
		.input {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			input {
				font-size: @font-size-base;
				color: @text-color;
				flex: 1;
				border: none;
				width: 100%;
				outline: none;
				background: none;
				padding: 0 5px;
				height: 40px;
				//清除IE10密码框自带的眼睛图标
				&::-ms-clear {
					display: none;
				}
				&::-ms-reveal {
					display: none;
				}
			}
			p {
				margin: auto 0;
				line-height: 100%;
				color: @color-warning;
			}
			img {
				.img-size-xs();
			}
			.success {
				width: 22px;
				height: 17px;
			}
		}

		input:focus ~ span,
		input:not(:placeholder-shown) + span {
			top: -5px;
		}

		span {
			position: absolute;
			top: 50%;
			left: 5px;
			color: @text-color-placeholder;
			transform: translateY(-50%);
			z-index: -1;
			transition: 0.5s;
		}
	}

	.input-box:focus-within {
		border-bottom: 2px #3498db solid;
	}
	.btn {
		width: 100%;
		height: 50px;
		margin-top: @spacing-col-lg;
		.loginBtn {
			margin: 0 auto;
			width: 60%;
			height: 100%;
			border: none;
			outline: none;
			line-height: 50px;
			text-align: center;
			font-size: @font-size-sm;
			border-radius: @border-radius-base;
			background: @bg-color-mask;
			color: #ffffff;
			cursor: pointer;
			transition: 0.5s;
			pointer-events: none;
		}
		.loginBtnActive {
			background: linear-gradient(120deg, #3498db, #89f7fe, #66a6ff);
			pointer-events: all;
		}

		.loginBtnActive:hover {
			background-position: right;
		}
	}
}
</style>
