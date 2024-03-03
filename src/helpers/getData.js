import axios from "axios";

// Our ID that we need to send with the request
const options = {
  params: { id: "arj7oStGLkU" },
  headers: {
    "X-RapidAPI-Key": "95c802f0ffmsh9313315b35d6314p1330ecjsned84a1ae46c3",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

// todo baseurl definition
// Defining the url that starts all requests
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

// A function that requests the endpoint we give to the API and returns the data
export const getData = async (url) => {
  try {
    // It sends a request from the path received as a parameter and returns the result it receives.
    const response = await axios.get(url, options);
    return response;
  } catch (err) {
    console.log("There is error while getting datas");
  }
};
