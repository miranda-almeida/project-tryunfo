import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardImage: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };

  numberRangeInput = (values) => {
    const maxPerAtrr = 90;
    if (Number(values) >= 0 && Number(values) <= maxPerAtrr) return true;
  };

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      const { cardName, cardDescription, cardImage,
        cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const total = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const maxTotal = 210;
      const validateNotEmpty1 = this.numberRangeInput(cardAttr1);
      const validateNotEmpty2 = this.numberRangeInput(cardAttr2);
      const validateNotEmpty3 = this.numberRangeInput(cardAttr3);
      if (cardName && cardDescription && cardImage
        && cardRare && total <= maxTotal && validateNotEmpty1
        && validateNotEmpty2 && validateNotEmpty3) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  render() {
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
