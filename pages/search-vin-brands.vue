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
		<form class="search-vin-brands__form" >
			<span class="search-vin-brands__form-title">Поиск по VIN номеру</span>
			<input type="search" placeholder="Введите VIN номер, например, WAUZZZ00121415125">
			<BaseButton text="Найти" />
		</form>
		<div class="brands-output">
			<div class="brands-output__item">
				<div class="brands-output__item-img">
					<img src="/assets/images/brands/audi.png" alt="">
				</div>
				<div class="brands-output__item-name">AUDI</div>
			</div>
			<div class="brands-output__item">
				<div class="brands-output__item-img">
					<img src="/assets/images/brands/bmw.png" alt="">
				</div>
				<div class="brands-output__item-name">BMW</div>
			</div>
			<div class="brands-output__item">
				<div class="brands-output__item-img">
					<img src="/assets/images/brands/mersedes.png" alt="">
				</div>
				<div class="brands-output__item-name">Mersedes-Benz</div>
			</div>
			<div class="brands-output__item">
				<div class="brands-output__item-img">
					<img src="/assets/images/brands/skoda.png" alt="">
				</div>
				<div class="brands-output__item-name">Skoda</div>
			</div>
			<div class="brands-output__item">
				<div class="brands-output__item-img">
					<img src="/assets/images/brands/audi.png" alt="">
				</div>
				<div class="brands-output__item-name">AUDI</div>
			</div>
			<div class="brands-output__item">
				<div class="brands-output__item-img">
					<img src="/assets/images/brands/bmw.png" alt="">
				</div>
				<div class="brands-output__item-name">BMW</div>
			</div>
			<div class="brands-output__item">
				<div class="brands-output__item-img">
					<img src="/assets/images/brands/mersedes.png" alt="">
				</div>
				<div class="brands-output__item-name">Mersedes-Benz</div>
			</div>
			<div class="brands-output__item">
				<div class="brands-output__item-img">
					<img src="/assets/images/brands/skoda.png" alt="">
				</div>
				<div class="brands-output__item-name">Skoda</div>
			</div>
			<div class="brands-output__item">
				<div class="brands-output__item-img">
					<img src="/assets/images/brands/audi.png" alt="">
				</div>
				<div class="brands-output__item-name">AUDI</div>
			</div>
			<div class="brands-output__item">
				<div class="brands-output__item-img">
					<img src="/assets/images/brands/bmw.png" alt="">
				</div>
				<div class="brands-output__item-name">BMW</div>
			</div>
			<div class="brands-output__item">
				<div class="brands-output__item-img">
					<img src="/assets/images/brands/mersedes.png" alt="">
				</div>
				<div class="brands-output__item-name">Mersedes-Benz</div>
			</div>
			<div class="brands-output__item">
				<div class="brands-output__item-img">
					<img src="/assets/images/brands/skoda.png" alt="">
				</div>
				<div class="brands-output__item-name">Skoda</div>
			</div>
		</div>
	</NuxtLayout>
</template>

<style lang="scss">
.search-vin-brands{
	&__title{
		max-inline-size: unset;
		margin-block-end: 46px;
	}
	&__form{
		display: flex;
		align-items: center;
		gap: 0 26px;
		block-size: 81px;
		margin-block-end: 24px;
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
	display: grid;
	grid-template-columns: repeat(6,1fr);
	gap: 20px;
	&__item{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 7px 0 8px;
		border: 1px solid var(--clr-gray);
		border-radius: 8px;
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