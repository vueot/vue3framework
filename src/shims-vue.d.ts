/* eslint-disable */
declare module '*.vue' {
  import type {DefineComponent} from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component

  import * as lodash from 'lodash'
  declare global { // 全局变量设置
    const _: typeof lodash
  }
}
