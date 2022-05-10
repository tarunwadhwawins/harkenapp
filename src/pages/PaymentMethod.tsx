
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Row, Tab, Icon as MaterializeIcon, Tabs, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../assets/style/Colors";
import CommonButton from "../components/elements/button/CommonButton";
import GrayButton from "../components/elements/button/GrayButton";
import Icon from "../components/elements/icon/Icon";
import { Icons } from "../components/elements/icon/Icons";
import InputLabelfield from "../components/elements/input/InputLabelfield";
import SelectField from "../components/elements/input/SelectField";
import Paginations from "../components/elements/pagination/Pagination";
import BaseModal, { ModalList } from "../components/modal/BaseModal";
import { DividerLine } from "../components/modal/comps/AddNewComp";
import RoutePath from "../config/RoutePath";
import { TableWrapper } from "./client/Clients";
import {  FormControll, FormFieldWrapper, SubCaption } from "./client/CreateClients";






export const ContentWrapper = styled.div`

    min-height: calc(100vh - 150px);
    .subHeaderCaption{
        text-align: left;
        p{
            font-family: Montserrat,sans-serif;
            font-size: 13px;
            color: ${Colors.blackShade};
            display: flex;
            align-items: center;
            i{
                font-size: 16px;
                margin-right: 5px;
            }
        }
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
    .tabContentWrapper{
        padding: 1px 0px 20px;
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
        cursor: pointer;
    }
`;
export const Link = styled.a`
    cursor: pointer;
    text-transform: capitalize;
`;
export const DataTablesInfo = styled.div`
    width: 100%;
    p{
        color: ${Colors.blackShade};
        font-size: 12px;
        font-family: Montserrat,sans-serif;
        margin: 1rem 0rem 0;
        text-align: left;
        padding: 0 15px;
    }
`;
export const AddFieldWrap = styled.div`
    min-height: 70px;
    display: flex;
    align-items: center;
    i{
      color: ${Colors.blue};  
      cursor: pointer;
    }
`;
const ThemeColor =styled.div`
    background-color: ${Colors.extralightblue};
    display: inline-flex;
    width: 40%;
    border-radius: 3px;
    @media screen and (max-width: 991px) {
        width: 50%;
    }
    p{
        padding: 15px;
        margin: 0;
    }
`;





const PaymentMethod = () => {

    const navigate = useNavigate();
    const [DeleteConfirmIsVisible, setDeleteConfirmIsVisible] = useState(false);
    
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
    
    
    return (
        <>
           <BaseModal
            open={DeleteConfirmIsVisible}
            modalType={ModalList.DeleteConfirm}
            subTitle={"Linkbynet"}
            onClose={setDeleteConfirmIsVisible}
            isConfirmationModal={true}
            /> 
            
            
            


            <SearchCol>                
                <Row>
                    <Col className="subHeaderCaption mb-2" s={12} m={12} l={12}>
                        <MainCaption>Change Payment Method</MainCaption>
                        <ThemeColor className="mt-1"><p>Current payment method: Visa **** 4242</p></ThemeColor>
                    </Col>
                </Row>
            </SearchCol>
            <DividerLine className="mb-3"></DividerLine>

            <FormFieldWrapper>
                        <Row>
                            
                            <Col s={12} m={6} l={12}>
                                <FormControll>
                                    <InputLabelfield  label="Name on card"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={6} l={12}>
                                <FormControll>
                                    <InputLabelfield  label="Billing Address"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={4} l={4}>
                                <FormControll>
                                    <InputLabelfield  label="City"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={12} m={4} l={4}>
                                <FormControll className="searchField">
                                    <SelectField label="State"  option={stateOptions}/>         
                                </FormControll>
                            </Col>
                            
                            <Col s={12} m={4} l={4}>
                                <FormControll>
                                    <InputLabelfield  label="Zipcode"></InputLabelfield>            
                                </FormControll>
                            </Col>
                            <Col s={8} m={10} l={10}>
                                <FormControll className="paymentField">
                                    <InputLabelfield  label="Card Number" icon="credit_card"></InputLabelfield> 
                                </FormControll>
                            </Col>
                            <Col s={4} m={2} l={2}>
                                <FormControll>
                                    <InputLabelfield  label="MM / YY CVC"></InputLabelfield> 
                                </FormControll>
                            </Col>
                            
                            <Col s={12} m={12} l={12} className="smBtn buttonGap">
                                <GrayButton onClick={()=> navigate(RoutePath.BILLING)} buttonText="Back" />
                                <CommonButton buttonText="Save" />
                            </Col> 
                            
                            
                        </Row>
                    </FormFieldWrapper>
            





        </>
    );
};

export default PaymentMethod;
