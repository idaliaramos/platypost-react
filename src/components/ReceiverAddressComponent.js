import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Form,
  Container,
  Divider,
  Header,
  Button,
  Image,
  Segment,
  Progress
} from 'semantic-ui-react';
const sizes = ['small'];

export default class ReceiverAddressComponent extends Component {
  static defaultProps = {
    onChange: () => {},
    onNext: () => {}
  };

  _handleChange = event => {
    this.props.onChange({
      [event.target.name]: event.target.value
    });
  };

  _handleClickBack = event => {
    event.preventDefault();
    this.props.onPrevious();
  };

  _handleClick = event => {
    event.preventDefault();
    // console.log(this.state, 'this is the state');
    // const {
    //   name,
    //   address_line1,
    //   address_line2,
    //   address_city,
    //   address_state,
    //   address_zip,
    //   message
    // } = this.state;

    this.props
      .onNext
      // {
      //   name: name.trim(),
      //   address_line1: address_line1.trim(),
      //   address_line2: address_line2.trim(),
      //   address_city: address_city.trim(),
      //   address_state: address_state.trim(),
      //   address_zip: address_zip.trim(),
      //   message: message.trim()
      // }
      ();
  };

  render() {
    return (
      <div>
        {/* <Header as="h1" textAlign="left">
      To:
    </Header>
    <Divider hidden /> */}

        <Form size={'small'} key={'small'}>
          <Form.Group>
            <Form.Input
              label="Name"
              placeholder="Optional"
              width={12}
              name="name"
              value={this.props.receiverInfo.name}
              onChange={this._handleChange}
            />
            {/* <Form.Input label="Company" placeholder="Optional" width={6} /> */}
          </Form.Group>
          <Form.Group>
            <Form.Input
              required
              label="Address Line 1 "
              placeholder="address line 1"
              width={12}
              name="address_line1"
              value={this.props.receiverInfo.address_line1}
              onChange={this._handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Address Line 2 "
              placeholder="address line 2"
              width={12}
              name="address_line2"
              value={this.props.receiverInfo.address_line2}
              onChange={this._handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              required
              label="address_city"
              placeholder="city"
              width={6}
              name="address_city"
              value={this.props.receiverInfo.address_city}
              onChange={this._handleChange}
            />
            <Form.Input
              required
              label="State "
              placeholder="state"
              width={6}
              name="address_state"
              value={this.props.receiverInfo.address_state}
              onChange={this._handleChange}
            />
            <Form.Input
              required
              label="Zip Code "
              placeholder="zipcode"
              width={6}
              name="address_zip"
              value={this.props.receiverInfo.address_zip}
              onChange={this._handleChange}
            />
          </Form.Group>

          <Form.TextArea
            label="PostCard Message"
            placeholder="Greetings From..."
            name="message"
            value={this.props.receiverInfo.message}
            onChange={this._handleChange}
          />

          <Form.Button
            floated="left"
            basic
            color="grey"
            onClick={this._handleClickBack}>
            Back
          </Form.Button>
          <Form.Button
            floated="left"
            color="purple"
            onClick={this._handleClick}>
            Next
          </Form.Button>
        </Form>
        <Divider hidden />
      </div>
    );
  }
}
// import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import {
//   Form,
//   Container,
//   Divider,
//   Header,
//   Button,
//   Image,
//   Segment,
//   Progress
// } from 'semantic-ui-react';
// const sizes = ['small'];
//
// export default class ReceiverAddressComponent extends Component {
//   static defaultProps = {
//     onNext: () => {}
//   };
//   // would be better practice to put in the constructor
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     name: '',
//   //     address_line1: '',
//   //     address_line2: '',
//   //     address_city: '',
//   //     address_state: '',
//   //     address_zip: '',
//   //     message: ''
//   //   };
//   // }
//
//   // _handleChange = event => {
//   //   this.setState({
//   //     [event.target.name]: event.target.value
//   //   });
//   // };
//   _handleClickBack = event => {
//     event.preventDefault();
//     this.props.onPrevious();
//   };
//
//   _handleClick = event => {
//     event.preventDefault();
//     console.log(event.target);
//     const {
//       name,
//       address_line1,
//       address_line2,
//       address_city,
//       address_state,
//       address_zip,
//       message
//     } = event.target;
//     console.log(name.event.target, 'target 2');
//     this.props.onNext({
//       name: name.event.target.trim(),
//       address_line1: address_line1.value.trim(),
//       address_line2: address_line2.value.trim(),
//       address_city: address_city.value.trim(),
//       address_state: address_state.value.trim(),
//       address_zip: address_zip.value.trim(),
//       message: message.value.trim()
//     });
//   };
//   render() {
//     return (
//       <div>
//         {/* <Header as="h1" textAlign="left">
//       To:
//     </Header>
//     <Divider hidden /> */}
//
//         <Form size={'small'} key={'small'} onSubmit={this._handleClick}>
//           <Form.Group>
//             <Form.Input
//               label="Name"
//               placeholder="Optional"
//               width={12}
//               name="name"
//
//               // onChange={this._handleChange}
//             />
//             {/* <Form.Input label="Company" placeholder="Optional" width={6} /> */}
//           </Form.Group>
//           <Form.Group>
//             <Form.Input
//               required
//               label="Address Line 1 "
//               placeholder="address line 1"
//               width={12}
//               name="address_line1"
//               // value={this.state.address_line1.value}
//               // onChange={this._handleChange}
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Input
//               label="Address Line 2 "
//               placeholder="address line 2"
//               width={12}
//               name="address_line2"
//               // value={this.state.address_line2.value}
//               // onChange={this._handleChange}
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Input
//               required
//               label="address_city"
//               placeholder="city"
//               width={6}
//               name="address_city"
//               // value={this.state.address_city.value}
//               // onChange={this._handleChange}
//             />
//             <Form.Input
//               required
//               label="State "
//               placeholder="state"
//               width={6}
//               name="address_state"
//               // value={this.state.address_state.value}
//               // onChange={this._handleChange}
//             />
//             <Form.Input
//               required
//               label="Zip Code "
//               placeholder="zipcode"
//               width={6}
//               name="address_zip"
//               // value={this.state.address_zip.value}
//               // onChange={this._handleChange}
//             />
//           </Form.Group>
//
//           <Form.TextArea
//             label="PostCard Message"
//             placeholder="Greetings From..."
//             name="message"
//             // value={this.state.message.value}
//             // onChange={this._handleChange}
//           />
//           <Form.Group>
//             <Form.Button
//               floated="left"
//               basic
//               color="grey"
//               onClick={this._handleClickBack}>
//               Back
//             </Form.Button>
//             <Form.Button floated="left" color="purple">
//               Next
//             </Form.Button>
//           </Form.Group>
//         </Form>
//         <Divider hidden />
//       </div>
//     );
//   }
// }