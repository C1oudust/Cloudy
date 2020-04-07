<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
		<HomeHeader />
		<HomeList></HomeList>
	</div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/home/HomeHeader.vue'
import HomeList from '@/components/home/HomeList.vue'


export default {
	name: 'Home',
	components: {
		HomeHeader,
		HomeList
	}
}
</script>
