
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Col, Icon, Row, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import CommonButton from "../../components/elements/button/CommonButton";

import { Icons } from "../../components/elements/icon/Icons";
import InputLabelfield from "../../components/elements/input/InputLabelfield";
import SelectField from "../../components/elements/input/SelectField";
import RoutePath from "../../config/RoutePath";
import { FormGroup } from "./../CreateAccount";
import { FormFieldWrapper, InnerContentWrapper } from "./CreateClients";


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
        text-transform: uppercase;
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
            color: ${Colors.lightgrey}  !implements;
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
    margin: 33px 0 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    
`;




const ClientsEdit = () => {  

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

    const [accountOptions, setAccountOptions] = useState([
        {
            label: "-- Select Account --",
            value: "-- select account --",
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
        {
            label: "ABC Brickworks (Created at 3/30/2021)",
            value: "ABC Brickworks (Created at 3/30/2021)",
        },
        {
            label: "Aberlagsdek (Created at 1/1/2020)",
            value: "Aberlagsdek (Created at 1/1/2020)",
        },
        {
            label: "Aberlagsdek (Created at 1/11/2020)",
            value: "Aberlagsdek (Created at 1/11/2020)",
        },

    ])
    
    return ( 
        <>
            {/* <MainWrapper>
                <Header/> */}

                <InnerContentWrapper>
                    <SearchCol>
                        <Row>
                            <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                <MainCaption>BHANU PRIYA</MainCaption>
                                <p>Edit this client. Settings here will automatically be applied to every evaluation created for this event.</p>
                            </Col>
                        </Row>
                    </SearchCol>
                    <DividerLine></DividerLine>
                    <FormFieldWrapper>
                        <Row>
                            <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                <SubCaption>CLIENT</SubCaption>
                                <p>Specify the business information. This will be used for reference, and to email evaluations when completed.</p>
                            </Col>

                            <Col s={12} m={4} l={4}>
                                <FormControll className="asteriskSign">
                                    <InputLabelfield  label="First Name"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={4} l={4}>
                                <FormControll className="asteriskSign">
                                    <InputLabelfield  label="Last Name"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={4} l={4}>
                                <FormControll>
                                    <InputLabelfield  label="Title (Mr., Mrs., Ms.)"></InputLabelfield>            
                                </FormControll>
                            </Col>

                            <Col s={12} m={4} l={4}>
                                <FormControll className="googleIcon">
                                    <InputLabelfield  label="Company"></InputLabelfield>  
                                    <img  src={Icons.GooglLogo} alt="image"></img>          
                                </FormControll>
                            </Col>
                            <Col s={12} m={4} l={4}>
                                <FormControll>
                                    <InputLabelfield  label="Email Address"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={4} l={4}>
                                <FormControll>
                                    <InputLabelfield  label="Phone Number"></InputLabelfield>            
                                </FormControll>
                            </Col>

                            <Col s={12} m={4} l={3}>
                                <FormControll>
                                    <InputLabelfield  label="Street Address"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={4} l={3}>
                                <FormControll>
                                    <InputLabelfield  label="City"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={4} l={3}>
                                <FormControll className="searchField">
                                    <SelectField label="State" option={stateOptions}/>         
                                </FormControll>
                            </Col>
                            <Col s={12} m={4} l={3}>
                                <FormControll>
                                    <InputLabelfield  label="Zipcode"></InputLabelfield>            
                                </FormControll>
                            </Col>
                        </Row>
                    </FormFieldWrapper>

                    <FormFieldWrapper>
                        <Row>
                            <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                <SubCaption>ACCOUNT</SubCaption>
                                <p>Specify the Harken CRE's account this company belongs to. This field is set automatically upon user creation and shouldn't be changed regularly.</p>
                            </Col>

                            <Col s={12} m={12} l={12}>
                                <FormGroup className="searchField">
                                    <SelectField option={accountOptions}></SelectField>            
                                </FormGroup>
                            </Col> 

                            <Col s={12} m={12} l={12} className="smBtn">
                                <CommonButton onClick={()=> navigate(RoutePath.CLIENTS)} buttonText="Save Client" />
                            </Col>                           
                        </Row>
                    </FormFieldWrapper>
                    
                        
                   
                </InnerContentWrapper>
                {/* <Footer/>
            </MainWrapper> */}

            
            
           
            
        </>
    );
 };
 
 export default ClientsEdit;
 