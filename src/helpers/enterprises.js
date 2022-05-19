import axios from 'axios'

export const getAllEnterprises = async () => {
  try {
    const enterprises = await axios.get("/api/enterprises/all")
    return enterprises.data
  } catch (e) {
    return e;
  }
};
