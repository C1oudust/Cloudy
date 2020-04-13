<template>
	<div>
		<search-header></search-header>
		<search-list></search-list>
	</div>
</template>

<script>
import SearchHeader from '../components/search/SearchHeader';
import SearchList from '../components/search/SearchList'
export default {
	name: 'SearchPage',
	components: {
		SearchHeader,
		SearchList

	}
}
</script>