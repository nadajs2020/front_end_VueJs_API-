
import axios from 'axios';

export default axios.create({

    URL: 'http://localhost:9000/api/',
    headers: {
        'Content-Type': 'application/json',
      },
      transformRequest: [
        (data) => {
          return JSON.stringify(data);
        },
      ],

  });