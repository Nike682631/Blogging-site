<template>
  <q-card @click="goToBlog(id)" class="my-blog-card q-mb-sm" :class="[colorClass, `bg-${color}`]">

    <q-card-section>
      <div class="text-h6">{{ `${title.substring(0, 1).toUpperCase()}${title.substring(1)}` }}</div>
    </q-card-section>

    <q-separator dark inset />

    <q-card-section>
      {{ description.length <= 400 ? description : description.slice(0, 400) + '...' }} </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'BlogCard',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    author: {
      type: String,
      default: ''
    },

    tags: {
      type: Array,
      default: null
    },
    comments: {
      type: Array,
      default: null
    },
    color: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const colorClass = computed(() => {
      return props.color
    })
    const router = useRouter()

    function goToBlog(id: any) {
      router.push({ name: 'Blog', params: { id } })
    }
    return {
      colorClass,
      goToBlog
    }
  }
});
</script>

<style scoped>
.my-blog-card {
  width: 98vw;
}
</style>