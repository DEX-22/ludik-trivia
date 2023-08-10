<template>
  <section>
    <div class="overflow-x-auto text-center mt-8">
      <ul class="steps">
        <li
          @click="next(i)"
          v-for="(q, i) in questions"
          :key="i"
          :class="{ 'step-accent': (q.selected && currentIndex != i),'step-primary': currentIndex == i }"

          class="step cursor-pointer hover:text-xl"
        />
      </ul>
    </div >
    <div class="flex justify-center py-20">
        <Question :data="currentQuestion"/>
        
    </div> 
    <div v-if="isCompleted" class="flex justify-center py-20">
        <button class="text-2xl">
            FINISH
        </button>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Question from './Question.vue';
export default {
  name: "questions-view",
  components:{Question},
  computed: {
    ...mapGetters({
      questions: "getAllQuestions",
      currentQuestion: 'currentQuestion',
      currentIndex:  'currentIndex',
      isCompleted: 'isCompleted'
    }),
  },
  methods:{
    ...mapMutations({
        changeQuestion: 'M_CHANGE_QUESTION'
    }),
    next(index){
      if(this.questions[index] == this.questions[-1])
        this.$router.push({name:'finish'})
      else
        this.changeQuestion(index)
    }
    // changeQuestion(){

    // }
  }
};
</script>