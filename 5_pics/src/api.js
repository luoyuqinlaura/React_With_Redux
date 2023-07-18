import axios from 'axios';

const searchInmages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID aS2urLPXDhNTJSHcZ7LkXhRrzMlSvuZdEwKPmmzK6aI',
    },
    params: {
      query: term,
    },
  });
  //   console.log(response);
  return response.data.results;
};

export default searchInmages;
