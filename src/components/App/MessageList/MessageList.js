import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchMessages, setActiveMessage, fetchActiveMessage, markMessageAsRead} from '../../../actions/index';
import {Link} from 'react-router';

import MessageItem from '../../App/MessageItem/MessageItem';
import MessageBlock from '../../App/MessageBlock/MessageBlock';

import s from './MessageList.css';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessages();
    if(this.props.params.message) {
      this.props.fetchActiveMessage(this.props.params.message)
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.messages.perform == "redirect") {
      this.context.router.push('/app/login');
    }
    if(nextProps.params.message != this.props.params.message) {
      this.props.fetchActiveMessage(nextProps.params.message);
      this.props.markMessageAsRead(nextProps.params.message);
    }
  }

  renderMessages(messages) {
    return(
      messages.map( (message, index) => {
        if(message.message) {
          return (
            <Link to={`/app/messages/${message.message._data.id}`} key={`${index}`} className={s.messageLink}>
              <MessageItem message={message.message._data} onClick={ () => { this.props.setActiveMessage(message.message._data)} } activeMessage={this.props.activeMessage} />
            </Link>
          )
        }
      })
    )
  }

  handleClick() {
    this.props.fetchMessages();
  }

  render() {
    const {messages, activeMessage} = this.props;
    return (
      <div className={s.root}>
        <div className={s.sidebar}>
          <h2 className={s.inboxHeader}>Your Messages</h2>
          {messages && messages.length > 0 ?
              <div>
                {this.renderMessages(messages)}
              </div>
            :
              "No messages"
          }
        </div>

        <div className={s.message}>
          {
            activeMessage.id ?
              <MessageBlock message={activeMessage} />
            :
              null
          }
        </div>
      </div>
    );
  }
}

MessageList.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    activeMessage: state.activeMessage
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchMessages: fetchMessages,
    setActiveMessage: setActiveMessage,
    fetchActiveMessage: fetchActiveMessage,
    markMessageAsRead: markMessageAsRead,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
