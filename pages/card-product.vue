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
							<button class="btn-basket"><i class="icon-mall"></i></button>
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
							<button class="btn-basket"><i class="icon-mall"></i></button>
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
<style lang="scss">
.card{
	display: grid;	
	gap: 64px 0;
	&__top{
		display: grid;
		grid-template-columns: repeat(12,1fr);
		gap: 0 var(--gutter);
		&>*{
			align-self: start;
		}
		&-slider{
			grid-column: 1 / span 4;
			grid-row: 1 / span 2;
			display: grid;
			grid-template-columns: repeat(4,1fr);
			gap: 0 var(--gutter);			
			&-thumbs{
				grid-column: 1 / span 1;
				align-self: start;
				display: grid;
				gap: 8px;
				.thumb-img{
					overflow: hidden;
					aspect-ratio: .9137;
					block-size: 116px;
					border: 1px solid var(--clr-gray-100);
					border-radius: 8px;
					cursor: pointer;
					transition: border-color var(--tr);
					img{
						inline-size: 100%;
						object-fit: cover;
						block-size: 100%;
					}
					&:hover{
						border-color: var(--clr-orange-100);
					}
				}
			}
			&-img{
				overflow: hidden;
				grid-column: 2 / span 3;				
				padding: 41px 36px;
				border: 1px solid var(--clr-gray-100);
				border-radius: 8px;
				img{
					aspect-ratio: .8764;
					inline-size: 100%;
					block-size: 356px;
					object-fit: cover;
				}
			}
		}
		&-tabs{
			--gutter: 9px;
			grid-column: 5 / -1;
			grid-row: 1 / span 1;
			justify-self: end;
			max-inline-size: 925px;
			inline-size: 100%;	
			margin-block-end: 32px;		
			.tabs{
				display: flex;
				gap: 0 var(--gutter);
				margin-block-end: 16px;
				&__tab{
					flex-basis: calc(50% - var(--gutter) / 2);
					padding-block: 12px;
					text-transform: uppercase;
					border: 1px solid var(--clr-gray-100);
					border-radius: 8px;
					transition: background-color var(--tr), border-color var(--tr);
					&:hover, &.active{
						background-color: var(--clr-orange-100);
						border-color: var(--clr-orange-100);
					}
				}
			}
			.panels{
				&__panel{
					display: none;
					.row{
						display: grid;
						grid-template-columns: 1fr 1fr;
						padding: 24px 35px;
						border-radius: 8px;
						&:nth-child(odd){
							background-color: var(--clr-gray-100);
						}
					}
					&.active{
						display: block;
					}
				}
			}
		}
		&-btns{
			grid-column: 5 / -1;
			grid-row: 2 / span 1;
			display: grid;
			gap: 32px 0;
			justify-self: end;
			max-inline-size: 925px;
			inline-size: 100%;
			.btn-wrap{
				display: flex;
				align-items: center;
				gap: 32px;
				.extra{
					display: grid;
					gap: 3px 0;
					&__title{
						color: var(--clr-gray-100);
					}
					&__text{
						display: flex;
						gap: 0 28px;
					}
				}
			}

		}
	}
	&__table{
		--columns: 1fr .75fr 1fr 1.25fr .9fr 1fr 80px;
		display: grid;
		grid-template-columns: repeat(12,1fr);
		gap: 0 var(--gutter);
		&-head{
			position: sticky;
			top: var(--header__btm-h);
			grid-column: 3 / -1;
			display: grid;
			grid-template-columns: var(--columns);	
			margin-block-end: 32px;		
			padding: 22px 35px;
			background-color: var(--clr-gray-100);
			border-radius: 8px;
			&-item{
				display: flex;
				align-items: center;				
				transition: color var(--tr);
				&.active{
					font-weight: var(--fw-b);
				}			
				i{
					font-size: 28px;
					cursor: pointer;	
					&:hover{
						color: var(--clr-orange-100);
					}
					&.active{
						color: var(--clr-orange-100);
					}
					&.rotate{
						transform: rotate(-180deg);
					}
				}
			}
			.comparison{
				position: absolute;
				right: 0;
				inset-block-start: 0;
				display: flex;
				align-items: center;
				gap: 4px;				
				block-size: 100%;
				padding-inline: 12px;
				background-color: var(--clr-orange-100);
				border-radius: 8px 0 0 8px;
				cursor: pointer;
				i{
					overflow: hidden;
					max-inline-size: 100px;
					font-size: 28px;
					transition: max-inline-size var(--tr);
				}
				&__hover{
					overflow: hidden;
					max-inline-size: 0;
					text-transform: uppercase;
					transition: max-inline-size var(--tr);
				}
				&:hover{
					i{
						max-inline-size: 0;					
					}
					.comparison__hover{
						max-inline-size: 100px;
					}
				}
			}
		}
		&-group{
			grid-column: 1 / -1;
			display: grid;
			grid-template-columns: repeat(12,1fr);
			grid-template-rows: min-content 1fr;
			gap: 0 var(--gutter);
		}
		&-aside{
			grid-column: 1 / span 2;
			grid-row: 1 / span 1;	
			margin-block-end: 48px;		
			&-title-block{
				display: grid;
			}
		}
		&-rows{
			grid-column: 3 / -1;	
			grid-row: 1 / span 2;		
		}
		&-row{
			display: grid;
			grid-template-columns: var(--columns);
			align-items: center;
			padding: 22px 35px;
			border-radius: 8px;
			cursor: pointer;
			transition: background-color var(--tr);
			&-item-extra{ 
				display: flex;
				align-items: center;
				gap: 0 16px;
				span{
					display: flex;
					align-items: center;
				}
				i{
					font-size: 24px;
					line-height: 1;
				}
			}
			.btn-basket{
				display: grid;
				place-items: center;
				inline-size: 100%;
				block-size: 100%;
				color: var(--clr-white);
				background-color: var(--clr-black);
				border-radius: 4px;
				cursor: pointer;
				transition: background-color var(--tr);
				i{
					font-size: 18px;
				}
				&:hover{
					background-color: var(--clr-orange-100);
				}
			}
			&:nth-child(odd){
				background-color: var(--clr-gray-25);
			}
			&:hover{
				background-color: var(--clr-orange-25);
			}
			&.active{
				background-color: var(--clr-orange-100) !important;
			}
		}
		&-more{
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0 10px;
			inline-size: 100%;
			margin-block: 24px 48px;
			transition: color var(--tr);
			span{
				text-decoration-line: underline;				
				text-underline-offset: 3px;
				transition: text-decoration-color var(--tr);
			}
			i.rotate{
				transform: rotate(-180deg);
			}
			&:hover{
				color: var(--clr-orange-100);
				span{
					text-decoration-color: transparent;
				}
			}
		}		
		.sorter{
			grid-column: 1 / span 2;
			grid-row: 2 / span 1;
			&__btns{
				display: flex;
				gap: 10px var(--gutter);
				margin-block-end: 35px;
				button.active{
					color: var(--clr-orange-100);
					font-weight: var(--fw-b);
				}
			}
			&__list{
				display: grid;
				gap: 12px 0;
				&-item{
					display: flex;
					justify-content: space-between;
				}
				label{
					display: flex;
					align-items: center;
					gap: 0 8px;
				}
			}
		}
	}
}
</style>