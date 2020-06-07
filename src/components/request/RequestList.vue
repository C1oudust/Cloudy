<template>
	<div class="container">
		<div class="list" v-for="item in requestList" :key="item.id">
			<div class="info">
				<div class="userImg">
					<img :src="item.imgUrl" alt />
				</div>
				<div class="userInfo">
					<div class="nick">{{item.nick}}</div>
					<div class="date">{{item.time}}</div>
				</div>
			</div>
			<div class="content">
				<p>{{item.content}}</p>
			</div>
			<div class="button">
				<button class="refuse" @click="refuse">拒绝</button>
				<button class="accept" @click="accept">同意</button>
			</div>
		</div>
	</div>
</template>

<script>
import data from '../../common/js/data';
import myfun from '../../common/js/myfun'
export default {
	name: 'RequestList',
	data() {
		return {
			requestList: []
		}
	},
	mounted() {
		this.getRequestList()
	},
	methods: {
		getRequestList() {
			if (data.request()) {
				this.requestList = data.request();
				this.requestList.forEach(item => {
					item.time = myfun.formatDataTime(item.time)
					item.imgUrl = './static/img/' + item.imgUrl;
				});
			}
		},
		refuse: function () {
			console.log('拒绝');
		},
		accept: function () {
			console.log('同意')
		}
	},
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
	margin-top: @spacing-col-lg;
	padding: @spacing-col-base;
	.info {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		.userImg {
			.img-size-base();
			img {
				border-radius: @border-radius-base;
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
			margin-left: 15px;
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
		margin-top: @spacing-col-lg;
	}
	.button {
		width: 200px;
		display: flex;
		justify-content: space-between;
		margin-top: @spacing-col-lg;

		.refuse {
			width: 45%;
			height: 30px;
			background-color: #ffffff;
			color: @color-warning;
			outline: none;
			border: 1px solid @color-warning;
			border-radius: @border-radius-sm;
		}
		.accept {
			width: 45%;
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