<script setup>
const userBtn = useUserBtn()
const isUserMenu = useUserMenu()
const userMenuElem = useUserMenuElem()
onMounted(() => {	
	document.addEventListener('click', (e) => {		
		if (e.target == userMenuElem.value || e.target.parentNode == userMenuElem.value) return
		else {
			if (userBtn) {	
				if (e.target == userBtn.value || e.target.parentNode == userBtn.value) return
				isUserMenu.value = false
			}
		}		
	})
})
</script>
<template>
	<NuxtLayout>		
		<TheHero />
		<TheCatalogs />
		<TheSearchQuick />
		<TheMap />
		<TheAboutCompany />
		<TheNewsBlock class="news-block-main" title="Новости" />				
	</NuxtLayout>
</template>