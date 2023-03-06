<template>
  <q-page padding>
    <div class="column">
      <q-form ref="form" @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="blog.title" label="Blog title *" lazy-rules
          :rules="[val => val && val.length > 0 || 'Please type something']" />

        <q-input filled v-model="blog.description" type="textarea" label="Blog content *"
          lazy-rules :rules="[
            val => val !== null && val !== '' || 'Please add the content',
          ]" />

        <div class="row justify-center">
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { BlogModel } from 'src/components/models'
import { useRouter } from 'vue-router'
import createBlog from '../firebase/fbaseBlogPosts'

const blog = reactive<BlogModel>({
  title: '',
  description: '',
  author: '',
  tags: [],
  comments: []
})

const form = ref<any>(null)
const router = useRouter()

const onSubmit = async () => { 
  if (form.value.validate()) {
    try {
      const response = await createBlog(blog)
      router.push('/app')
    } catch (err) { }
  }
 }
const onReset = () => { return; }

</script>