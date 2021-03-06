import React from 'react';

import SenderAddressComponent from '../SenderAddressComponent';

import { Container, Divider, Progress, Segment, Grid } from 'semantic-ui-react';
export default function SenderAddressForm(props) {
  return (
    <div>
      <Divider hidden />
      <Divider hidden />
      <Container>
        <Segment inverted>
          <Divider horizontal inverted>
            From
          </Divider>
        </Segment>
        <Progress color="yellow" value="2" total="3" progress="ratio" />
        <Grid centered>
          <Grid.Column width={12}>
            <SenderAddressComponent
              onNext={props.onNext}
              onPrevious={props.onPrevious}
              onChange={props.onChange}
              senderInfo={props.senderInfo || {}}
              S3UploadPublicPath={props.S3UploadPublicPath}
            />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
