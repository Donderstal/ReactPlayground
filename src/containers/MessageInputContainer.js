import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MessageInput from '../components/MessageInput';
import { sendMessage } from '../actions/messageActions';

const mapStateToProps = state => ({
    messageText: state.messageText
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    sendMessage
  }, dispatch)
);

console.log('In inputContainer: ' + mapDispatchToProps,  mapStateToProps)

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);

