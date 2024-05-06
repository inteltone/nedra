<script setup>
let name = ref('') // поле имя
let last_name = ref('') // поле фамилия
let password = ref('') // поле пароль
let confirm_password = ref('') // поле подтверждение пароля
let type_password = ref('password') // для смены типа поля пароль
let type_confirm_password = ref('password') // для смены типа поля подтв пароля
let tel = ref('') // поле телефон
let email = ref('') // поле email
let isValidatedEmail = ref(true) // для скрытия подсказки для email и общей валидации формы
let checked = ref(false) // чекбокс
let disabled = ref(true) // кнопка ЗАРЕГИСТРИРОВАТЬСЯ
// --- валидация паролей -----
const showPassword = ()=>{
	type_password.value = type_password.value === 'password' ? 'text' : 'password'	
}
const showConfirmPassword = ()=>{
	type_confirm_password.value = type_confirm_password.value === 'password' ? 'text' : 'password'
}
// --- валидация телефона -----
const focusTel = () => {
	if (tel.value.length === 0) {		
		tel.value = '+7'		
	}	
}
const inputTel = () => {
	if (tel.value.length > 12) {	
		replaceLetters()	
		if(tel.value.length === 12) return	
		tel.value = tel.value.slice(0, -1)
		return
	}
	if (tel.value.length === 0 || tel.value.length === 1) {
		tel.value = '+7'
		return
	}
	if (tel.value.indexOf('+') !== 0) {
		let arr = Array.from(tel.value)		
		arr.shift()		
		tel.value = arr.join('')
		return
	}		
	if (tel.value.indexOf('7') !== 1) {
		let arr = Array.from(tel.value)
		arr = arr.slice(3)
		tel.value = '+7' + arr.join('')
		return
	}		
	if (tel.value.indexOf('+') !== 0 && tel.value.indexOf('7') !== 1) {
		tel.value = '+7'
		return
	}			
	replaceLetters()
	validation()
	function replaceLetters() {
		let arr = Array.from(tel.value)
		arr = arr.slice(2)
		let str = arr.join('')
		tel.value = '+7' + str.replace(/[^\d.-]/g, '')
	}
}
// --- валидация email -----
function inputEmail() { // возвращает true / false	
	// если есть @
	if (email.value.indexOf('@') === -1) {
		isValidatedEmail.value = true
		validation()
		return
	}
	// если до @ меньше 1 символа
	if (email.value.indexOf('@') === 0) {
		isValidatedEmail.value = true
		validation()
		return
	}
	// если есть точка после @
	let indexAt = email.value.indexOf('@')
	let strAt = email.value.slice(indexAt + 1)
	if (strAt.indexOf('.') === -1) {
		isValidatedEmail.value = true
		validation()
		return
	}	
	if (email.value.indexOf('.') - email.value.indexOf('@') === 1) {
		isValidatedEmail.value = true
		validation()
		return
	}
	// если после точки меньше двух знаков
	let indexDot = email.value.indexOf('.')
	let strDot = email.value.slice(indexDot + 1)
	console.log(strDot,strDot.length)
	if (strDot.length < 2) {
		isValidatedEmail.value = true
		validation()
		return
	}	
	isValidatedEmail.value = false
	validation()
}
// --- валидация всех полей формы -----
function validation(){ 
	if (name.value.length === 0) {
		disabled.value = true		
		return
	}
	if (last_name.value.length === 0) {
		disabled.value = true
		return
	}
	if (password.value.length < 6) {
		disabled.value = true
		return
	}
	if (confirm_password.value !== password.value) {
		disabled.value = true
		return
	}
	if (tel.value.length < 12) {
		disabled.value = true
		return
	}
	if (isValidatedEmail.value === true) {
		disabled.value = true
		return
	}
	if (checked.value !== true) {
		disabled.value = true
		return
	}
	disabled.value = false	
}
</script>
<template>
	<NuxtLayout >		
		<section class="columns-2 registration-page">
			<ThePageTitle class="columns-2__title" title="Регистрация" />
			<div class="columns-2__content registration">
				<form class="registration__form">
					<div class="form-block">
						<div class="input-group">
							<label for="name">Имя</label>
							<input type="text" id="name" placeholder="Имя" v-model="name" @input="validation">
							<div class="input-error" v-show="name.length === 0">
								Введите корректное имя. Потребуется при получении заказа
							</div>
						</div>
						<div class="input-group">
							<label for="lastname">Фамилия</label>
							<input type="text" id="lastname" placeholder="Фамилия" v-model="last_name" @input="validation">
							<div class="input-error" v-show="last_name.length === 0">
								Введите корректную  фамилию. Потребуется при получении заказа
							</div>
						</div>
						<div class="input-group">
							<label for="password">Пароль</label>
							<div class="password">
								<input :type="type_password" id="password" placeholder="Пароль" v-model="password" @input="validation">
								<span class="icon-eye" @click="showPassword"></span>
							</div>
							<div class="input-error" v-show="password.length < 7">
								Минимальная длина пароля — 6 символов
							</div>
						</div>
						<div class="input-group">
							<label for="confirm-password">Подтверждение пароля</label>
							<div class="password">
								<input :type="type_confirm_password" id="confirm-password" placeholder="Пароль" v-model="confirm_password" @input="validation">
								<span class="icon-eye" @click="showConfirmPassword"></span>
							</div>
							<div class="input-error" v-show="confirm_password !== password || password.length < 6">
								Подтвердите пароль
							</div>
						</div>
						<div class="input-group">
							<label for="tel">Телефон</label>
							<input class="inputTelReg" type="text" id="tel" placeholder="+78004941718"
								v-model="tel" 
								@focus="focusTel"
								@input="inputTel"
							>
							<div class="input-error" v-show="tel.length < 12">
								Необходим для отслеживания и получения заказов
							</div>
						</div>
						<div class="input-group">
							<label for="email">E-mail</label>
							<input type="email" id="email" placeholder="@yandex.ru" 
								v-model="email"
								@input="inputEmail"
							>
							<div class="input-error" v-show="isValidatedEmail">
								Необходим для отслеживания и получения заказов
							</div>
						</div>
					</div>
					<div class="form-agreement">
						<div class="form-agreement__checkbox">
							<input type="checkbox" :checked="checked" @click="checked = !checked" @input="validation">
						</div>
						<div class="form-agreement__text">
							<p>Я принимаю условия <NuxtLink class="link" to="/">Оферты покупателям</NuxtLink> и соглашаюсь на обработку персональных данных, размещаемых на <NuxtLink class="link" to="/">nerdaparts.ru</NuxtLink>.</p>
							<p>С содержанием <NuxtLink class="link" to="/">Политики в отношении обработки персональных данных</NuxtLink> ознакомлен.</p>
						</div>
					</div>
					<BaseButton class="registration__form-btn" text="Зарегистрироваться" :disabled="disabled" />
				</form>
			</div>
		</section>		
	</NuxtLayout>
</template>

<style lang="scss">
.registration-page{
	.columns-2__title{
		grid-column: 1/span 3;
	}
	.columns-2__content {
		grid-column: 4/-1;
	}
}
.registration{		
	&__form{
		--label-w: 250px;
		--label-mie: 38px;
		.form-block{
			display: grid;
			gap: 8px 0;
			margin-block-end: 32px;
		}
		.input-group{
			display: flex;
			align-items: center;				
			label{					
				min-inline-size: var(--label-w);
				margin-inline-end: var(--label-mie);
				padding-inline-start: 45px;
				text-align: right;
			}
			input{
				min-inline-size: 367px;
				block-size: 57px;
				margin-inline-end: 20px;
				padding-inline: 24px;
				border: 1px solid var(--clr-gray);
				border-radius: 8px;
				&:focus-visible{
					outline: none;
					border-color: var(--clr-black);
				}
				&::placeholder{
					color: var(--clr-gray);
				}
				&:focus-visible::placeholder{
					color: transparent;
				}
			}
			.input-error{
				color: var(--clr-gray);				
			}
			.password{
				position: relative;
				input{
					padding-inline: 24px 50px;
				}
				&:has(input:placeholder-shown){
					.icon-eye{					
						background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.6875 7.4375 8.8125 8.3125C7.9375 9.1875 7.5 10.25 7.5 11.5C7.5 12.75 7.9375 13.8125 8.8125 14.6875C9.6875 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.5625 12.8875 9.3 12.25 9.3 11.5C9.3 10.75 9.5625 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.56667 19 7.35 18.3208 5.35 16.9625C3.35 15.6042 1.9 13.7833 1 11.5C1.9 9.21667 3.35 7.39583 5.35 6.0375C7.35 4.67917 9.56667 4 12 4C14.4333 4 16.65 4.67917 18.65 6.0375C20.65 7.39583 22.1 9.21667 23 11.5C22.1 13.7833 20.65 15.6042 18.65 16.9625C16.65 18.3208 14.4333 19 12 19ZM12 17C13.8833 17 15.6125 16.5042 17.1875 15.5125C18.7625 14.5208 19.9667 13.1833 20.8 11.5C19.9667 9.81667 18.7625 8.47917 17.1875 7.4875C15.6125 6.49583 13.8833 6 12 6C10.1167 6 8.3875 6.49583 6.8125 7.4875C5.2375 8.47917 4.03333 9.81667 3.2 11.5C4.03333 13.1833 5.2375 14.5208 6.8125 15.5125C8.3875 16.5042 10.1167 17 12 17Z' fill='%23A9A9A9'/%3E%3C/svg%3E%0A");					
					}
				}
			}
			.icon-eye{
				position: absolute;
				inset-inline-end: 37px;
				inset-block-start: 50%;
				transform: translateY(-50%);
				display: block;
				inline-size: 24px;
				block-size: 24px;
				background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.6875 7.4375 8.8125 8.3125C7.9375 9.1875 7.5 10.25 7.5 11.5C7.5 12.75 7.9375 13.8125 8.8125 14.6875C9.6875 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.5625 12.8875 9.3 12.25 9.3 11.5C9.3 10.75 9.5625 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.56667 19 7.35 18.3208 5.35 16.9625C3.35 15.6042 1.9 13.7833 1 11.5C1.9 9.21667 3.35 7.39583 5.35 6.0375C7.35 4.67917 9.56667 4 12 4C14.4333 4 16.65 4.67917 18.65 6.0375C20.65 7.39583 22.1 9.21667 23 11.5C22.1 13.7833 20.65 15.6042 18.65 16.9625C16.65 18.3208 14.4333 19 12 19ZM12 17C13.8833 17 15.6125 16.5042 17.1875 15.5125C18.7625 14.5208 19.9667 13.1833 20.8 11.5C19.9667 9.81667 18.7625 8.47917 17.1875 7.4875C15.6125 6.49583 13.8833 6 12 6C10.1167 6 8.3875 6.49583 6.8125 7.4875C5.2375 8.47917 4.03333 9.81667 3.2 11.5C4.03333 13.1833 5.2375 14.5208 6.8125 15.5125C8.3875 16.5042 10.1167 17 12 17Z' fill='black'/%3E%3C/svg%3E");
				background-repeat: no-repeat;
				background-size: 100%;
				background-position: center;
				cursor: pointer;
			}				
		}
		.form-agreement{
			display: flex;
			gap: 0 20px;
			padding-inline-start: calc(var(--label-mie) + var(--label-w));
			&__checkbox{
				position: relative;
				transform: translateY(3px);
				min-inline-size: 24px;
				block-size: 24px;
				background-color: #D9D9D9;
				border-radius: 4px;
				input{
					position: absolute;
					inset: 0;
					margin: auto;
					opacity: 0;
					cursor: pointer;
				}
				&:has(input:checked){
					&::before{
						content: '';
						position: absolute;
						inline-size: 24px;
						block-size: 24px;
						background-color: var(--clr-white);
						background-image: url("data:image/svg+xml,%3Csvg width='14' height='11' viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.9907 3.12633L5.04209 10.9978L0.00927734 6.57078L1.99069 4.31822L5.04209 7.00232L12.0093 0.873779L13.9907 3.12633Z' fill='black'/%3E%3C/svg%3E%0A");
						background-repeat: no-repeat;
						background-position: center;
						border: 1px solid var(--clr-black);
						border-radius: 4px;
					}
				}
			}
			&__text{
				max-inline-size: 663px;
				margin-block-end: 49px;
				&>*+*{
					margin-block-start: 20px;
				}
				.link{
					color: var(--clr-text);
					text-decoration-line: underline;
					text-underline-offset: 3px;
					transition: text-decoration-color var(--tr), color var(--tr);
					&:hover{
						color: var(--clr-orange-100);
						text-decoration-color: transparent;
					}
				}
			}
		}
		&-btn{
			margin-inline-start: calc(var(--label-mie) + var(--label-w));			
		}
	}	
}	
</style>