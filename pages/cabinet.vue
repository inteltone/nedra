<script setup>
const userMenuIndex = useUserMenuIndex()
const isManagerInfo = useManagerInfo()
definePageMeta({
  layout: 'cabinet'
})
</script>
<template>
	<NuxtLayout>		
		<div class="cabinet__content">
			<TheBalance  v-if="userMenuIndex === 0" />		
			<TheHistory v-else-if="userMenuIndex === 1" />				
			<TheBasket v-else-if="userMenuIndex === 2" />				
			<TheMyAuto v-else-if="userMenuIndex === 3" />				
			<TheVinZapros v-else-if="userMenuIndex === 4" />				
			<TheAccounts v-else-if="userMenuIndex === 5" />				
			<TheNaklad v-else-if="userMenuIndex === 6" />				
			<TheManager v-if="isManagerInfo" />				
		</div>		
	</NuxtLayout>
</template>
