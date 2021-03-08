export enum TicketActions {
  TICKET_LOADING = 'TICKET_LOADING',
  TICKET_SUCCESS = 'TICKET_SUCCESS',
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

export interface TicketState {
  tickets: Ticket[];
  loading: boolean;
}

interface TicketLoading {
  type: TicketActions.TICKET_LOADING;
}

interface TicketSuccess {
  type: TicketActions.TICKET_SUCCESS;
  payload: Ticket[];
}

export type TicketAction = TicketLoading | TicketSuccess;
