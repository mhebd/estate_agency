import axios from 'axios';
import { toast } from 'react-toastify';

const createData = async (url, data) => {
  try {
    await axios.post(url, data, {
      headers: {
        'Content-type': 'application/json',
      },
    });
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};

export default createData;
