import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import TriviaService from '@/service/index' 

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        categories:[],
        questions:[], 
        currentQuestion: 0,
        counter:0,
        complete: false,
        params:{
          level:null,category:null
        }
      },
      actions: {
        async A_SET_CATEGORIES(ctx) {
          ctx.commit('M_SET_CATEGORIES', await TriviaService.getCategories())
        },
        /** 
         * @param {level: string,category: int} params 
         */
      
        async A_SET_QUESTIONS_BY_LEVEL(ctx,params){
          const {level,category} = params 
          const questions  = await TriviaService.getQuestionsByDifficulty(category,level.toLowerCase())
          
          questions.map(q=>{
            q.answers = [q.correct_answer,...q.incorrect_answers]
          })
          ctx.commit('M_SET_QUESTIONS_PARAMS',{level,category})
          ctx.commit('M_SET_QUESTIONS',questions)
          
        },
        async A_RESTART_TRIVIA(ctx){

              ctx.commit('M_RESTART_TRIVIA')
          
                  ctx.dispatch('A_SET_QUESTIONS_BY_LEVEL',
                    ctx.state.params
                  )
        }
      },
      mutations:{
        M_SET_QUESTIONS_PARAMS(state,params){
          state.params  = params
        },
        M_SET_CATEGORIES(state,data){
          state.categories = data
        }, 
        M_SET_QUESTIONS(state,questions){
          state.questions = questions
        },
        M_CHANGE_QUESTION(state,number){
          state.currentQuestion = number
        },
        M_NEXT_QUESTION(state){
          if(state.questions.length > state.currentQuestion)
            state.currentQuestion++
        },
        M_PREV_QUESTION(state){
          if(state.currentQuestion > 0)
          state.currentQuestion--
        },
        M_SELECT_ANSWER(state,selected){
          state.questions[state.currentQuestion].selected = selected
          state.counter++
 
          state.complete = state.counter == (state.questions.length)
          if(state.complete)
          router.push({name:'finish'})
          else
            this.commit('M_NEXT_QUESTION')
        }, 
        M_RESTART_TRIVIA(state){
          state.questions = []
          state.counter = 0
          state.currentQuestion = 0
          state.complete = false 
        }
      },
      getters:{
        getCategories: ({categories}) => categories,
        getAllQuestions: ({questions}) => questions,
        currentQuestion:({questions,currentQuestion}) => questions[currentQuestion],
        currentIndex: ({currentQuestion})=>currentQuestion,
        isCompleted: ({complete})=>complete,
        amountQuestions: ({questions})=>questions.length,
        percentAssert: (state,{countAssert,amountQuestions})=>{
          
            return (countAssert*100)/amountQuestions  || 0
        },
        countAssert: ({questions})=>{
          let result = 0
          questions.map(q =>{ 
            
                if(q.selected == q.correct_answer)
                  result++
          })
          return result || 0
        }  
      }
})