import React from 'react'
import styled from 'styled-components'

const Suggestion = ({ suggestion, onClick, searchValue, category, isSelected, onMouseEnter }) => {

    const lowerCasedSuggestion = suggestion.title.toLowerCase();

    const matchStart = lowerCasedSuggestion.indexOf(searchValue.toLowerCase())
    const matchEnd = matchStart + searchValue.length;

    const firstHalf = suggestion.title.slice(0, matchEnd);
    const secondHalf = suggestion.title.slice(matchEnd)

    return (
        <Wrapper isSelected={isSelected} onClick={onClick} onMouseEnter={onMouseEnter} >
         <span>
            {firstHalf}
            <Prediction> {secondHalf}</Prediction>
        </span> 
            in <Category>{category.name}</Category>
        </Wrapper>
    );
};

const Wrapper = styled.li`
  padding: 8px;
  background-color: ${props => props.isSelected ? "#fffbe6" : "transparent"};
`;

const Prediction = styled.span`
  font-weight: bold;
`;

const Category = styled.span`
    color: purple;

`

export default Suggestion;