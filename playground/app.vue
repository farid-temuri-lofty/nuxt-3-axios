<template>
  <div>
    Nuxt module playground!
    {{ testData }}
    <button>
      fetch
    </button>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app';
import { ref } from 'vue';

const { $axios } = useNuxtApp()

const testData = ref('')

testData.value = (await $axios.get('/people/1')).data

</script>
