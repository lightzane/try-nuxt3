<script setup lang="ts">
import type { Post } from '@/data/posts';
import { /* getPosts */ getPostsUrl } from '@/data/posts';

// ! The getPosts() will run first in the server
// ! It also has a client "fetch" so it will also run again in the client
// ! This is redundant, so use SSR-compatible "useFetch"
// ! (observe via browser > dev tools > network : fetch/xhr)
// const posts = await getPosts();

// * This will only fetch from the server and will not have redundant call in the client-side
// * This will no longer call an extra API call to the server in the client-side
const { data: posts } = await useFetch<Post[]>(getPostsUrl());

// Notice: No need to import framework-provided functions such as:
// useFetch() from nuxt
// ref() from vue
</script>

<template>
  <main>
    <h1>Nuxt.js Examples</h1>
    <div>
      <div v-for="post in posts" :key="post.id" class="card">
        <h2 class="title">{{ post.title }}</h2>
        <div class="category">
          <a href="#">Category: {{ post.category.name }}</a>
        </div>
        <!-- 
          No need to import as Nuxt.js automatically imports from:
          - /components
          - /composables
          - /utils
        -->
        <RenderMarkdown :source="post.intro"></RenderMarkdown>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use '@/assets/styles/colors.scss';

.card {
  padding: 15px;
  border: 1px solid colors.$green-dark;
  border-radius: 5px;
  margin-bottom: 25px;
  font-size: 12pt;
}

.card .title {
  font-size: 25pt;
}

.card .category {
  margin: 5px 0;
}
</style>
