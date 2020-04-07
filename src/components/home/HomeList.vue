<template>
	<div class="container">
		<div class="apply"></div>
		<div class="friends">
			<div class="friend-list">
				<div class="left">
					<span class="tip"></span>
					<img src="../../assets/img/one.jpg" alt />
				</div>
				<div class="right">
					<div class="info">
						<div class="name">小明</div>
						<div class="time">13:43</div>
					</div>
					<div class="msg">今天天气不错啊！</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeList'
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
	padding: 0 @spacing-col-base;
	.apply {
	}
	.friends {
		.friend-list {
			.left {
				float: left;
				img {
					.img-size-sm();
					border-radius: @border-radius-base;
				}
			}
		}
	}
}
</style>