<template>
  <q-page padding>
    <div class="column">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="blog.title" label="Blog title *" lazy-rules :rules="[requiredRule]" />

        <q-input filled v-model="blog.description" type="textarea" label="Blog content *" lazy-rules :rules="[
          (val: string | undefined) => val !== null && val !== '' || 'Please add the content',
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
import { reactive, Ref, ref } from 'vue'
import { BlogModel } from 'src/components/models'
import { useRouter } from 'vue-router'
import createBlog from '../firebase/fbaseBlogPosts'
import { QForm } from 'quasar';
import { getAuth } from "firebase/auth";

const blog = reactive<BlogModel>({
  title: '',
  description: '',
  author: '',
  tags: [],
  comments: []
})

const router = useRouter()
const requiredRule = (val: string | undefined) => val && val.length > 0 || 'Please type something'

const auth = getAuth();
const { uid }: { uid?: string } = auth.currentUser || {};

const onSubmit = async () => {
  try {
    if(uid){
      blog.author = uid;
      const response = await createBlog(blog);
      router.push('/app');
    }
  } catch (err) {
    console.error(err);
  }
};

const onReset = () => { return; }

</script>