<script setup>
// табы для страницы ОФОРМЛЕНИЕ ЗАКАЗА
const zakazTabs = ref(['Регистрация', 'Выбор способа оплаты', 'Выбор способа доставки', 'Регистрация заказа'])
const zakazTabIndex = ref(0)
///////////////////////////////////////////////////////////////
// 1. РЕГИСТРАЦИЯ /////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// табы для ФОРМЫ РЕГИСТРАЦИИ
const regFormTabs = ref(['Физическое лицо', 'Юридическое лицо'])
const regFormTabIndex = ref(0)
// ФОРМА РЕГИСТРАЦИИ ///////////////////////////////////////////
let name = ref('') // поле имя
let last_name = ref('') // поле фамилия
let password = ref('') // поле пароль
let confirm_password = ref('') // поле подтверждение пароля
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
	if (name.value !== null) {		
		if (name.value.length > 0) {counter.value += 1}
	}
	if (last_name.value !== null) {		
		if (last_name.value.length > 0) {counter.value += 1}
	}
	if (password.value.length > 5) {counter.value += 1}	
	if (confirm_password.value.length > 5 && confirm_password.value === password.value) {
		counter.value += 1
	}
	if (tel.value.length === 12) {counter.value += 1}
	if (isValidatedEmail.value === false) {counter.value += 1}	
	if (checked.value === true) {counter.value += 1}
	if (counter.value === fields.value) {disabled.value = false}
}
///////////////////////////////////////////////////////////////
// 2. ВЫБОР СПОСОБА ОПЛАТЫ ////////////////////////////////////
///////////////////////////////////////////////////////////////
const payMethods = ref([
	{
		img: 'money',
		title: 'Наличный расчёт',
		text: 'Заказ оплачивается наличными при оформлении заказав пункте выдачи. Вместе с бланком заказа выдаётся кассовый чек. Если способ оплаты не предложен, значит оплата при оформлении для выбранного способа доставки или вашего города недоступна.',
	},
	{
		img: 'cards',
		title: 'Банковский перевод',
		text: 'Оплатите заказ в любом банке, действующим на территории России. Банк взимает комиссию за перевод3 - 7% от стоимости заказа. Срок зачисления денежных средств 2-3 рабочих дня.',
	},
	{
		img: 'sbp',
		title: 'СБП',
		text: 'Заказ оплачивается наличными при оформлении заказа в пункте выдачи. Вместе с бланком заказа выдаётся кассовый чек. Если способ оплаты не предложен, значит оплата при оформлении для выбранного способа доставки или вашего города недоступна.',
	},
	{
		img: 'calculator',
		title: 'Выставление счёта',
		text: 'Заказ оплачивается наличными при оформлении заказа в пункте выдачи. Вместе с бланком заказа выдаётся кассовый чек. Если способ оплаты не предложен, значит оплата при оформлении для выбранного способа доставки или вашего города недоступна.',
	},
])
const payMethodIndex = ref(0)
///////////////////////////////////////////////////////////////
// 4. ВЫБОР МЕТОДА ДОСТАВКИ ///////////////////////////////////
///////////////////////////////////////////////////////////////
const delivMethods = ref([
	{
		img: 'company',
		title: 'Транспортной компанией',
		text: 'Доставка любой транспортной компанией работающей на территории РФ',
	},
	{
		img: 'pickup',
		title: 'Самовывоз',
		text: 'Самовывоз возможен из наших офисов выдачи в вашем городе',
	},
])
const delivMethodIndex = ref(0)
// выпадающий список с адресами
const selectItems = ref(['проспект Михаила Нагибина, д. 155', 'ул. Ленина, д. 1', 'ул. Маркса, д. 2', 'ул. Энгельса, д. 3'])
const isOptions = ref(false)
const selectIndex = ref(0)
function optionClicked(index) {
	selectIndex.value = index
	isOptions.value = false
}
</script>
<template>
	<NuxtLayout >		
		<section class="columns-2 registration-page">
			<ThePageTitle class="columns-2__title" title="Регистрация" />
			<div class="columns-2__content registration">
				<!-- табы шагов оформления заказа -->
				<div class="zakaz-tabs">
					<button class="zakaz-tabs__tab" 
						v-for="tab,index in zakazTabs"
						@click="zakazTabIndex = index"						
						:class="{active: zakazTabIndex >= index, cursor: zakazTabIndex > index}"
					>
						{{zakazTabs[index]}}
					</button>					
				</div>
				<template v-if="zakazTabIndex === 0">
					<form class="registration__form">
						<!-- табы физ. лицо / организация -->
						<div class="registration__form-tabs">
							<button class="registration__form-tab" 
								v-for="tab,index in regFormTabs" :key="index"
								:class="{active: regFormTabIndex === index}"
								@click.prevent="regFormTabIndex = index"
							>{{tab}}</button>						
						</div>
						<div class="form-block">
							<template v-if="regFormTabIndex === 0">
								<BaseInputGroup 
									for="name" type="text" title="Имя" hint="Введите корректное имя. Потребуется при получении заказа"							
									v-model="name"
									@input="validation"
									:class="{validated: name.length > 0}"
								/>						
								<BaseInputGroup 
									for="lastname" type="text" title="Фамилия" hint="Введите корректную  фамилию. Потребуется при получении заказа"							
									v-model="last_name"
									@input="validation"
									:class="{validated: last_name.length > 0}"
								/>						
								<BaseInputGroup 
									for="password" type="password" title="Пароль" hint="Минимальная длина пароля — 6 символов"							
									v-model="password"
									@input="validation"
									:class="{validated: password.length > 5, invalidated: password.length > 0 && password.length < 6}"
								/>
								<BaseInputGroup 
									for="confirm-password" type="password" title="Подтверждение пароля" hint="Подтвердите пароль"							
									v-model="confirm_password"
									@input="validation"
									:class="{validated: password === confirm_password && confirm_password.length > 5, invalidated: (confirm_password.length > 0 && confirm_password.length < 6) || password !== confirm_password && confirm_password.length > 5}"
								/>						
								<BaseInputGroup 
									for="tel" type="tel" title="Телефон" hint="Необходим для отслеживания и получения заказов"							
									v-model="tel"
									@focus="focusTel"
									@input="inputTel"
									:class="{validated: tel.length === 12, invalidated: tel.length > 2 && tel.length < 12}"
								/>						
								<BaseInputGroup 
									for="email" type="email" title="E-mail" hint="Необходим для отслеживания и получения заказов"							
									v-model="email"
									@input="inputEmail"
									:class="{validated: isValidatedEmail === false, invalidated: isValidatedEmail === true && email.length > 0}"
								/>						
							</template>												
							<template v-else>
								<BaseInputGroup 
									for="orgname" type="text" title="Название" hint="Введите название организации. Потребуется при получении заказа"							
									v-model="name"
									@input="validation"
									:class="{validated: name.length > 0}"
								/>						
								<BaseInputGroup 
									for="address" type="text" title="Адрес" hint="Введите адрес. Потребуется при получении заказа"							
									v-model="last_name"
									@input="validation"
									:class="{validated: last_name.length > 0}"
								/>						
								<BaseInputGroup 
									for="password" type="password" title="Пароль" hint="Минимальная длина пароля — 6 символов"							
									v-model="password"
									@input="validation"
									:class="{validated: password.length > 5, invalidated: password.length > 0 && password.length < 6}"
								/>
								<BaseInputGroup 
									for="confirm-password" type="password" title="Подтверждение пароля" hint="Подтвердите пароль"							
									v-model="confirm_password"
									@input="validation"
									:class="{validated: password === confirm_password && confirm_password.length > 5, invalidated: (confirm_password.length > 0 && confirm_password.length < 6) || password !== confirm_password && confirm_password.length > 5}"
								/>						
								<BaseInputGroup 
									for="tel" type="tel" title="Телефон" hint="Необходим для отслеживания и получения заказов"							
									v-model="tel"
									@focus="focusTel"
									@input="inputTel"
									:class="{validated: tel.length === 12, invalidated: tel.length > 2 && tel.length < 12}"
								/>						
								<BaseInputGroup 
									for="email" type="email" title="E-mail" hint="Необходим для отслеживания и получения заказов"							
									v-model="email"
									@input="inputEmail"
									:class="{validated: isValidatedEmail === false, invalidated: isValidatedEmail === true && email.length > 0}"
								/>						
							</template>												
						</div>
						<div class="form-agreement"> 
							<div class="form-agreement__checkbox checkbox">
								<input type="checkbox" :checked="checked" @click="checked = !checked" @input="validation">
							</div>
							<div class="form-agreement__text">
								<p>Я принимаю условия <NuxtLink class="link" to="/">Оферты покупателям</NuxtLink> и соглашаюсь на обработку персональных данных, размещаемых на <NuxtLink class="link" to="/">nerdaparts.ru</NuxtLink>.</p>
								<p>С содержанием <NuxtLink class="link" to="/">Политики в отношении обработки персональных данных</NuxtLink> ознакомлен.</p>
							</div>
						</div>
						<BaseButton class="registration__form-btn" text="Зарегистрироваться" 
							:disabled="disabled" 
							:style="`--offset-x: ${percent}%`"
							:class="{active: counter > 0, hideBeforeElem: counter === fields}"
						/>
					</form>
				</template>
				<div class="pay-method" v-if="zakazTabIndex === 1">
					<div class="com-card" 
						v-for="method,index in payMethods" :key="index"
						@click="payMethodIndex = index"
					>
						<div class="com-card__img">
							<img :src="`/images/payment/${method.img}.png`" alt="">
						</div>
						<div class="com-card__content"
							:class="{active: payMethodIndex === index}"
						>
							<h3 class="com-card__title h3">{{method.title}}</h3>
							<div class="com-card__desc">
								<p>{{method.text}}</p>
							</div>
						</div>
					</div>					
				</div>
				<div class="deliv-method" v-if="zakazTabIndex === 2">
					<div class="com-card"
						v-for="method,index in delivMethods" :key="index"
						@click="delivMethodIndex = index"
					>
						<div class="com-card__img">
							<img :src="`/images/delivery/${method.img}.png`" alt="">
						</div>
						<div class="com-card__content"
							:class="{active: delivMethodIndex === index}"
						>
							<h3 class="com-card__title h3">{{method.title}}</h3>
							<div class="com-card__desc">
								<p>{{method.text}}</p>
							</div>
						</div>
					</div>
					<div class="deliv-method__map">
						<img src="/images/misc/map-shop.png" alt="">
					</div>
					<div class="deliv-method__points">
						<template v-if="delivMethodIndex === 0">
							<p class="deliv-method__points-title fw-b">Выбрать пункт выдачи</p>
							<div class="select">
								<button class="option active"
									@click="isOptions = !isOptions"
								>
									<i class="icon-near"></i>
										<span class="selected">{{selectItems[selectIndex]}}</span>	
									<i class="icon-arrow-down" :class="{rotate: isOptions}"></i>
								</button>
								<div class="options" :class="{show: isOptions}">
									<button class="option"
										v-for="item,index in selectItems"
										@click="optionClicked(index)"
										:class="{hide: selectIndex === index}"
									>{{item}}</button>								
								</div>
							</div>
						</template>
						<template v-else>
							<p class="deliv-method__points-title fw-b">Адрес пункта самовывоза</p>
							<div class="deliv-method__points-address">
								<i class="icon-near"></i>
								проспект Михаила Нагибина, д. 155
							</div>
						</template>
					</div>
				</div>
				<div class="zakaz-success" v-if="zakazTabIndex === 3">
					<div class="zakaz-success__title h1">
						<i class="icon-check-circle"></i>
						Спасибо за заказ! Ваш №132518
					</div>
					<div class="zakaz-success__result">
						<p class="zakaz-success__result-item"><b>Сумма</b> 2797 &#x20BD;</p>
						<p class="zakaz-success__result-item"><b>Способ оплаты</b> Наличный расчёт</p>
						<p class="zakaz-success__result-item"><b>Способ доставки</b> Транспортной компанией</p>
						<p class="zakaz-success__result-item"><b>Адрес выдачи</b> проспект Михаила Нагибина, д. 155</p>
					</div>
					<p class="description mbe-16">С подробной информацией вы можете ознакомиться в личном кабинете</p>
					<div class="zakaz-success__btm">
						<BaseButton text="Ваши заказы" class="zakaz-success__btm-btn h2" />
						<NuxtLink to="/" class="zakaz-success__btm-link">На главную</NuxtLink>
					</div>
				</div>
			</div>
		</section>		
	</NuxtLayout>
</template>