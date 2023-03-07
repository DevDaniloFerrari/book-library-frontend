import axios from "axios";

const bookApi = {
    getBooks: () => {
        return axios.get('https://localhost:7180/books');
    },
    getBooksFiltered: (property, value) => {
        return axios.get(`https://localhost:7180/books/${property}/${value}`);
    }
}

export default bookApi