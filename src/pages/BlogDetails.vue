<template>
  <q-page padding>
    <h1 class="row justify-center">{{ blog.title }}</h1>
    <p>{{ blog.description }}</p>
    <div class="row justify-center">
      <q-btn v-if="isAuthor" @click="editBlog(id)" size="12px" color="green" class="fredoka q-ma-sm"  label="Edit Blog" rounded />
      <q-btn v-if="isAuthor" @click="deleteBlogPost" size="12px" color="red" class="fredoka q-ma-sm"  label="Delete Blog" rounded />
      <q-btn  @click="goBack" size="12px" color="black" class="fredoka q-ma-sm"  label="Back" rounded />
    </div>
  </q-page>
</template>

<script lang="ts">
import { getAuth } from 'firebase/auth'
import { BlogModel } from 'src/components/models'
import { defineComponent, onMounted, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { fetchBlogById, deleteBlogPostById } from '../firebase/fbaseBlogPosts'

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
    const auth = getAuth();
    const router = useRouter()
    const user = auth.currentUser;
    const goBack = () => {
      router.go(-1);
    }
    const deleteBlogPost = async () => {
      const postId = props.id;

      if (user) {
        try {
          await deleteBlogPostById(user.uid, postId);
          router.push('/app');
          console.log('Deleted successfully')
        } catch (error) {
          console.error(error);
        }
      }
    }
    const isAuthor = computed(() => {
      return user?.uid && user.uid === blog.author;
    });
    function editBlog(id: string) {
      router.push({ name: 'BlogEdit', params: { id } })
    }
    onMounted(async () => {
      try {
        const response = await fetchBlogById(props.id)
        if (response) {
          Object.assign(blog, response)
        }
      } catch (error) {
        console.error(error)
      }
    })

    return { blog, deleteBlogPost, isAuthor, goBack, editBlog }
  },
})
</script>
