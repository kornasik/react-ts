import React, { Component } from 'react';
import CreateForm from '../create-form/create-form';
import Header from '../header/header';
import Form from '../form/form';
import CreateFormName from '../create-form-name/create-form-name';
import CreateFormButton from '../create-form-button/create-form-button';

import './App.css';

export default class App extends Component {


  render() {
    return (
      <div className="form-build">
          <Header/>
          <CreateFormName/>
          <CreateForm/>
          <Form/>
          <CreateFormButton/>
      </div>
    );
  }
}