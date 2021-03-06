import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const Component3 = ({ onNext }) =>
  <Card>
    <Image src="/assets/images/avatar/large/matthew.png" />
    <Card.Content>
      <Card.Header>Jamie</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Jamie is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button
          basic
          color="green"
          onClick={event => {
            event.preventDefault();
            onNext();
          }}>
          Approve
        </Button>
      </div>
    </Card.Content>
  </Card>;

export default Component3;
// import React, { Component } from 'react';
// import { Card, Icon, Image, Button } from 'semantic-ui-react';
//
// import Component2 from './Component2';
// import Component1 from './Component1';
// export default class Component3 extends Component {
//   static defaultProps = {
//     changetoStep2: () => {}
//   };
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       step: 0
//     };
//   }
//   _changetoStep2 = event => {
//     event.preventDefault();
//     console.log('in step2');
//     // changetoStep2();
//     this.setState({
//       step: 2
//     });
//     console.log(this.props, 'this is the state');
//   };
//   render() {
//     return (
//       <Card>
//         {this.state === 2 ? <Component2 /> : <Component3 />}
//         <Image src="/assets/images/avatar/large/matthew.png" />
//         <Card.Content>
//           <Card.Header>Matthew</Card.Header>
//           <Card.Meta>
//             <span className="date">Joined in 2015</span>
//           </Card.Meta>
//           <Card.Description>
//             Matthew is a musician living in Nashville.
//           </Card.Description>
//         </Card.Content>
//         <Card.Content extra>
//           <a>
//             <Icon name="user" />
//             22 Friends
//           </a>
//         </Card.Content>
//         <Card.Content extra>
//           <div className="ui two buttons">
//             <Button basic color="green" onClick={this._changetoStep2}>
//               Approve
//             </Button>
//           </div>
//         </Card.Content>
//       </Card>
//     );
//   }
// }
