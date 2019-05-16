import React from 'react';
import img1 from '../img1.png';
import './styles.sass';

const FormHeader = () => (
  <div className="form__header">
    <div className="form__header__img">
      <img src={img1} alt="" />
    </div>
    <div>
      <h3 className="form__header__name">Токсикова Ольга</h3>
      <h4 className="form__header__location">Днепропетровск</h4>
    </div>
    <div>
      {
        /*
          which functionality
        */
      }
    </div>
  </div>
);

export default FormHeader;
