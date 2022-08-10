import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/users";
class DataService {

    getData(){
        return axios.get(API_BASE_URL);
    }

}
export default new DataService()