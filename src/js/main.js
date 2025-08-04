import _ from 'lodash';
import axios from 'axios';

console.log(_.camelCase('Hello!!'));

async function postData() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log(data);
}
postData();