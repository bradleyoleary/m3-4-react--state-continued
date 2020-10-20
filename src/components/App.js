import React from 'react';
import data from '../data';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Typeahead from './Typeahead'

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typeahead
          suggestions={data.books}
          categories={data.categories}
          handleSelect={(suggestion) => {
            window.alert(suggestion);
          }}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   min-height: 100vh;

`;

export default App;