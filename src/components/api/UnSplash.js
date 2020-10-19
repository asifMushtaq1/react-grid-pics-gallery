import axios from 'axios';

export default axios.create({
  baseURL : 'https://api.unsplash.com',
  headers : {
    Authorization : 'Client-ID 0be5f3eac705b9bcdb9a8678fed61d56aad13af90aa9d3b0e403843edfdc8865'
  }
});

