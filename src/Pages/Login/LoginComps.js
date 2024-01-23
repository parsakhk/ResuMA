import styled from 'styled-components'

export const RegisterIn = styled.div`
    width: 507px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 32px;
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