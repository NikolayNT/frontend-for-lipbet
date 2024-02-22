<template>
  <q-page style="min-height: calc(100% - 300px); position: relative;">
    <!-- Предыдущая логика с перетаскиванием
    <p class="page__text">Чтобы создать бот, перетащите нужные компоненты в область бота и заполните их.</p>
    <div class="row">
      <div class="areas">
        <h2 class="areas__title">Конструктор</h2>
        <div class="areas__content areas__content_border_solid column" :v-mutation="handler1" @dragover="onDragOver">
          <BlokMain id="box1" draggable="true" @dragstart="onDragStart"></BlokMain>
          <ComandType id="box2" draggable="true" @dragstart="onDragStart"></ComandType>
          <OutcomeGames id="box3" draggable="true" @dragstart="onDragStart"></OutcomeGames>
          <Goals id="box4" draggable="true" @dragstart="onDragStart"></Goals>
          <OddsOutcome id="box5" draggable="true" @dragstart="onDragStart" titleGeneral="Коэффицикнты на исход"
            titleOne="Прематч" titleTwo="Лайв"></OddsOutcome>
          <TotalPrematchAndLive id="box6" draggable="true" @dragstart="onDragStart" titleGeneral="Тотал прематч">
          </TotalPrematchAndLive>
          <TotalPrematchAndLive id="box7" draggable="true" @dragstart="onDragStart" titleGeneral="Тотал лайв">
          </TotalPrematchAndLive>
          <FormCommandsVue id="box8" draggable="true" @dragstart="onDragStart"></FormCommandsVue>
          <FaceToFaceGames id="box9" draggable="true" @dragstart="onDragStart"></FaceToFaceGames>
          <FaceToFaceGoals id="box10" draggable="true" @dragstart="onDragStart"></FaceToFaceGoals>
          <Penalty id="box11" draggable="true" @dragstart="onDragStart"></Penalty>
          <Statistics id="box12" draggable="true" @dragstart="onDragStart" title-general="Статистика"></Statistics>
        </div>
      </div>
      <div class="areas">
        <h2 class="areas__title">Бот</h2>
        <div id="bot" class="areas__content column" :v-mutation="handler2" @dragenter="onDragEnter"
          @dragleave="onDragLeave" @dragover="onDragOver" @drop="onDrop" style="min-height: 97.9%; padding-bottom: 0;">
          <LeaguesList></LeaguesList>
        </div>
      </div>
    </div>-->
    <p class="page__text">
      Необходимо заполнить блоки выше красной линии и нажать кнопку сохранить.<br />
      Блок "Лиги" не подлежит заполнению.
    </p>
    <div class="areas" :key="componentKey"> <!--key может не работать на проде-->
      <h2 class="areas__title">Бот</h2>
      <div id="bot" class="areas__content column" style="min-height: 97.9%; padding-bottom: 0;">
        <TokenBot></TokenBot>
        <LeaguesList></LeaguesList>
        <BlokMain id="box1"></BlokMain>
        <ComandType id="box2"></ComandType>
        <div style="width: 100%; height: 30px; background-color: red;"></div>
        <OutcomeGames id="box3"></OutcomeGames>
        <Goals id="box4"></Goals>
        <OddsOutcome id="box5" titleGeneral="Коэффицикнты на исход" titleOne="Прематч" titleTwo="Лайв"></OddsOutcome>
        <TotalPrematchAndLive id="box6" titleGeneral="Тотал прематч">
        </TotalPrematchAndLive>
        <TotalPrematchAndLive id="box7" titleGeneral="Тотал лайв">
        </TotalPrematchAndLive>
        <FormCommandsVue id="box8"></FormCommandsVue>
        <FaceToFaceGames id="box9"></FaceToFaceGames>
        <FaceToFaceGoals id="box10"></FaceToFaceGoals>
        <Penalty id="box11"></Penalty>
        <Statistics id="box12" title-general="Статистика"></Statistics>
      </div>
    </div>
    <div class="button__block col">
      <q-btn class="button__element glossy" color="indigo-7" v-on:click="saveBot()">Сохранить</q-btn>
      <q-btn class="button__element glossy" color="indigo-7" v-on:click="reset()">Сбросить заполнение</q-btn>
      <q-btn class="button__element glossy" color="grey-5">Сбросить блоки</q-btn>
    </div>
  </q-page>
</template>

<script lang="ts">
/*
          <div class="areas__add">
            <p class="areas__add-title">Перетащите элемент для добавления</p>
            <q-icon name="add" size="100px" color="white" style="margin: 0 calc(50% - 50px) 0;" />
          </div>
*/

import { useI18n } from 'vue-i18n';
import { defineComponent, ref } from 'vue';

import { useBotStore } from 'src/stores/bot';
const botStore = useBotStore();

import apiTwo from 'src/api/Api';

import TokenBot from 'src/components/blockForm/TokenBot.vue';
import LeaguesList from 'src/components/blockForm/LeaguesList.vue';
import BlokMain from 'src/components/blockForm/BlokMain.vue';
import ComandType from 'src/components/blockForm/ComandType.vue';
import OutcomeGames from 'src/components/blockForm/OutcomeGames.vue';
import Goals from 'src/components/blockForm/Goals.vue';
import OddsOutcome from 'src/components/blockForm/OddsOutcome.vue';
import TotalPrematchAndLive from 'src/components/blockForm/TotalPrematchAndLive.vue';
import FormCommandsVue from 'src/components/blockForm/FormCommands.vue';
import FaceToFaceGames from 'src/components/blockForm/FaceToFaceGames.vue';
import FaceToFaceGoals from 'src/components/blockForm/FaceToFaceGoals.vue';
import Penalty from 'src/components/blockForm/Penalty.vue';
import Statistics from 'src/components/blockForm/Statistics.vue';

export default defineComponent({
  name: 'CreatePage',
  components: {
    TokenBot,
    LeaguesList,
    BlokMain,
    ComandType,
    OutcomeGames,
    Goals,
    OddsOutcome,
    TotalPrematchAndLive,
    FormCommandsVue,
    FaceToFaceGames,
    FaceToFaceGoals,
    Penalty,
    Statistics
  },
  data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    reset() {
      botStore.$patch({
        token: '',
        leagues:
          'Российская футбольная Премьер-лига;Российская Премьер-лига;Первый дивизион ФНЛ;Второй дивизион',
        main: {
          winOneTeem: false,
          winTwoTeem: false,
          draw: false,
          firstPeriod: false,
          twoPeriod: false,
          break: false,

          minuteFrom: '',
          minuteTo: '',

          matchScore: [],

          matchScoreOnBreak: [],
        },
        typeOfCommand: {
          favorite: {
            ratioFrom: '',
            ratioTo: '',
            place: 'home', //[home, visit, matter]
            win: false,
            lose: false,
            draw: false,
          },
          loser: {
            ratioFrom: '',
            ratioTo: '',
            place: 'home', //[home, visit, matter]
            win: false,
            lose: false,
            draw: false,
          },
        },
      });
      this.componentKey += 1;
    },

    saveBot() {
      console.log(botStore.$state)
      apiTwo.postBot(botStore.$state)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },
  setup() {
    const { locale } = useI18n({ useScope: 'global' });
    const status1 = ref([]);
    const status2 = ref([]);
    return {
      locale,
      status1,
      status2,

      /*handler1(mutationRecords: { [x: string]: any; }) {
        status1.value = []
        for (const index in mutationRecords) {
          const record = mutationRecords[index]
          const info = `type: ${record.type}, nodes added: ${record.addedNodes.length > 0 ? 'true' : 'false'}, nodes removed: ${record.removedNodes.length > 0 ? 'true' : 'false'}, oldValue: ${record.oldValue}`
          status1.value.push(info)
        }
      },

      handler2(mutationRecords: { [x: string]: any; }) {
        status2.value = []
        for (const index in mutationRecords) {
          //console.log(mutationRecords)
          //console.log(status2)
          const record = mutationRecords[index]
          const info = `type: ${record.type}, nodes added: ${record.addedNodes.length > 0 ? 'true' : 'false'}, nodes removed: ${record.removedNodes.length > 0 ? 'true' : 'false'}, oldValue: ${record.oldValue}`
          //console.log(record)
          status2.value.push(info)
          //console.log(status2)
        }
      },*/

      // store the id of the draggable element
      /*onDragStart(e: { dataTransfer: { setData: (arg0: string, arg1: any) => void; dropEffect: string; }; target: { id: any; }; }) {
        e.dataTransfer.setData('text', e.target.id)
        e.dataTransfer.dropEffect = 'move'
      },

      onDragEnter(e: { target: { draggable: boolean; classList: { add: (arg0: string) => void; }; }; }) {
        // don't drop on other draggables
        if (e.target.draggable !== true) {
          e.target.classList.add('drag-enter')
        }
      },

      onDragLeave(e: { target: { classList: { remove: (arg0: string) => void; }; }; }) {
        e.target.classList.remove('drag-enter')
      },

      onDragOver(e: { preventDefault: () => void; }) {
        e.preventDefault()
      },*/

      /*onDrop(e: { preventDefault: () => void; target: ParentNode | null; dataTransfer: { getData: (arg0: string) => any; }; }) {
        console.log(e)
        e.preventDefault()

        // don't drop on other draggables
        if (e.target.draggable === true) {
          return
        }

        const draggedId = e.dataTransfer.getData('text')
        const draggedEl = document.getElementById(draggedId)
        console.log('')
        console.log(draggedId)

        console.log(draggedEl.draggable)
        console.log('')
        // check if original parent node
        if (draggedEl.parentNode === e.target) {
          e.target.classList.remove('drag-enter')
          return
        }

        const botContainer = document.querySelector('#bot');
        console.log(botContainer)
        // make the exchange
        draggedEl.parentNode.removeChild(draggedEl)
        console.log(e.target)
        var keys = Object.keys(draggedEl);
        console.log(keys)
        //draggedE.draggable = false
        //console.log(draggedE.draggable)
        draggedEl.draggable = false
        botContainer.appendChild(draggedEl)
        e.target.classList.remove('drag-enter')
      }*/
    }
  }
});
</script>

<style lang="scss">
.page__text {
  margin: 30px auto 30px 50px;
  padding: 0;
  font-size: 30px;
  text-align: center;
}

.areas {
  /*margin: 0px 30px 50px 30px;*/
  margin: 0px auto 50px auto;
  /*width: 45%;*/
  width: 900px;
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
  position: relative;
  gap: 10px;
  width: 100%;
  padding: 10px 10px 190px 10px;
  border: 2px dashed black;
  border-radius: 30px;
}

.areas__content_border_solid {
  border: 2px solid black;
  padding: 10px 10px 10px 10px;
}

.areas__add {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: calc(100% - 20px);
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
  bottom: 3%;
  right: 30px;
  width: 210px;
}

.button__element {
  margin-bottom: 20px;
  width: 100%;
  background-color: rgb(255, 255, 255);
}

.button__element:last-of-type {
  margin-bottom: 0;
}
</style>
