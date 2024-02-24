import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 960px;
`
export const TitleContainer = styled.div`
    width: 100%;
    background: none;
    display: flex;
    align-items: start;
    justify-content: start;
`
export const Parts = styled.div`
    box-shadow: 0px 12px 20px 0px rgba(93, 93, 93, 0.15);
    background: #fff;
    width: 100%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
`
export const Part = styled.div`
    display: flex;
    padding: 32px;
    flex-direction: column;
    gap: 16px;
`
export const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 8px;
`
export const InputCon = styled.input`
  padding: 12px 16px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #D5D5D5;
  font-size: 1em;
  flex-grow: 1;
  box-sizing: border-box;
`
export const StyledButton = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "#2C5D81" : "white"};
    color: ${props => props.primary ? "white" : "#2C5D81"};

    font-size: 1em;
    padding: 12px 16px;
    font-weight: 500;
    border-radius: 8px;
    border: 1px solid #2C5D81;

    .icon {
        background: ${props => props.primary ? "transparent" : "white"};
    }
`;

export const EndContainer = styled.div`
    width: 100%;
    background: none;
    display: flex;
    align-items: end;
    justify-content: end;
    justify-content: space-between;
`