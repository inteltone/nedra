<script setup>
const rowItems = ref(['AUDI', 'A6', '2.4 AVANT', '2001', 'Европа', 'ALF V6 / 193 hp', '105724', 'EZZ (5A)', '4Z4Z'])
// классификатор
const tabs = ref(['Общий', 'От производителя'])
const tabIndex = ref(0)
function tabClicked(index) {
	tabIndex.value = tabIndex.value > 0 ? 0 : 1
	category1Index.value = undefined
	category2Index.value = undefined
	category3Index.value = undefined
	optionIndex.value = undefined
	showContent.value = 0
}
// для классификатора
const classifier = ref([
	{
		name: 'Детали для ТО',
		categories: [
			{name: 'Фильтр масляный 1',options: ['Фильтр 11','Фильтр 12','Фильтр 13']},
			{name: 'Фильтр масляный 2',options: ['Фильтр 21','Фильтр 22']},
			{
				name: 'Фильтр масляный 3',
				categories: [
					{name: 'Фильтр масляный 4',options: ['Фильтр 41','Фильтр 42','Фильтр 43']},
					{name: 'Фильтр масляный 5',options: ['Фильтр 51','Фильтр 52']},
				],
				name: 'Фильтр масляный 6',
				categories: [
					{name: 'Фильтр масляный 7',options: ['Фильтр 71','Фильтр 72','Фильтр 73']},
					{name: 'Фильтр масляный 8',options: ['Фильтр 81','Фильтр 82']},
				],
			},
		]
	},
	{
		name: 'Двигатель',		
		categories: [
			{name: 'Поршни 1',options: ['Поршень 11','Поршень 12','Поршень 13']},
			{name: 'Поршни 2',options: ['Поршень 21','Поршень 22']},
			{
				name: 'Поршни 3',
				categories: [
					{name: 'Поршни 4',options: ['Поршень 41','Поршень 42','Поршень 43']},
					{name: 'Поршни 5',options: ['Поршень 51','Поршень 52']},
				],
				name: 'Поршни 6',
				categories: [
					{name: 'Поршни 7',options: ['Поршень 71','Поршень 72','Поршень 73']},
					{name: 'Поршни 8',options: ['Поршень 81','Поршень 82']},
				],
			},
		]
	},
])
const classifier2 = ref([
	{
		name: 'Топливная система',
		categories: [
			{name: 'Топливный бак 1',options: ['Бак 11','Бак 12','Бак 13']},
			{name: 'Топливный бак 2',options: ['Бак 21','Бак 22']},
			{
				name: 'Топливный бак 3',
				categories: [
					{name: 'Топливный бак 4',options: ['Бак 41','Бак 42','Бак 43']},
					{name: 'Топливный бак 5',options: ['Бак 51','Бак 52']},
				],
				name: 'Топливный бак 6',
				categories: [
					{name: 'Топливный бак 7',options: ['Бак 71','Бак 72','Бак 73']},
					{name: 'Топливный бак 8',options: ['Бак 81','Бак 82']},
				],
			},
		]
	},	
])
// 1 УРОВЕНЬ - ОТКР./ЗАКР.
const category1Index = ref(undefined)
function category1Clicked(index) {
	if (category1Index.value === index) {
		category1Index.value = undefined
		category2Index.value = undefined
		category3Index.value = undefined
		optionIndex.value = undefined
		return
	}
	category2Index.value = undefined
	category3Index.value = undefined
	optionIndex.value = undefined
	category1Index.value = index
	showContent.value = 0
}
// 2 УРОВЕНЬ - ОТКР./ЗАКР.
const category2Index = ref(undefined)
function category2Clicked(index) {
	if (category2Index.value === index) {
		category2Index.value = undefined
		category3Index.value = undefined
		optionIndex.value = undefined
		return
	}
	category3Index.value = undefined
	optionIndex.value = undefined
	category2Index.value = index
	showContent.value = 1
}
// 3 УРОВЕНЬ - ОТКР./ЗАКР.
const category3Index = ref(undefined)
function category3Clicked(index) {
	if (category3Index.value === index) {
		category3Index.value = undefined
		optionIndex.value = undefined
		return
	}
	optionIndex.value = undefined
	category3Index.value = index
	showContent.value = 1
}
// ПОКАЗ КОНЕЧНОГО ПРОДУКТА
const optionIndex = ref(undefined)
function optionClicked(index) {	
	optionIndex.value = index
	showContent.value = 2
}
// для карточек категорий
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
// показ контента при кликах на классификаторе
const showContent = ref(0)
</script>
<template>
	<NuxtLayout>
		<TheBreadcrum />	
		<ThePageTitle class="search-vin-brands__title" title="Каталог AUDI A6 Avant 2.4" />
		<div class="search-vin">			
			<div class="search-vin-table">
				<TheSearchVinTableHead />
				<div class="search-vin-table__row">
					<span v-for="item in rowItems">{{item}}</span>
				</div>
			</div>
		</div>
		<div class="search-vin-res">
			<div class="search-vin-res__aside">
				<div class="s-form-wrap">
					<div class="s-img">
						<img src="/images/brands/audi.png" alt="">
					</div>
					<form class="s-form">
						<input type="text" placeholder="Введите название узла или детали">
						<button><i class="icon-search"></i></button>
					</form>
				</div>
				<!-- НАЧАЛО КЛАССИФИКАТОРА -->
				<div class="classifier">
					<p class="classifier__title">Классификатор</p>
					<div class="classifier__container">
						<!-- ТАБЫ КЛАССИФИКАТОРА -->
						<div class="classifier__tabs">
							<span 
								v-for="tab,index in tabs" 
								:key="tab"
								@click="tabClicked(index)"
								class="classifier__tab"
								:class="{active: tabIndex === index}"
							>{{tab}}</span>							
						</div>
						<div class="classifier__panels">
							<!-- 1 КЛАССИФИКАТОР - ОБЩИЙ -->
							<div 
								class="classifier__panel" 							
								:class="{active: tabIndex === 0}"
							>
								<!-- 1 УРОВЕНЬ ----------------------------------------------------------------->
								<div class="classifier__select" 
									v-for="level1,index in classifier" :key="index"
									:class="{active: category1Index === index}"
								>
									<span class="classifier__category" 
										@click="category1Clicked(index)"
										:class="{active: category1Index === index}"
									>
										{{level1.name}}
										<i class="icon-arrow-down" :class="{rotate: category1Index === index}"></i>
									</span>	
									<template v-if="level1.options">
										<div class="classifier__options" :class="{rotate: category1Index === index}">
											<span v-for="option,index in level1.options"
												@click="optionClicked(index)"
												:class="{active: optionIndex === index}"
											>
												{{option}}
											</span>												
										</div>
									</template>	
									<template v-if="level1.categories">
										<!-- 2 УРОВЕНЬ ------------------------------------------------------------>
										<div class="classifier__select" 
											v-for="level2,index in level1.categories" :key="index"	
											:class="{active: category2Index === index}"										
										>
											<span class="classifier__category" 
												@click="category2Clicked(index)"
												:class="{active: category2Index === index}"
											>
												{{level2.name}}
												<i class="icon-arrow-down" :class="{rotate: category2Index === index}"></i>
											</span>
											<template v-if="level2.options">
												<div class="classifier__options" :class="{rotate: category2Index === index}">
													<span v-for="option,index in level2.options"
														@click="optionClicked(index)"
														:class="{active: optionIndex === index}"
													>
														{{option}}
													</span>												
												</div>
											</template>
											<template v-if="level2.categories">
												<!-- 3 УРОВЕНЬ ------------------------------------------------------>
												<div class="classifier__select" 
													v-for="level3,index in level2.categories" :key="index"
													:class="{active: category3Index === index}"
												>
													<span class="classifier__category" 
														@click="category3Clicked(index)"
														:class="{active: category3Index === index}"
													>
														{{level3.name}}
														<i class="icon-arrow-down" :class="{rotate: category3Index === index}"></i>
													</span>
													<template v-if="level3.options">
														<div class="classifier__options" :class="{rotate: category3Index === index}">
															<span v-for="option,index in level3.options"
																@click="optionClicked(index)"
																:class="{active: optionIndex === index}"
															>
																{{option}}
															</span>												
														</div>
													</template>												
												</div>
											</template>													
										</div>
									</template>							
								</div>								
							</div>
							<!-- 2 КЛАССИФИКАТОР - ОТ ПРОИЗВОДИТЕЛЯ -->
							<div 
								class="classifier__panel" 							
								:class="{active: tabIndex === 1}"
							>
								<!-- 1 УРОВЕНЬ ----------------------------------------------------------------->
								<div class="classifier__select" 
									v-for="level1,index in classifier2" :key="index"
									:class="{active: category1Index === index}"
								>
									<span class="classifier__category" 
										@click="category1Clicked(index)"
										:class="{active: category1Index === index}"
									>
										{{level1.name}}
										<i class="icon-arrow-down" :class="{rotate: category1Index === index}"></i>
									</span>	
									<template v-if="level1.options">
										<div class="classifier__options" :class="{rotate: category1Index === index}">
											<span v-for="option,index in level1.options"
												@click="optionClicked(index)"
												:class="{active: optionIndex === index}"
											>
												{{option}}
											</span>												
										</div>
									</template>	
									<template v-if="level1.categories">
										<!-- 2 УРОВЕНЬ ------------------------------------------------------------>
										<div class="classifier__select" 
											v-for="level2,index in level1.categories" :key="index"	
											:class="{active: category2Index === index}"										
										>
											<span class="classifier__category" 
												@click="category2Clicked(index)"
												:class="{active: category2Index === index}"
											>
												{{level2.name}}
												<i class="icon-arrow-down" :class="{rotate: category2Index === index}"></i>
											</span>
											<template v-if="level2.options">
												<div class="classifier__options" :class="{rotate: category2Index === index}">
													<span v-for="option,index in level2.options"
														@click="optionClicked(index)"
														:class="{active: optionIndex === index}"
													>
														{{option}}
													</span>												
												</div>
											</template>
											<template v-if="level2.categories">
												<!-- 3 УРОВЕНЬ ------------------------------------------------------>
												<div class="classifier__select" 
													v-for="level3,index in level2.categories" :key="index"
													:class="{active: category3Index === index}"
												>
													<span class="classifier__category" 
														@click="category3Clicked(index)"
														:class="{active: category3Index === index}"
													>
														{{level3.name}}
														<i class="icon-arrow-down" :class="{rotate: category3Index === index}"></i>
													</span>
													<template v-if="level3.options">
														<div class="classifier__options" :class="{rotate: category3Index === index}">
															<span v-for="option,index in level3.options"
																@click="optionClicked(index)"
																:class="{active: optionIndex === index}"
															>
																{{option}}
															</span>												
														</div>
													</template>												
												</div>
											</template>													
										</div>
									</template>							
								</div>								
							</div>				
						</div>
					</div>
				</div>
				<!-- КОНЕЦ КЛАССИФИКАТОРА -->				
			</div>
			<div class="search-vin-res__content">
				<div class="auto-grid mbe-47" v-show="showContent === 0">
					<NuxtLink to="/" class="card-cat" v-for="category,index in categories" :key="category">
						<div class="card-cat__img">
							<img :src="`/images/catalog/${category.img}.png`" alt="">
						</div>
						<div class="card-cat__title">{{category.name}}</div>
					</NuxtLink>					
				</div>
				<div class="products-picked auto-grid" v-show="showContent === 1">
					<NuxtLink to="/" class="products-picked__item" v-for="item in 5">
						<div class="products-picked__item-img">
							<img src="/images/classifier/thumb.png" alt="">
						</div>
						<p class="products-picked__item-text">Фильтр масляный</p>
					</NuxtLink>
				</div>
				<div class="product-picked" v-show="showContent === 2">
					<div class="product-picked__img">
						<img src="/images/classifier/img.png" alt="">
						<div class="tooltip">
							<div class="tooltip__marker">22</div>
							<div class="tooltip__desc">
								<div class="tooltip__desc-l">
									<p class="t-name fw-b">Фильтр масляный</p>
									<p class="t-number">VAG 078115189H</p>
									<BaseButton class="t-btn-l" text="Цена" />
								</div>
								<div class="tooltip__desc-r">
									<div class="t-img">
										<img src="/images/misc/manager.jpg" alt="">
									</div>
									<button class="t-btn-r"><i class="icon-chat"></i>Помочь?</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>