
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Col, Icon, Row, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import CommonButton from "../../components/elements/button/CommonButton";
import CheckBoxWithLabel from "../../components/elements/checkbox/CheckBoxWithLabel";
import ChooseFile from "../../components/elements/chooseFile/ChooseFile";
import Footer from "../../components/elements/footer/Footer";
import Header from "../../components/elements/header/Header";
import { Icons } from "../../components/elements/icon/Icons";
import InputLabelfield from "../../components/elements/input/InputLabelfield";
import SelectField from "../../components/elements/input/SelectField";
import TextEditor from "../../components/elements/textEditor/TextEditor";
import { DividerLine } from "../../components/modal/comps/AddNewComp";
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
const MainWrapper = styled.div`
    text-align: center;
    width: 100%;
`;
const SearchCol = styled.div`
    padding:0 30px;
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
export const TableWrapper = styled.div`
    padding: 0 15px;
    Table{
        box-shadow: 0 0 5px rgb(0 0 0 / 10%);
        thead{            
            th{
                color: ${Colors.white};
                padding: 15px 10px;                
                overflow: hidden;
                background-color: ${Colors.darkblue};
                border-radius: 0;
                font-family: Montserrat,sans-serif;
                font-size: 16px;
                &:first-child{
                    border-radius: 10px 0 0 0;
                }
                &:last-child{
                    border-radius:0 10px 0 0;
                }
            }
        }
        tbody{
            td{
                font-family: Montserrat,sans-serif;
                color: ${Colors.lightblue};
                font-size: 16px;                
                font-weight: 300;
                &.actionBtn{
                    max-width: 150px;
                    width: 150px;
                    i{
                        font-size: 20px;
                        margin: 0 5px;
                    }
                }
                .dangerColor{
                    color: ${Colors.red};
                    cursor: pointer;
                }
                .blueColor{
                    color: ${Colors.blue};
                    cursor: pointer;
                }
            }
        }
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

export const SubCaption = styled.h2`
    color: ${Colors.black};
    font-family: 'roboto_slabbold';
    text-align: left;
    font-size: 18px;
    line-height: 30px;
    margin: 33px 0 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    
`;
export const FormFieldWrapper = styled.div`
    padding:0 30px;
    .input-field{
        padding: 0; 
        width: 100%;
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



const CreateList = () => {  

    const navigate = useNavigate();
    const [officeOptions, setOfficeOptions] = useState([
        {
            label: "-- Select Property Type --",
            value: "-- Select Property Type --",
        },
        {
            label: "Hospitality",
            value: "Hospitality",
        },
        {
            label: "Industrial",
            value: "Industrial",
        },
        {
            label: "Land",
            value: "Land",
        },
        {
            label: "Multi-Family",
            value: "Multi-Family",
        },
        {
            label: "Office",
            value: "Office",
        },
        {
            label: "Retail",
            value: "Retail",
        },
        {
            label: "Single Family Residence",
            value: "Single Family Residence",
        },
    ])
    const [landlordOptions, setLandlordOptions] = useState([
        {
            label: "--Select category--",
            value: "--Select category--",
        },
        {
            label: "Landlord Representative",
            value: "Landlord Representative",
        },
        {
            label: "Tenant Representative",
            value: "Tenant Representative",
        },
        {
            label: "Seller Representative",
            value: "Seller Representative",
        },
        {
            label: "Buyer Representative",
            value: "Buyer Representative",
        },
        
    ])
    const [userAccountOption, setUserAccountOption] = useState([
        {
            label: "--Select category--",
            value: "--Select category--",
        },
        {
            label: "1 Utama Shopping Centre (Created at 4/5/2021)",
            value: "1 Utama Shopping Centre (Created at 4/5/2021)",
        },
        {
            label: "20199 N. 78th Pl Parking (Created at 7/26/2021)",
            value: "20199 N. 78th Pl Parking (Created at 7/26/2021)",
        },
        {
            label: "5M Real Estate, Inc. (Created at 11/19/2018)",
            value: "5M Real Estate, Inc. (Created at 11/19/2018)",
        },
        {
            label: "801 West Bay Center (Created at 7/14/2020)",
            value: "801 West Bay Center (Created at 7/14/2020)",
        },
        {
            label: "A Haus of Realty Inc (Created at 12/14/2018)",
            value: "A Haus of Realty Inc (Created at 12/14/2018)",
        },
        {
            label: "AaronBlemn (Created at 4/30/2020)",
            value: "AaronBlemn (Created at 4/30/2020)",
        },
        {
            label: "Aarongep (Created at 2/16/2020)",
            value: "Aarongep (Created at 2/16/2020)",
        },
        {
            label: "Aaronnut (Created at 1/7/2020)",
            value: "Aaronnut (Created at 1/7/2020)",
        },
        {
            label: "abc (Created at 3/28/2022)",
            value: "abc (Created at 3/28/2022)",
        },

                
    ])
    const [statusOption, setStatusOption] = useState([
        {
            label: "--Select category--",
            value: "--Select category--",
        },
        {
            label: "active",
            value: "active",
        },
        {
            label: "Disabled",
            value: "Disabled",
        },
                    
    ])
    const [roleOption, setRoleOption] = useState([
        {
            label: "--Select category--",
            value: "--Select category--",
        },
        {
            label: "User",
            value: "User",
        },
        {
            label: "Administrator",
            value: "Administrator",
        },
        {
            label: "Super Administrator",
            value: "Super Administrator",
        },
        {
            label: "Data Entry / Non-Eval Access",
            value: "Data Entry / Non-Eval Access",
        },
        {
            label: "None",
            value: "None",
        },
                    
    ])
    
    return ( 
        <>
         
                
                <InnerContentWrapper>
                    <SearchCol>
                        <Row>
                            <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                <MainCaption>PERSONAL</MainCaption>                                
                            </Col>
                        </Row>
                    </SearchCol>
                    <DividerLine className="mb-2"></DividerLine>
                    <FormFieldWrapper>
                        <Row>
                            
                            <Col s={12} m={12} l={2}>
                                <UserProfileImage><img src={Icons.UserImage} alt="Image"></img></UserProfileImage>
                            </Col>
                            <Col s={12} m={12} l={10}>
                                <Row>
                                    <Col s={12} m={6} l={4}>
                                        <InputLabelfield  label="First Name"></InputLabelfield>       
                                    </Col>
                                    <Col s={12} m={6} l={4}>
                                        <InputLabelfield  label="Last Name"></InputLabelfield>       
                                    </Col>
                                    <Col s={12} m={6} l={4}>
                                        <InputLabelfield  label="Email Address"></InputLabelfield>       
                                    </Col>
                                    <Col s={12} m={6} l={4}>
                                        <InputLabelfield  label="Phone Number"></InputLabelfield>       
                                    </Col>
                                    <Col s={12} m={6} l={4}>
                                        <InputLabelfield  label="Position (ex. Broker)"></InputLabelfield>       
                                    </Col>
                                    <Col s={12} m={6} l={4}>
                                        <InputLabelfield  label="Qualification (ex. SIOR)"></InputLabelfield>       
                                    </Col>
                                     
                                </Row>
                            </Col>
                            <Col s={12} m={12} l={12}>
                                        <SubCaption>BACKGROUND</SubCaption>
                                </Col>
                                    <Col s={12} m={12} l={6}>
                                        <p className="formLabel">Background & Experience</p>
                                        <FormControll>
                                            <TextEditor />
                                        </FormControll>
                                    </Col> 
                                    <Col s={12} m={12} l={6}>
                                        <p className="formLabel">Professional Affiliations</p>
                                        <FormControll>
                                            <TextEditor />
                                        </FormControll>
                                    </Col> 
                                    <Col s={12} m={12} l={6}>
                                        <p className="formLabel">Education Description</p>
                                        <FormControll>
                                            <TextEditor />
                                        </FormControll>
                                    </Col>
                                    <Col s={12} m={12} l={6}>
                                        <p className="formLabel">Scope of Responsibility</p>
                                        <FormControll>
                                            <TextEditor />
                                        </FormControll>
                                    </Col>
                                    <Col s={12} m={12} l={12} className="subHeaderCaption">
                                        <SubCaption>HANDWRITTEN SIGNATURE</SubCaption>
                                        <p>Your handwritten signature gives your document a personal touch. You can scan your signature and store it as a picture to insert in documents generated by Harken CRE.</p>
                                        <Col s={12} m={12} l={12}>
                                            <ChooseFile />
                                        </Col>
                                    </Col> 
                            <Col s={12} m={12} l={12} className="subHeaderCaption">
                                <SubCaption>SIGNIFICANT TRANSACTIONS</SubCaption>
                                <p>Enter any significant transactions that you have completed. These will be added to your form by category.</p>
                            </Col>
                            <Col s={11} m={11} l={11}>
                                <Row>
                                    <Col s={12} m={6} l={3}>
                                        <FormControll>
                                            <InputLabelfield label="Transaction Name"></InputLabelfield>            
                                        </FormControll>
                                    </Col>
                                    <Col s={12} m={6} l={3}>
                                        <FormControll>
                                            <InputLabelfield label="Square Footage"></InputLabelfield>            
                                        </FormControll>
                                    </Col>
                                    <Col s={12} m={6} l={3}>
                                        <FormControll className="searchField">
                                            <SelectField label="Office" option={officeOptions}></SelectField>            
                                        </FormControll>
                                    </Col>
                                    <Col s={12} m={6} l={3}>
                                        <FormControll className="searchField">
                                            <SelectField label="Landlord Representative" option={landlordOptions}></SelectField>            
                                        </FormControll>
                                    </Col>
                                </Row>
                            </Col>
                            <Col s={1} m={1} l={1}>
                                
                            </Col>

                            <Col s={12} m={12} l={12} className="smBtn mb-2">
                                <CommonButton icon={Icons.PlusIcon} buttonText="Add a new transaction" />
                            </Col>  

                            <Col s={12} m={12} l={12}>
                                <CheckBoxWithLabel  label="Include significant transactions on printed evaluations."  value="Include significant transactions on printed evaluations."/>
                            </Col> 

                            

                            <Col s={12} m={12} l={12}>                                
                                <Row>
                                    <Col s={12} m={12} l={12}>
                                        <SubCaption className="mb-2">PERMISSION</SubCaption>
                                    </Col>
                                    <Col s={12} m={6} l={4}>
                                        <FormControll className="searchField">
                                            <SelectField label="User Account" option={userAccountOption}></SelectField>            
                                        </FormControll>
                                    </Col>
                                    <Col s={12} m={6} l={4}>
                                        <FormControll className="searchField">
                                            <SelectField label="Role" option={roleOption}></SelectField>            
                                        </FormControll>
                                    </Col>
                                    <Col s={12} m={6} l={4}>
                                        <FormControll className="searchField">
                                            <SelectField label="Status" option={statusOption}></SelectField>            
                                        </FormControll>
                                    </Col>
                                </Row>                                    
                            </Col>
                            <Col s={12} m={12} l={12} className="smBtn">
                                <CommonButton  buttonText="Save" icon={Icons.SaveIcon}/>
                            </Col> 
                             
                        </Row>
                    </FormFieldWrapper>
                   
                </InnerContentWrapper>
            
            
        </>
    );
 };
 
 export default CreateList;
 