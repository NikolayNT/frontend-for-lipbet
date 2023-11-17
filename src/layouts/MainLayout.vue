<template>
  <q-layout style="margin: 0 !important; padding: 0 !important; background-color: rgba(155, 232, 250, 0.285)">
    <header class="header">
      <h1 class="header__title">LipBet</h1>
      <div class="header__menu row">
        <q-btn class="menu__button-open q-mx-sm" label="Меню" @click="drawerLeft = !drawerLeft" dense
          icon="density_medium" />
        <q-btn class="q-mx-sm" label="Баланс: 0 рублей" />
        <q-btn-dropdown label="Русский">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Русский</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Английский</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown label="Василий" class="q-mx-sm">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Мои боты</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Пополнить</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Тариф</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </header>
    <q-drawer v-model="drawerLeft" side="left" overlay style="width: 250px !important;">
      <q-btn class="glossy" rounded color="indigo-7" label="Главная" />
      <q-btn class="glossy" rounded color="indigo-7" label="Live-Матчи" />
      <q-btn class="glossy" rounded color="indigo-7" label="Создать бот" />
      <q-btn class="glossy" rounded color="indigo-7" label="Прогнозы" />
      <q-btn class="glossy" rounded color="indigo-7" label="Рейтинг ботов" />
      <q-btn class="glossy" rounded color="indigo-7" label="Тестирование стратегии" />
      <q-btn class="glossy" rounded color="indigo-7" label="Наичинающим" />
      <q-btn class="glossy" rounded color="indigo-7" label="Вопросы и ответы" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    return {
      drawerLeft: ref(false),
      onItemClick() {
        console.log('Clicked on an Item')
      }
    }
  }
});
</script>

<style lang="scss">
:deep(aside) {
  /* переопределяем цвет элемента появляющегося автоматически */
  background-color: transparent;
  width: 250px;
  width: 250px !important;
}

.q-drawer {
  top: 300px;
  min-height: 200px;
  height: 370px;
  width: 250px !important;
  background-color: rgba(161, 173, 218, 0.653);
  border-radius: 0px 0px 15px 0px;
}

.q-drawer__content {
  min-height: 200px;
}

.q-drawer .q-btn {
  margin: 5px;
  width: 95%;
}

.header {
  display: flex;
  flex-direction: column;
  background-image: url('../assets/headerFon.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30%;
  height: 300px;
  justify-content: center;
  align-items: center;
}

.header__title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 450px;
  margin-top: calc((300px - 43px - 150px)/2);
  color: rgb(255, 253, 253);
  background: radial-gradient(rgb(8, 112, 181), rgba(8, 112, 181, 0.4));
  text-align: center;
  font-weight: 900;
  border-radius: 70px;
}

.header__menu {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  width: 100%;
  height: 43px;
  background-color: rgba(161, 173, 218, 0.923);
  margin-top: auto;
}

.menu__button-open {
  margin-right: auto;
}

.header__text {
  margin: 0;
  padding: 0;
  width: 10%;
}
</style>
