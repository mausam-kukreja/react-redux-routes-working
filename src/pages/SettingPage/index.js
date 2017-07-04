import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import t from 'tcomb-form';
import { addUser } from '../../actions';

const Form = t.form.Form;

// define your domain model with tcomb
// https://github.com/gcanti/tcomb
const Person = t.struct({
  name: t.String,
  surname: t.String
});

const SettingPage = React.createClass({



  getInitialState() {
    return {
      value: {
        name: '',
        surname: ''
      }
    };
  },

  onChange(value) {
    this.setState({value});
  },





  save() {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    // if validation fails, value will be null
    if (value) {
      // value here is an instance of Person
      this.props.addUser(value);
      this.setState({value:{}});
    }else{
      alert('invalid');
    }
  },

  render() {
    return (
      <div>
        <Form
          ref="form"
          type={Person}
          value={this.state.value}
          onChange={this.onChange}
        />
        <button onClick={this.save}>Save</button>
      </div>
    );
  }

});



function mapAction(dispatch){
  return bindActionCreators({addUser}, dispatch); 
}
export default connect(state=>(state),mapAction)(SettingPage);