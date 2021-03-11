export enum TicketActions {
  TICKET_LOADING = 'TICKET_LOADING',
  TICKET_SUCCESS = 'TICKET_SUCCESS',
  TICKET_SORTING = 'TICKET_SORTING',
  GET_MORE_TICKET = 'GET_MORE_TICKET',
}

export enum SortBtns {
  CHEAP = 'CHEAP',
  FAST = 'FAST',
  OPTIMAL = 'OPTIMAL'
}

interface Segments {
  origin: string;
  destination: string;
  date: Date;
  stops: [null | string];
  duration: number;
}

export interface Ticket {
  price: number;
  carrier: string;
  segments: Segments[];
}

export type SortBtn = SortBtns.CHEAP | SortBtns.FAST | SortBtns.OPTIMAL;

export interface TicketState {
  tickets: Ticket[];
  activeTickets: Ticket[];
  loading: boolean;
  sortBtns: {
    btns: { name: SortBtn; text: string }[];
    activeBtn: SortBtn;
  };
  limit: number;
  page: number;
  total: number;
}

interface TicketLoading {
  type: TicketActions.TICKET_LOADING;
}

interface TicketSuccess {
  type: TicketActions.TICKET_SUCCESS;
  payload: Ticket[];
}

interface TicketSorting {
  type: TicketActions.TICKET_SORTING;
  payload: SortBtn;
}

interface GetMoreTicket {
  type: TicketActions.GET_MORE_TICKET;
}

export type TicketAction = TicketLoading | TicketSuccess | TicketSorting | GetMoreTicket;
