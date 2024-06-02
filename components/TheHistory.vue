<script setup>
const options = ref(['на складе','в ожидании','продано','заказан'])
const periods = ref(['3 дня', 'Неделя', 'Месяц', 'Год', 'Все время'])
const periodIndex = ref(undefined)
function periodClicked(index) {
	periodIndex.value = index
}
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
	<div class="history">
		<div class="history__row1">
			<div class="history__search">
				<input type="text" placeholder="Номер детали, производитель или название">
				<button><i class="icon-search"></i></button>
			</div>
			<BaseSelect class="history__select" :options="options" />
		</div>
		<div class="history__row2">
			<label class="history__show-archive">
				<div class="checkbox">
					<input type="checkbox">
				</div>
				<span>Показать архив заказов</span>
			</label>
			<button class="history__notification">
				<i class="icon-settings"></i>
				<span>Настроить уведомление о смене статуса</span>
			</button>
		</div>
		<div class="history__row3">
			<span class="fw-b">Заказы за:</span>
			<div class="history__row3-btns">
				<BaseButtonPeriod 
					v-for="period,index in periods"
					:class="{active: index === periodIndex}"
					:key="period"
					:text="period"
					@click="periodClicked(index)"
				/>						
			</div>
		</div>
		<div class="history__table">
			<div class="history__table-head">
				<span>Номер</span>
				<span>Дата</span>
				<span>Наименование</span>
				<span>Срок, дней</span>
				<span>Цена, &#x20BD;</span>
				<span>Сумма, &#x20BD;</span>
			</div>
			<div class="history__table-row-wrap" v-for="row,index in 5" :key="index">
				<div class="history__table-row grid" 
					@click="rowClicked(index)"
					:class="{active: index === rowIndex}"
				>
					<span>26441355</span>
					<span>02.11.2024</span>
					<span>DOLZ Насос водяной С110</span>
					<span>7</span>
					<span>12 212</span>
					<span>12 212 123</span>
				</div>
				<div class="history__table-rowextra"
				:class="{active: index === rowIndex}"
				>
					<div class="status">
						<span><b>Статус</b> В офисе</span>
						<NuxtLink to="/" class="status__link">История статусов</NuxtLink>
					</div>
					<span class="date"><b>Ожидается</b> 19.04.2024</span>
					<BaseButton class="print" text="печать накладной" />
				</div>
			</div>			
		</div>
		<div class="history__no-order hide">
			<i class="icon-grading"></i>
			<p>Заказы за указанный период отсутствуют</p>
		</div>
	</div>
</template>