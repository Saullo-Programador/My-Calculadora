import styled from 'styled-components'

export const BoxButton = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 75px;
    border-radius: 60px;
    background: #5d5d5e;
    margin: 0;
    padding: 0;
    box-shadow: 0px 2px 3px 2px #00000299;
    transition: 300ms;
    &:hover{
        background-color: #A200FF;
    }
`

export const TextButton = styled.button`
    display: flex;
    font-size: 24px;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    color: #FFF;
    width: 75px;
    height: 75px;
    border-radius: 60px;
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
`