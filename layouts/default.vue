<template>
	<TheHeader />
	<main class="main container">
		<TheBreadcrum />
		<ThePageTitle />		
		<slot></slot>
	</main>
	<TheFooter />
</template>
<style lang="scss">
.main{
	margin-block-start: calc(-1 * var(--header-r));
	padding-block: calc(var(--header__btm-h) / 2 + var(--header-r) + 48px) 100px;
}
</style>