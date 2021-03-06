import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';
import {
  FilterBtn,
  FilterBtns,
  SortBtn,
  Ticket,
  TicketAction,
  TicketActions,
} from '../types';

export const getTicket = (): ThunkAction<
  void,
  RootState,
  null,
  TicketAction
> => {
  return async (dispatch, getState) => {
    dispatch(ticketLoading());

    const responseSearchId = await fetch(
      `${process.env.REACT_APP_API_SEARCH_ID}`
    );
    const { searchId } = await responseSearchId.json();
    let stopFetch: boolean = false;
    let allTickets: Ticket[] = [];

    const fetchData = async (): Promise<any> => {
      if (!stopFetch) {
        try {
          const responseTickets = await fetch(
            `${process.env.REACT_APP_API_TICKETS}?searchId=${searchId}`
          );

          const tickets = await responseTickets.json();

          stopFetch = tickets.stop;
          allTickets = tickets.tickets;
        } catch (error) {
          return fetchData();
        }

        return fetchData();
      } else {
        return;
      }
    };

    await fetchData();

    dispatch({
      type: TicketActions.TICKET_SUCCESS,
      payload: allTickets,
    });

    dispatch({
      type: TicketActions.TICKET_SORTING,
      payload: getState().ticket.sortBtns.activeBtn,
    });
  };
};

const ticketLoading = (): TicketAction => {
  return {
    type: TicketActions.TICKET_LOADING,
  };
};

export const ticketSorting = (sort: SortBtn): TicketAction => {
  return {
    type: TicketActions.TICKET_SORTING,
    payload: sort,
  };
};

export const ticketFiltering = (
  filter: FilterBtn
): ThunkAction<void, RootState, null, TicketAction> => {
  return (dispatch, getState) => {
    const allTickets = getState().ticket.tickets;
    let filterTickets: Ticket[] = [];

    switch (filter) {
      case FilterBtns.ALL:
        filterTickets = allTickets;
        break;

      case FilterBtns.WITHOUT_TRANSFERS:
        filterTickets = allTickets.filter(
          el =>
            el.segments[0].stops.length < 1 || el.segments[1].stops.length < 1
        );
        break;

      case FilterBtns.ONE_TRANSFERS:
        filterTickets = allTickets.filter(
          el =>
            el.segments[0].stops.length === 1 ||
            el.segments[1].stops.length === 1
        );
        break;

      case FilterBtns.TWO_TRANSFERS:
        // eslint-disable-next-line
        filterTickets = allTickets.filter(
          el =>
            (el.segments[0].stops.length < 3 &&
              el.segments[0].stops.length > 1) ||
            (el.segments[1].stops.length < 3 && el.segments[0].stops.length > 1)
        );
        break;

      case FilterBtns.THREE_TRANSFERS:
        filterTickets = allTickets.filter(
          el =>
            el.segments[0].stops.length > 2 || el.segments[1].stops.length > 2
        );
        break;

      default:
        filterTickets = allTickets;
        break;
    }

    dispatch({
      type: TicketActions.TICKET_FILTERING,
      payload: {
        filter: filter,
        tickets: filterTickets,
      },
    });

    dispatch({
      type: TicketActions.TICKET_SORTING,
      payload: getState().ticket.sortBtns.activeBtn,
    });
  };
};

export const getMoreTicket = (): TicketAction => {
  return {
    type: TicketActions.GET_MORE_TICKET,
  };
};
