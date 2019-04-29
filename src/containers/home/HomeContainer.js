import { connect } from 'react-redux';
import { getQuotes } from '../../selectors/quote';
import Home from '../../components/home/Home';
import { fetchQuoteAction } from '../../actions/Quotes';

const mapStateToProps = (state) => ({
  quotes: getQuotes(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuotes(charcter, number) {
    dispatch(fetchQuoteAction(charcter, number));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
