<template>
	<div class="top-bar">
		<div class="left" @click="back">
			<img src="../../assets/images/detail/back.png" alt />
		</div>
		<div class="center">好友申请</div>
	</div>
</template>

<script>
export default {
	name: 'RequestHeader',
	methods: {
		back() {
			this.$router.go(-1)
		},
	},
}
</script>

<style lang="less" scoped>
@import '../../common/style.less';

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
	border-bottom: 1px solid @border-color;
	.left {
		img {
			.img-size-xs();
		}
	}
	.center {
		position: absolute;
		margin-left: 50%;
		transform: translateX(-50%);
		font-size: @font-size-t;
	}
}
</style>