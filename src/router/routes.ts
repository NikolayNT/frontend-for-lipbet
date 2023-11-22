import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MainPage.vue') },
      { path: 'matches', component: () => import('pages/MatchesPage.vue') },
      { path: 'create', component: () => import('pages/CreatePage.vue') },
      { path: 'forecasts', component: () => import('pages/ForecastsPage.vue') },
      { path: 'rating', component: () => import('pages/RatingPage.vue') },
      {
        path: 'testingstrategy',
        component: () => import('pages/TestingStrategyPage.vue'),
      },
      { path: 'beginners', component: () => import('pages/BeginnersPage.vue') },
      {
        path: 'questionsandanswers',
        component: () => import('pages/QuestionsAndAnswersPage.vue'),
      },
    ],
  },

  // личные страницы

  {
    path: '/mybots',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/personalPages/MyBotsPage.vue'),
      },
    ],
  },

  {
    path: '/replenish',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/personalPages/ReplenishPage.vue'),
      },
    ],
  },

  {
    path: '/rate',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/personalPages/RatePage.vue') },
    ],
  },

  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/personalPages/Admin.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ErrorNotFound.vue'),
      },
    ],
  },
];

export default routes;
