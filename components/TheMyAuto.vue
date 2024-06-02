<script setup>
import { VNativeDialog } from "vue-native-dialog" 
const isPopupAddAuto = ref(false)
const rowIndex = ref(undefined)
function rowClicked(index) {
	if (index === rowIndex.value) {
		rowIndex.value = undefined
		return
	}
	rowIndex.value = index
}
let disabledBtn = ref(true)
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
			isPopupAddAuto.value = false
		}
	})
})
</script>
<template>
	<div class="my-auto">
		<h2 class="my-auto__title">мои автомобили</h2>
		<div class="my-auto__table">
			<div class="my-auto__table-head">
				<span>Марка</span>
				<span>Модель</span>
				<span>Модификация</span>
				<span>Год</span>
				<span>Двигатель</span>
			</div>
			<div 
				class="my-auto__table-row-wrap" 
				v-for="row,index in 4"
				:key="index"
			>
				<div 
					class="my-auto__table-row grid"
					@click="rowClicked(index)"
					:class="{active: index === rowIndex}"
				>
					<span>AUDI</span>
					<span>A6</span>
					<span>2.4 AVANT</span>
					<span>2001</span>
					<span>ALF V6 / 193 hp</span>
					<button class="btn-delete"><i class="icon-close"></i></button>
				</div>
				<div 
					class="my-auto__table-rowextra"
					:class="{active: index === rowIndex}"
				>
					<BaseButton text="Запрос по VIN" />
					<BaseButton text="Поиск в LAXIMO" />
				</div>
			</div>
		</div>
		<div class="my-auto__no-auto hide">
			<i class="icon-car"></i>
			<p>У вас пока нет добавленных автомобилей</p>
		</div>
		<div class="my-auto__btns">
			<BaseButton text="Добавить из Tecdoc" />
			<BaseButton text="Добавить свой авто" @click="isPopupAddAuto = true" />
		</div>
	</div>
	<v-native-dialog class="popup popup--my-auto" :open="isPopupAddAuto">
		<div class="popup__inner">
			<p class="popup__title h2">Добавление автомобиля</p>
			<form class="popup__form">
				<div class="form-groups">
					<div class="form-group">
						<label for="marka">Марка</label>
						<input type="text" id="marka" placeholder="Марка">
					</div>
					<div class="form-group">
						<label for="model">Модель</label>
						<input type="text" id="model" placeholder="Модель">
					</div>
					<div class="form-group">
						<label for="vin">VIN</label>
						<input type="text" id="vin" placeholder="VIN">
					</div>
					<div class="form-group">
						<label for="engine">Двигатель</label>
						<input type="text" id="engine" placeholder="Двигатель">
					</div>
					<div class="form-group">
						<label for="year">Год</label>
						<input type="text" id="year" placeholder="Год">
					</div>
					<div class="form-group">
						<label for="generation">Поколение</label>
						<input type="text" id="generation" placeholder="Поколение">
					</div>
				</div>
				<textarea placeholder="Комментарий"></textarea>
				<BaseButton class="popup__form-btn" text="Сохранить" 					
					:disabled="disabledBtn" 
				/>
			</form>
			<button class="popup__close close" @click="isPopupAddAuto = false">
				<i class="icon-close"></i>
			</button>
		</div>
	</v-native-dialog>	
</template>