import { ADD_PERSON } from "../constate";

const init = [];
export default function personReducers(prvState = init, action) {
  const { type, date } = action;
  switch (type) {
    case ADD_PERSON:
      const newPrvState = date.unshift(prvState);
      return newPrvState;
    default:
      return prvState;
  }
}
