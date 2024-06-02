<script setup>
const userBtn = useUserBtn()
const isUserMenu = useUserMenu()
const toggleUserMenu = () => {
	setTimeout(() => {		
		if (!isUserMenu.value) {
			isUserMenu.value = true
			return
		}
		isUserMenu.value = false
	},10)
}
</script>
<template>
	<button class="link user" @click="toggleUserMenu" ref="userBtn" data-user-btn>
		<i class="icon-login"></i>
		<span>Даниил С.</span>
	</button>
</template>