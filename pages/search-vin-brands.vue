<script setup>
const BRANDS = [
	{img: 'audi', name: 'Audi'},{img: 'bmw', name: 'BMW'},{img: 'mersedes', name: 'Mersedes-Benz'},{img: 'skoda', name: 'Skoda'},{img: 'audi', name: 'Audi'},{img: 'bmw', name: 'BMW'},{img: 'mersedes', name: 'Mersedes-Benz'},{img: 'skoda', name: 'Skoda'},{img: 'audi', name: 'Audi'},{img: 'bmw', name: 'BMW'},{img: 'mersedes', name: 'Mersedes-Benz'},{img: 'skoda', name: 'Skoda'},
]
const brands = reactive(BRANDS)
</script>
<template>
	<NuxtLayout>
		<ul class="breadcrums">
			<li class="breadcrums__item">
				<NuxtLink to="/" class="breadcrums__link">Главная</NuxtLink>
			</li>
			<li class="breadcrums__item">
				<span class="breadcrums__idle">Оригинальный каталог</span>
			</li>
		</ul>		
		<ThePageTitle class="search-vin-brands__title" title="Оригинальный каталог" />
		<div class="search-vin-brands">
			<form class="search-vin-brands__form" >
				<span class="search-vin-brands__form-title">Поиск по VIN номеру</span>
				<input type="search" placeholder="Введите VIN номер, например, WAUZZZ00121415125">
				<BaseButton text="Найти" />
			</form>
			<div class="brands-output auto-grid">
				<NuxtLink to="/" class="brands-output__item" v-for="brand in brands" :key="brand.name">
					<div class="brands-output__item-img">
						<img :src="`/images/brands/${brand.img}.png`" :alt="`Логотип ${brand.name}`">
					</div>
					<div class="brands-output__item-name">{{ brand.name }}</div>
				</NuxtLink>
			</div>
			<BaseButton class="search-vin-brands__btn" text="Все бренды" />
		</div>
	</NuxtLayout>
</template>

<style lang="scss">
.search-vin-brands{
	display: grid;
	gap: 24px 0;
	&__title{
		max-inline-size: unset;
		margin-block-end: 46px;
	}
	&__form{
		display: flex;
		align-items: center;
		gap: 0 26px;
		block-size: 81px;
		padding-inline: 26px;
		background-color: var(--clr-gray-100);
		border-radius: 8px;		
		input{
			flex-grow: 1;
			max-inline-size: 505px;
			block-size: 57px;
			margin-inline-start: auto;
			padding-inline: 24px;
			border: none;
			border-radius: 8px;
			&:focus-visible{
				outline: none;
			}
			&::placeholder{
				color: var(--clr-gray);
				line-height: 1;
			}
			&:focus-visible::placeholder{
				color: transparent;
			}
		}
	}
}
.brands-output{
	&.auto-grid{
		--min-w: 230px;
	}
	&__item{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 7px 0 8px;
		color: var(--clr-text);
		border: 1px solid var(--clr-gray);
		border-radius: 8px;
		transition: color var(--tr);
		@media(hover: hover){
		 &:hover{
			color: var(--clr-orange-100);
		 }
		}
		&-img{
			aspect-ratio: 1;
			inline-size: min(122px,100%);
			img{
				inline-size: 100%;
				block-size: 100%;
				object-fit: cover;
			}
		}
		&-name{
			block-size: 39px;
			text-align: center;
		}
	}
}
	
</style>