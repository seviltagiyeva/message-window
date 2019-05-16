import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';
import img2 from '../img2.png';

class FormBottom extends React.Component {
  state = {
    lines: 4,
  }


  render() {
    const { onTextChange, onButtonClick, text } = this.props;
    const { lines } = this.state;
    return (
      <div className="form__bottom">
        <div>
          <img src={img2} alt="user" />
          <textarea cols="30" rows={lines} onChange={onTextChange} value={text} />
        </div>
        <button type="button" onClick={onButtonClick} disabled={!text}>Отправить</button>
      </div>
    );
  }
}

FormBottom.propTypes = {
  onTextChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

FormBottom.defaultProps = {
  text: '',
};

export default FormBottom;
