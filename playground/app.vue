<template>
  <div>
    Nuxt module playground!
    {{ testData }}
    <button @click="click">
      fetch
    </button>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app';
import { ref } from 'vue';

const { $axios } = useNuxtApp()

const testData = ref('')

const click = async() => {
  testData.value = await $axios.get('/people/1')
}

</script>
