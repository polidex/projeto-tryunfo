import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <input type="text" data-testid="name-input" />
        <textarea data-testid="description-input" />
        <text type="number" data-testid="attr1-input" />
        <text type="number" data-testid="attr2-input" />
        <text type="number" data-testid="attr3-input" />
        <text data-testid="image-input" />
        <label htmlFor="raridade">
          Escolha a raridade:
          <select name="raridade" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <checkbox data-testid="trunfo-input" />
        <button type="button" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
