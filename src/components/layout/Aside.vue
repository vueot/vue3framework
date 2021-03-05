<template>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useStore} from "vuex";

export default defineComponent({
  name: "Aside",
  setup() {
    console.log(document.domain, "=================")
    const {commit, state} = useStore()
    return {
      commit, state
    }
  },
})
</script>
