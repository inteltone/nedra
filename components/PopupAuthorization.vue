<script setup>
import { VNativeDialog } from "vue-native-dialog"
let isPopupAuth = useAuthDialog()
let name = ref('')
let password = ref('')
let typePassword = ref('password')
let disabledBtn = ref(true)
const toggleTypePassword = () => {
	typePassword.value = typePassword.value === 'password' ? 'text' : 'password'
}
const valideteAuth = () => {
	if (name.value.length > 0 && password.value.length > 5) {
		disabledBtn.value = false		
	} else {
		disabledBtn.value = true
	}
}
const closeBackDrop = (e) => {
	let dialog = document.querySelector('[open]')
	const dialogDimensions = dialog.getBoundingClientRect()
	if (
		e.clientX < dialogDimensions.left ||
		e.clientX > dialogDimensions.right ||
		e.clientY < dialogDimensions.top ||
		e.clientY > dialogDimensions.bottom
	) {
		dialog.close()
		isPopupAuth.value = false
	}
}
</script>
<template>
	<v-native-dialog class="popup" :open="isPopupAuth" @click="closeBackDrop" data-auth>
		<div class="popup__inner">
			<p class="popup__title h2">Авторизация</p>
			<form class="popup__form">
				<div class="form-group">
					<label for="authname">Имя</label>
					<input type="text" id="authname" placeholder="Имя" v-model="name" @input="valideteAuth">
				</div>
				<div class="form-group">
					<label for="authpassword">Пароль</label>
					<input class="password" :type="typePassword" id="authpassword" placeholder="Пароль" v-model="password" @input="valideteAuth">
					<span class="icon-eye" @click="toggleTypePassword"></span>
				</div>
				<div class="popup__form-extra">
					<NuxtLink to="/">Забыли пароль?</NuxtLink>
					<NuxtLink to="/">Зарегистрироваться</NuxtLink>
				</div>
				<BaseButton class="popup__form-btn" text="Войти" 
					@click.stop="isPopupAuth=false" 
					:disabled="disabledBtn" 
				/>
			</form>
		</div>
	</v-native-dialog>	
</template>
<style lang="scss">
	.popup{
		inline-size: min(519px,100%);
		padding: unset;
		border: none;
		border-radius: 24px;
		&::backdrop {
  			background-color: hsl(0 0% 0% / 0.75);
		}
		&__title{
			margin-block-end: 14px;
		}
		&__inner{
			inline-size:100%;
			padding: 93px 74px 95px;
		}
		&__form{
			.form-group{
				margin-block-end: 16px;
			}
			&-extra{
				display: flex;
				gap: 26px;
				margin-block-end: 48px;
				&>*{
					color: var(--clr-text);
					text-decoration-line: underline;
  					text-underline-offset: 4px;
					transition: color var(--tr), text-decoration-color var(--tr);
					&:hover{
						color: var(--clr-orange-100);
						text-decoration-color: transparent;
					}
				}
			}
		}
	}
</style>