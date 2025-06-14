<script setup lang="ts">
import type { CategoryDetails } from '@/data/categories';
import { getCategoryDetailsUrl } from '@/data/categories';

definePageMeta({
  layout: 'breadcrumb',
});

const slug = useParam('category');

const { data: category } = await useFetch<CategoryDetails>(
  getCategoryDetailsUrl(slug)
);

// useState() is like Nuxt.js version of ref() #ssr-compatible
// useState('unique-key', func) where func returns initial value
// const state = useState('category', () => ({
//   name: '',
//   slug: '',
// }));
const state = useCategoryState();

if (category.value) {
  state.value = {
    name: category.value.name,
    slug: category.value.slug,
  };
}
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
