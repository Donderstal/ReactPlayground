import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MessageInput from './components/MessageInput';

const mapStateToProps = state => ({
    messageText: state.messageText
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    sendMessage
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);