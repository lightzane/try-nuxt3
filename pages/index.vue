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
    <!-- 
      No need to import as Nuxt.js automatically imports from:
      - /components
      - /composables
      - /utils
      - framework-provided functions (i.e. useFetch(), useRoute())
    -->
    <!-- prettier-ignore -->
    <PostCard 
      v-for="post in posts" 
      :key="post.id" 
      :post="post"
    ></PostCard>
  </main>
</template>
