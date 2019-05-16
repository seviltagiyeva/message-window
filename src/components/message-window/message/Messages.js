import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

const Message = ({
  img, text, time, own,
}) => (
  <div
    className={`form__message  ${own ? 'form__message_own' : ''}`}
  >
    <div className="form__message__img">
      <img src={img} alt="img" />
    </div>
    <div className="form__message__text">{text}</div>
    <div className="form__message__time">{time}</div>
  </div>
);


Message.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  own: PropTypes.bool,
};

Message.defaultProps = {
  own: false,
};

class Messages extends React.Component {
  componentDidMount() {
    window.onresize = () => {
      const element = document.getElementsByClassName('form__messages')[0];
      element.scrollTop = element.scrollHeight;
    };
  }

  componentDidUpdate(prevProps) {
    const { data } = this.props;
    if (prevProps.data && prevProps.data.length < data.length) {
      const element = document.getElementsByClassName('form__messages')[0];
      element.scrollTop = element.scrollHeight;
    }
  }

  renderMessages = () => {
    const { data } = this.props;
    return data.map(message => <Message key={message.id} {...message} />);
  }

  render() {
    return (
      <div className="form__messages">
        {this.renderMessages()}
      </div>
    );
  }
}

Messages.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Messages.defaultProps = {
  data: [],
};

export default Messages;
