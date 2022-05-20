import axios from "axios";

export const getAllEnterprises = async () => {
  try {
    const enterprises = await axios.get("/api/enterprises/all");
    return enterprises.data;
  } catch (e) {
    return e;
  }
};

export const getEnterpriseMostSales = async () => {
  try {
    const enterprise = await axios.get(
      "/api/transactions/sales/n?status_trans=closed&limit=1"
    );

    return enterprise.data;
  } catch (e) {
    return e;
  }
};

export const getEnterpriseLessSales = async () => {
  try {
    const enterprise = await axios.get(
      "http://localhost:8080/api/transactions/sales/n?status_trans=closed&limit=1&order=1"
    );

    return enterprise.data;
  } catch (e) {
    return e;
  }
};

export const getTotalPricePaidTransactions = async () => {
  try {
    const total = await axios.get(
      "/api/transactions/sales/earnings?status_trans=closed&only_total=true&final_payment=true"
    );

    return total.data;
  } catch (e) {
    return e;
  }
};

export const getTotalPriceNonPaidTransactions = async () => {
  try {
    const total = await axios.get(
      "/api/transactions/sales/earnings?only_total=true&match_status=false&status_trans=closed"
    );

    return total.data;
  } catch (e) {
    return e;
  }
};

export const getMostReversedEnterprise = async () => {
  try {
    const enterprise = await axios.get(
      "/api/transactions/sales/enterprise/status?only_first=true"
    );

    return enterprise.data;
  } catch (e) {
    return e;
  }
};

export const getTotalTransactionsByStatus = async()=>{
  try {
    const enterprise = await axios.get(
      "/api/transactions/sales/earnings?final_payment=false"
    );

    return enterprise.data;
  } catch (e) {
    return e;
  }
}

export const getReverseSalesByEnterprise = async()=>{
  try {
    const enterprises = await axios.get(
      "/api/transactions/sales/enterprise/status"
    );

    return enterprises.data;
  } catch (e) {
    return e;
  }
}

export const getTotalClosedTransByEnterprise = async()=>{
  try {
    const total = await axios.get(
      "/api/transactions/sales/enterprise"
    );

    return total.data;
  } catch (e) {
    return e;
  }
}

export const getNameOfEnterpriseById= async(id)=>{
  try {
    const enterprise = await axios.get(
      `/api/enterprises/${id}`
    );

    return enterprise.data;
  } catch (e) {
    return e;
  }
}

export const getTotalTransPaidOfEnterprise= async(id)=>{
  try {
    const total = await axios.get(
      `/api/enterprises/transactions/${id}?final_payment=true`
    );

    return total.data;
  } catch (e) {
    return e;
  }
}

export const getTotalTransNonPaidOfEnterprice= async(id)=>{
  try {
    const total = await axios.get(
      `/api/enterprises/transactions/${id}?final_payment=false`
    );

    return total.data;
  } catch (e) {
    return e;
  }
}

export const getDateMostTransOFEnterprise = async(id)=>{
  try {
    const date = await axios.get(
      `/api/enterprises/transactions/dates/${id}?only_one=true`
    );

    return date.data;
  } catch (e) {
    return e;
  }
}

export const gateDatesTransOFEnterprise=async(id)=>{
  try {
    const date = await axios.get(
      `/api/enterprises/transactions/dates/${id}`
    );

    return date.data;
  } catch (e) {
    return e;
  }
}