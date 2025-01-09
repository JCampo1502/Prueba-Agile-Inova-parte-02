import axios from "axios";
const APIURL = "https://jsonplaceholder.typicode.com/posts";
export const UsersReviewInstance = axios.create({
  baseURL: APIURL,
});
