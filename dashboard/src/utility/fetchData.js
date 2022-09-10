import axios from 'axios';
import { toast } from 'react-toastify';

const fetchData = async (url) => {
  try {
    const res = await axios(url);
    return res.data.result.data;
  } catch (err) {
    toast.error(err.response.data.message);
  }
  return null;
};

export default fetchData;
