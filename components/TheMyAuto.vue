<script setup>
const isPopupAddAuto = usePopupAddAuto()
const rowIndex = ref(undefined)
function rowClicked(index) {
	if (index === rowIndex.value) {
		rowIndex.value = undefined
		return
	}
	rowIndex.value = index
}
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
	<ThePopupAddAuto />
</template>