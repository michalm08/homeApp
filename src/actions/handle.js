import axios from "axios";
import { SHOW_HOUSES, ADD_HOUSE, DELETE_HOUSE } from "../actions/types";

export const showHouses = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://mobile-reality-backend.sadek.usermd.net/houses/all"
    );
    dispatch({
      type: SHOW_HOUSES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeHouse = (id) => async (dispatch) => {
  console.log(id);
  try {
    await axios.delete(
      `http://mobile-reality-backend.sadek.usermd.net/houses/${id}`
    );
    dispatch({
      type: DELETE_HOUSE,
    });
    dispatch(showHouses());
  } catch (err) {
    console.log(err);
  }
};

export const addHouse = (data) => async (dispatch) => {
  console.log(data);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(data);
  try {
    const res = await axios.post(
      "http://mobile-reality-backend.sadek.usermd.net/houses",
      body,
      config
    );
    console.log(res);
    dispatch({
      type: ADD_HOUSE,
    });
    dispatch(showHouses());
  } catch (err) {
    console.log(err);
  }
};
