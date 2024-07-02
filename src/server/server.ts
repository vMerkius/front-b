import axios from "axios";
import { IUserSignUp } from "../types/user-signup";
import { ILogin } from "../types/login-type";
import { IOrder } from "../types/order-type";
import { ICoachCreate } from "../types/coach-type";
import { ICoachOrder } from "../types/coach-order-type";

// const URL = "http://localhost:3000/api/v1";
// const URL = "https://back-b-kzfc.onrender.com//api/v1";
const URL = "https://back-b-kzfc.onrender.com/api/v1";

//USERS

export const signUpAPI = async (user: IUserSignUp) => {
  try {
    const response = await axios.post(`${URL}/users/signup`, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginAPI = async (user: ILogin) => {
  try {
    const response = await axios.post(`${URL}/users/login`, user, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginGoogleAPI = async (user: any) => {
  try {
    const response = await axios.post(`${URL}/users/google-login`, user, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const checkLoginStatus = async () => {
  try {
    const response = await axios.post(
      `${URL}/users/checkToken`,
      {},
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to check login status:", error);
    return null;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(
      `${URL}/users/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Logout failed:", error);
    return null;
  }
};

// CALCULATE

export const calculateAPI = async (order: IOrder) => {
  try {
    const response = await axios.post(`${URL}/orders/price`, order);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const checkDiscountAPI = async (discount: string) => {
  try {
    const response = await axios.post(`${URL}/orders/checkDiscount`, {
      discount: discount,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const calculateCoachAPI = async (order: ICoachOrder) => {
  try {
    const response = await axios.post(`${URL}/orders/priceCoach`, order);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const createCheckoutSessionAPI = async (order: IOrder) => {
  try {
    const response = await axios.post(
      `${URL}/orders/create-checkout-session`,
      order
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//COACHES

export const getCoachesAPI = async () => {
  try {
    const response = await axios.get(`${URL}/coaches`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getCoachAPI = async (id: string) => {
  try {
    const response = await axios.get(`${URL}/coaches/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCoachesPageAPI = async (
  page: number = 1,
  limit: number = 10,
  filters: any = {}
) => {
  try {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...filters,
    }).toString();
    // const response = await axios.get(
    //   `${URL}/coaches/paging?page=${page}&limit=${limit}`
    // );
    const response = await axios.get(`${URL}/coaches/paging?${queryParams}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const orderCoach = async (coachOrderOptions: ICoachOrder) => {
  console.log(coachOrderOptions);
  try {
    const response = await axios.post(
      `${URL}/orders/orderCoach`,
      coachOrderOptions,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecommendedAPI = async () => {
  try {
    const response = await axios.get(`${URL}/coaches/recommended`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const getCoachAPI = async (id: string) => {
//   try {
//     const response = await axios.get(`${URL}/coaches/${id}`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const createCoachAPI = async (coach: ICoachCreate) => {
  try {
    const response = await axios.post(`${URL}/coaches`, coach);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
