<script setup>
// виджет - СОРТИРОВЩИК
const sortIndex = ref(undefined)
const sortOptions = ref(['По цене','По алфавиту'])
const ANALOGS = [
	{name: 'FRAM', price: 449},
	{name: 'Dynamatrix', price: 768},
	{name: 'Klaxcar', price: 542},
	{name: 'SKF', price: 381},
]
const analogs = ref(ANALOGS)
sortClick(0)
function sortClick(index) {
	sortIndex.value = index
	// сортировка по цене
	if (index === 0) {
		analogs.value.sort((a,b) => a.price - b.price)
		return
	}
	// сортировка по алфавиту
	analogs.value.sort((a, b) => {
		if (a.name < b.name) {return -1}
		if (a.name > b.name) {return 1}
		return 0
	})
}
</script>
<template>
	<div class="sorter">
		<div class="sorter__btns">
			<button 
				v-for="btn,index in sortOptions" 
				:key="btn"
				@click="sortClick(index)"
				:class="{active: sortIndex === index}"
			>
				{{btn}}
			</button>
		</div>
		<div class="sorter__list">
			<div 
				class="sorter__list-item"
				v-for="item,index in analogs"
				:key="item.name"
			>
				<label>
					<div class="checkbox">
						<input type="checkbox">
					</div>
					{{item.name}}
				</label>	
				<span>{{item.price}} ₽</span>						
			</div>
		</div>
	</div>
</template>