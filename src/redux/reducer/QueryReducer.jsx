import {Actiontype} from "../action/action-type";
export const QueryReducer = (state = '', action) => {
  switch (action.type) {
    case Actiontype.query:
      return action.payload;
    default:
      return state;
  }
};
