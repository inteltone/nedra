<script setup>
import { VNativeDialog } from "vue-native-dialog"
// показ / скрытие попапа
const isPopupCity = usePopupCity()
// популярные города
const popularTowns = ref(['Москва', 'Волгоград', 'Краснодар', 'Санкт-Петербург', 'Екатеринбург', 'Новосибирск', 'Ростов-на-Дону', 'Красноярск', 'Иркутск'])
// буквы
const alphabet = ref(['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'])
const letterIndex = ref(undefined)
function letterClicked(index) {
	letterIndex.value = index
}
// города
const townIndex = ref(undefined)
const towns = ref(['Таганрог', 'Талдом', 'Тамбов', 'Тверь', 'Тобольск', 'Тольятти', 'Томск', 'Туймазы', 'Тула', 'Тюмень'])
function townClicked(index) {
	townIndex.value = index
}
// магазины
const shops = ref(['ул. Кропоткина, д. 197, к.2', 'ул. Немировича-Данченко, д. 146'])
const franchiseIndex = ref(3)
// скрытие попапа при клике вне его
onMounted(() => {
	let dialog = document.querySelector('dialog[data-popup-city]')
	dialog.addEventListener("click", e => {
		const dialogDimensions = dialog.getBoundingClientRect()
		if (
			e.clientX < dialogDimensions.left ||
			e.clientX > dialogDimensions.right ||
			e.clientY < dialogDimensions.top ||
			e.clientY > dialogDimensions.bottom
		) {
			isPopupCity.value = false
		}
	})
})
</script>
<template>
	<v-native-dialog class="popup" :open="isPopupCity" data-popup-city>
		<div class="popup__inner city">
			<div class="city__search">
				<i class="icon-search"></i>
				<input type="text" placeholder="Поиск города">
				<button><i class="icon-search"></i></button>
			</div>
			<div class="city__popular">
				<p class="city__popular-title">Популярные города</p>
				<div class="city__popular-items">
					<span
						v-for="town in popularTowns"
					>{{town}}</span>
				</div>
			</div>
			<div class="city__pick">
				<p class="city__pick-title">Выберите город</p>
				<div class="city__pick-alphabet">
					<span
						v-for="letter,index in alphabet"
						@click="letterClicked(index)"
						:class="{active: letterIndex === index}"
					>{{ letter }}</span>
				</div>
			</div>
			<div class="city__btm">
				<div class="city__btm-letter h1">T</div>
				<div class="city__btm-towns">
					<span
						v-for="town,index in towns"
						@click="townClicked(index)"
						:class="{active: townIndex === index}"
					>
						{{town}}
						<span :class="{franchise: index === franchiseIndex}"></span>
					</span>
				</div>
				<div class="city__btm-shops">
					<div class="shops">
						<p class="shops__title">Магазины в Тамбове</p>
						<div class="shops__list">							
							<label v-for="shop in shops">
								<span class="radio">
									<input type="radio" name="shop">
								</span>
								{{ shop }}
							</label>											
						</div>
					</div>
					<div class="no-shops">
						<div class="no-shops__text">
							<p>В этом городе пока нет офиса продаж Nedra Parts. У Вас есть возможность стать первым!</p>
							<p>Ознакомьтесь с нашим Франчайзинговым проектом.Если у Вас возникли вопросы, связанные с участием в программе франчайзинга и присоединением к сети Carex Parts, а также для получения дополнительной информации обращайтесь по телефону или по электронной почте</p>
						</div>
						<div class="no-shops__contacts">
							<a href="tel:+78004971880"><i class="icon-call"></i>+7 800 497 18 80</a>
							<a href="mail:ysa@carex-parts.com"><i class="icon-mail"></i>ysa@carex-parts.com</a>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</v-native-dialog>	
</template>