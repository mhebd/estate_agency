import axios from 'axios';
import { toast } from 'react-toastify';

const updateData = async (url, data) => {
  console.log(data);
  try {
    const res = await axios.put(url, data, {
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

export default updateData;
