<template>
  <div class="card bg-neutral text-neutral-content">
    <div class="card-body items-center text-center">
      <h2 class="card-title">
        {{ data.question }}
      </h2> 
      <div class="flex gap-3  flex-row flex-wrap justify-evenly mt-8">
        <div class="w-full  sm:basis-1/3 " v-for="(answer, i) in data.answers" :key="i">
          <button 
            @click="selectAnswer(answer)"
          class="btn  w-full" :class="(data.selected == answer)? 'btn-success':'btn-primary'" >
            {{ answer }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  name: "question-view",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data(){return {
    specialCharacters :{
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;' 
  }
  }},
  computed: {},
  methods:{
    ...mapMutations({
        M_SELECT_ANSWER:'M_SELECT_ANSWER',
        M_NEXT_QUESTION:'M_NEXT_QUESTION'
    }),
    selectAnswer(answer){
        this.M_SELECT_ANSWER(answer)
    }, 
  
  }
};
</script>