<template>
  <el-container>
    <el-form>
      <div v-drag style="position: relative">
        <el-form-item label="单选框">
          <el-radio-group>
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
          </el-radio-group>
        </el-form-item>
      </div>
    </el-form>
  </el-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useStore} from "vuex";

export default defineComponent({
  name: "CreateForm",
  setup() {
    const {commit, state} = useStore()
    console.log(_.forEach([1,2,3], v=>{
      console.log(v)
    }))
    return {
      commit, state
    }
  },
  directives: {
    drag(el) {
      console.log(el)
      el.onmousedown = function (e: { pageX: number; pageY: number; }) {
        const disx = e.pageX - el.offsetLeft;
        const disy = e.pageY - el.offsetTop;
        document.onmousemove = function (e) {
          el.style.left = e.pageX - disx + 'px'
          el.style.top = e.pageY - disy + 'px'
        }
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null
        }
      }
    }
  }
})

</script>
