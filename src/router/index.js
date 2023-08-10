
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
            if(store.getters.getAllQuestions && ['start','finish'].includes(from.name))
                next()
            else
                next({name: 'start'})
        }

     },
    { 
        name: 'finish',
        path: '/finish', 
        component: ()=>import('@/views/Finish.vue'),
        beforeEnter:(to, from, next)=>{
            if(store.getters.isCompleted && from.name == 'questions')
                next()
            else
                next({name: 'start'})
        }
     }
  ]

export default new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})