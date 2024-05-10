<script setup>
const CATALOGS = [
	{name: 'Запчасти', img: 'spares'},
	{name: 'Запчасти для то', img: 'spares-to'},
	{name: 'аккумуляторы', img: 'batteries'},
	{name: 'масла', img: 'oils'},
	{name: 'ШИНЫ и диски', img: 'tires-wheels'},
	{name: 'автосвет', img: 'autolight'},
	{name: 'аксессуары', img: 'accessories'},
]
const catalogs = ref(CATALOGS)
</script>
<template>
	<div class="catalogs">
			<NuxtLink to="/" class="catalogs__item catalog" v-for="item,index in catalogs" :key="item.name">
				<div class="catalog__num">0{{ index + 1 }}</div>
				<div class="catalog__title h2">{{ item.name }}</div>
				<img class="catalog__img" :src="`/images/catalogs/${item.img}.png`" :alt="item.name">
			</NuxtLink>			
		</div>
</template>
<style lang="scss">
.catalogs{
	--gap: 5px;
	display: grid;
	grid-template-columns: repeat(6,1fr);
	grid-template-rows: 1fr 1fr;
	gap: var(--gap);
	block-size: 464px;
	margin-block-end: 48px;
	.catalog{
		display: grid;
		grid-template-rows: min-content;
		position: relative;
		overflow: hidden;
		inline-size: calc(50% - var(--gap) / 2);
		padding: 36px 29px 25px;
		color: var(--clr-text);
		background-color: var(--clr-gray-100);
		border-radius: 8px 0 0 8px;
		transition: background-color var(--tr), inline-size var(--tr), border-radius var(--tr);		
		&__img{
			align-self: end;
			margin-inline-start: 20%;
			transform-origin: left bottom;			
			transition: transform var(--tr);
		}
		&::after{
			content: '';
			position: absolute;
			inset-inline-start: 20px;
			inset-block-end: 45px;			
			inline-size: 35px;
			block-size: 22px;
			background-image: url("data:image/svg+xml,%3Csvg width='70' height='23' viewBox='0 0 70 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M59.5147 0.43934L69.0607 9.98528C69.6464 10.5711 69.6464 11.5208 69.0607 12.1066L59.5147 21.6525C58.9289 22.2383 57.9792 22.2383 57.3934 21.6525C56.8076 21.0668 56.8076 20.117 57.3934 19.5312L64.3787 12.5459H0V9.54594H64.3787L57.3934 2.56066C56.8076 1.97487 56.8076 1.02513 57.3934 0.43934C57.9792 -0.146447 58.9289 -0.146447 59.5147 0.43934Z' fill='black'/%3E%3C/svg%3E%0A");
			background-position: right center;
			transition: inline-size var(--tr);
		}
		&:nth-child(1){
			grid-column: 1 / span 2;
			grid-row: 1 / span 2;			
		}
		&:nth-child(2){
			grid-column: 2 / span 2;
			grid-row: 1 / span 2;
		}
		&:nth-child(3){
			grid-column: 3 / span 2;
			grid-row: 1 / span 2;
		}
		&:nth-child(4){
			grid-column: 4 / span 2;
			grid-row: 1 / span 2;
		}
		&:nth-child(5){
			grid-column: 5 / span 2;
			grid-row: 1 / span 2;
		}
		&:nth-child(6){
			grid-column: 6 / span 1;
			grid-row: 1 / span 1;
			inline-size: unset;
		}
		&:nth-child(7){
			grid-column: 6 / span 1;
			grid-row: 2 / span 1;
			inline-size: unset;
		}
		&:nth-child(6), &:nth-child(7){
			img{
				margin-inline-start: 60%;
				transform: translateY(-20%);
			}
		}
	}
	.catalog:hover{
		position: relative;
		z-index: 1;
		inline-size: 80%;
		background-color: var(--clr-orange-100);
		border-radius: 8px;
		.catalog__img{
			transform: scale(1.1);
		}		
	}
	.catalog:hover::after{
		inline-size: 70px;
	}
	.catalog:nth-child(6):hover,.catalog:nth-child(7):hover{
		inline-size: unset;
		img{
			transform: translateY(-20%) scale(1.1);
		}
	}
}
</style>