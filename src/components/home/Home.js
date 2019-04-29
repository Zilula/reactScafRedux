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
    console.log(this.props.quotes);
    const listOfQuotes = this.props.quotes.map(quote => {
      return (
        <li key={quote._id}>
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
