<script setup>
// кнопки переключения видов автомобиля
const btns = ref(['перед', 'корма', 'салон'])
const btnIndex = ref(0)
function btnClicked(index) {
	btnIndex.value = index
	isMarker.value = undefined
}
// маркеры на автомобиле
const isMarker = ref(undefined)
function markerClicked(index) {
	isMarker.value = index
}
// фото автомобилей
const autos = ref(['auto-front', 'auto-back', 'auto-within'])
// товары для вида: ПЕРЕД
const products_front = ref([
	{
		name: 'Ближний / дальний свет',
		products: [
			{img: 'd2r', name: 'd2r'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
			{img: 'd1s', name: 'd1s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
			{img: 'd2r', name: 'd2r'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
			{img: 'd1s', name: 'd1s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
			{img: 'd2r', name: 'd2r'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
		]
	},
	{
		name: 'Габаритные огни',
		products: [
			{img: 'd2r', name: 'd2r'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
			{img: 'd1s', name: 'd1s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
		]
	},
	{
		name: 'Противотуманные фары',
		products: [
			{img: 'd2r', name: 'd2r'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
			{img: 'd1s', name: 'd1s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
			{img: 'd1s', name: 'd1s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
		]
	},			
	{
		name: 'Передние поворотники',
		products: [
			{img: 'd2r', name: 'd2r'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
			{img: 'd1s', name: 'd1s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
			{img: 'd3s', name: 'd3s'},
		]
	},
	{
		name: 'Боковые поворотники',
		products: [
			{img: 'd2r', name: 'd2r'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
			{img: 'd1s', name: 'd1s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
			{img: 'd1s', name: 'd1s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
		]
	},	
])
// товары для вида: КОРМА
const products_back = ref([
	{
		name: 'Фонарь заднего хода',
		products: [
			{img: 'd2r', name: 'd2r'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
			{img: 'd1s', name: 'd1s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
			{img: 'd2r', name: 'd2r'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
			{img: 'd1s', name: 'd1s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
			{img: 'd2r', name: 'd2r'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
		]
	},
	{
		name: 'Стоп сигналы',
		products: [
			{img: 'd2r', name: 'd2r'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
			{img: 'd1s', name: 'd1s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
		]
	},
])
// товары для вида: САЛОН
const products_within = ref([
	{
		name: 'Подсветка бардачка',
		products: [
			{img: 'd2r', name: 'd2r'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
			{img: 'd1s', name: 'd1s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
			{img: 'd2r', name: 'd2r'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
			{img: 'd1s', name: 'd1s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
			{img: 'd2r', name: 'd2r'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
		]
	},
	{
		name: 'Свет салона',
		products: [
			{img: 'd2r', name: 'd2r'},
			{img: 'd3r', name: 'd3r'},
			{img: 'd4r', name: 'd4r'},
			{img: 'd1s', name: 'd1s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
			{img: 'd2s', name: 'd2s'},
			{img: 'd3s', name: 'd3s'},
		]
	},
])
</script>
<template>
	<NuxtLayout>
		<TheBreadcrum />
		<ThePageTitle title="Каталог ламп" class="mbe-47" />
		<div class="cat-single">
			<div class="cat-single__imgs">
				<div class="cat-single__img"
					v-for="auto,index in autos" :key="index"
					:class="{active: btnIndex === index}"
				>
					<img :src="`/images/misc/${auto}.jpg`" alt="">
				</div>
				<div class="auto-markers">
					<template v-for="a,index in 5" :key="index">
						<a :href="`#cat-${index}`" class="auto-markers__item"
							v-if="((index === 0 || index === 1 || index === 2 || index === 3 || index === 4) && btnIndex === 0) || ((index === 0 || index === 1) && btnIndex > 0)"
							:class="{back1: index === 0 && btnIndex === 1,back2: index === 1 && btnIndex === 1,within1: index === 0 && btnIndex === 2,within2: index === 1 && btnIndex === 2,active: isMarker === index}"
							@click="markerClicked(index)"
						><span>{{ index+1 }}</span></a>
					</template>
				</div>
			</div>
			<div class="cat-single__btns">
				<button class="btn-period" v-for="btn,index in btns" :key="index"
					:class="{active: btnIndex === index}"
					@click="btnClicked(index)"
				>{{btn}}</button>				
			</div>
			<div class="cat-single__products front" v-if="btnIndex === 0">
				<div 
				class="cat-single__products-section" 
				v-for="item,index in products_front" 
				:key="index"
				:class="{active: index === isMarker}"
				>
					<div class="cat-single__products-title h3" :id="`cat-${index}`"><span>{{index + 1}}</span>{{item.name}}</div>
					<div class="auto-grid">
						<NuxtLink to="/" class="cat-single__products-item"
							v-for="elem,index in item.products" :key="index"
						>
							<div class="cat-single__products-item-img">
								<img :src="`/images/catalog-single/${elem.img}.png`" alt="">
							</div>
							<p class="cat-single__products-item-title">{{elem.name}}</p>
						</NuxtLink>
					</div>				
				</div>
			</div>
			<div class="cat-single__products back" v-if="btnIndex === 1">
				<div 
				class="cat-single__products-section" 
				v-for="item,index in products_back" 
				:key="index"
				:class="{active: index === isMarker}"
				>
					<div class="cat-single__products-title h3" :id="`cat-${index}`"><span>{{index + 1}}</span>{{item.name}}</div>
					<div class="auto-grid">
						<NuxtLink to="/" class="cat-single__products-item"
							v-for="elem,index in item.products" :key="index"
						>
							<div class="cat-single__products-item-img">
								<img :src="`/images/catalog-single/${elem.img}.png`" alt="">
							</div>
							<p class="cat-single__products-item-title">{{elem.name}}</p>
						</NuxtLink>
					</div>				
				</div>
			</div>
			<div class="cat-single__products within" v-if="btnIndex === 2">
				<div 
				class="cat-single__products-section" 
				v-for="item,index in products_within" 
				:key="index"
				:class="{active: index === isMarker}"
				>
					<div class="cat-single__products-title h3" :id="`cat-${index}`"><span>{{index + 1}}</span>{{item.name}}</div>
					<div class="auto-grid">
						<NuxtLink to="/" class="cat-single__products-item"
							v-for="elem,index in item.products" :key="index"
						>
							<div class="cat-single__products-item-img">
								<img :src="`/images/catalog-single/${elem.img}.png`" alt="">
							</div>
							<p class="cat-single__products-item-title">{{elem.name}}</p>
						</NuxtLink>
					</div>				
				</div>
			</div>
		</div>		
	</NuxtLayout>
</template>
