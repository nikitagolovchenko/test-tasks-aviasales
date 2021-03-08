import { TicketAction, TicketActions, TicketState } from './../types';

const initialState: TicketState = {
  tickets: [],
  loading: false,
};

const ticketReducer = (
  state = initialState,
  action: TicketAction
): TicketState => {
  switch (action.type) {
    case TicketActions.TICKET_LOADING:
      return { ...state, loading: true };

    case TicketActions.TICKET_SUCCESS:
      return { ...state, loading: false, tickets: action.payload };

    default:
      return state;
  }
};

export default ticketReducer;
