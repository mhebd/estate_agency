import axios from 'axios';
import { toast } from 'react-toastify';

const createData = async (url, data) => {
  try {
    const res = await axios.post(url, data, {
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (res?.data?.message) {
      toast.success(res?.data?.message);
    }
    return res.data.result;
  } catch (err) {
    const messages = err?.response?.data?.message.split('&');
    messages.forEach((message) => {
      toast.error(message);
    });
  }
  return null;
};

export default createData;
