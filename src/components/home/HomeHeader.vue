<template>
	<div class="container">
		<div class="top-bar">
			<div class="left">
				<img src="../../../public/static/img/one.jpg" alt />
			</div>
			<div class="center">消息</div>
			<div class="right">
				<router-link to="/Search">
					<div class="search">
						<img src="../../assets/images/home/search.png" alt />
					</div>
				</router-link>
				<!-- <div class="add">
					<img src="../../assets/images/home/add.png" alt />
				</div>-->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeHeader',

}
</script>

<style lang="less" scoped>
@import '../../common/style.less';
.container {
	overflow: hidden;
	.top-bar {
		z-index: 99;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100vw;
		height: 50px;
		background: @bg-color;
		border-bottom: solid 1px @border-color;
		padding: 0 @spacing-col-base;

		.left {
			img {
				.img-size-header();
				border-radius: @border-radius-sm;
			}
		}
		.center {
			position: absolute;
			margin-left: 50%;
			transform: translateX(-50%);
			font-size: @font-size-t;
			// img {
			// 	width: 44px;
			// 	height: 22px;
			// }
		}
		.right {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			img {
				.img-size-xs();
				// margin-right: 5px;
			}
			// .search {
			// 	margin-right: 0.5rem;
			// }
		}
	}
}
</style>
