<script setup>
// названия столбцов для таблицы
const headItems = ref(['Производитель','Артикул','Количество, шт','Статистика','Срок доставки, дней','Цена, ₽'])
// данные для наполнения таблицы
const tableItems = ref([
	['DOLZ', 'C110', ['КВП 2', 5], '7-7 дней', '2720'],
	['FRAM', 'C110', ['КВП 2', 2], '3-5 дней', '2720'],
	['DOLZ', 'C110', ['КВП 2', 5], '7-7 дней', '2720']
])
</script>
<template>
	<NuxtLayout>
		<TheBreadcrum />	
		<ThePageTitle title="Корзина" />
		<section class="basket">
			<div class="basket__table">
				<div class="basket__table-head">
					<div class="checkbox"><input type="checkbox"></div>
					<span v-for="item in headItems" :key="item">{{item}}</span>					
				</div>
				<div class="basket__table-rows">
					<div 
						class="basket__table-row"
						v-for="row,index in tableItems"
						:key="index"
					>
						<div class="checkbox"><input type="checkbox"></div>
						<span>{{row[0]}}</span>
						<span>{{row[1]}}</span>
						<BaseCounter />
						<span class="r-stats">
							<span>{{row[2][0]}}</span>
							<span>{{row[2][1]}}<i class="icon-star"></i></span>
						</span>
						<span>{{row[3]}}</span>
						<span>{{row[4]}}</span>
					</div>
				</div>
				<div class="basket__table-btm">
					<button class="btn-bask-del">Удалить отмеченные</button>
					<div class="bask-total">
						Итого позиций на сумму, ₽
						<span class="fw-b">8160</span>						
					</div>
					<BaseButton class="btn-drawup" text="Оформить" />
				</div>
			</div>
		</section>
	</NuxtLayout>
</template>