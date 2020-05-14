<template>
	<div>
		<request-header></request-header>
		<request-list></request-list>
	</div>
</template>

<script>
import RequestHeader from '../components/request/RequestHeader.vue';
import RequestList from '../components/request/RequestList.vue';

export default {
	name: 'Request',
	components: {
		RequestHeader,
		RequestList
	}
}
</script>

<style lang="less" scoped>
</style>