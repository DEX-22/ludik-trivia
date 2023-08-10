
import VueRouter from 'vue-router'

const routes = [
    { 
        path: '/', 
        component: ()=>import('@/views/Start.vue'),
        redirect: {name: 'start'}
     },
    { 
        name: 'start',
        path: '/start', 
        component: ()=>import('@/views/Start.vue'),

     },
    { 
        name: 'question',
        path: '/question/:id', 
        component: ()=>import('@/views/Question.vue'),

     },
    { 
        name: 'finsish',
        path: '/finish', 
        component: ()=>import('@/views/Finish.vue'),

     }
  ]

export default new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})