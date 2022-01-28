import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    //log in the user..

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    //sign up the user..

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
