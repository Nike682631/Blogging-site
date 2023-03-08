<template>
  <q-page class="row items-start justify-center">
    <div class="column">
      <div class="row justify-end">
        <q-btn size="12px" class="fredoka q-ma-sm" to="/app/createblog" color="primary" label="Create Blog" rounded />
      </div>
      <div>
        <BlogCard v-for="blog in blogs" :key="blog.id" v-bind="blog.data()" :id="blog.id" :color="getRandomColor()"/>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getBlogs } from '../firebase/fbaseBlogPosts'
import BlogCard from '../components/BlogCard.vue'
import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';

const blogs = ref<any>([])
const colors = ['red', 'green', 'blue', 'purple', 'orange', 'pink', 'teal'];
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
onMounted(async () => {
  const response = await getBlogs();
  blogs.value = response
})

</script>
