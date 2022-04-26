import axios from 'axios';

const ax = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default ax;
