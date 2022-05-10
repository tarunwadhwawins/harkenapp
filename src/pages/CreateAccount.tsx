import { useState } from "react";
import { Col, Row } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../assets/style/Colors";
import CommonButton from "../components/elements/button/CommonButton";
import { Icons } from "../components/elements/icon/Icons";
import InputLabelfield from "../components/elements/input/InputLabelfield";
import SelectField from "../components/elements/input/SelectField";
import RoutePath from "../config/RoutePath";
import { FormControll } from "./client/CreateClients";
import { MainCaptions } from "./Forgot";
import { FormWrapper, LogoWrapper, SignupWrapper } from "./ToolLogin";



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
export const FormGroup = styled.div`
    width: 100%;
    input{
        border-bottom: 1px solid ${Colors.white} ;        
    }
    label {
        font-size: 12px;
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
    &.searchField{
        .select-wrapper{
            color: ${Colors.lightgrey} ;
            input{
                color: ${Colors.lightgrey} ;
            }
        }
        label{
            font-size: 12px;
        }
        ul{
            li{
                min-height: inherit;
                span{
                    color: ${Colors.blackShade} !important;
                    font-size: 12px;
                    padding: 10px 16px;
                }
            }
        }
        
    }
`;
export const GridWrapper = styled.div`
    .input-field{
       padding: 0; 
       width: 100%; 
    }
`;
const CaptchaWrapper = styled.div`
    text-align: center;
    width: 100%;
    img{
        max-width: 290px;
        box-shadow: 0 0 3px rgb(0 0 0 / 25%);
        @media (max-width:767px){
            width: 100%;
        }
    }
`;

const CreateAccount = () => {
    const navigate = useNavigate ();

    const [stateOptions, setStateOptions] = useState([
        {
            label: "-- Select State --",
            value: "-- select state --",
        },
        {
            label: "Alabama",
            value: "alabama",
        },
        {
            label: "Alaska",
            value: "alaska",
        },
        {
            label: "Arizona",
            value: "arizona",
        },
        {
            label: "Iowa",
            value: "iowa",
        },
        {
            label: "Kansas",
            value: "kansas",
        },
        {
            label: "Kentucky",
            value: "kentucky",
        },
        {
            label: "Mississippi",
            value: "mississippi",
        },
        {
            label: "Missouri",
            value: "missouri",
        },
        {
            label: "North Dakota",
            value: "north-dakota",
        },
        {
            label: "Ohio",
            value: "ohio",
        },
        {
            label: "Pennsylvania",
            value: "pennsylvania",
        },
        {
            label: "South Carolina",
            value: "south-carolina",
        },

    ])
    return(
        <>

            <FormWrapper>                
                <LogoWrapper onClick={()=> navigate(RoutePath.LOGIN)}><img src={Icons.LogoImage}alt=""></img></LogoWrapper> 
                <SignupWrapper>
                    <GridWrapper>
                        <Row>
                            <Col s={12} m={12} l={12}>
                            <MainCaptions>CREATE A NEW ACCOUNT</MainCaptions>
                            <SubCaption>If your company already uses Harken, you do not need to set up a new account. Speak with your company admin to be added to the existing account.</SubCaption> 
                            </Col>
                            <Col s={12} m={6} l={6}>
                                <FormControll>
                                    <InputLabelfield label="First Name"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={6} l={6}>
                                <FormControll>
                                    <InputLabelfield label="Last Name"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={6} l={6}>
                                <FormControll>
                                    <InputLabelfield label="Email Address"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={6} l={6}>
                                <FormControll>
                                    <InputLabelfield label="Company"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={12} l={12}>
                                <FormControll>
                                    <InputLabelfield label="Street Address"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={6} l={6}>
                                <FormControll>
                                    <InputLabelfield label="City"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={6} l={6}>
                                <FormControll className="searchField">
                                    <SelectField label="State" option={stateOptions}></SelectField>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={6} l={6}>
                                <FormControll>
                                    <InputLabelfield label="Zipcode"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={6} l={6}>
                                <FormControll>
                                    <InputLabelfield label="Phone Number"></InputLabelfield>            
                                </FormControll>
                            </Col>

                            <Col s={12} m={12} l={12}>
                                <CaptchaWrapper><img src={Icons.Captcha}alt=""></img></CaptchaWrapper>
                                <FormGroup className="buttonDiv">
                                    <CommonButton onClick={()=> navigate(RoutePath.LOGIN)} buttonText="Join Now"/>
                                </FormGroup> 
                            </Col>
                        </Row> 
                    </GridWrapper>
                    
                    
                    
                    
                </SignupWrapper>               
                                    
            </FormWrapper>

        </>
    );
}
export default CreateAccount;