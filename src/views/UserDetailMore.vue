<template>
	<div class="container">
		<div class="top-bar">
			<div class="left" @click="back">
				<img src="../assets/images/detail/back.png" alt />
			</div>
			<div class="center">详情</div>
		</div>
		<div class="data-list">
			<div class="profile" @click="editProfile">
				<p>头像</p>
				<img class="profile-img" :src="userData.imgUrl" alt />
				<img v-show="!isFriend" src="../assets/images/detail/edit.png" alt />
			</div>
			<div class="sign" @click="editSign">
				<p>签名</p>
				<p v-show="!isEditSign" class="sign-data">{{userData.sign}}</p>
				<input @blur="editedSign" :value="userData.sign" v-if="isEditSign" ref="sign" type="text" />
				<img v-if="!isFriend" src="../assets/images/detail/edit.png" alt />
			</div>
			<div class="nick" @click="editNick">
				<p>昵称</p>
				<p v-show="!isEditNick">{{userData.nick}}</p>
				<input @blur="editedNick" :value="userData.nick" v-if="isEditNick" ref="nick" type="text" />
				<img v-if="!isFriend" src="../assets/images/detail/edit.png" alt />
			</div>
			<div v-show="isFriend" class="nick" @click="editRemark">
				<p>备注</p>
				<p v-show="!isEditRemark">{{userData.name}}</p>
				<input @blur="editedRemark" :value="userData.name" v-if="isEditRemark" ref="remark" type="text" />
				<img v-if="isFriend" src="../assets/images/detail/edit.png" alt />
			</div>
			<div class="sex" @click="editSex">
				<p>性别</p>
				<p v-show="!isEditSex">{{sex}}</p>
				<input @blur="editedSex" :value="sex" v-if="isEditSex" ref="sex" type="text" />
				<img v-if="!isFriend" src="../assets/images/detail/edit.png" alt />
			</div>
			<div class="email" @click="editEmail">
				<p>邮箱</p>
				<p v-show="!isEditEmail">{{userData.email}}</p>
				<input @blur="editedEmail" :value="userData.email" v-if="isEditEmail" ref="emails" type="text" />
				<img v-if="!isFriend" src="../assets/images/detail/edit.png" alt />
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'UserDetailMore',
	data() {
		return {
			isEditSign: false,
			isEditNick: false,
			isEditRemark: false,
			isEditSex: false,
			isEditEmail: false,
		}
	},
	computed: {
		...mapState(['userData', 'me']),
		sex: function () {
			if (this.userData.sex == 1) {
				return "男"
			}
			else if (this.userData.sex == 2) {
				return "女";

			}
			else {
				return "请选择性别";

			}
		},
		isFriend: function () {
			return this.userData.id != this.me;
		}
	},
	methods: {
		back() {
			this.$router.go(-1)
		},
		editProfile() {
			if (this.userData.id != this.me) {
				return;
			}
			//TODO  修改头像
		},
		editSign() {
			if (this.userData.id != this.me) {
				return;
			}
			this.isEditSign = true;
			this.$nextTick(() => {
				this.$refs.sign.focus()
			})
		},
		editedSign(e) {
			this.isEditSign = false;
			this.$store.commit('setUserSign', e.currentTarget.value)

		},
		editNick() {
			if (this.userData.id != this.me) {
				return;
			}
			this.isEditNick = true;
			this.$nextTick(() => {
				this.$refs.nick.focus()
			})
		},
		editedNick(e) {
			this.isEditNick = false
			this.$store.commit('setUserNick', e.currentTarget.value)
		},
		editRemark() {
			this.isEditRemark = true;
			this.$nextTick(() => {
				this.$refs.remark.focus()
			})
		},
		editedRemark(e) {
			this.isEditRemark = false
			this.$store.commit('setUserRemark', e.currentTarget.value)
		},
		editSex() {
			if (this.userData.id != this.me) {
				return;
			}
			this.isEditSex = true;
			this.$nextTick(() => {
				this.$refs.sex.focus()
			})
		},
		editedSex(e) {
			this.isEditSex = false
			this.$store.commit('setUserSex', e.currentTarget.value)
		},
		editEmail() {
			if (this.userData.id != this.me) {
				return;
			}
			this.isEditEmail = true;
			this.$nextTick(() => {
				this.$refs.emails.focus()
			})

		},
		editedEmail(e) {
			this.isEditEmail = false
			this.$store.commit('setUserEmail', e.currentTarget.value)
		}

	}
}
</script>

<style lang="less" scoped>
@import '../common/style.less';
.container {
	overflow: hidden;
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
	.data-list {
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		div {
			overflow: hidden;
			padding-left: 20px;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #eee;
			height: 50px;
			position: relative;
			p {
				font-size: @font-size-base;
				&:nth-child(2) {
					color: @text-color-grey;
					margin-left: 20px;
				}
			}
			input {
				margin-left: 20px;
				width: 70%;
				height: 50%;
				padding: 5px;
				outline: none;
				border: none;
			}

			img:last-child {
				position: absolute;
				right: 20px;
			}
		}
		.profile {
			height: 60px;
			.profile-img {
				margin-left: 20px;
				border-radius: @border-radius-sm;
				.img-size-sm();
			}
		}
		.sign {
			.sign-data {
				text-align: left;
				width: 70%;
				.ellipsisText();
			}
		}
	}
}
</style>