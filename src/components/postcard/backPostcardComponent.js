import React, { Component } from 'react';
import { Grid, Segment, List, Image, Divider } from 'semantic-ui-react';
export default class BackPostcardComponent extends Component {
  render() {
    return (
      <Segment>
        <Image size="big" src="https://s13.postimg.org/ti3x2bshj/hello.png" />
        <Grid columns={2} divided>
          <Grid.Row stretched>
            <Grid.Column>
              {this.props.messageInfo.message}
            </Grid.Column>
            <Grid.Column>
              <Image size="tiny" src="http://bit.ly/2AsHCYB" floated="right" />

              <List>
                <List.Item>
                  {this.props.senderInfo.name}
                </List.Item>
                <List.Item>
                  {' '}{this.props.senderInfo.address_line1}
                </List.Item>
                <List.Item>
                  {this.props.senderInfo.address_city}
                  {this.props.senderInfo.address_state}
                  {this.props.senderInfo.address_zip}
                </List.Item>
              </List>
              <List>
                <List.Item>
                  {this.props.receiverInfo.name}
                </List.Item>
                <List.Item>
                  {this.props.receiverInfo.address_line1}
                </List.Item>
                <List.Item>
                  {this.props.receiverInfo.address_city}
                  {this.props.receiverInfo.address_state}{' '}
                  {this.props.receiverInfo.address_zip}
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
