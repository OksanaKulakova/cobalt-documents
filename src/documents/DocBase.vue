<script setup>
import { ref } from 'vue';
import LayoutBase from '@/layouts/LayoutBase.vue';

const header = ref('Предложение о сотрудничестве');
</script>

<template>
  <LayoutBase>
    <template v-slot:document>
      <div class="document">
        <h1 class="header-1">{{ header }}</h1>
      </div>
    </template>
    <template v-slot:sidebar>
      <h1 class="header-2">Настройки</h1>
      <input v-model="header" />
    </template>
  </LayoutBase>
</template>

<style lang="scss" scoped>
  input {
    border: 1px solid var(--color-base);
    margin: 32px 0;
    width: 100%;
  }

  .document {
    width: 1190px;
    height: 1684px;
    padding: 64px 63px 32px;
    background-color: var(--white-base);
  }
</style>
