<template>
  <div>
    <draggable v-model="list">
      <div
          v-for="element in list"
          :key="element.name"
      >
        {{ element.name }}
      </div>
    </draggable>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useStore} from "vuex";
import {VueDraggableNext} from "vue-draggable-next"

export default defineComponent({
  name: "CreateForm",
  components: {
    draggable: VueDraggableNext,
  },
  setup() {
    const {commit, state} = useStore()
    return {
      commit, state,
      list: [
        {
          name: "task 1",
          tasks: [
            {
              name: "task 2",
              tasks: []
            }
          ]
        },
        {
          name: "task 3",
          tasks: [
            {
              name: "task 4",
              tasks: []
            }
          ]
        },
        {
          name: "task 5",
          tasks: []
        }
      ]
    }
  }
})

</script>
