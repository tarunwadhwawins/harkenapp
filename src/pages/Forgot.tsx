
import { Description } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../assets/style/Colors";
import CommonButton from "../components/elements/button/CommonButton";
import { Icons } from "../components/elements/icon/Icons";
import InputLabelfield from "../components/elements/input/InputLabelfield";
import RoutePath from "../config/RoutePath";
import { FormGroup, FormWrapper, LogoWrapper, SignupWrapper } from "./ToolLogin";



 export const MainCaptions = styled.h1`
    font-family: 'roboto_slabregular';
    text-transform: uppercase;
    font-weight: 700;
    color: ${Colors.darkblue};;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;  
    width: 100%;
    margin: 10px 0 0;
    letter-spacing: 1px;
`;
export const SubCaption = styled.p`
    // background-color: ${Colors.darkgrey};
    border-radius: 4px;
    padding:  10px 15px;
    color: ${Colors.grey}; 
    font-size: 12px;
    font-family: 'montserratregular';
    text-align: center;
    line-height: 18px;
`;
const CaptchaWrapper = styled.div`
    text-align: center;
    width: 100%;    
    img{
        max-width: 290px;
        box-shadow: 0 0 3px rgb(0 0 0 / 25%);
        @media(max-width:767px){
            width: 100%;
        }
    }
`;

const Forgot = () => {
    const navigate = useNavigate();  
    return ( 
        <>
            <FormWrapper>                
                <LogoWrapper onClick={()=> navigate(RoutePath.LOGIN)}><img src={Icons.LogoImage}alt=""></img></LogoWrapper>
                
                <SignupWrapper> 
                    <MainCaptions>FORGOT PASSWORD</MainCaptions>
                    <SubCaption className="mb-3">Please enter your email address and we'll send you instructions on how to reset your password</SubCaption>                       
                    <FormGroup className="mb-2">
                        <InputLabelfield label="Email Address"></InputLabelfield>              
                    </FormGroup>
                    <CaptchaWrapper><img src={Icons.Captcha}alt=""></img></CaptchaWrapper>
                    <FormGroup className="buttonDiv">
                            <CommonButton onClick={()=> navigate(RoutePath.LOGIN)} buttonText="Submit"/>
                    </FormGroup> 
                </SignupWrapper>              
            </FormWrapper>
                       
            
        </>
    );
 };
 
 export default Forgot;
 