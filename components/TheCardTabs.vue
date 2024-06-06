<script setup>
// табы в верхней половине страницы
const tabIndex = ref(0)
const tabs = ref(['Описание', 'о производителе'])
function tabClicked(index) { tabIndex.value = index }
// панели для табов
const panels = ref([
	[
		{name: 'Артикул', spec: 'С110'},
		{name: 'Наименование', spec: 'Насос водяной'},
		{name: 'Производитель', spec: 'DOLZ'},
		{name: 'Место применения', spec: 'Двигатель'},
	],
	[
		{name: 'Производитель', spec: 'DOLZ'},
		{name: 'Сайт', spec: 'http://www.idolz.com'},	
	]
])
const isPanel = ref(false)
</script>
<template>
	<div class="card__top-tabs">
		<div class="tabs">
			<button class="tabs__tab"
				v-for="tab,index in tabs"
				:class="{active: tabIndex === index}"
				@click="tabClicked(index)"
			>{{ tab }}</button>						
		</div>				
		<div class="panels">
			<div class="panels__panel"
				v-for="panel,index in panels"
				:class="{active: index === tabIndex}"
			>
				<div class="row"
					v-for="item,index in panel"
				>
					<span>{{ item.name }}</span>
					<span>{{ item.spec }}</span>
				</div>							
			</div>
		</div>					
	</div>
</template>