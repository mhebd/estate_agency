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
    console.log(res.data.result);
    return true;
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
  return false;
};

export default createData;
