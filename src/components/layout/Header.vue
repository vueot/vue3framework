<template>
  <div
      class="header"
      :class="navigationModal?'show-navigation-modal':'not-show-navigation-modal'"
      :style="{
        height: size+' !important',
        'line-height': size,
      }"
  ><i
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
      :modal="navigationModal"
      @close="closeNavigation"
      :show-close="false"
      :withHeader="false">
    <el-menu
        background-color="#e9e9eb"
        active-text-color="#409eff"
        @select="showServiceList=!showServiceList"
        :default-active="showServiceList+0+''">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span>服务列表</span>
        <i class="el-icon-arrow-right" style="float: right; line-height: 56px"></i>
      </el-menu-item>
    </el-menu>
    <el-menu>
      <el-menu-item :index="v.route" v-for="(v, i) in getters['header/collectionService']" :key="i">
        <i :class="v.icon"></i>
        <template #title>{{ v.name }}</template>
      </el-menu-item>
    </el-menu>
  </el-drawer>
  <el-drawer
      v-model="showServiceList"
      custom-class="service-list"
      direction="ltr"
      :show-close="false"
      @open="navigationModal=false"
      @close="navigationModal=true"
      :withHeader="false">
    <el-main>
      <i class="el-icon-close"
         @click="showServiceList=false"
         style="float: right; font-size: 25px; cursor:pointer"
      ></i>
      <div v-for="(v, i) in state.header.service" :key="i">
        <h4 style="margin-bottom: 20px">{{ v.name }}</h4>
        <div v-for="(v2, i2) in v.data" :key="i2" style="margin: 10px 0">
          <span class="service-link">
            <span
                @click="toService(v2)"
                style="width: 300px; display: inline-block"
            >{{ v2.name }}</span>
            <i
                :class="v2.is_collection?'el-icon-star-on':'el-icon-star-off'"
                @click.stop="commit('header/service', [i, i2, !v2.is_collection])"
            ></i>
          </span>
        </div>

      </div>
    </el-main>
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
      navigationModal: true,
      showServiceList: false,
      fontSize: Math.ceil(size * 0.6) + 'px',
    }
  },
  setup() {
    const {commit, state, getters} = useStore()
    return {
      commit, state, getters
    }
  },
  methods: {
    closeNavigation() {
      this.showServiceList = false
    },
    toService(v: any) {
      this.$router.push({
        path: v.route
      })
    }
  }
})
</script>

<style scoped>
.header {
  padding-left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
  position: relative;
  z-index: 10000;
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

.service-link {
  color: #666;
}

.service-link:hover {
  background-color: #D3DCE6;
}

.service-link:hover {
  background-color: #D3DCE6;
}

</style>

<style>
.header-drawer {
  padding-top: 50px;
  width: 240px !important;
  pointer-events: auto;
}

.header + div {
  z-index: 9000 !important;
}

.show-navigation-modal + div {
  background-color: #0002;
  pointer-events: auto;
}

.not-show-navigation-modal + div {
  pointer-events: none;
}

.header + div + div {
  z-index: 8000 !important;
  left: 240px !important;
  background-color: #0002;
}

.service-list {
  padding-top: 50px;
  width: 100% !important;
  max-width: 980px;
}
</style>
