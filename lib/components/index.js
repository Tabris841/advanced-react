import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  state = {
    answer: 43
  }

  asyncFunc = () => {
    return Promise.resolve(37);
  }

  async componentDidMount() {
    this.state({
      answer: await this.asyncFunc()
    });
  }

  render() {
    return (
      <h2>Hello Class Component -- {this.state.answer}</h2>
    );
  }
}

ReactDom.render( 
  <App/>,
  document.getElementById('root')
);	