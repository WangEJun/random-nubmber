<template>
  <var-style-provider :style-vars="styleVars">
    <var-app-bar
      color="linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)"
      title-position="center"
      class="topBar"
    >
      就。随便打打呗
    </var-app-bar>
  </var-style-provider>
  <randomCard />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import randomCard from './randomCard.vue'

const styleVars = {
  '--app-bar-title-font-size': '24px',
}
</script>

<style scoped></style>
