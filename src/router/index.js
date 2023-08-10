
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
        beforeEnter: (to, from, next) => {
            if(!store.getters.getAllQuestions.length)
                next()
            else
                next({name: 'questions'})
        }

     },
    { 
        name: 'questions',
        path: '/questions', 
        component: ()=>import('@/views/Questions.vue'),
        beforeEnter:(to, from, next)=>{
            if(store.getters.getAllQuestions && from.name == 'start')
                next()
            else
                next({name: 'start'})
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