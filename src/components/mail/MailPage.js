import React, { Component } from 'react';

import MailPageLayout from './MailPageLayout';

import FrontPostcardComponent from '../postcard/FrontPostcardComponent';
import BackPostcardComponent from '../postcard/BackPostcardComponent';

import Checkout from '../Checkout';
import TotalComponent from '../TotalComponent';
import { Button } from 'semantic-ui-react';
export default class MailPage extends Component {
  static defaultProps = {
    onChange: () => {},
    onNext: () => {},
    onPrevious: () => {},
    onSuccess: () => {}
  };

  _handleClickBack = event => {
    event.preventDefault();
    this.props.onPrevious();
  };

  render() {
    console.log(this.props, 'this props on mail page');
    return (
      <div>
        <MailPageLayout>
          <FrontPostcardComponent
            S3UploadUrl={this.props.S3UploadUrl || {}}
            S3UploadPublicPath={this.props.S3UploadPublicPath || {}}
          />
          <BackPostcardComponent
            receiverInfo={this.props.receiverInfo || {}}
            senderInfo={this.props.senderInfo || {}}
            messageInfo={this.props.messageInfo}
          />
          <TotalComponent />
          <Checkout
            name={'Postcard'}
            description={'postcard'}
            amount={1.75}
            receiverInfo={this.props.receiverInfo || {}}
            senderInfo={this.props.senderInfo || {}}
            S3UploadUrl={this.props.S3UploadUrl}
            S3UploadPublicPath={this.props.S3UploadPublicPath}
            userId={this.props.userId}
            toggleResponseModal={this.props.toggleResponseModal}
            messageInfo={this.props.messageInfo}
          />
          <Button floated="left" onClick={this._handleClickBack}>
            {' '}Back{' '}
          </Button>
        </MailPageLayout>
      </div>
    );
  }
}
