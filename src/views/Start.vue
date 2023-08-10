<template>
  <section class="grid place-items-center h-screen">
    <div class="card  text-primary-content w-11/12 lg:w-1/2 ">
      <div class="card-body">
        <h2 class="card-title">
            WELCOME TO TRIVIA 
        </h2>
        <span>
            Select a category * 
        </span>
        <v-select
        class="text-black"
          v-model="params.category"
          :options="categories"
          :reduce="(option) => option.id"
          label="name"
          single
        />
        <span>
            Select a difficulty *
        </span>
        <v-select
        class="text-black" v-model="params.level" :options="levels" />

        <div class="card-actions justify-center py-2">
          <button class="btn btn-success" @click="startTrivia">START</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "start-view",
  async mounted() {
    await this.setCategiories();
  },
  data() {
    return {
      params: {
        category: null,
        level: null,
      },
      options: [],
      levels: ["Easy", "Medium", "Hard"],
    };
  },
  methods: {
    ...mapActions({
      setCategiories: "A_SET_CATEGORIES",
      setQuestions: "A_SET_QUESTIONS_BY_LEVEL",
    }),
    async startTrivia() {
      if (!this.params.category || !this.params.level) {
        alert("debes seleccionar categoria y dificultad");
        return;
      }
      await this.setQuestions(this.params);

      this.$router.push({ name: "questions" });
    },
  },
  computed: {
    ...mapGetters({
      categories: "getCategories",
    }),
  },
};
</script>