<template>
  <div class="home">
    <CreateForm/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CreateForm from '@c/form/CreateForm.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    CreateForm,
  },
});
</script>
