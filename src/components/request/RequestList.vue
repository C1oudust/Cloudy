<template>
	<div class="container">
		<div class="list">
			<div class="info">
				<div class="userImg">
					<img src="../../../public/static/img/three.jpg" alt />
				</div>
				<div class="userInfo">
					<div class="nick">火烈鸟</div>
					<div class="date">2020-01-01 23:11</div>
				</div>
			</div>
			<div class="content">
				<p>你好啊。</p>
			</div>
			<div class="button">
				<button class="refuse">拒绝</button>
				<button class="accept">同意</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RequestList'
}
</script>

<style lang="less" scoped>
@import '../../common/style.less';
.container {
	padding-top: 50px;
}
.list {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 350px;
	margin: 0 auto;
	border: 1px solid @border-color;
	box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
	border-radius: @border-radius-base;
	margin-top: @spacing-col-base;
	padding: @spacing-col-base;
	.info {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		.userImg {
			.img-size-base();
			img {
				width: 100%;
				height: 100%;
			}
		}
		.userInfo {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-evenly;
			height: 100%;
			margin-left: 10px;
			.nick {
				font-size: @font-size-base;
			}
		}
	}
	.content {
		background-color: @bg-color-grey;
		width: 200px;
		height: 50px;
		line-height: 50px;
	}
	.button {
		.refuse {
			width: 100px;
			height: 30px;
			background-color: #ffffff;
			color: @color-warning;
			outline: none;
			border: 1px solid @color-warning;
			border-radius: @border-radius-sm;
		}
		.accept {
			width: 100px;
			height: 30px;
			background-color: @color-success;
			color: #ffffff;
			outline: none;
			border: none;
			border-radius: @border-radius-sm;
		}
	}
}
</style>