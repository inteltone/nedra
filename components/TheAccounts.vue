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
	<div class="accounts">
		<div class="accounts__table">
			<div class="accounts__table-head">
				<span>Номер</span>
				<span>Дата</span>
				<span>Сумма, &#x20BD;</span>
				<span>Статус</span>
			</div>
			<div class="accounts__table-row-wrap"
				v-for="row,index in 3"
				:key="index"
			>
				<div class="accounts__table-row grid"
					@click="rowClicked(index)"
					:class="{active: index === rowIndex}"
				>
					<span>26441355</span>
					<span>02.11.2024</span>
					<span>27 080,00</span>
					<span>Ждёт оплаты</span>
					<button class="btn-delete"><i class="icon-close"></i></button>
				</div>
				<div class="accounts__table-rowextra"
					:class="{active: index === rowIndex}"
				>
					<NuxtLink to="/">Детально</NuxtLink>
					<NuxtLink to="/">Подтверждение</NuxtLink>
					<BaseButton text="печать счёта" />
					<BaseButton text="печать квитанции" />
				</div>

			</div>
		</div>
	</div>
</template>