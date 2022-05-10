import styled from "styled-components";
import Colors from "../../../assets/style/Colors";
import Icon from "../icon/Icon";

const CommonBtn = styled.button`
    background-color: ${Colors.blue};
    text-transform: uppercase;
    padding: 0 20px;
    margin-bottom: 1.5em;
    height: auto;
    color: ${Colors.white};
    text-align: center;
    cursor: pointer;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 20%);
    border: none;
    min-width: 150px;
    font-size: 13px;
    font-family: Montserrat,sans-serif;
    border-radius: 3px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    line-height: 12px;
    &:hover{
        position:relative;
        background-color: ${Colors.darkblue};
    }
    &:focus{
        position:relative;
        background-color:  ${Colors.blue};
    }
    svg{
        font-size: 13px !important;
        margin-right: 6px;
    }
`;

interface CustomButtons {
    onClick?: (() => void) | undefined;
    buttonText?: string | undefined;
    icon?: any;
    className?: string | undefined;
}



export default function CustomButton({
    onClick,
    buttonText,
    icon,
    className
}: CustomButtons) {
    return <CommonBtn onClick={onClick} >{icon && <Icon icon={icon} className={className}></Icon>}{buttonText}</CommonBtn>;
}