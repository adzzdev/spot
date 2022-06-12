import styled from "styled-components";

const FormControl = styled.input`
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    box-shadow: inset 0 0 0 transparent;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    :focus{
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 5px;
        box-shadow: inset 0 0 0 transparent;
    }
`
export default FormControl;