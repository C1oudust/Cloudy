<template>
	<div class="container">
		<div class="top-bar">
			<div class="right">
				<router-link to="/Register" tag="div">
					<div class="register">注册</div>
				</router-link>
			</div>
		</div>
		<div class="logo">
			<img src="../assets/images/login/logo.png" alt />
		</div>
		<main>
			<div class="title">登录</div>
			<div class="input-box">
				<input @blur="getName" type="text" placeholder=" " />
				<span class="input-label" data-placeholder="Username">用户名/邮箱</span>
			</div>
			<div class="input-box">
				<input @blur="getPwd" type="password" placeholder=" " />
				<span data-placeholder="Password">密码</span>
			</div>
			<div class="tips">
				<p v-show="error">用户名或密码错误</p>
				<p v-show="blank">用户名或密码不能为空</p>
			</div>
			<div class="btn">
				<input type="submit" class="loginBtn" @click="login" value="登录" />
			</div>
		</main>
	</div>
</template>

<script>
export default {
	name: 'LoginPage',
	data() {
		return {
			error: false,
			blank: false,
			username: '',
			pwd: ''
		}
	},
	methods: {
		getName(e) {
			this.username = e.target.value;
		},
		getPwd(e) {
			this.pwd = e.target.value;
		},
		login() {
			var info = {
				username: this.username,
				password: this.pwd,
			}
			if (this.username == "" || this.pwd == "") {
				this.blank = true
				return;
			}
			this.blank = false;
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
		.register {
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
	top: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	.title {
		font-size: @font-size-lg;
		margin: @spacing-col-base 0;
	}
	.tips {
		height: 10px;
		font-size: @font-size-sm;
		color: @color-error;
	}
	.input-box {
		border-bottom: 2px solid #adadad;
		position: relative;
		margin: @spacing-col-lg 0;
		width: 100%;
		input {
			font-size: @font-size-base;
			color: @text-color;
			border: none;
			width: 100%;
			outline: none;
			background: none;
			padding: 0 5px;
			height: 40px;
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

			border-radius: @border-radius-base;
			background: linear-gradient(120deg, #3498db, #89f7fe, #66a6ff);
			background-size: 200%;
			color: #ffffff;
			cursor: pointer;
			transition: 0.5s;
		}

		// login按钮背景颜色向右移动
		.loginBtn:active {
			background-position: right;
		}
	}
}
</style>
