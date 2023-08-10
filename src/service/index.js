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
    async getQuestionsByDifficulty(difficulty){
        const {data} = this.instance.get(`api.php?amount=10&difficulty=${difficulty}`)
        return data.results
    }
}

export default new TriviaService()



