import { Context } from '~/client'
import {} from '@koishijs/plugin-insight/src'
import Graph from './index.vue'

export default (ctx: Context) => {
  ctx.registerPage({
    path: '/graph',
    name: '依赖图',
    icon: 'project-diagram',
    order: 600,
    fields: ['registry'],
    component: Graph,
  })
}
