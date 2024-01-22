import { defineStore } from 'pinia';

export const useBotStore = defineStore('bot', {
  state: () => ({
    token: 'ffff',
    leagues:
      'Российская футбольная Премьер-лига;Российская Премьер-лига;Первый дивизион ФНЛ;Второй дивизион',
    main: {
      winOneTeem: true,
      winTwoTeem: false,
      draw: false,
      firstPeriod: false,
      twoPeriod: false,
      break: false,

      minuteFrom: '',
      minuteTo: '',

      matchScore: {
        s00: false,
        s01: false,
        s02: false,
        s03: false,
        s04: false,
        s05: false,

        s10: false,
        s11: false,
        s12: false,
        s13: false,
        s14: false,
        s15: false,

        s20: false,
        s21: false,
        s22: false,
        s23: false,
        s24: false,
        s25: false,

        s30: false,
        s31: false,
        s32: false,
        s33: false,
        s34: false,
        s35: false,

        s40: false,
        s41: false,
        s42: false,
        s43: false,
        s44: false,
        s45: false,

        s50: false,
        s51: false,
        s52: false,
        s53: false,
        s54: false,
        s55: false,
      },

      matchScoreOnBreak: {
        s00: false,
        s01: false,
        s02: false,
        s03: false,
        s04: false,
        s05: false,

        s10: false,
        s11: false,
        s12: false,
        s13: false,
        s14: false,
        s15: false,

        s20: false,
        s21: false,
        s22: false,
        s23: false,
        s24: false,
        s25: false,

        s30: false,
        s31: false,
        s32: false,
        s33: false,
        s34: false,
        s35: false,

        s40: false,
        s41: false,
        s42: false,
        s43: false,
        s44: false,
        s45: false,

        s50: false,
        s51: false,
        s52: false,
        s53: false,
        s54: false,
        s55: false,
      },
    },
    typeOfCommand: {
      favorite: {
        ratioFrom: '',
        ratioTo: '',
        home: false,
        onVisit: false,
        noMatter: true,
        win: false,
        lose: false,
        draw: false,
      },
      loser: {
        ratioFrom: '',
        ratioTo: '',
        home: false,
        onVisit: false,
        noMatter: true,
        win: false,
        lose: false,
        draw: false,
      },
    },
  }),
  /*,
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },*/
});
