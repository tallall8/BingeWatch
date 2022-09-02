import axios from "axios";

//Axios is a popular library mainly used to 
//send asynchronous HTTP requests to REST endpoints.

//Postman is used to test API's.
const instance = axios.create({
        baseURL: "https://api.themoviedb.org/3",
});

export default instance;
//export default is used to export a single class, function or
//primitive from a script file.