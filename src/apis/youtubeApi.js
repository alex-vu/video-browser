import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

// 'https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=[YOUR_API_KEY]'
