import { ADD_PERSON } from "../constate";

export const AddPersonAction = (personObj) => ({
  type: ADD_PERSON,
  date: personObj,
});
