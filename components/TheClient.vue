<script setup>
const userMenuIndex = useUserMenuIndex()
const isManagerInfo = useManagerInfo()
function showManagerInfo() {
	isManagerInfo.value = true
	userMenuIndex.value = undefined
}
</script>
<template>
	<div class="cabinet__client client">
		<div class="client__block top">
			<div class="top-item">
				<p class="h3">Даниил</p>
				<a href="mailto:info@bearlogics.ru" class="email">info@bearlogics.ru</a>
			</div>
			<div class="top-item">
				<div class="top-item-unit">
					<p>Состояние счёта</p>
					<p class="h2">0.00 <span class="ruble">&#x20BD;</span></p>							
				</div>
				<div class="top-item-unit">
					<p>Клиентский номер</p>
					<p class="h2">36566</p>
				</div>
			</div>
			<div class="top-item">
				<div>Ваш менеджер</div>
				<button class="btn-manager-info h2"
					@click="showManagerInfo"
				
				>Алешкевич Михаил Юрьевич</button>
			</div>
		</div>
		<button class="client__btn btn"><i class="icon-add-card"></i>добавить дисконтную карту</button>
		<div class="client__block">
			<p class="h3 mbe-16">Контроль качества</p>
			<p class="mbe-47">Если у вас была проблема с заказом или другая иная проблема, вы можете обратиться в единую справочную</p>
			<a href="tel:88005500086" class="h2">8 (800) 550-00-86</a>
		</div>
	</div>
</template>