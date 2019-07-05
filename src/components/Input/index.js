import React, { Component} from 'react';
import styled from 'styled-components';

const FormInput = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    font-weight: bold;
  }

  > input {
    padding: 5px;
  }
`

export class InputField extends Component {
  render() {
    const { id, label, name, onChange } = this.props;
    return (
      <FormInput>
        <label htmlFor={name}>{label}</label>
        <input
          className='form-control'
          id={id}
          type="text"
          name={name}
          onChange={onChange}
        />
      </FormInput>
    )
  }
}