<!-- 
    Nuxt routing is built on top of Vue Router
    Notice that the filename is surrounded by square brackes:
    
    "[post].vue"
    
    This is dynamic segment syntax 
        which lets nuxt.js knows that we want to pass a parameter
    
-->

<script setup lang="ts">
import type { PostDetails } from '@/data/posts';
import { getPostDetailsUrl } from '@/data/posts';

// const slug = useRoute().params['post']
// const slug = useRoute().params.post.toString();
const slug = useParam('post');
/*
    No need to import as Nuxt.js automatically imports from:
    - /components
    - /composables
    - /utils
    - framework-provided functions (i.e. useFetch(), useRoute())
*/

const { data: post } = await useFetch<PostDetails>(getPostDetailsUrl(slug));
</script>

<template>
  <main>
    <!-- template tag will not going to be rendered in html -->
    <template v-if="post">
      <h1>
        {{ post.title }}
        <CategoryLink :category="post.category" />
      </h1>
      <RenderMarkdown :source="post.content" />
    </template>
  </main>
</template>
