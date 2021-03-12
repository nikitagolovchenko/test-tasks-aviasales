export enum TicketActions {
  TICKET_LOADING = 'TICKET_LOADING',
  TICKET_SUCCESS = 'TICKET_SUCCESS',
  TICKET_SORTING = 'TICKET_SORTING',
  TICKET_FILTERING = 'TICKET_FILTERING',
  GET_MORE_TICKET = 'GET_MORE_TICKET',
}

export enum SortBtns {
  CHEAP = 'CHEAP',
  FAST = 'FAST',
  OPTIMAL = 'OPTIMAL',
}

export enum FilterBtns {
  ALL = 'ALL',
  WITHOUT_TRANSFERS = 'WITHOUT_TRANSFERS',
  ONE_TRANSFERS = 'ONE_TRANSFERS',
  TWO_TRANSFERS = 'TWO_TRANSFERS',
  THREE_TRANSFERS = 'THREE_TRANSFERS',
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

export type FilterBtn =
  | FilterBtns.ALL
  | FilterBtns.WITHOUT_TRANSFERS
  | FilterBtns.TWO_TRANSFERS
  | FilterBtns.ONE_TRANSFERS
  | FilterBtns.TWO_TRANSFERS
  | FilterBtns.THREE_TRANSFERS;

export interface TicketState {
  tickets: Ticket[];
  activeTickets: Ticket[];
  loading: boolean;
  sortBtns: {
    btns: { name: SortBtn; text: string }[];
    activeBtn: SortBtn;
  };
  filterBtns: {
    btns: {name: FilterBtn, text: string}[];
    activeBtn: FilterBtn;
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

interface TicketFiltering {
  type: TicketActions.TICKET_FILTERING;
  payload: {
    filter: FilterBtn;
    tickets: Ticket[];
  }
}

interface GetMoreTicket {
  type: TicketActions.GET_MORE_TICKET;
}


export type TicketAction =
  | TicketLoading
  | TicketSuccess
  | TicketSorting
  | TicketFiltering
  | GetMoreTicket;
