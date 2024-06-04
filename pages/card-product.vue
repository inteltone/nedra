<script setup>
// слайдер
const imgIndex = ref(0)
const images = ref(['03', '02', '01',])
function thumbClicked(index) {
	if(index === imgIndex.value) return
	imgIndex.value = index
}
// табы
const tabIndex = ref(0)
const tabs = ref(['Описание', 'о производителе'])
function tabClicked(index) { tabIndex.value = index }
// панели
const panels = ref([
	[
		{name: 'Артикул', spec: 'С110'},
		{name: 'Наименование', spec: 'Насос водяной'},
		{name: 'Производитель', spec: 'DOLZ'},
		{name: 'Место применения', spec: 'Двигатель'},
	],
	[
		{name: 'Производитель', spec: 'DOLZ'},
		{name: 'Сайт', spec: 'http://www.idolz.com'},	
	]
])
const isPanel = ref(false)
// таблица
const tableHeadItems = ref(['Производитель', 'Артикул', 'Наличие, шт', 'Срок доставки, дней', 'Статистика', 'Цена, ₽'])
const tableSearchedItems = ref(['DOLZ', 'C110', '227', '7-7', 'КВП 2 5', '2720'])

</script>
<template>
	<NuxtLayout>
		<TheBreadcrum />	
		<ThePageTitle class="max-i-s-unset mbe-68" title="Насос водяной DOLZ (артикул C110)" />
		<section class="card">
			<div class="card__top">
				<div class="card__top-slider">
					<div class="card__top-slider-thumbs">
						<div class="thumb-img" v-for="img,index in images" @click="thumbClicked(index)">
							<img :src="`/images/card/${img}.png`" alt="">
						</div>						
					</div>
					<div class="card__top-slider-img">
						<img :src="`/images/card/${images[imgIndex]}.png`" alt="">
					</div>
				</div>
				<div class="card__top-tabs">
					<div class="tabs">
						<button class="tabs__tab"
							v-for="tab,index in tabs"
							:class="{active: tabIndex === index}"
							@click="tabClicked(index)"
						>{{ tab }}</button>						
					</div>				
					<div class="panels">
						<div class="panels__panel"
							v-for="panel,index in panels"
							:class="{active: index === tabIndex}"
						>
							<div class="row"
								v-for="item,index in panel"
							>
								<span>{{ item.name }}</span>
								<span>{{ item.spec }}</span>
							</div>							
						</div>
					</div>					
				</div>
				<div class="card__top-btns">
					<div class="btn-prod btn-prod--unavailable h2">нет В наличии</div>
					<div class="btn-wrap">
						<button class="btn-prod h2">Заказать</button>
						<div class="extra">
							<p class="extra__title">Информация</p>
							<p class="extra__text h2"><span>от 327 <span class="ruble">&#x20BD;</span></span><span>от 4 дней</span></p>
						</div>
					</div>
					<div class="btn-wrap">
						<button class="btn-prod h2">Заказать аналог</button>
						<div class="extra">
							<p class="extra__title">Информация об аналоге</p>
							<p class="extra__text h2"><span>от 107 <span class="ruble">&#x20BD;</span></span><span>от 3 дней</span></p>
						</div>
					</div>
				</div>
			</div>
			<div class="card__table">
				<div class="card__table-head">
					<span class="card__table-head-item"
						v-for="item,index in tableHeadItems"
						:key="item"
					>{{item}}<i class="icon-arrow-up"></i>
					</span>
				</div>
				<div class="card__table-group">
					<div class="card__table-aside">
						<span class="h2">Искомый номер</span>
						<span class="description">от 327 ₽</span>
					</div>
					<div class="card__table-rows">
						<div class="card__table-row">
							<span
								v-for="item,index in tableSearchedItems"
								:key="item"
							>
							{{item}}
							</span>
							btn
						</div>
					</div>
					<div class="card__table-more"></div>
				</div>
			</div>
		</section>
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
				cursor: pointer;	
				transition: color var(--tr);			
				i{
					font-size: 28px;
				}
				&:hover{
					color: var(--clr-orange-100);
				}
			}
		}
		&-group{
			grid-column: 1 / -1;
			display: grid;
			grid-template-columns: repeat(12,1fr);
			gap: 0 var(--gutter);
		}
		&-aside{
			grid-column: 1 / span 2;
			display: grid;
		}
		&-rows{
			grid-column: 3 / -1;			
		}
		&-row{
			display: grid;
			grid-template-columns: var(--columns);
			padding: 22px 35px;
		}
		&-more{}
	}
}
</style>