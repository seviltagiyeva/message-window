import React, { Component } from 'react';
import FormHeader from './header/FormHeader';
import Messages from './message/Messages';
import FormBottom from './bottom/FormBottom';
import './styles.sass';
import img1 from './img1.png';
import img2 from './img2.png';

export default class MessageWindow extends Component {
  state = {
    messages: [
      {
        id: 1, time: '12:35', img: img1, text: 'first message',
      },
      {
        id: 2, time: '12:45', img: img1, text: 'second message',
      },
      {
        id: 3, time: '12:50', img: img1, text: 'blablabla',
      },
    ],
    message: '',
  }

  onChange = e => this.setState({ message: e.target.value });

  onClick = () => {
    const { message, messages } = this.state;
    const id = messages.length + 1;
    const newMessage = {
      time: (new Date()).toLocaleTimeString(),
      text: message,
      img: img2,
      id,
      justSend: true,
      own: true,
    };
    this.setState({ messages: messages.concat(newMessage), message: '' });
  }

  render() {
    const { messages, message } = this.state;
    return (
      <div className="form">
        <FormHeader />
        <Messages data={messages} />
        <FormBottom text={message} onButtonClick={this.onClick} onTextChange={this.onChange} />
      </div>
    );
  }
}
