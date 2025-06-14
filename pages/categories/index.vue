<script setup lang="ts">
import type { Category } from '@/data/categories';
import { getCategoriesUrl } from '@/data/categories';

const { data: categories } = useFetch<Category[]>(getCategoriesUrl());
</script>

<template>
  <main>
    <h1>Choose a Category</h1>
    <NuxtLink
      v-for="category of categories"
      :key="category.id"
      :to="`/categories/${category.slug}`"
      class="categoryItem"
    >
      <span class="text">{{ category.name }}</span> Examples ({{
        category.count
      }})
    </NuxtLink>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/colors.scss';

.categoryItem {
  color: colors.$green-medium;
  text-align: center;
  padding: 30px 0;
  border: 1px solid colors.$green-dark;
  border-bottom: none;
  margin-bottom: 10px;
  display: block;
  position: relative;
}

.categoryItem:hover {
  color: colors.$green-light;
  border-color: colors.$green-medium;
}

.categoryItem .text {
  font-size: 20px;
  font-weight: 300;
}
</style>
