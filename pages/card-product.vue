<script setup>
// показ коризины с выбранным продуктом по хэдером
const isBasketItem = useBasketItem()
function showBasketItem() {
	isBasketItem.value = true
	setTimeout(() => {
		isBasketItem.value = false
	},10000)
}
let isPopupComparison = usePopupComparison()
// таблицы в нижней части страницы
// названия столбцов для таблиц
const tableHeadItems = ref(['Производитель', 'Артикул', 'Наличие, шт', 'Срок доставки, дней', 'Статистика', 'Цена, ₽'])
// сортировка столбцов
const iconSortIndex = ref(undefined)
const iconRotate = ref(undefined)
function iconSortClicked(index) {
	if (iconSortIndex.value === index) {
		if (iconRotate.value !== undefined) {
			iconRotate.value = undefined
		} else {
			iconRotate.value = index
		}
		console.log(iconRotate.value)
		return
	}
	iconSortIndex.value = index
	iconRotate.value = undefined
}
// таблица ИСКОМЫЙ НОМЕР
const rowSearchedIndex = ref([])
// выбор ряда при клике на нем
function rowSearchedClicked(index) {
	let ind = rowSearchedIndex.value.indexOf(index)	
	if (ind === -1) {	rowSearchedIndex.value.push(index); return }
	rowSearchedIndex.value.splice(ind, 1)
}
// данные для этой таблицы
const tableSearchedItems = ref([
	['DOLZ', 'C110', '227', '7-7', ['КВП 2', '5'], '2720'],
	['DOLZ', 'C110', '115', '5-7', ['КВП 2', '3'], '3100'],
	['DOLZ', 'C110', '35', '2-4', ['КВП 2', '2'], '2340'],
])
// таблица ЗАМЕНЫ ТОГО ЖЕ ПРОИЗВОДИТЕЛЯ
const rowSwappedIndex = ref([])
// выбор ряда при клике на нем
function rowSwappedClicked(index) {
	let ind = rowSwappedIndex.value.indexOf(index)	
	if (ind === -1) {	rowSwappedIndex.value.push(index); return }
	rowSwappedIndex.value.splice(ind, 1)
}
// данные для этой таблицы
const tableSwappedItems = ref([
	['DOLZ', 'C111', '30', '2-5', ['КВП 2', '3'], '2930'],
	['DOLZ', 'C112', '15', '1-3', ['КВП 2', '1'], '3220'],
	['DOLZ', 'C113', '6', '3-7', ['КВП 2', '4'], '2460'],
])
// таблица АНАЛОГИ
const rowAnalogsIndex = ref([])
// выбор ряда при клике на нем
function rowAnalogsClicked(index) {
	let ind = rowAnalogsIndex.value.indexOf(index)	
	if (ind === -1) {	rowAnalogsIndex.value.push(index); return }
	rowAnalogsIndex.value.splice(ind, 1)
}
// данные для этой таблицы
const tableAnalogItems = ref([
	['SKF', 'V24', '26', '1-3', ['КВП 2', '3'], '2777'],
	['Dynamatrix', '327', '14', '3-5', ['КВП 2', '1'], '3122'],
	['Klaxcar', 'U512', '8', '2-3', ['КВП 2', '4'], '2553'],
])
// прилипание кнопки СРАВНЕНИЕ к прав. границе экрана при изменении его ширины
const comparisonOffset = ref(0)
onMounted(() => {
	comparisonOffset.value = calcComparisonOffset()
	window.addEventListener('resize', ()=> comparisonOffset.value = calcComparisonOffset())
	function calcComparisonOffset() {		
		let ww = document.body.clientWidth
		let table_w = document.querySelector('.card__table').offsetWidth
		return (ww - table_w) / 2
	}
})
</script>
<template>
	<NuxtLayout>
		<TheBreadcrum />	
		<ThePageTitle class="max-i-s-unset mbe-68" title="Насос водяной DOLZ (артикул C110)" />
		<section class="card">
			<div class="card__top">
				<TheCardSlider />
				<TheCardTabs />
				<TheCardButtons />
			</div>
			<div class="card__table">
				<div class="card__table-head">
					<span class="card__table-head-item"
						v-for="item,index in tableHeadItems"
						:key="item"
						:class="{active: iconSortIndex === index}"
					>
						{{item}}
						<i 
							class="icon-arrow-up" 
							@click="iconSortClicked(index)"
							:class="{active: iconSortIndex === index, rotate: iconRotate === index}"
						></i>
					</span>
					<!-- кнопка СРАВНЕНИЕ -->
					<button 
						class="comparison" 
						:style="`right:-${comparisonOffset}px`"
						@click="isPopupComparison = true"
					>
						<i class="icon-compare-arrows "></i>
						<span class="comparison__hover">Сравнение</span>
						<span>[2]</span>
					</button>
				</div>
				<div class="card__table-group">
					<div class="card__table-aside">
						<div class="card__table-aside-title-block">
							<span class="h2">Искомый номер</span>
							<span class="description">от 327 ₽</span>
						</div>
					</div>
					<div class="card__table-rows"> 
						<div 
						class="card__table-row" 
							v-for="elem,index in tableSearchedItems" 
							:key="elem"
							@click="rowSearchedClicked(index)"
							:class="{active: rowSearchedIndex.indexOf(index) !== -1 }"
						>
							<template v-for="item,index in elem" :key="item">
								<span v-if="index !== 4" class="card__table-row-item">
									{{item}}
								</span>
								<span v-else class="card__table-row-item-extra">
									<span>{{item[0]}}</span>
									<span>
										{{item[1]}}
										<i class="icon-star"></i>
									</span>		
								</span>
							</template>
							<button class="btn-basket" @click.stop="showBasketItem">
								<i class="icon-mall"></i>
							</button>
						</div>
						<button class="card__table-more">
							<span class="ttu">Ещё предложения от 34 ₽ и 4 дней</span>
							<i class="icon-arrow-down"></i>
						</button>
					</div>
				</div>
				<div class="card__table-group">
					<div class="card__table-aside">
						<div class="card__table-aside-title-block">
							<span class="h2">Замены того же производителя</span>
							<span class="description">от 425 ₽</span>
						</div>
					</div>
					<div class="card__table-rows">
						<div 
							class="card__table-row" 
							v-for="elem,index in tableSwappedItems" 
							:key="elem"
							@click="rowSwappedClicked(index)"
							:class="{active: rowSwappedIndex.indexOf(index) !== -1 }"
						>
							<template v-for="item,index in elem" :key="item">
								<span v-if="index !== 4" class="card__table-row-item">
									{{item}}
								</span>
								<span v-else class="card__table-row-item-extra">
									<span>{{item[0]}}</span>
									<span>
										{{item[1]}}
										<i class="icon-star"></i>
									</span>		
								</span>
							</template>
							<button class="btn-basket" @click.stop="showBasketItem">
								<i class="icon-mall"></i>
							</button>
						</div>
						<button class="card__table-more">
							<span>Ещё предложения от 45 ₽ и 3 дней</span>
							<i class="icon-arrow-down"></i>
						</button>
					</div>
				</div>				
				<div class="card__table-group">
					<div class="card__table-aside">
						<div class="card__table-aside-title-block">
							<span class="h2">Аналоги</span>
							<span class="description">от 515 ₽</span>						
						</div>
					</div>
					<div class="card__table-rows">
						<div 
						class="card__table-row" 
							v-for="elem,index in tableAnalogItems" 
							:key="elem"
							@click="rowAnalogsClicked(index)"
							:class="{active: rowAnalogsIndex.indexOf(index) !== -1 }"
						>
							<template v-for="item,index in elem" :key="item">
								<span v-if="index !== 4" class="card__table-row-item">
									{{item}}
								</span>
								<span v-else class="card__table-row-item-extra">
									<span>{{item[0]}}</span>
									<span>
										{{item[1]}}
										<i class="icon-star"></i>
									</span>		
								</span>
							</template>
							<button class="btn-basket" @click.stop="showBasketItem">
								<i class="icon-mall"></i>
							</button>
						</div>
						<button class="card__table-more">
							<span>Ещё предложения от 45 ₽ и 3 дней</span>
							<i class="icon-arrow-down"></i>
						</button>
					</div>
					<!-- СОРТИРОВЩИК -->
					<TheCardSorter />
				</div>
			</div>
		</section>
		<ThePopupComparison />
	</NuxtLayout>
</template>