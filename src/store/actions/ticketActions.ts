import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';
import { Ticket, TicketAction, TicketActions } from '../types';

export const getTicket = (): ThunkAction<
  void,
  RootState,
  null,
  TicketAction
> => {
  return async (dispatch, getState) => {
    dispatch(ticketLoading());

    const responseSearchId = await fetch(
      process.env.REACT_APP_API_SEARCH_ID as string
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
  };
};

const ticketLoading = (): TicketAction => {
  return {
    type: TicketActions.TICKET_LOADING,
  };
};