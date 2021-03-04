<template>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useStore} from "vuex";

export default defineComponent({
  name: "Aside",
  setup() {
    const {commit, state} = useStore()
    return {
      commit, state
    }
  },
})
</script>
