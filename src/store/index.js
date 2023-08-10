import Vue from 'vue'
import Vuex from 'vuex'
import TriviaService from '@/service/index' 

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        categories:[],
        questions:[],
        question:{}, 
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
          console.log(questions);
          // questions.map(q=>{
          //   q.answers = [q.correct_answer,...q.incorrect_answers]
          // })

          ctx.commit('M_SET_QUESTIONS',questions)
          
        }
      },
      mutations:{
        M_SET_CATEGORIES(store,data){
          store.categories = data
        }, 
        M_SET_QUESTIONS(store,questions){
          store.questions = questions
        },
        // M_SET_QUESTION(store,questions){
        //   store.questions = questions
        // }
      },
      getters:{
        getCategories: ({categories}) => categories,
        getAllQuestions: ({questions}) => questions
      }
})