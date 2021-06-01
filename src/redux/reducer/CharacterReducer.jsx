import {Actiontype} from "../action/action-type";
export const CharacterReducer = (state = [], action) => {
  switch (action.type) {
    case Actiontype.characters:
      return action.payload;
    default:
      return state;
  }
};
