<template>
  <div>
    Nuxt module playground!
    <button>
      fetch
    </button>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app';

const {$axios} = useNuxtApp()
</script>
