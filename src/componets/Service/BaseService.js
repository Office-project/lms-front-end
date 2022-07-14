import store from "../store"



export const authHeader = () => {
    const currentUser = store.getState().user;


    return {
      'Accept': '*/*',
      "Content-Type": "application/json",
      authorization: currentUser?.token,
    };
} 
