import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    /* hasTrunfo: false, */
    // isSaveButtonDisabled: false,
    // onSaveButtonClick: '', // function
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  /* getAppState = ({ target: { value, name } }) => {
    this.getState({ [name]: value });
  } */

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      /* hasTrunfo: false, */
      // isSaveButtonDisabled,
      // onSaveButtonClick, // function
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form onInputChange={ this.handleChange } />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
