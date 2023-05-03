import axios from "axios";

export default axios.create({baseURL: "https://hn.algolia.com/api/v1/search?query="})
// export default axios.create({baseURL: "https://httpstat.us/404"})
