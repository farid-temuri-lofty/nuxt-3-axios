<template>
  <div>{{ lukeSkywalker }}</div>
</template>
<script lang="ts" setup>
import { useNuxtApp } from '#app';
const { $axios } = useNuxtApp()

const lukeSkywalker = (await $axios.get('/people/1')).data
</script>