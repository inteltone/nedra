<template>
	<NuxtLayout>
		<ul class="breadcrums">
			<li class="breadcrums__item">
				<NuxtLink to="/" class="breadcrums__link">Главная</NuxtLink>
			</li>
			<li class="breadcrums__item">
				<span class="breadcrums__idle">Поиск по артикулу</span>
			</li>
		</ul>
		<section class="columns-2 search-artikul">
			<ThePageTitle class="columns-2__title" title="Поиск по артикулу" />
			<div class="columns-2__content">
					<div class="search-artikul__table">
						<div class="search-artikul__table-row table-head">
							<span>Производитель</span>
							<span>Артикул</span>
							<span>Наименование</span>
							<span>Цена, ₽</span>
						</div>
						<div class="search-artikul__table-row" v-for="item in 5">
							<span>CASE</span>
							<span>C110</span>
							<span>CASE C110</span>
							<span>2720</span>
						</div>
					</div>
			</div>
		</section>		
	</NuxtLayout>
</template>

<style lang="scss">		
	.search-artikul{
		.columns-2__title{
			grid-column: 1 / span 2;
		}
		.columns-2__content{
			grid-column: 3 / -1;
		}
		&__table{
			--gap: 20px;
			--col-w: 115px;
			padding-inline-start: 64px;
			.table-head{
				color: var(--clr-gray);
				text-transform: uppercase;
			}
			&-row{
				display: grid;
				grid-template-columns: 1fr var(--col-w) calc(var(--gap) + var(--col-w) * 2) var(--col-w);
				padding-block: 24px;				
				border-radius: 8px;
				span{
					display: block;
					&:not(:nth-child(1)){
						text-align: center;
					}
				}
				span:nth-child(1){
					margin-inline-start: 36px;
				}
				&:not(.table-head):nth-child(even){
					background-color: var(--clr-gray-25);
				}
			}
		}
	}
	
	
</style>