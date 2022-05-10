
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Col, Icon, Row, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import CommonButton from "../../components/elements/button/CommonButton";
import CheckBoxWithLabel from "../../components/elements/checkbox/CheckBoxWithLabel";
import ChooseColor from "../../components/elements/chooseColor/ChooseColor";
import ChooseFile from "../../components/elements/chooseFile/ChooseFile";
import Footer from "../../components/elements/footer/Footer";
import Header from "../../components/elements/header/Header";
import { Icons } from "../../components/elements/icon/Icons";
import InputLabelfield from "../../components/elements/input/InputLabelfield";
import SelectField from "../../components/elements/input/SelectField";
import UploadFileButton from "../../components/elements/input/UploadFileButton";
import TextEditor from "../../components/elements/textEditor/TextEditor";
import RoutePath from "../../config/RoutePath";
import { InnerContentWrapper } from "./../client/CreateClients";




export const FormControll = styled.div`
    width: 100%;
    
    &.googleIcon{
        position: relative;
        input{
            padding-right: 40px !important;
        }
        img {
            position: absolute;
            right: 10px;
            top: 26px;
            @media(max-width:991px){
                top: 25px;
            }
        }
    }
    label {
        font-size: 12px;
        color: ${Colors.lightblue};
        width: 100%;
        display: flex;
        font-family: 'montserratregular';
    }
    input{
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${Colors.lightgrey};
        border-radius: 0;
        outline: 0;
        height: 3rem;
        width: 100%;
        font-size: 1rem;
        margin: 0 0 20px 0; 
        padding: 0;
        // color: ${Colors.white};
        font-family: 'montserratregular';
        &:focus{
            border-bottom: 1px solid ${Colors.blue} !important;
        }        
    }
    &.buttonDiv{
        margin-top: 10px;
    }
    &.searchField{
        .select-wrapper{
            color: ${Colors.lightblue} ;
            input{
                color: ${Colors.lightblue} ;
            }
        }
        label{
            font-size: 12px;
            color: ${Colors.lightgrey}  !important;
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
    .col{
        width:100%;
    }
`;
const SearchCol = styled.div`
    padding: 0 30px;
    @media(max-width:991px){
        padding: 0 ;
    }
    .row{
        margin-bottom:10px;
    }
    .navigationWraper{
        .col{
            width:100%;
        }
    }
`;
const MainCaption = styled.h1`
    color: ${Colors.black};
    font-family: 'roboto_slabbold';
    text-align: left;
    font-size: 24px;
    line-height: 32px;
    margin: 33px 0 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    i{
        margin-left: 20px;
        color: ${Colors.blue};
    }
`;
export const Link = styled.a`
    cursor: pointer;
`;
export const DataTablesInfo = styled.div`
    width: 100%;
    p{
        color: ${Colors.blackShade};
        font-size: 12px;
        font-family: Montserrat,sans-serif;
        margin: 1rem  0rem;
        text-align: left;
        padding: 0 15px;
    }
`;
const DividerLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${Colors.lightblue};
`;
export const SubCaption = styled.h2`
    color: ${Colors.black};
    font-family: 'roboto_slabbold';
    text-align: left;
    font-size: 18px;
    line-height: 30px;
    margin: 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    
`;
export const FormFieldWrapper = styled.div`
    padding: 0 30px;
    @media(max-width:991px){
        padding: 0 ;
    }
    .input-field{
        padding: 0; 
        width: 100%;
        margin: 22px 0 40px;
    }
    .subHeaderCaption{
        p{
            font-family: Montserrat,sans-serif;
            font-size: 13px;
            color: ${Colors.blackShade};
            margin-bottom: 25px;       
        }
    }
    .smBtn{
        text-align: left;
    }
    .formLabel{
        font-family: Montserrat,sans-serif;
        font-size: 13px;
        color: ${Colors.lightblue};  
        margin: 15px 0 10px; 
        text-align: left;
    }
    .signatureImage{
        max-width: 150px;
    }
    .chooseFile{
        margin: 0;
    }
`;
export const UserProfileImage = styled.div`
    min-width: 130px;
    max-width: 130px;
    height: 130px;
    overflow: hidden;
    border-radius: 50%;
    margin: 20px 0;
    img{
        max-width: 100%;
        object-fit: cover;
        min-width: 150px;
        min-height: 150px;
    }
`;
export const ChooseColorField = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 45px;
    position: relative;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 0px;
    @media(min-width: 992px){
        
        margin: 0 auto;
    }
    
    input{
        padding: 0;
        border: none;
        background-color: transparent;
        height: 60px;
        width: 120%;
        overflow: hidden;
        border: none;
        box-shadow: none;
        -webkit-appearance: none;
        border: none;
        position: absolute;
        left: -5px;
        top: -5px;
        right: -35px;
    }
`;


const EditAccount = () => {  

    const navigate = useNavigate();
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
    const [accountThemeOption, setAccountThemeOption] = useState([
        {
            label: "--Select category--",
            value: "--Select category--",
        },
        {
            label: "Default",
            value: "Default",
        },
        {
            label: "NAI",
            value: "NAI",
        },
        {
            label: "NAI Portland",
            value: "NAI Portland",
        },
        {
            label: "Stockman Bank",
            value: "Stockman Bank",
        },

                    
    ])
    return ( 
        <>
     

                <InnerContentWrapper>
                    <SearchCol>
                        <Row>
                            <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                <MainCaption>CREATE ACCOUNT </MainCaption>
                                <p>Create your account. After doing it, you can enter a payment method.</p>
                            </Col>
                        </Row>
                    </SearchCol>
                    <DividerLine className="mb-2"></DividerLine>
                    <FormFieldWrapper>
                        <Row>
                            <Col s={12} m={12} l={12}>
                                <SubCaption className="mb-2">SETTINGS</SubCaption>
                            </Col>
                            <Col s={12} m={12} l={12}>
                                <CheckBoxWithLabel  label="Share client lists between agents?"  value="Share client lists between agents?"/>
                            </Col>

                            <Col s={12} m={12} l={12}>
                                <SubCaption className="mb-2 mt-3">CONTACT</SubCaption>
                            </Col>

                            <Col s={12} m={6} l={4}>
                                <FormControll className="asteriskSign">
                                    <InputLabelfield  label="Business Name"></InputLabelfield>   
                                </FormControll>    
                            </Col>
                            <Col s={12} m={6} l={4}>
                                <InputLabelfield  label="Phone Number"></InputLabelfield>       
                            </Col>

                            <Col s={12} m={12} l={12}>
                                <Row>
                                    <Col s={12} m={6} l={3}>
                                        <InputLabelfield  label="Street Address"></InputLabelfield>       
                                    </Col>

                                    <Col s={12} m={6} l={3}>
                                        <InputLabelfield  label="City"></InputLabelfield>       
                                    </Col>
                                    <Col s={12} m={6} l={3}>
                                        <FormControll className="searchField">
                                            <SelectField label="State" option={stateOptions}></SelectField>            
                                        </FormControll>      
                                    </Col>
                                    <Col s={12} m={6} l={3}>
                                        <InputLabelfield  label="Zipcode"></InputLabelfield>       
                                    </Col>
                                </Row>
                            </Col>

                            

                            
                            <Col s={12} m={12} l={12}>
                                <SubCaption>PROFILE</SubCaption>
                                <p className="formLabel">This section should outline more information about your company, and will be placed at the end of your forms.</p>
                                <p className="formLabel">About the company<sup>*</sup></p>
                                <FormControll>
                                    <TextEditor />
                                </FormControll>
                            </Col> 
                                    
                            <Col s={12} m={6} l={6} className="subHeaderCaption">
                                <SubCaption>ACCOUNT LOGO</SubCaption>
                                <p>You should update here your account logo to be used in any document generation.</p>
                                <Col s={12} m={8} l={8}>
                                    {/* <ChooseFile /> */}
                                    <UploadFileButton />
                                </Col>
                            </Col> 
                            
                            <Col s={12} m={12} l={12} className="subHeaderCaption">
                                <SubCaption>ACCOUNT ADMINISTRATOR</SubCaption>
                                <p>Enter the e-mail of the main account administrator.</p>
                            </Col>

                            <Col s={12} m={12} l={6}>
                                <Row>
                                    <Col s={12} m={12} l={12}>
                                        <FormControll>
                                            <InputLabelfield label="Account Administrator Email"></InputLabelfield>            
                                        </FormControll>
                                    </Col>
                                    <Col s={12} m={12} l={12}>
                                        <FormControll className="searchField">
                                            <SelectField label="Account Theme" option={accountThemeOption}></SelectField>            
                                        </FormControll>
                                    </Col>  

                                    <Col s={12} m={12} l={12} className="mb-2">
                                        <label className="chooseColorFieldLable">Choose Primary Color</label>
                                        <ChooseColorField>                                    
                                            <input type="color" name="favcolor" value="#0Da1c7"></input>            
                                        </ChooseColorField>
                                    </Col>
                                    <Col s={12} m={12} l={12} className="mb-2">
                                        <label className="chooseColorFieldLable">Choose Secondary Color</label>
                                        <ChooseColorField>                                    
                                            <input type="color" name="favcolor" value="#008db3"></input>             
                                        </ChooseColorField>
                                    </Col>
                                    <Col s={12} m={12} l={12} className="mb-2">
                                        <label className="chooseColorFieldLable">Choose Tertiary Color</label>
                                        <ChooseColorField>                                    
                                            <input type="color" name="favcolor" value="#00799f"></input>             
                                        </ChooseColorField>
                                    </Col>
                                    <Col s={12} m={12} l={12}>
                                        <FormControll>
                                            <InputLabelfield label="Per User Price"></InputLabelfield>            
                                        </FormControll>
                                    </Col>                                  
                                </Row>
                            </Col>
                            
                            
                            
                            <Col s={12} m={12} l={12} className="smBtn mt-2">
                                <CommonButton  buttonText="Update" onClick={()=> navigate(RoutePath.ACCOUNTS)}/>
                            </Col> 
                             
                        </Row>
                    </FormFieldWrapper>                   
                        
                   
                </InnerContentWrapper>
                        
            
        </>
    );
 };
 
 export default EditAccount;
 