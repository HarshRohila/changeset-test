import styled from 'ember-styled-components';

export default styled.label`
  input {
    border-color: ${args => args.hasError ? 'red' : ''};
  }
`;