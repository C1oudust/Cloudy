<template>
	<div class="container">
		<div class="top-bar">
			<div class="input">
				<input type="text" @input="search" placeholder="搜索用户/群" />
				<div class="icon">
					<img src="@/assets/images/search/search.png" alt />
				</div>
			</div>
			<div class="back">
				<router-link to="/" tag="div">
					<p>取消</p>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SearchHeader',
	methods: {
		search(e) {
			this.$store.commit('empty');
			if (e.target.value.length > 0) {
				this.$store.commit('searchUser', e.target.value.trim());
			}
		},
	}

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

		.input {
			flex: 1;
			width: 80vw;
			margin-left: 2rem;
			height: 65%;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: @bg-color-grey;
			border-radius: @border-radius-sm;
			input {
				height: 100%;
				width: 100%;
				outline: none;
				border: none;
				background-color: @bg-color-grey;
				margin-left: 1rem;
			}
			.icon {
				width: 3rem;
				img {
					.img-size-xs();
				}
			}
		}
		.back {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 15vw;
			height: 100%;
		}
	}
}
</style>
