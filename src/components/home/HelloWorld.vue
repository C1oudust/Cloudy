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
		border-bottom: solid 1px @border-color;
		padding-left: @spacing-col-base;
		padding-right: @spacing-col-base;

		.left {
			float: left;
			img {
				margin-top: 9px;
				.img-size-sm(); // 32px
				border-radius: @border-radius-sm;
			}
		}
		.center {
			position: absolute;
			text-align: center;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;

			margin: auto;
			img {
				width: 44px;
				height: 22px;
				margin-top: 14px;
			}
		}
		.right {
			float: right;
			height: 100%;
			.search {
				display: inline-block;
			}
			.add {
				display: inline-block;
			}
			img {
				.img-size-xs();
				margin-right: 10px;
				margin-top: 13px;
			}
		}
	}
}
</style>
