import { combineReducers } from "redux";
import ticketReducer from './TicketReducers';

const rootReducer = combineReducers({
  ticket: ticketReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;