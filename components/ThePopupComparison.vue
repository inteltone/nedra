<script setup>
import { VNativeDialog } from "vue-native-dialog"
let isPopupComparison = usePopupComparison()
// названия столбцов для таблицы
const tableHeadItems = ref(['Производитель', 'Артикул', 'Наличие, шт', 'Срок доставки, дней', 'Статистика', 'Цена, ₽'])
// сортировка столбцов
const iconSortIndex = ref(undefined)
const iconRotate = ref(undefined)
function iconSortClicked(index) {
	if (iconSortIndex.value === index) {
		if (iconRotate.value !== undefined) {
			iconRotate.value = undefined
		} else {
			iconRotate.value = index
		}
		console.log(iconRotate.value)
		return
	}
	iconSortIndex.value = index
	iconRotate.value = undefined
}
// данные для таблицы
const pickedItems = ref([
	['DOLZ', 'C110', '227', '7-7', ['КВП 2', '5'], '2720'],
	['DOLZ', 'C110', '115', '5-7', ['КВП 2', '3'], '3100'],
	['DOLZ', 'C110', '35', '2-4', ['КВП 2', '2'], '2340'],
])
onMounted(() => {
	let dialog = document.querySelector('dialog[data-comparison]')
	dialog.addEventListener("click", e => {
		const dialogDimensions = dialog.getBoundingClientRect()
		if (
			e.clientX < dialogDimensions.left ||
			e.clientX > dialogDimensions.right ||
			e.clientY < dialogDimensions.top ||
			e.clientY > dialogDimensions.bottom
		) {
			isPopupComparison.value = false
		}
	})
})
</script>
<template>
	<v-native-dialog class="popup" :open="isPopupComparison" data-comparison>
		<div class="popup__inner pop-compar">
			<div class="pop-compar__top">
				<div class="pop-compar__top-content">
					<i class="icon-compare-arrows"></i>
					Сравнение
					<span>[2]</span>
				</div>
				<button class="pop-compar__top-close" @click="isPopupComparison = false"><i class="icon-close"></i></button>
			</div>
			<div class="pop-compar__head">
				<span class="card__table-head-item"
						v-for="item,index in tableHeadItems"
						:key="item"
						:class="{active: iconSortIndex === index}"
					>
						{{item}}
						<i 
							class="icon-arrow-up" 
							@click="iconSortClicked(index)"
							:class="{active: iconSortIndex === index, rotate: iconRotate === index}"
						></i>
					</span>
			</div>
			<div class="pop-compar__rows">
				<div 
						class="pop-compar__row" 
							v-for="elem,index in pickedItems" 
							:key="elem"
						>
							<template v-for="item,index in elem" :key="item">
								<span v-if="index !== 4" class="pop-compar__row-item">
									{{item}}
								</span>
								<span v-else class="pop-compar__row-item-extra">
									<span>{{item[0]}}</span>
									<span>
										{{item[1]}}
										<i class="icon-star"></i>
									</span>		
								</span>
							</template>
							<button class="btn-basket"><i class="icon-mall"></i></button>
							<button class="btn-close"><i class="icon-close"></i></button>
						</div>

			</div>
		</div>
	</v-native-dialog>	
</template>