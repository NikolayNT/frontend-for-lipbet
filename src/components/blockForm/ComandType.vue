<template>
  <div class="componentForm row">
    <div class="q-pa-sm" style="width: 50%; border-right: 2px solid black;">
      <p class="componentForm__text">{{ titleOne }}</p>
      <TwoInputText title="Фаворит коэффициент " :func="favoriteScore"></TwoInputText>
      <div class="row">
        <div style="width: 50%;">
          <RadioButtonBig :func="favoriteHome" :state="typeOfCommand" type="favorite"
            :list="[{ value: 'home', label: 'Дома' }, { value: 'visit', label: 'В гостях' }, { value: 'matte', label: 'Не важно' }]">
          </RadioButtonBig>
        </div>
        <div style="width: 50%;">
          <RadioButton :func="favoriteStatus"
            :list="[{ value: 'one', label: 'Проигрывает' }, { value: 'two', label: 'Выигрывает' }, { value: 'three', label: 'Ничья' }]">
          </RadioButton>
        </div>
      </div>
    </div>
    <div class="q-pa-sm" style="width: calc(50% - 2px)">
      <p class="componentForm__text">{{ titleTwo }}</p>
      <TwoInputText title="Аутсайдер коэффициент " :func="looserScore"></TwoInputText>
      <div class="row">
        <div style="width: 50%;">
          <RadioButtonBig :func="loserHome" :state="typeOfCommand" type="loser"
            :list="[{ value: 'home', label: 'Дома' }, { value: 'visit', label: 'В гостях' }, { value: 'matte', label: 'Не важно' }]">
          </RadioButtonBig>
        </div>
        <div style="width: 50%;">
          <RadioButton :func="loserStatus"
            :list="[{ value: 'one', label: 'Проигрывает' }, { value: 'two', label: 'Выигрывает' }, { value: 'three', label: 'Ничья' }]">
          </RadioButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { useBotStore } from 'src/stores/bot';

import { storeToRefs } from 'pinia';

const botStore = useBotStore();
const { typeOfCommand } = storeToRefs(botStore);


import TwoInputText from '../elements/TwoInputText.vue';
import RadioButton from '../elements/RadioButton.vue';
import RadioButtonBig from '../elements/RadioButtonBig.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'ComandType',
  components: { TwoInputText, RadioButton, RadioButtonBig },
  props: {
    titleOne: {
      type: String,
      default: 'Фаворит'
    },
    titleTwo: {
      type: String,
      default: 'Аутсайдер'
    },
  },
  methods: {
    /*togggle(e: boolean, idString: any) {
      botStore.typeOfCommand.favorite[idString] = e; //херня
      console.log(botStore.typeOfCommand.favorite[idString]);
    },

    togggleTwo(e: boolean, idString: any) {
      botStore.typeOfCommand.loser[idString] = e; //херня
      console.log(botStore.typeOfCommand.loser[idString]);
    },
*/
    favoriteScore(start: string, end: string) {
      botStore.typeOfCommand.favorite.ratioFrom = start; //херня
      botStore.typeOfCommand.favorite.ratioTo = end;
      console.log(botStore.typeOfCommand.favorite.ratioTo);

    },

    looserScore(start: string, end: string) {
      botStore.typeOfCommand.loser.ratioFrom = start; //херня
      botStore.typeOfCommand.loser.ratioTo = end;
      console.log(botStore.typeOfCommand.loser.ratioTo);

    },

    favoriteHome(strRes: string) {
      botStore.typeOfCommand.favorite.place = strRes;
      if (botStore.typeOfCommand.favorite.place === botStore.typeOfCommand.loser.place) {
        console.log('ваворит равен лусер')
        if (botStore.typeOfCommand.favorite.place === 'home') {
          botStore.typeOfCommand.loser.place = 'visit';
        }
        else if (botStore.typeOfCommand.favorite.place === 'visit') {
          botStore.typeOfCommand.loser.place = 'home';
        }
      }
      console.log(botStore.typeOfCommand);

    },

    loserHome(strRes: string) {
      botStore.typeOfCommand.loser.place = strRes;
      if (botStore.typeOfCommand.favorite.place === botStore.typeOfCommand.loser.place) {
        if (botStore.typeOfCommand.loser.place === 'home') {
          botStore.typeOfCommand.favorite.place = 'visit';
        }
        else if (botStore.typeOfCommand.loser.place === 'visit') {
          botStore.typeOfCommand.favorite.place = 'home';
        }
      }
      console.log(botStore.typeOfCommand);

    },

    favoriteStatus(strRes: string) {
      if (strRes === 'one') { // [win , lose, draw]
        botStore.typeOfCommand.favorite.statusPlay = 'lose'
      }
      else if (strRes === 'two') {
        botStore.typeOfCommand.favorite.statusPlay = 'win'
      }
      else {
        botStore.typeOfCommand.favorite.statusPlay = 'draw'
      }
      console.log(botStore.typeOfCommand);
    },

    loserStatus(strRes: string) {
      if (strRes === 'one') { // [win , lose, draw]
        botStore.typeOfCommand.loser.statusPlay = 'lose'
      }
      else if (strRes === 'two') {
        botStore.typeOfCommand.loser.statusPlay = 'win'
      }
      else {
        botStore.typeOfCommand.loser.statusPlay = 'draw'
      }
      console.log(strRes);
    }
  },
  setup() {
    return {
      typeOfCommand,
    }
  }
});
</script>
