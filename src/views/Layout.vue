<template>
  <el-container style="height: 100%">
    <el-container direction="vertical">
      <el-header style="text-align: center; line-height: 50px; background-color: #B3C0D1">Header</el-header>
      <el-container style="height: 100%">
        <el-aside width="200px" style="height: 100%; background-color: #D3DCE6; text-align: center; line-height: 100%">Aside</el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useStore} from "vuex";

export default defineComponent({
  name: "Layout",
  setup() {
    const {commit, state} = useStore()
    return {
      commit, state
    }
  },
})
</script>
