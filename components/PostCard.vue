<script setup lang="ts">
import type { Post } from '@/data/posts';

interface Props {
  post: Post;
}

const { post } = defineProps<Props>();

const isHover = ref(false); // ref() is from vue.js api which is automatically imported
</script>

<template>
  <div>
    <div class="card" :class="{ hover: isHover }">
      <h2 class="title">{{ post.title }}</h2>
      <CategoryLink :category="post.category"></CategoryLink>
      <!-- 
          No need to import as Nuxt.js automatically imports from:
          - /components
          - /composables
          - /utils
        -->
      <RenderMarkdown :source="post.intro"></RenderMarkdown>
      <a
        class="more"
        href="#"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
      >
        More ...
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/colors.scss';

.card {
  padding: 15px 15px 35px;
  border: 1px solid colors.$green-dark;
  border-radius: 5px;
  margin-bottom: 25px;
  font-size: 12pt;
  position: relative;
}

.card .title {
  font-size: 25pt;
}

.card .more {
  color: colors.$green-dark;
  font-size: 12pt;
  padding: 5px 10px;
  position: absolute;
  right: 0px;
  bottom: 0px;
}

.card.hover {
  border-color: colors.$green-medium;
}

.card.hover .title {
  color: colors.$green-light;
}

.card.hover .more {
  color: colors.$green-light;
}
</style>
