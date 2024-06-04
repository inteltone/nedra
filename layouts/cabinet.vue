<template>
	<TheHeader />
	<main class="main full container">
		<TheBreadcrum />
		<ThePageTitle class="cabinet-page-title" title="Личный кабинет" />
		<section class="cabinet">
			<TheCabinetMenu />
			<slot></slot>
			<TheClient />
		</section>	
	</main>
	<TheFooter />
	<ThePopupAuthorization />
	<ThePopupCity />
</template>