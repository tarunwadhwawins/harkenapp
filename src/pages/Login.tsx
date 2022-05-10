
import { Col, Row } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../assets/style/Colors";
import CommonButton from "../components/elements/button/CommonButton";
import { Icons } from "../components/elements/icon/Icons";
// import Inputfield from "../components/elements/input/Inputfield";
import InputLabelfield from "../components/elements/input/InputLabelfield";
import RoutePath from "../config/RoutePath";

const LogoWrapper = styled.div`
    text-align: center;
    width: 100%;
    cursor: pointer;
    max-width: 290px;
    img{
        height: calc(85px - 1em);
        margin: 0.5em 0 0;
    }   
`;
const FormGroup = styled.div`
    width: 100%;
    display: flex;
    grid-gap: 15px;
    padding: 0 20px;
    label {
        font-size: 12px;
        color: ${Colors.white};
        width: 100%;
        display: flex;
        font-family: 'montserratregular';
    }
    &.buttonDiv{        
        justify-content: center;
        grid-gap: 55px;
        @media(max-width: 767px){
            flex-direction: column;
            grid-gap: 10px;            
        }
        button{
            width: 100%;
            padding: 22px 1.25em;
            font-size: 18px;
            min-width: initial;  
            font-weight: normal;  
            letter-spacing: .5px;       
            @media(min-width: 768px){
                width: 250px;
            }
            @media(max-width: 767px){
                margin-bottom: 0;
                font-size: 15px;
                width: initial;
            }
        }
    }
`;
const FormWrapper = styled.div`
    // background-color:${Colors.extradarkblue}; 
    padding: 0;    
    display: flex;
    align-items: flex-start;
    position: relative;
    margin: auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;   
    padding:60px 0 0px;
    border-radius: 5px;
    overflow: hidden;
    height: calc(100vh - 50px);
    @media(max-width: 767px){
        flex-direction: column;
        min-height: 240px;
    }

`;

const HeaderWrap = styled.div`
    background-image: url('${Icons.HeaderBg}');
    background-position: top left;
    background-size: contain;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0 5px;
    &.darkBlue{
        background-color: ${Colors.darkblue};
        
        .row{
            margin: 0;
            align-items: center;
            display: flex;            
        }           
    }    
`;


const Login = () => {  

    const navigate = useNavigate();
    
    return ( 
        <>
            <HeaderWrap className="darkBlue">
                <LogoWrapper onClick={()=> navigate(RoutePath.LOGIN)}><img src={Icons.LogoImage1} alt="Image"></img></LogoWrapper>
            </HeaderWrap>
        
            <FormWrapper>
                        
                        <FormGroup className="buttonDiv">
                                <CommonButton buttonText="Property Search" />
                                <CommonButton onClick={()=> navigate(RoutePath.TOOLLOGIN)} buttonText="Valuation Tools" />
                        </FormGroup>              
            </FormWrapper>
            
            
        </>
    );
 };
 
 export default Login;
 