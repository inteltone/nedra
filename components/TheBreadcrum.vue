<template>
	<ul class="breadcrum">
			<li class="breadcrum__item">
				<NuxtLink to="/" class="breadcrum__link">Главная</NuxtLink>
			</li>
			<li class="breadcrum__item">
				<span class="breadcrum__idle">Оплата</span>
			</li>
		</ul>
</template>
<style lang="scss">
.breadcrum{
	--mie: 4px;
	display: flex;
	gap: 0 var(--mie);
	margin-block-end: 23px;
	color: #a9a9a9;
	&__item{
		display: flex;
		gap: 0 var(--mie);
		&:not(:last-child)::after{
			content: '/';
		}
	}
	&__link{
		color: inherit;
		transition: color var(--tr);
		&:hover{
			color: var(--clr-orange-100);
		}
	}
}
</style>