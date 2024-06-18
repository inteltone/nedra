<script setup>
const messages = ref([
	{id: 123456, name: '-', status: 'Закрыт', date: '12.03.2024'},
	{id: 234167, name: '-', status: 'Открыт', date: '15.04.2024'},
	{id: 765823, name: '-', status: 'Закрыт', date: '5.06.2024'},
])
const isPanel = ref(false)
function togglePanels() {
	isPanel.value = !isPanel.value
}
function inputFileClicked() {
	document.querySelector('.messages__file').click()
}
</script>
<template>
	<div class="messages-table" v-if="!isPanel">
		<div class="messages-table__head">
			<span>ID</span>
			<span>Название</span>
			<span>Статус</span>
			<span>Дата ответа</span>
		</div>
		<div class="messages-table__row" v-for="item,index in messages" :key="index">
			<span>{{item.id}}</span>			
			<span>{{item.name}}</span>			
			<span>{{item.status}}</span>			
			<span>{{item.date}}</span>			
			<button class="btn-delete"><i class="icon-close"></i></button>
		</div>
		<BaseButton class="messages-table__btn" text="Новый диалог" @click="togglePanels" />
	</div>
	<div class="messages" v-else>
		<div class="messages__top">
			<NuxtLink to="/" class="messages__link">К списку заявок</NuxtLink>
			<BaseButton text="Закрыть диалог" @click="togglePanels" />
		</div>
		<p class="messages__title h3">Заявка №123123</p>
		<div class="messages__content">
			<div class="messages__content-item">
				<div class="messages__content-item-msg">
					<p>Привет, граждане</p>
					<p>Наблюдать, как предприниматели в сети интернет, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Безусловно, внедрение современных методик говорит о возможностях экономической целесообразности принимаемых решений. Следует отметить, что базовый вектор развития требует анализа кластеризации усилий.</p>					 
				</div>
				<div class="messages__content-item-extra">
					<time datetime="2023-09-14 12:29">14 сентября 2023, 12:29</time>
					<a href="mail:unclemarra@gmail.com">unclemarra@gmail.com</a>
				</div>
			</div>
			<div class="messages__content-item response">
				<div class="messages__content-item-msg">
					<p>Привет, граждане</p>
					<p>Наблюдать, как предприниматели в сети интернет, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>					 
				</div>
				<div class="messages__content-item-extra">
					<time datetime="2023-09-14 12:29">14 сентября 2023, 12:29</time>
					<a href="mail:unclemarra@gmail.com">unclemarra@gmail.com</a>
				</div>
			</div>
		</div>
		<textarea class="messages__textarea" placeholder="Ваше сообщение"></textarea>
		<div class="messages__btns">
			<div class="messages__file-wrap">
				<input type="file" class="messages__file">
				<BaseButton 
					class="messages__file-wrap-btn" 
					text="Прикрепить файл"
					@click="inputFileClicked"					
				><i class="icon-clip"></i></BaseButton>
			</div>
			<BaseButton text="Отправить" />
		</div>
	</div>
</template> 