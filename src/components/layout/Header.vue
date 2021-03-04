<template>
  <div class="header" :style="{
    height: size+' !important',
    'line-height': size,
  }">
    <i
        :class="showNavigation?'el-icon-s-fold':'el-icon-s-unfold'"
        class="icon"
        :style="{
        height: size,
        width: size,
        'line-height': size,
        'font-size': fontSize
      }"
        @click="showNavigation=!showNavigation"
    ></i>
    <img alt="" src="../../assets/logo.png" class="logo">
  </div>
  <el-drawer
      v-model="showNavigation"
      custom-class="header-drawer"
      direction="ltr"
      :show-close="false"
      :withHeader="false">
    <el-menu background-color="#e9e9eb" active-text-color="#409eff">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span>导航一</span>
        <i class="el-icon-arrow-right" style="float: right; line-height: 56px"></i>
      </el-menu-item>
    </el-menu>
    <el-menu>
      <el-menu-item index="2">
        <i class="el-icon-location"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
    </el-menu>
  </el-drawer>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useStore} from "vuex";

export default defineComponent({
  name: "Header",
  data() {
    const size = 50 //控制顶部栏高度
    return {
      size: size + 'px',
      showHeader: true,
      showNavigation: false,
      fontSize: Math.ceil(size * 0.6) + 'px',
    }
  },
  setup() {
    const {commit, state} = useStore()
    return {
      commit, state
    }
  },
})
</script>

<style scoped>
.header {
  padding-left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
  position: relative;
  z-index: 5000;
  width: 100%;
}

.icon {
  float: left;
  text-align: center;
  background-color: #ff6a00;
  margin-right: 12px;
  cursor: pointer;
}

.logo {
  height: 100%;
}
</style>

<style>
.header-drawer {
  padding-top: 50px;
  width: 240px !important;
}
</style>
