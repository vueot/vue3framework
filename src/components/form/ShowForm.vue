<template>
  <el-container>
    <span class="left-top-font">...</span>
  </el-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useStore} from "vuex";

export default defineComponent({
  name: "ShowForm",
  setup() {
    const {commit, state} = useStore()
    return {
      commit, state
    }
  },
})

</script>
