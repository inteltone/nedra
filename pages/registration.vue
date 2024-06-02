<script setup>
let name = ref('') // поле имя
let last_name = ref('') // поле фамилия
let password = ref('') // поле пароль
let confirm_password = ref('') // поле подтверждение пароля
let type_password = ref('password') // для смены типа поля пароль
let type_confirm_password = ref('password') // для смены типа поля подтв пароля
let tel = ref('') // поле телефон
let email = ref('') // поле email
let isValidatedEmail = ref(true) // для общей валидации формы
let checked = ref(false) // чекбокс
let disabled = ref(true) // кнопка ЗАРЕГИСТРИРОВАТЬСЯ
let fields = ref(7)
let counter = ref(0) // считает число полей прошедших валидацию
let percent = computed(() => {
	return -100 + 100 / fields.value * counter.value
})
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
	if (strDot.length < 2) {
		isValidatedEmail.value = true
		validation()
		return
	}	
	isValidatedEmail.value = false
	validation()
}
// --- валидация всех полей формы -----
function validation() { 
	counter.value = 0
	disabled.value = true
	if (name.value.length !== 0) {
		counter.value += 1
	}
	if (last_name.value.length !== 0) {
		counter.value += 1
	}
	if (password.value.length > 5) {
		counter.value += 1
	}	
	if (confirm_password.value.length > 5 && confirm_password.value === password.value) {
		counter.value += 1
	}
	if (tel.value.length === 12) {
		counter.value += 1
	}
	if (isValidatedEmail.value === false) {
		counter.value += 1
	}	
	if (checked.value === true) {
		counter.value += 1
	}
	if (counter.value === fields.value) {		
		disabled.value = false
	}
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
							<input type="text" id="name" placeholder="Имя" 
								v-model="name" 
								@input="validation"
								:class="{validated: name.length > 0}"
							>
							<div class="input-hint">
								Введите корректное имя. Потребуется при получении заказа
							</div>
						</div>
						<div class="input-group">
							<label for="lastname">Фамилия</label>
							<input type="text" id="lastname" placeholder="Фамилия" 
								v-model="last_name" 
								@input="validation"
								:class="{validated: last_name.length > 0}"
							>
							<div class="input-hint">
								Введите корректную  фамилию. Потребуется при получении заказа
							</div>
						</div>
						<div class="input-group">
							<label for="password">Пароль</label>
							<div class="password">
								<input :type="type_password" id="password" placeholder="Пароль" 
									v-model="password" 
									@input="validation"
									:class="{validated: password.length > 5, invalidated: password.length > 0 && password.length < 6}"
								>
								<span class="icon-eye" @click="showPassword"></span>
							</div>
							<div class="input-hint">
								Минимальная длина пароля — 6 символов
							</div>
						</div>
						<div class="input-group">
							<label for="confirm-password">Подтверждение пароля</label>
							<div class="password">
									<input :type="type_confirm_password" id="confirm-password" placeholder="Пароль" v-model="confirm_password" 
									@input="validation"
									:class="{validated: password === confirm_password && confirm_password.length > 5, invalidated: (confirm_password.length > 0 && confirm_password.length < 6) || password !== confirm_password && confirm_password.length > 5}"
								>
								<span class="icon-eye" @click="showConfirmPassword"></span>
							</div>
							<div class="input-hint">
								Подтвердите пароль
							</div>
						</div>
						<div class="input-group">
							<label for="tel">Телефон</label>
							<input class="inputTelReg" type="text" id="tel" placeholder="+78004941718"
								v-model="tel" 
								@focus="focusTel"
								@input="inputTel"
								:class="{validated: tel.length === 12, invalidated: tel.length > 2 && tel.length < 12 }"
							>
							<div class="input-hint">
								Необходим для отслеживания и получения заказов
							</div>
						</div>
						<div class="input-group">
							<label for="email">E-mail</label>
							<input type="email" id="email" placeholder="@yandex.ru" 
								v-model="email"
								@input="inputEmail"
								:class="{validated: isValidatedEmail === false, invalidated: isValidatedEmail === true && email.length > 0}"
							>
							<div class="input-hint">
								Необходим для отслеживания и получения заказов
							</div>
						</div>
					</div>
					<div class="form-agreement"> 
						<div class="form-agreement__checkbox checkbox">
							<input type="checkbox" :checked="checked" @click="checked = !checked" @input="validation">
						</div>
						<div class="form-agreement__text">
							<p>Я принимаю условия <NuxtLink class="link" to="/">Оферты покупателям</NuxtLink> и соглашаюсь на обработку персональных данных, размещаемых на <NuxtLink class="link" to="/">nerdaparts.ru</NuxtLink>.</p>
							<p>С содержанием <NuxtLink class="link" to="/">Политики в отношении обработки персональных данных</NuxtLink> ознакомлен.</p>
						</div>
					</div>
					<BaseButton class="registration__form-btn" text="Зарегистрироваться" 
						:disabled="disabled" 
						:style="`--offset-x: ${percent}%`"
						:class="{active: counter > 0, hideBeforeElem: counter === fields}"
					/>
				</form>
			</div>
		</section>		
	</NuxtLayout>
</template>