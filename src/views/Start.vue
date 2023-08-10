<template>
    <section>
        <v-select v-model="params.category" :options="categories" :reduce="(option)=>option.id" label="name" />
             <v-select v-model="params.level" :options="levels"  />
 
 <button class="btn btn-primary" @click="startTrivia">START</button>
    </section>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'start-view', 
    async mounted(){ 
       await this.setCategiories()
    },
    data(){return {
        params:{
            category:null,
            level: null,
        },
        options:[],
        levels:[
            'Easy', 'Medium', 'Hard'
        ]
    }},
    methods:{
        ...mapActions({
            setCategiories :'A_SET_CATEGORIES',
            setQuestions: 'A_SET_QUESTIONS_BY_LEVEL',
        }),
        async startTrivia(){
            if(!this.params.category || !this.params.level){
                alert('debes seleccionar categoria y dificultad')
                return
            }
            await this.setQuestions(this.params)

            this.$router.push({name:'question'})
        }
    },
    computed:{
        ...mapGetters({
            categories: 'getCategories'

        })

    }
}
</script>