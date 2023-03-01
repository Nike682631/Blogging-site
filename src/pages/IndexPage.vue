<template>
  <q-page class="row items-center justify-evenly">
    <div class="row">
      <div class="col-12 col-lg-4 q-pa-md">
        <div class="text-h4 text-bold">Blogs</div>
        <div class="text-grey-7">Please login with us</div>
        <div class="column">
          <q-input class="q-mt-sm" label="Enter email" outlined v-model="form.email.value" :error="form.email.error"
            :error-message="form.email.msg">
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
          <q-input class="q-my-sm" label="Enter password" outlined v-model="form.password.value"
            :error="form.password.error" :error-message="form.password.msg">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon name="visibility_off" />
            </template>
          </q-input>
        </div>
        <div class="column">
          <q-btn color="indigo" @click="submitLogin">
            Login
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: {},
  setup() {
    const form = ref({
      email: {
        value: '',
        required: true
      },
      password: {
        value: '',
        required: true
      }
    })
    const submitLogin = () => { return; }
    return { form, submitLogin };
  }
});
</script>
