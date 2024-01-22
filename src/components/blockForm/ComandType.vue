<template>
  <div class="componentForm row">
    <div class="q-pa-sm" style="width: 50%; border-right: 2px solid black;">
      <p class="componentForm__text">{{ titleOne }}</p>
      <TwoInputText title="Фаворит коэффициент " :func="favoriteScore"></TwoInputText>
      <div class="row">
        <div style="width: 50%;">
          <RadioBatton :func="favoriteHome"></RadioBatton>
        </div>
        <div style="width: 50%;">
          <checkbox-component title="Проигрывает" :bool="typeOfCommand.favorite.lose" :func="togggle"
            id='lose'></checkbox-component>
          <checkbox-component title="Выигрывает" :bool="typeOfCommand.favorite.win" :func="togggle"
            id='win'></checkbox-component>
          <checkbox-component title="Ничья" :bool="typeOfCommand.favorite.draw" :func="togggle"
            id='draw'></checkbox-component>
        </div>
      </div>
    </div>
    <div class="q-pa-sm" style="width: calc(50% - 2px)">
      <p class="componentForm__text">{{ titleTwo }}</p>
      <TwoInputText title="Аутсайдер коэффициент " :func="looserScore"></TwoInputText>
      <div class="row">
        <div style="width: 50%;">
          <RadioBatton :func="loserHome"></RadioBatton>
        </div>
        <div style="width: 50%;">
          <checkbox-component title="Проигрывает" :bool="typeOfCommand.loser.lose" :func="togggleTwo"
            id='lose'></checkbox-component>
          <checkbox-component title="Выигрывает" :bool="typeOfCommand.loser.win" :func="togggleTwo"
            id='win'></checkbox-component>
          <checkbox-component title="Ничья" :bool="typeOfCommand.loser.draw" :func="togggleTwo"
            id='draw'></checkbox-component>
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

import CheckboxComponent from '../elements/Checkbox.vue';
import TwoInputText from '../elements/TwoInputText.vue';
import RadioBatton from '../elements/RadioBatton.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'ComandType',
  components: { CheckboxComponent, TwoInputText, RadioBatton },
  methods: {
    togggle(e: boolean, idString: any) {
      botStore.typeOfCommand.favorite[idString] = e; //херня
      console.log(botStore.typeOfCommand.favorite[idString]);
    },

    togggleTwo(e: boolean, idString: any) {
      botStore.typeOfCommand.loser[idString] = e; //херня
      console.log(botStore.typeOfCommand.loser[idString]);
    },

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
      if (strRes === 'one') {
        botStore.typeOfCommand.favorite.home = true;
        botStore.typeOfCommand.favorite.onVisit = false;
        botStore.typeOfCommand.favorite.noMatter = false;
      }
      else if (strRes === 'two') {
        botStore.typeOfCommand.favorite.home = false;
        botStore.typeOfCommand.favorite.onVisit = true;
        botStore.typeOfCommand.favorite.noMatter = false;
      }
      else {
        botStore.typeOfCommand.favorite.home = false;
        botStore.typeOfCommand.favorite.onVisit = false;
        botStore.typeOfCommand.favorite.noMatter = true;
      }
      console.log(strRes);
    },

    loserHome(strRes: string) {
      if (strRes === 'one') {
        botStore.typeOfCommand.loser.home = true;
        botStore.typeOfCommand.loser.onVisit = false;
        botStore.typeOfCommand.loser.noMatter = false;
      }
      else if (strRes === 'two') {
        botStore.typeOfCommand.loser.home = false;
        botStore.typeOfCommand.loser.onVisit = true;
        botStore.typeOfCommand.loser.noMatter = false;
      }
      else {
        botStore.typeOfCommand.loser.home = false;
        botStore.typeOfCommand.loser.onVisit = false;
        botStore.typeOfCommand.loser.noMatter = true;
      }
      console.log(strRes);
    }
  },
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
  setup() {
    return {
      typeOfCommand,
    }
  }
});
</script>
