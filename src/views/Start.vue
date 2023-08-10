<template>
    
    <h3>
        THIS IS A START VIEW
    </h3>
</template>
<script>
import TriviaService from '@/service/index'
export default {
    name: 'start-view',
    async mounted(){
       const a = await TriviaService.getCategories()
       console.log(a);
    }
}
</script>