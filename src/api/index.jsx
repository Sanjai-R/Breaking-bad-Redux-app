import axios from 'axios';
const fetchapi = async (query) => {
   const baseurl = `https://www.breakingbadapi.com/api/characters?name=${query}`;
   const data = await axios.get(baseurl);
   return data.data;
}
export default fetchapi;