import axios from 'axios'

class TriviaService{

    instance

    constructor() {
        this.instance = axios.create({
            baseURL: 'https://opentdb.com/',
            timeout: 60000, 
          });
    }
    async getCategories(){

        const {data}  = await this.instance.get('api_category.php') 
        return data.trivia_categories
    }
    async getQuestionsByDifficulty(category,difficulty){
        const {data} = await this.instance.get(`api.php?amount=10&category=${category}&difficulty=${difficulty}`)
        return data.results
    }
}

export default new TriviaService()



