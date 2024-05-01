<template>
	<ul class="breadcrums">
		<li class="breadcrums__item">
			<NuxtLink to="/" class="breadcrums__link">Главная</NuxtLink>
		</li>
		<li class="breadcrums__item">
			<span class="breadcrums__idle">Оплата</span>
		</li>
	</ul>
</template>
<style lang="scss">
.breadcrums{
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