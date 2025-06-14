<script setup lang="ts">
import type { Category } from '@/data/categories';

interface Props {
  category: Category;
}

const { category } = defineProps<Props>();
</script>

<template>
  <div class="category">
    <a href="#">Category: {{ category.name }}</a>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/colors.scss';

.category {
  display: block;
  margin: 15px 0;
}

.category a {
  color: colors.$green-medium;
  border: 1px solid colors.$green-dark;
  border-radius: 5px;
  font-size: 12pt;
  padding: 5px 10px;
}

.category a:hover {
  color: colors.$green-light;
  border-color: colors.$green-medium;
}
</style>
