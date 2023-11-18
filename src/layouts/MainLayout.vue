<template>
  <q-layout style="margin: 0 !important; padding: 0 !important; background-color: rgba(155, 232, 250, 0.285)">
    <header class="header">
      <q-btn to="/" class="header__title">LipBet</q-btn>
      <div class="header__menu row">
        <q-btn class="menu__button-open q-mx-sm" :label="$t('menuHeader')" @click="drawerLeft = !drawerLeft"
          icon="density_medium" />
        <q-btn class="q-mx-sm" :label="$t('balance') + ': 0 ' + $t('currency')" />
        <q-btn-dropdown :label="$t('language')">
          <q-list style="background-color: rgba(161, 173, 218, 0.923); width: 200px;">
            <q-btn class="menu__button-proffile" @click="onRusLocaleClick">Русский</q-btn>
            <q-btn class="menu__button-proffile" @click="onEngLocaleClick">Английский</q-btn>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown label="Василий" class="q-mx-sm">
          <q-list style="width: 200px;">
            <q-btn to="/mybots" class="menu__button-proffile">{{ $t('profilemenubots') }}</q-btn>
            <q-btn to="/replenish" class="menu__button-proffile">{{ $t('profilereplenish') }}</q-btn>
            <q-btn to="/rate" class="menu__button-proffile">{{ $t('profilerate') }}</q-btn>
          </q-list>
        </q-btn-dropdown>
      </div>
    </header>
    <q-drawer v-model="drawerLeft" side="left" overlay style="width: 250px !important;">
      <q-btn to="/" class="glossy" rounded color="indigo-7" label="Главная" @click="onItemClick"
        :class="[path === '/' ? 'menu__button-active' : '']" />
      <q-btn to="/matches" class="glossy" rounded color="indigo-7" label="Live-Матчи" @click="onItemClick"
        :class="[path === '/matches' ? 'menu__button-active ' : '']" />
      <q-btn to="/create" :class="[path === '/create' ? 'menu__button-active ' : '']" class="glossy" rounded
        color="indigo-7" label="Создать бот" @click="onItemClick" />
      <q-btn to="/forecasts" :class="[path === '/forecasts' ? 'menu__button-active ' : '']" class="glossy" rounded
        color="indigo-7" label="Прогнозы" @click="onItemClick" />
      <q-btn to="/rating" :class="[path === '/rating' ? 'menu__button-active ' : '']" class="glossy" rounded
        color="indigo-7" label="Рейтинг ботов" @click="onItemClick" />
      <q-btn to="/testingstrategy" :class="[path === '/testingstrategy' ? 'menu__button-active ' : '']" class="glossy"
        rounded color="indigo-7" label="Тестирование стратегии" @click="onItemClick" />
      <q-btn to="/beginners" :class="[path === '/beginners' ? 'menu__button-active ' : '']" class="glossy" rounded
        color="indigo-7" label="Начинающим" @click="onItemClick" />
      <q-btn to="/questionsandanswers" :class="[path === '/questionsandanswers' ? 'menu__button-active ' : '']"
        class="glossy" rounded color="indigo-7" label="Вопросы и ответы" @click="onItemClick" />

      <div class="q-mini-drawer-hide absolute" style="top: 160px; right: -34px">
        <q-btn dense round unelevated color="indigo-7" icon="chevron_left" @click="drawerLeft = !drawerLeft" />
      </div>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { useI18n } from 'vue-i18n'

import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'MainLayout',

  setup() {

    const { locale } = useI18n({ useScope: 'global' })

    const route = useRoute();
    const path = computed(() => route.path);

    return {
      drawerLeft: ref(false),
      path,
      onItemClick(e: unknown) {
        console.log(locale),
          console.log(e)
      },
      onRusLocaleClick() {
        locale.value = 'ru-RU';
      },
      onEngLocaleClick() {
        locale.value = 'en-US';
      },
      locale,
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
  /*background-color: rgba(161, 173, 218, 0.653);*/
  background-color: rgba(161, 173, 218, 0.923);
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
  font-size: 60px;
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

.menu__button-active {
  background-color: rgb(240, 55, 45) !important;
}

.menu__button-proffile {
  width: 100%;
  height: 100%;
  background-color: rgba(161, 173, 218, 0.923);
}


.header__text {
  margin: 0;
  padding: 0;
  width: 10%;
}
</style>
