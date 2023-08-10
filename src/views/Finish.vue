<template>
  <section class="flex flex-col justify-center items-center h-screen">
    <div
      class="radial-progress my-4 text-2xl"
      :class="[percentAssert > 50 ? 'text-success' : 'text-danger']"
      :style="`--value:${percentAssert};--size:12rem;`" >
      {{ percentAssert }}%
    </div>

    <div class="">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title text-danger">Filed questions</div>
          <div class="stat-value ">{{amountQuestions - countAssert}}</div> 
        </div>
      </div>
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title text-succes">Assert Questions</div>
          <div class="stat-value ">{{countAssert}}</div> 
        </div>
      </div>
    </div>
    <div class="my-8">
        <button @click="restart" class="btn btn-success">
                RESTART TRIVIA
        </button>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "finish-view",
  methods:{
    ...mapActions({
        A_RESTART_TRIVIA: 'A_RESTART_TRIVIA'
    }),
    restart(){
        this.A_RESTART_TRIVIA()
        this.$router.push({name:'questions'})
    }
  },
  computed: {
    ...mapGetters({
      countAssert: "countAssert",
      amountQuestions: 'amountQuestions',
      percentAssert: 'percentAssert'
    }),
  },
};
</script>