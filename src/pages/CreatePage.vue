<template>
  <q-page style="min-height: calc(100% - 300px); position: relative;">
    <p class="page__text">Чтобы создать бот, перетащите нужные компоненты в область бота и заполните их.</p>
    <div class="row">
      <div class="areas">
        <h2 class="areas__title">Конструктор</h2>
        <div class="areas__content">
          <BlokMain></BlokMain>
          <ComandType></ComandType>
        </div>
      </div>
      <div class="areas">
        <h2 class="areas__title">Бот</h2>
        <div class="areas__content">
          <LeaguesList></LeaguesList>
          <div class="areas__add">
            <p class="areas__add-title">Перетащите элемент для добавления</p>
            <q-icon name="add" size="100px" color="white" style="margin: 0 calc(50% - 50px) 0;" />
          </div>
        </div>
      </div>
    </div>
    <div class="button__block col">
      <q-btn class="button__element glossy" color="indigo-7">Сохранить</q-btn>
      <q-btn class="button__element glossy" color="indigo-7">Сбросить</q-btn>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent, } from 'vue';

import LeaguesList from 'src/components/blockForm/LeaguesList.vue';
import BlokMain from 'src/components/blockForm/BlokMain.vue';
import ComandType from 'src/components/blockForm/ComandType.vue';

export default defineComponent({
  name: 'CreatePage',
  components: { LeaguesList, BlokMain, ComandType },
  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    return {
      locale,
    }
  }
});
</script>

<style lang="scss">
.page__text {
  margin: 30px auto 30px 50px;
  padding: 0;
  font-size: 30px;
}

.areas {
  margin: 0px 50px 50px 50px;
  width: 700px;
  height: 1000px;
}

.areas__title {
  margin: 0 auto 10px;
  padding: 0;
  min-width: 100px;
  max-width: 200px;
  text-align: center;
  font-size: 30px;
  border-radius: 30px;
  background-color: $SliTraLilac;
}

.areas__content {
  height: 100%;
  width: 100%;
  padding: 10px;
  border: 2px dashed black;
  border-radius: 30px;
}

.areas__add {
  margin-top: 10px;
  width: 100%;
  height: 170px;
  background-color: $SliTraLilac;
  border: 2px dashed black;
  border-radius: 30px;
}

.areas__add-title {
  margin: 10px;
  padding: 0;
  font-size: 25px;
  text-align: center;
}

.button__block {
  position: fixed;
  top: 50%;
  right: 50px;
  width: 200px;
}

.button__element {
  margin-bottom: 10px;
  width: 100%;
  background-color: rgb(255, 255, 255);
}

.button__element:last-of-type {
  margin-bottom: 0;
}
</style>
