import React, { Component } from 'react';
import {Form, Text} from 'react-form';


class BooksForm extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div>
        <Form>
          <label className="title">Title</label>
          <Text field="title" />
        </Form>
      </div>
    )
  }
}















export default BooksForm
