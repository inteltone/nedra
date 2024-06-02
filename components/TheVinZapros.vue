<script setup>
const rowIndex = ref(undefined)
function rowClicked(index) {
	if (rowIndex.value === index) {
		rowIndex.value = undefined
		return
	}
	rowIndex.value = index
}
</script>
<template>
	<div class="vin-zapros">
		<div class="vin-zapros__table">
			<div class="vin-zapros__table-head">
				<span>Дата</span>
				<span>Производитель</span>
				<span>Модель</span>
			</div>
			<div 
				class="vin-zapros__table-row-wrap"
				v-for="row,index in 3"
				:key="index"
			>
				<div class="vin-zapros__table-row grid"
					@click="rowClicked(index)"
					:class="{active: index === rowIndex}"
				>
					<span>02.11.2024</span>
					<span>DOLZ</span>
					<span>Насос водяной</span>
					<button class="zapros">Новый запрос</button>
					<NuxtLink class="details" to="/">Подробнее</NuxtLink>
					<button class="btn-delete"><i class="icon-close"></i></button>
				</div>
				<div class="vin-zapros__table-rowextra"
					:class="{active: index === rowIndex}"
				>
					<BaseButton text="Создать запрос" />
				</div>
			</div>
		</div>
	</div>
</template>