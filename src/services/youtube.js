import axios from 'axios';

const KEY = 'AIzaSyA7P8yHuy8ztIXoeSAIVN10n2eNUsyclEs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 10,
      key: `${KEY}`
  }
})
  