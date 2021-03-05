type ServiceInfo = {
  name: string,
  route: string,
  is_collection: boolean,
  domain?: string,
}

type ServiceInfoGroup = {
  name: string
  data: Array<ServiceInfo>
}

const service: Array<ServiceInfoGroup> = [
  {
    name: "客服工作台",
    data: [
      {
        name: '工单管理',
        route: '/work-order/self',
        is_collection: false,
      },
      {
        name: '首呼',
        route: '/first-call/list',
        is_collection: false,
      },
    ]
  }
]

export default {
  namespaced: true,
  state: () => ({
    service: service
  }),
  getters: {
    collectionService(state: any) {
      let res: Array<ServiceInfo> = []
      _.forEach(state.service, v => {
        res.push(...v.data.filter((v2: ServiceInfo) => v2.is_collection))
      })
      return res
    }
  },
  mutations: {
    service(state: any, val: [number, number, boolean]) {
      state.service[val[0]].data[val[1]].is_collection = val[2]
    }
  },
  actions: {},
  modules: {}
}
