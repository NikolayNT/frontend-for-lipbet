<template>
  <q-page style="min-height: calc(100% - 300px);">
    <h2 class="page__title">{{ $t('adminmenu') }}</h2>
    <TextEditorComponent></TextEditorComponent>
  </q-page>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent, } from 'vue';

import TextEditorComponent from 'src/components/textEditor/TextEditor.vue';

export default defineComponent({
  name: 'AdminPage',
  components: { TextEditorComponent },
  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    return {
      locale,
    }
  }
});
</script>

<style lang="css">
.page__title {
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>
