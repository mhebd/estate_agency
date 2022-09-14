import axios from 'axios';
import { toast } from 'react-toastify';

const fetchData = async (url) => {
  try {
    const res = await axios(url);
    return res.data.result;
  } catch (err) {
    const messages = err?.response?.data?.message.split('&');
    messages.forEach((message) => {
      toast.error(message);
    });
  }
  return null;
};

export default fetchData;
