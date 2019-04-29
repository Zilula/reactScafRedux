import React from 'react';
import PropTypes from 'prop-types';


export default class Home extends React.PureComponent {
  static propTypes = {
    quotes: PropTypes.array.isRequired,
    fetchQuotes: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.fetchQuotes('bender', 3);

  }
  render() {
    const listOfQuotes = this.props.quotes.map(quote => {
      return (
        <li key={quote.quote}>
          <p> {quote.quote}</p>
        </li>
      );
    });
    
    return (
      <>
        <h1>Hello World </h1>
        <ul>
          {listOfQuotes}
        </ul>
      </>
    );
  }
}
