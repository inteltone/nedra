<script setup>
import { VNativeDialog } from "vue-native-dialog"
let isPopupAuth = usePopupAuth()
let isLoggedIn = useLoggedIn()
let name = ref('')
let password = ref('')
let typePassword = ref('password') 
let disabledBtn = ref(true)
// показать пароль ------------
const toggleTypePassword = () => {
	typePassword.value = typePassword.value === 'password' ? 'text' : 'password'
}
// валидация формы ------------
const validateAuth = () => {
	if (name.value.length > 0 || password.value.length > 0) {
		disabledBtn.value = false		
	} else {
		disabledBtn.value = true
	}
}
const LogIn = () => {
	isLoggedIn.value = true
	isPopupAuth.value = false
}
onMounted(() => {
	let dialog = document.querySelector('dialog')
	dialog.addEventListener("click", e => {
		const dialogDimensions = dialog.getBoundingClientRect()
		if (
			e.clientX < dialogDimensions.left ||
			e.clientX > dialogDimensions.right ||
			e.clientY < dialogDimensions.top ||
			e.clientY > dialogDimensions.bottom
		) {
			isPopupAuth.value = false
		}
	})
})
</script>
<template>
	<v-native-dialog class="popup" :open="isPopupAuth" data-auth>
		<div class="popup__inner">
			<p class="popup__title h2">Авторизация</p>
			<form class="popup__form">
				<div class="form-group">
					<label for="authname">Имя</label>
					<input type="text" id="authname" placeholder="Имя" v-model="name" @input="validateAuth">
				</div>
				<div class="form-group">
					<label for="authpassword">Пароль</label>
					<input class="password" :type="typePassword" id="authpassword" placeholder="Пароль" v-model="password" @input="validateAuth">
					<span class="icon-eye" @click="toggleTypePassword"></span>
				</div>
				<div class="popup__form-extra">
					<NuxtLink to="/" @click="isPopupAuth=false">Забыли пароль?</NuxtLink>
					<NuxtLink to="/registration" @click="isPopupAuth=false">Зарегистрироваться</NuxtLink>
				</div>
				<BaseButton class="popup__form-btn" text="Войти" 
					@click.prevent="LogIn" 
					:disabled="disabledBtn" 
				/>
			</form>
			<button class="popup__close close" @click="isPopupAuth = false">
				<i class="icon-close"></i>
			</button>
		</div>
	</v-native-dialog>	
</template>