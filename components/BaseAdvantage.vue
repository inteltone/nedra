<script setup>
defineProps({
	icon: String,
	title: String	
})
</script>
<template>
	<li class="advantage">
		<i :class="`icon-${icon}`"></i>
		<div class="advantage__text">
			<p class="advantage__title h2">{{ title }}</p>
			<slot></slot>
		</div>
	</li>
</template>
<style lang="scss">
.advantage{
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 24px 0;
	padding: 40px 68px;
	&::before,&::after{
		content: '';
		position: absolute;				
		inset-block-start: 0;
		inline-size: 40px;
		block-size: 40px;	
		border-block-start: 1px solid var(--clr-black);			
	}
	&::before{
		inset-inline-start: 0;
		border-inline-start: 1px solid var(--clr-black);				
	}
	&::after{
		inset-inline-end: 0;
		border-inline-end: 1px solid var(--clr-black);				
	}		
	&__title{
		margin-block-end: 8px;
		color: var(--clr-orange-100);
	}
	&__text{
		font-size: 24px;
		a{
			color: var(--clr-text);
			transition: color var(--tr);
			&:hover{
				color: var(--clr-orange-100);
			}
		}
		&::before,&::after{
		content: '';
		position: absolute;				
		inset-block-end: 0;
		inline-size: 40px;
		block-size: 40px;	
		border-block-end: 1px solid var(--clr-black);			
	}
		&::before{
			inset-inline-start: 0;
			border-inline-start: 1px solid var(--clr-black);				
		}
		&::after{
			inset-inline-end: 0;
			border-inline-end: 1px solid var(--clr-black);				
		}				
	}
}
</style>