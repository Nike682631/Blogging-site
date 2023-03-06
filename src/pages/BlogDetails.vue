<template>
  <q-page padding>
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.description }}</p>
  </q-page>
</template>

<script lang="ts">
import { BlogModel } from 'src/components/models'
import { defineComponent, onMounted, reactive } from 'vue'
import { fetchBlogById } from '../firebase/fbaseBlogPosts'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const blog = reactive<BlogModel>({
      title: '',
      description: '',
      author: '',
      tags: [],
      comments: []
    })
    onMounted(async () => {
      try {
        const response = await fetchBlogById(props.id)
        if (response) {
          Object.assign(blog, response)
        }
      } catch (error) {
        console.error(error)
        // Handle the error here
      }
    })

    return { blog }
  },
})
</script>
