import React from 'react';
import PropTypes from 'prop-types';

class RarityFilter extends React.Component {
  render() {
    const { onInputChange, rarityFilter } = this.props;
    return (
      <div>
        <select
          name="rarityFilter"
          id="rare-filter"
          data-testid="rare-filter"
          value={ rarityFilter }
          onChange={ onInputChange }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </div>
    );
  }
}

RarityFilter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  rarityFilter: PropTypes.string.isRequired,
};

export default RarityFilter;
