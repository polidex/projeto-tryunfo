import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    /* hasTrunfo: false, */
    isSaveButtonDisabled: true,
    // onSaveButtonClick: '', // function
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState(() => ({ [name]: value }), this.cardFormValidation);
  }

  cardFormValidation = () => {
    let attrValidation = false;
    let inputsValidation = false;

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    if (cardName && cardDescription && cardImage && cardRare) {
      inputsValidation = true;
    }

    if (+cardAttr1 <= '90' && +cardAttr1 >= 0
    && +cardAttr2 <= '90' && +cardAttr2 >= 0
    && +cardAttr3 <= '90' && +cardAttr3 >= 0
    && +cardAttr1 + +cardAttr2 + +cardAttr3 <= '210') {
      attrValidation = true;
    }

    if (inputsValidation && attrValidation) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

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
      isSaveButtonDisabled,
      // onSaveButtonClick, // function
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
        />
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
