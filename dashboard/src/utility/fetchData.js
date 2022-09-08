import axios from 'axios';
import { toast } from 'react-toastify';

const fetchData = async (url, setData, setLoading) => {
  try {
    const res = await axios(url);
    setData(res.data.result.data);
    if (setLoading) setLoading(false);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export default fetchData;
