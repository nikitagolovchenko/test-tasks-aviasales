import { SortBtns, TicketAction, TicketActions, TicketState } from './../types';

const initialState: TicketState = {
  tickets: [],
  activeTickets: [],
  loading: false,
  sortBtns: {
    btns: [
      {
        name: SortBtns.CHEAP,
        text: 'Самый дешевый',
      },
      {
        name: SortBtns.FAST,
        text: 'Самый быстрый',
      },
      {
        name: SortBtns.OPTIMAL,
        text: 'Оптимальный',
      },
    ],
    activeBtn: SortBtns.CHEAP,
  },
  limit: 5,
  page: 1,
  total: 0
};

const ticketReducer = (
  state = initialState,
  action: TicketAction
): TicketState => {
  switch (action.type) {
    case TicketActions.TICKET_LOADING:
      return { ...state, loading: true };

    case TicketActions.TICKET_SUCCESS:
      return { ...state, loading: false, tickets: action.payload, activeTickets: action.payload, total: action.payload.length };

    case TicketActions.GET_MORE_TICKET:
      return { ...state, page: state.page + 1};
      
    case TicketActions.TICKET_SORTING:
      switch (action.payload) {
        case SortBtns.CHEAP:
          return { ...state, activeTickets: state.activeTickets.sort((a,b) => a.price - b.price), sortBtns: { ...state.sortBtns, activeBtn: action.payload }}

        case SortBtns.FAST:
          return { ...state, activeTickets: state.activeTickets.sort((a,b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration)), sortBtns: { ...state.sortBtns, activeBtn: action.payload }}

        case SortBtns.OPTIMAL:
          return { ...state, activeTickets: state.activeTickets.sort((a,b) => ((a.price * (a.segments[0].duration + a.segments[1].duration)) / 2) - ((b.price * (b.segments[0].duration + b.segments[1].duration)) / 2)), sortBtns: { ...state.sortBtns, activeBtn: action.payload }}

        default:
          return { ...state}
      }
    
    default:
      return state;
  }
};

export default ticketReducer;
