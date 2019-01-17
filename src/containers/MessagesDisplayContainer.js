import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MessagesDisplay from '../components/MessagesDisplay';
import { receiveMessage } from '../actions/messageActions';

const mapStateToProps = state => ({
    messages: state.messages
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    receiveMessage
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesDisplay);
