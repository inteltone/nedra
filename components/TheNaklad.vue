<template>
	<div class="naklad">
		<div class="naklad__table">
			<div class="naklad__table-head">
				<span>Код</span>
				<span>Дата</span>
				<span>Расход, &#x20BD;</span>
			</div>
			<div class="naklad__table-row" 
				v-for="row in 3"
			>
				<span>26441355</span>
				<span>02.11.2024</span>
				<span>27 080,00</span>
				<NuxtLink class="naklad__table-link" to="/">Детализация</NuxtLink>
			</div>
		</div>
	</div>
</template>