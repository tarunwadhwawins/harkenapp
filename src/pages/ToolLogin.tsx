
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../assets/style/Colors";
import CommonButton from "../components/elements/button/CommonButton";
import { Icons } from "../components/elements/icon/Icons";
// import Inputfield from "../components/elements/input/Inputfield";
import InputLabelfield from "../components/elements/input/InputLabelfield";
import RoutePath from "../config/RoutePath";

export const LogoWrapper = styled.div`
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    cursor: pointer;
    max-width: 290px;
    @media(max-width:991px){
        padding: 50px 0;
        margin: 0;
    }
`;
export const FormGroup = styled.div`
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    label {
        font-size: 12px;
        color: ${Colors.white};
        width: 100%;
        display: flex;
        font-family: 'montserratregular';
    }
    &.buttonDiv{
        margin-top: 20px;
        button{
            width: 100%;
        }
    }
`;
const AccountOption = styled.div`
    text-align: center;
    max-width: 300px;
    margin: 0 auto;
    position: relative;
    
`;
const Link = styled.div`
    color: ${Colors.darkblue};
    font-size: 11px;
    font-family: 'montserratregular';
    cursor: pointer;
    &.upperCase{
        text-transform: uppercase;
    }
    &:hover{
        text-decoration: underline;
    }
`;
const DividedLine = styled.div`
    h3 {
        background-color:  ${Colors.blue};
        border: 1px solid ${Colors.white};
        color: ${Colors.white};;
        font-size: 12px;
        border-radius: 100%;
        min-height: 30px;
        min-width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 30px;
        margin: 15px auto; 
        position: relative;
        z-index: 9;
    }    
    &:before {
        position: absolute;
        content: "";
        width: 100%;
        left: 0;
        height: 1px;
        background-color: ${Colors.grey};
        z-index: 1;
        top: 50%;

    }
`;
export const FormWrapper = styled.div`
    background-color:${Colors.extradarkblue}; 
    padding: 0;    
    display: flex;
    align-items: flex-start;
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 850px;
    flex-direction: row;
    justify-content: center;
    align-items: center;   
    padding: 0px;
    box-shadow: 0 0 5px rgb(0 0 0 / 10%);
    border-radius: 5px;
    overflow: hidden;
    @media(max-width: 767px){
        flex-direction: column;
    }

`;
export const FromControlWraper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.white};
    padding: 50px;   
    @media(max-width:991px){
        padding: 30px 15px; 
    } 
`;
export const SignupWrapper = styled.div`
    margin: 0 auto;
    width: 100%; 
    background-color:${Colors.white}; 
    padding: 40px 15px;
`;

const Login = () => {  

    const navigate = useNavigate();
    
    return ( 
        <>
        
            <FormWrapper>
                <LogoWrapper><img src={Icons.LogoImage} alt=""></img></LogoWrapper>
                <SignupWrapper>
                        <FormGroup>
                                {/* <label>Email Address</label> 
                                <Inputfield/>    */}
                                <InputLabelfield label="Email Address"></InputLabelfield>               
                        </FormGroup>
                        <FormGroup>
                                {/* <label>Password</label>
                                <Inputfield/>  */}
                                <InputLabelfield label="Password"></InputLabelfield>   
                        </FormGroup>
                        <FormGroup className="buttonDiv">
                                <CommonButton onClick={()=> navigate(RoutePath.CLIENTS)} buttonText="Log in" />
                        </FormGroup>

                        <AccountOption>
                                <Link onClick={()=> navigate(RoutePath.FORGOT)}>Forgot your password?</Link>
                                <DividedLine><h3>OR</h3></DividedLine>
                                <Link className="upperCase" onClick={()=> navigate(RoutePath.SIGNUP)}>NEED TO CREATE AN ACCOUNT?</Link>
                        </AccountOption>
                    </SignupWrapper>               
            </FormWrapper>
            
            
        </>
    );
 };
 
 export default Login;
 