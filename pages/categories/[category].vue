<script setup lang="ts">
import type { CategoryDetails } from '@/data/categories';
import { getCategoryDetailsUrl } from '@/data/categories';

const slug = useParam('category');

const { data: category } = useFetch<CategoryDetails>(
  getCategoryDetailsUrl(slug)
);
</script>

<template>
  <main>
    <template v-if="category">
      <h1>Category: {{ category.name }}</h1>
      <PostCard
        v-for="post in category.posts"
        :key="post.id"
        :post="post"
      ></PostCard>
    </template>
  </main>
</template>
