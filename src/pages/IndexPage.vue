<template>
  <q-page class="row items-center justify-evenly">
    <div class="column">
      <div class="row justify-end">
        <q-btn class="full-width fredoka" href="/app/createblog" color="primary" label="Create" rounded
          type="button"></q-btn>
      </div>
      <div>
        <BlogCard />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { getBlogs } from '../firebase/fbaseBlogPosts'
import BlogCard from '../components/BlogCard.vue'

onMounted(async () => {
  const blogs = await getBlogs();
  console.log(blogs)
})

</script>
