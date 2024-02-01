import styled from 'styled-components'

export const RegisterIn = styled.div`
    width: 507px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 12px 20px 0px rgba(93, 93, 93, 0.15);
`
export const ContentTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    background: #FFF;
    margin-bottom: 16px;
    padding-top: 32px;
    * {
        background: #FFF;
    }
`
export const Seperator = styled.hr`
  border-top: 1px solid #bbb;
  border-radius: 5px;
  width: 100%;
`
export const ContentDown = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 32px;
    background: #FAFBFC;
    padding-bottom: 32px;

    * {
        background: #FAFBFC;
    }
`

/** CONTENT TOP ITEMS */
export const IconImg = styled.img``

export const TopText = styled.p`
    font-weight: 700;
    font-size: 24px;
    color: #3E3E3E;
`
export const TopDesc = styled.p`
    font-weight: 400;
    font-size: 16px;
`

/** LOWER PART COMPONENTS */
export const Form = styled.form`
    display: flex;
    padding: 0px 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 392px;
`
export const StyledButton = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "#2C5D81" : "white"};
    color: ${props => props.primary ? "white" : "#2C5D81"};
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    width: 100%;
    font-size: 1em;
    padding: 12px 16px;
    font-weight: 500;
    border-radius: 8px;
    border: 1px solid #2C5D81;

    .icon {
        background: ${props => props.primary ? "transparent" : "white"};
    }
`;

export const ErrorPlacer = styled.div`
    display: flex;
    width: 151px;
    height: 28px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const EndText = styled.p`
    font-size: 16px;
`
export const Link = styled.a`
    font-style: normal;
    font-size: 16px;
    text-decoration: none;
`