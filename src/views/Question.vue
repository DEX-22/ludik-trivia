<template>
    <section>

    <h3>
        THIS IS A QUESTION VIEW
    </h3>
    <pre>
        {{questions}}
    </pre>
    </section>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'question-view',
    computed:{
        ...mapGetters({
            questions: 'getAllQuestions'
        })
    }
}
</script>