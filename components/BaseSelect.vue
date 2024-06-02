<script setup>
const isDrop = ref(false)
const props = defineProps({
	options: Array
})
const ind = ref(0)
const selected = ref(props.options[ind.value])
function optionClicked (index){
	ind.value = index
	selected.value = props.options[index]
	isDrop.value = false
}
</script>
<template>
	<div class="select" :class="{active: false}">
		<div class="option active" @click="isDrop = !isDrop">
			<span>{{ selected }}</span>
			<i class="icon-arrow-down" :class="{rotate: isDrop}"></i>
		</div>
		<div class="options" :class="{show: isDrop}">
			<template
				v-for="option,index in options" 
				:key="option"
			>
				<div 
					v-if="index !== ind"
					class="option"					
					@click="optionClicked(index)"					
				>
					{{ option }}
				</div>
			</template>
			
		</div>
	</div>
</template>