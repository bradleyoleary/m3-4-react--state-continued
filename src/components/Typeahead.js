import React, {useState} from 'react';
import styled from 'styled-components'
import Suggestion from './Suggestion'

const Typeahead = ({ handleSelect, suggestions, categories }) => {
    const [value, setValue] = useState('');
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(
      0
    );

      const matchedSuggestions = suggestions.filter((suggestion) => {
      const lowerCasedTitle = suggestion.title.toLowerCase()
      const lowerCasedValue = value.toLowerCase()
      const isIncluded = lowerCasedTitle.includes(lowerCasedValue)
      const moreThanTwoChars = value.length >= 2;

      return isIncluded && moreThanTwoChars;
    })
  
    return (
      <Wrapper>
        <Row>
        <Input
          type='text'
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          onKeyDown={(ev) => {
            switch (ev.key) {
              case "Enter": {
                handleSelect(matchedSuggestions[selectedSuggestionIndex].title);
                return;
              }
              case "ArrowUp": {
                setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
                return;
              }
              case "ArrowDown": {
                setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                return;
              }
            }
          }}
        />
        <ClearButton onClick={() => setValue('')}>Clear</ClearButton>
        </Row>

          {matchedSuggestions.length > 0 && (
          <Suggestions>
            {matchedSuggestions.map((match, matchIndex) => {

              const category = categories[match.categoryId]
              const isSelected = matchIndex === selectedSuggestionIndex

              return ( 
                <Suggestion 
                  key={match.id} 
                  suggestion={match}
                  category={category}
                  isSelected={isSelected}
                  searchValue={value}
                  onMouseEnter={() => {
                    setSelectedSuggestionIndex(matchIndex);
                  }}
                  onClick={() => {
                    handleSelect(match.title);
                  }}
                />
              );
            })}
          </Suggestions>
          )}
      </Wrapper>
    );
  };

const Input = styled.input`
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  padding: 10px;
  width: 350px
`

const ClearButton = styled.button`
  background: blue;
  color: white;
  font-weight: bold;
  margin-left: 5px;
  border-radius: 5px;
  padding: 10px;
  width: 80px;
  border: none;
  cursor: pointer;
`

const Suggestions = styled.ul`
  box-shadow: 0px 10px 25px 0px rgba(168,168,168,1);
  padding: 10px;
  border-radius: 3px;
  width: 350px;
`;

const Wrapper = styled.div`

`
const Row = styled.div`

`

export default Typeahead;