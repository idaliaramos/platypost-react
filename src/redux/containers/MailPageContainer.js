import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import MailPage from '../../components/mail/MailPage';
//import thunks

function mapStateToProps(state, ownProps) {}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => {}
    // (letterData = letterdata => {
    //   // dispatch(createletterThunk(letterData));
    // })
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(MailPage);
