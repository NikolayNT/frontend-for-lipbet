<template>
  <q-page style="min-height: calc(100% - 300px);">
    <h2 class="admin__title">{{ $t('adminmenu') }}</h2>
    <div class="admin__settings-block">
      <div class="row" style="align-items: center">
        <p class="admin__toggle-text">Страница публикации:</p>
        <q-select v-model="model" :options="['Прогнозы']" />
      </div>
      <div class="row" style="align-items: center">
        <p class="admin__toggle-text">Язык публикации:</p>
        <q-select v-model="modelLang" :options="['Русский']" />
      </div>
      <div class="row" style="align-items: center">
        <p class="admin__toggle-text">Опубликовать статью:</p>
        <q-option-group v-model="group" :options="options" inline style="min-width: 20px !important;" />
      </div>
      <q-input class="admin__input" v-model="text" label="Тема" />
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-editor getContentEl v-model="textEditor" :dense="$q.screen.lt.md" :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]" :fonts="{
  arial: 'Arial',
  arial_black: 'Arial Black',
  comic_sans: 'Comic Sans MS',
  courier_new: 'Courier New',
  impact: 'Impact',
  lucida_grande: 'Lucida Grande',
  times_new_roman: 'Times New Roman',
  verdana: 'Verdana'
}" />
    </div>
    <div class="admin__settings-block row" style="justify-content: center">
      <q-btn label="Сохранить" rounded style="width: 50%;" @click="saveArtile"></q-btn>
    </div>

    <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
      <q-card class=" text-white" :style="['width: 300px; background-color:' + colorBack]">
        <q-card-section>
          <div class="text-h6">{{ persistentTitle }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ persistentText }}
        </q-card-section>

        <q-card-actions align="right" class="">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent, ref } from 'vue';

import apiTwo from 'src/api/Api';

export default defineComponent({
  name: 'AdminPage',
  components: {},
  methods: {
    saveArtile() {
      const content = {
        title: this.text,
        content: this.textEditor,
      }
      console.log(this.model);
      console.log(this.modelLang);
      console.log(this.text);
      console.log(content);
      if (this.model === null || this.modelLang === null || this.text === '' || this.textEditor === '') {
        this.colorBack = 'rgb(248, 99, 99)';
        this.persistentTitle = 'Ошибка';
        this.persistentText = 'Не все поля заполнены.';
        return this.persistent = true;
      }
      console.log('ddd');
      apiTwo.postInfoAboutArticle(content)
        .then((res) => {
          console.log(res);
          this.colorBack = 'rgb(56, 161, 52)';
          this.persistentTitle = 'Сохранено';
          this.persistentText = 'Информация записана на сервер.';
          this.persistent = true
        })
        .catch((err) => {
          console.log(err);
          this.colorBack = 'rgb(248, 99, 99)';
          this.persistentTitle = 'Ошибка';
          this.persistentText = 'Не удалось сохранить информацию.';
          this.persistent = true
        })
    }
  },
  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    return {
      locale,
      model: ref(null),
      modelLang: ref(null),
      group: ref('yes'),
      options: [
        {
          label: 'Да',
          value: 'yes'
        },
        {
          label: 'Нет',
          value: 'no'
        },
      ],
      text: ref(''),
      textEditor: ref('Добавить текст...'),
      persistent: ref(false),
      persistentTitle: ref(''),
      persistentText: ref(''),
      colorBack: ref(''),
    }
  }
});
</script>

<style lang="scss">
.q-field__native {
  min-width: 80px;
}

.admin__title {
  margin: 0;
  padding: 0;
  text-align: center;
}

.admin__settings-block {
  margin: auto;
  width: 400px;
}

.admin__input {
  width: 100%;
}

.admin__toggle-text {
  padding: 0;
  margin: 0 10px 0 0;
  align-items: center;
}
</style>
