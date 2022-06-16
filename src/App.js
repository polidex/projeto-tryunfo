import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import RarityFilter from './components/RarityFilter';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
    filter: '',
    rarityFilter: 'todas',
  };

  initialState = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    if (cardTrunfo) this.setState({ hasTrunfo: true });
    this.setState((prevState) => ({
      cards: [...prevState.cards, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
    }), this.initialState);
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({ [name]: value }), this.cardFormValidation);
  }

  deleteButton = ({ target }) => {
    const { cards } = this.state;
    const newCards = cards.filter((card) => card.cardName !== target.id);
    this.setState({ cards: newCards });
    cards.forEach((card) => {
      if (card.cardName === target.id && card.cardTrunfo) {
        this.setState({ hasTrunfo: false });
      }
    });
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

  handleFilter = ({ target }) => {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  cardsFilter = () => {
    const { cards, filter, rarityFilter } = this.state;
    const cardNameFilter = cards.filter((card) => card.cardName.includes(filter));
    let cardRarityFilter = cardNameFilter;
    if (rarityFilter !== 'todas') {
      cardRarityFilter = cardNameFilter
        .filter((card) => card.cardRare === rarityFilter);
    }
    return cardRarityFilter;
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
      hasTrunfo,
      isSaveButtonDisabled,
      // cards,
      // filter,
      rarityFilter,
    } = this.state;

    // const cardsFilter = cards.filter((card) => card.cardName.includes(filter));

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.onSaveButtonClick }
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
        <input
          type="text"
          placeholder="Buscar carta"
          name="filter"
          data-testid="name-filter"
          onChange={ this.handleFilter }
        />
        <RarityFilter
          rarityFilter={ rarityFilter }
          onInputChange={ this.handleFilter }
        />
        {this.cardsFilter().map((card) => (
          <div key={ card.cardDescription }>
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              type="button"
              data-testid="delete-button"
              id={ card.cardName }
              onClick={ this.deleteButton }
            >
              Excluir carta
            </button>
          </div>))}
      </div>
    );
  }
}

export default App;
