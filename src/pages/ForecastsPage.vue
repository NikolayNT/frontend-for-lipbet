<template>
  <q-page style="min-height: calc(100% - 300px);">
    <h2 class="forecasts__title">{{ $t('leftMenuForecast') }}</h2>
    <div class="forecasts__content">
      <template v-for="n in content" :key="n['id']">
        <div class="componentForm forecasts__card">
          <p class="forecasts__card-title">{{ n['titul'] }}</p>
          <span v-html="n['content']"></span>
        </div>
      </template>
    </div>
  </q-page>
</template>

<script lang="ts">

import { useI18n } from 'vue-i18n';
import { defineComponent, ref } from 'vue';

import apiTwo from 'src/api/Api';

export default defineComponent({
  name: 'ForecastsPage',
  created() {
    this.getArtile();
  },
  methods: {
    getArtile() {
      apiTwo.getInfoAboutArticle()
        .then((res) => {


          const convertStringToHTML = (htmlString: string) => {
            const parser = new DOMParser();
            const html = parser.parseFromString(htmlString, 'text/html');

            return html.body;
          }

          for (const prop in res.body) {
            console.log(`course.${prop} = ${res.body[prop]['content']}`);
            //res.body[prop]['content'] = convertStringToHTML(res.body[prop]['content'])
          }

          //console.log(res.body[13]['content']['body']);
          this.content = res.body;
          console.log(this.content);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },
  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    return {
      locale,
      content: ref([]),
    }
  }
});
</script>

<style lang="css">
.forecasts__title {
  margin: 0;
  padding: 0;
  text-align: center;
}

.forecasts__content {
  width: 90%;
  margin: 10px auto 0;
  padding-bottom: 20px;
}

.forecasts__card-title {
  margin: 0;
  padding: 0;
  font-size: 30px;
  text-align: center;
}

.forecasts__card {
  width: 100%;
  min-height: 100px;
  margin: 10px auto 0;
  padding: 10px 40px 20px;
}
</style>
