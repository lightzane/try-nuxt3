<script setup lang="ts">
const categoryState = useCategoryState();
// This `categoryState` may still be empty in SERVER but not in CLIENT
// Which results into SERVER <--> CLIENT hydration mismatching
// Since the server will start at empty state
// Then the page (i.e. [post].vue or [category].vue) will set the updated states
// Then the client will now contain values in the state
// Therefore, SERVER <--> CLIENT states are mismatched
// To resolve this, we will use the <ClientOnly> excluding it from the SSR
// as a result, it will not be part of the "hydration" process
console.log('breadcrumb', categoryState.value);
</script>

<template>
  <div class="layout">
    <nav class="breadcrumb">
      <NuxtLink class="link" to="/"> All </NuxtLink> ►
      <NuxtLink class="link" to="/categories"> Categories </NuxtLink> ►
      <ClientOnly>
        <NuxtLink class="link" :to="`/categories/${categoryState.slug}`">
          Category: {{ categoryState.name }}
        </NuxtLink>
      </ClientOnly>
    </nav>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/colors.scss';

.layout {
  width: 620px;
  margin: 0 auto 50px;
}

.breadcrumb {
  margin-top: 10px;
  margin-bottom: 30px;
  position: relative;
  font-size: 14pt;
  color: colors.$green-dark;
}

.breadcrumb .link {
  height: 20px;
  margin-right: 5px;
  display: inline-block;
  color: colors.$green-medium;
}

.breadcrumb .link:hover {
  color: colors.$green-light;
  cursor: pointer;
}
</style>
