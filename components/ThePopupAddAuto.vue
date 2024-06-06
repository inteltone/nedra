<script setup>
import { VNativeDialog } from "vue-native-dialog" 
const isPopupAddAuto = usePopupAddAuto()
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