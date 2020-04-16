<template>
	<div class="container">
		<div class="top-bar">
			<router-link :to="'/UserDetail/'+ user.id">
				<div class="left">
					<img src="../../assets/img/one.jpg" alt />
				</div>
			</router-link>
			<div class="center">消息</div>
			<div class="right">
				<div class="search">
					<img src="../../assets/images/home/search.png" alt />
				</div>
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
	data() {
		return {
			user: {
				id: 1,
				nick: '云尘',
				remark: '云尘',
				content: '我是云尘，一个热爱生活的文艺青年。初次见面，请多关照！'
			}
		}
	}

}
</script>

<style lang="less" scoped>
@import '../../common/style.less';
.container {
	.top-bar {
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
				.img-size-sm();
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
