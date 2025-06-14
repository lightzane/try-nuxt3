<!-- 
  This file contains a Site-Wide UI elements
-->

<template>
  <NuxtLayout>
    <!-- 
      NuxtPage: 
      - Placeholder for the current page 
      - Suitable for Single-Layout sites else use NuxtLayout which allows different layout per page
      - This will be passed to the <slot /> in @/layouts/default.vue
    -->
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use '@/assets/styles/global.scss';
</style>
