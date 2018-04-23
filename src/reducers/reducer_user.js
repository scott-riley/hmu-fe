import {INITIAL_STATE} from './index';
import {LOG_IN_USER, FETCH_USER, EDIT_EMAIL} from '../actions/index';

export default function(state = INITIAL_STATE.user, action) {
  switch(action.type) {
    case LOG_IN_USER:
      const data = action.payload.data;
      if(data.meta.error) {
        return {status: 'Oops! Your email or password seem to be wrong'}
      }
      localStorage.setItem("token", data.data[0].access_token);
      localStorage.setItem("id", data.data[0].user_id);
      const userId = data.data[0].user_id;
      return {
        status: "success",
        userId: userId,
      }
    case FETCH_USER:
      const userData = action.payload.data;
      if(userData.meta.error) {
        return { status: "Oops, we couldn’t load your info!" }
      }
      return userData.data[0];
    case EDIT_EMAIL:
      const emailData = action.payload.data;
      if(emailData.meta.error) {
        return { ...state, status: "Oops, we couldn’t save your email." }
      }
      const returnData = emailData.data[0];
      return { ...returnData, status: "save-success" };
    default:
      return state;
  }
}
