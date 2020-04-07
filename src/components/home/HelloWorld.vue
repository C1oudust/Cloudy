<template>
	<div class="container">
		<div class="top-bar">
			<div class="left">
				<img src="../../assets/img/one.jpg" alt />
			</div>
			<div class="center">
				<img src="../../assets/images/home/logo.png" alt />
			</div>
			<div class="right">
				<div class="search">
					<img src="../../assets/images/home/search.png" alt />
				</div>
				<div class="add">
					<img src="../../assets/images/home/add.png" alt />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',

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
	.top-bar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 50px;
		background: @bg-color;
		box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
		.left {
			float: left;
			img {
				.img-size-sm();
				border-radius: @border-radius-sm;
			}
		}
		.center {
		}
		.right {
		}
	}
}
</style>
