<script setup>
import { ref } from 'vue';
import LayoutBase from '@/layouts/LayoutBase.vue';

const header = ref('Заголовок');
</script>

<template>
  <LayoutBase>
    <template v-slot:document>
      <h1 class="header-1">{{ header }}</h1>
    </template>
    <template v-slot:sidebar>
      <h1 class="header-1">sidebar</h1>
      <input v-model="header" />
    </template>
  </LayoutBase>
</template>

<style lang="scss" scoped>
  input {
    border: 1px solid var(--color-base);
    margin: 32px 0;
  }
</style>
