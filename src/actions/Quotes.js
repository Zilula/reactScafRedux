import { createAction } from 'promise-middleware-redux';
import { getQuotes } from '../services/Quotes';

export const [
  fetchQuoteAction,
  FETCH_QUOTES,
  FETCH_QUOTES_PENDING, 
  FETCH_QUOTES_FULFILLED,
  FETCH_QUOTES_REJECTED
] = createAction('FETCH_QUOTES', getQuotes);

