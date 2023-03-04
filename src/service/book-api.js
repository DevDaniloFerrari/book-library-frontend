import axios from "axios";

const bookApi = {
    getBooks: () => {
        return axios.get('http://localhost:3000/books');
    }
}

export default bookApi