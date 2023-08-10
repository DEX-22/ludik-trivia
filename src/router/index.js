
import VueRouter from 'vue-router'
import store from '@/store'

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
        path: '/question', 
        component: ()=>import('@/views/Question.vue'),
        beforeEnter:(to, from, next)=>{
            if(store.getters.getAllQuestions && from.name == 'start')
                next()
            else
                next('/')
        }

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