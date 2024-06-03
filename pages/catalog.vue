<script setup>
// выбор параметров для производителей --------------
const brands = ref(
	[
		{name: 'Audi', checked: false},
		{name: 'BMW', checked: false},
		{name: 'Mersedes-Benz', checked: false},
		{name: 'Volkswagen', checked: false},
		{name: 'Skoda', checked: false}
	]
)
const isBrandsDrop = ref(false)
function showBrandsDrop() {
	isBrandsDrop.value = !isBrandsDrop.value
}
const isCheckedBrands = ref(false)
function handleCheck(index) {	
	if (brands.value[index].checked === false) {		
		brands.value[index].checked = true		
	} else {
		brands.value[index].checked = false
	}
	const checked = brands.value.filter(brand => brand.checked === true)
	if (checked.length) {
		isCheckedBrands.value = true
		return
	} 
	isCheckedBrands.value = false	
}
// для карточек категорий --------------
const categories = ref([
	{name: 'Электрика', img: '01'},
	{name: 'Подготовка топливной смеси', img: '02'},
	{name: 'Система подачи топлива', img: '03'},
	{name: 'Ремённый привод', img: '04'},
	{name: 'Система выпуска', img: '05'},
	{name: 'Двигатель', img: '06'},
	{name: 'Фильтры', img: '07'},
	{name: 'Электрика', img: '01'},
	{name: 'Подготовка топливной смеси', img: '02'},
	{name: 'Система подачи топлива', img: '03'},
	{name: 'Ремённый привод', img: '04'},
	{name: 'Система выпуска', img: '05'},
	{name: 'Двигатель', img: '06'},
	{name: 'Фильтры', img: '07'},
])
</script>
<template>
	<NuxtLayout>
		<TheBreadcrum />	
		<ThePageTitle class="catalog__title" title="Каталог запчастей" />
		<section class="catalog">
			<div class="catalog__aside">
				<div class="select-cat">
					<div 
						class="select-cat__selected" 
						:class="{active: isBrandsDrop, hasChecked: isCheckedBrands}"
						@click="showBrandsDrop"
					>
						<span>Производитель</span>
						<i class="icon-arrow-down" :class="{rotate: isBrandsDrop}"></i>
					</div>
					<div class="select-cat__drop" :class="{expanded: isBrandsDrop}">
						<div class="select-cat__drop-inner">							
							<label 
								v-for="brand,index in brands" 
								:key="brand.name"								
							>
								<div class="checkbox" @click="handleCheck(index)">
									<input type="checkbox">
								</div>
								{{ brand.name }}
							</label>							
						</div>
					</div>
				</div>
			</div>
			<div class="catalog__content">
				<div class="auto-grid mbe-47">
					<NuxtLink to="/" class="card-cat" v-for="category,index in categories" :key="category">
						<div class="card-cat__img">
							<img :src="`/images/catalog/${category.img}.png`" alt="">
						</div>
						<div class="card-cat__title">{{category.name}}</div>
					</NuxtLink>					
				</div>
				<div class="auto-grid">
					<NuxtLink to="/" class="card-product" v-for="card in 10">
						<div class="card-product__img">
							<img src="/images/products/01.png" alt="">
						</div>
						<p class="card-product__title h3">Насос водяной DOLZ</p>
						<ul class="card-product__list">
							<li class="card-product__list-item" v-for="item in 4">
								<span>Параметр</span>
								<span>242х175х190</span>
							</li>
						</ul>
						<span class="btn">Найти</span>
					</NuxtLink>
				</div>
			</div>
		</section>
	</NuxtLayout>
</template>
<style lang="scss">
.card-product{
	padding: 16px;
	color: var(--clr-black);
	border: 1px solid var(--clr-gray);
	border-radius: 8px;
	transition: border-color var(--tr);
	&__img{
		overflow: hidden;
		inline-size: 100%;
		block-size: 123px;
		margin-block-end: 32px;
		img{
			inline-size: 100%;
			object-fit: contain;
			block-size: 100%;
		}
	}
	&__title{
		margin-block-end: 16px;		
	}
	&__list{
		display: grid;
		gap: 8px;
		margin-block-end: 24px;
		&-item{
			display: flex;
			justify-content: space-between;
			gap: 10px;
			font-size: 12px;
			line-height: 1.5;
		}
	}
	.btn{
		block-size: 39px;
		font-size: 12px;
		line-height: 1.5;
	}
	&:hover{
		border-color: var(--clr-orange-100);
		.btn{
			background-color: var(--clr-orange-100);
		}
	}	
}
</style>