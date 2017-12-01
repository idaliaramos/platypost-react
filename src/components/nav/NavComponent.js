import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

export default class NavComponent extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu size="large" pointing color="purple" secondary>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          {/* <Menu.Item
            name="messages"
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          /> */}
          <Menu.Menu position="right">
            <Menu.Item
              name="history"
              active={activeItem === 'history'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        {/* <Segment>
          <img src="/assets/images/wireframe/media-paragraph.png" />
        </Segment> */}
      </div>
    );
  }
}