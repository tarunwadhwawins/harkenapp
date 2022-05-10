
import React, { useState } from "react";
import { Col, Row, TextInput } from "react-materialize";

import styled from "styled-components";
import Colors from "../../../assets/style/Colors";
import CommonButton from "../../elements/button/CommonButton";
import InputLabelfield from "../../elements/input/InputLabelfield";
import SelectField from "../../elements/input/SelectField";
import Datepicker from "../../elements/datepicker/Datepicker";
import { GridWrapper } from "../../../pages/CreateAccount";
import { MainCaptions } from "../../../pages/Forgot";
import BaseModal, { ModalList } from "../BaseModal";


export const DividerLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${Colors.extralightblue};
`;
export const FormControll = styled.div`
    width: 100%;
    
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
const FormWrapper = styled.div`
    padding: 15px 20px;
    justify-content: center;
    max-height: 80%;
    overflow: auto;
    .title{
        text-align: center;
        margin: 5px 0 15px 0;
    }
`;
const FieldTitle = styled.div`
    font-size: 16px;
    margin: 1em 0 1.5rem;
    text-align: center;
    font-family: 'Roboto Slab',serif;
    text-transform: uppercase;
    font-weight: 700;
`;
const ButtonWrapper = styled.div`
    text-align: center;
    button{
        margin: 0;
    }
`;
const MainCaption1 = styled.h2`
    color: ${Colors.black};
    font-family: 'roboto_slabbold';
    text-align: left;
    font-size: 16px;
    line-height: 32px;
    margin: 0px 0 15px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    svg{
        margin-left: 20px;  
        color: ${Colors.blue};
        cursor: pointer;
        font-size: 20px !important;
    }
`;

const AddNewComp = () => {
    console.log("Startdate",startDate);
    const [CreateCompsIsVisible, setCreateCompsIsVisible] = useState(false);
    
    const [newComp, setnewComp] = useState([
        {
            label: "Sale",
            value: "Sale",
        },
        {
            label: "lease",
            value: "lease",
        }

    ])
    const [statesOptions, setstatesOptions] = useState([
        {
            label: "-- Select State --",
            value: "-- Select State --",
        },
        {
            label: "Alabama",
            value: "Alabama",
        },
        {
            label: "Alaska",
            value: "Alaska",
        },
        {
            label: "Arizona",
            value: "Arizona",
        },
        {
            label: "Arkansas",
            value: "Arkansas",
        },
        {
            label: "California",
            value: "California",
        },
        {
            label: "Colorado",
            value: "Colorado",
        },
        {
            label: "Connecticut",
            value: "Connecticut",
        },
        {
            label: "Delaware",
            value: "Delaware",
        },
        {
            label: "District Of Columbia",
            value: "District Of Columbia",
        },
        {
            label: "Florida",
            value: "Florida",
        },
        {
            label: "Georgia",
            value: "Georgia",
        },
        {
            label: "Hawaii",
            value: "Hawaii",
        },
        {
            label: "Idaho",
            value: "Idaho",
        },
        {
            label: "Illinois",
            value: "Illinois",
        },
        {
            label: "Indiana",
            value: "Indiana",
        },
        {
            label: "Iowa",
            value: "Iowa",
        },
        {
            label: "Kansas",
            value: "Kansas",
        },
        {
            label: "Kentucky",
            value: "Kentucky",
        },
        {
            label: "Louisiana",
            value: "Louisiana",
        },
        {
            label: "Maine",
            value: "Maine",
        },
        {
            label: "Maryland",
            value: "Maryland",
        },
        {
            label: "Michigan",
            value: "Michigan",
        },
        {
            label: "Minnesota",
            value: "Minnesota",
        },
        {
            label: "Mississippi",
            value: "Mississippi",
        },
        {
            label: "Missouri",
            value: "Missouri",
        },
        {
            label: "Montana",
            value: "Montana",
        },
        {
            label: "Nebraska",
            value: "Nebraska",
        },
        {
            label: "Nevada",
            value: "Nevada",
        },
        {
            label: "New Hampshire",
            value: "New Hampshire",
        },
        {
            label: "New Jersey",
            value: "New Jersey",
        },
        {
            label: "New Mexico",
            value: "New Mexico",
        },
        {
            label: "New York",
            value: "New York",
        },
        {
            label: "North Carolina",
            value: "North Carolina",
        },
        {
            label: "North Dakota",
            value: "North Dakota",
        },
        {
            label: "Ohio",
            value: "Ohio",
        },
        {
            label: "Oklahoma",
            value: "Oklahoma",
        },
        {
            label: "Oregon",
            value: "Oregon",
        },
        {
            label: "Pennsylvania",
            value: "Pennsylvania",
        },
        {
            label: "Rhode Island",
            value: "Rhode Island",
        },
        {
            label: "South Carolina",
            value: "South Carolina",
        },
        {
            label: "South Dakota",
            value: "South Dakota",
        },
        {
            label: "Tennessee",
            value: "Tennessee",
        },
        {
            label: "Texas",
            value: "Texas",
        },
        {
            label: "Utah",
            value: "Utah",
        },
        {
            label: "Vermont",
            value: "Vermont",
        },
        {
            label: "Virginia",
            value: "Virginia",
        },
        {
            label: "Washington",
            value: "Washington",
        },
        {
            label: "West Virginia",
            value: "West Virginia",
        },
        {
            label: "Wisconsin",
            value: "Wisconsin",
        },
        {
            label: "Wyoming",
            value: "Wyoming",
        }
    ])

    const [cityOptions, setcityOptions] = useState([
        {
            label: "Select a City",
            value: "Select a City",
        },
        {
            label: "Oakland",
            value: "Oakland",
        },
        {
            label: "West Friendship",
            value: "West Friendship",
        },
        {
            label: "Woodbine",
            value: "Woodbine",
        }
    ])
    const [selectTypeOptions, setsSelectTypeOptions] = useState([
        {
            label: "Building(s) with Land",
            value: "Building(s) with Land",
        },
        {
            label: "Land Only",
            value: "Land Only",
        },
    ])
    const [propertyTypeOption, setspropertyTypeOption] = useState([
        {
            label: "Show All",
            value: "Show All",
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
            label: "Industrial",
            value: "Industrial",
        },
        {
            label: "Multi-Family",
            value: "Multi-Family",
        },
        {
            label: "Hospitality",
            value: "Hospitality",
        },
        {
            label: "Special",
            value: "Special",
        },
        {
            label: "Single Family Residence",
            value: "Single Family Residence",
        },
    ])
    


    return (
        
        <>  

            <BaseModal
            open={CreateCompsIsVisible}
            modalType={ModalList.CreateComps}
            subTitle={"Linkbynet"}
            onClose={setCreateCompsIsVisible}
            
            />
       
                <FormWrapper>
                    <GridWrapper>
                        <Row>
                            <Col s={12} m={12} l={12}>
                                <p className="title">Can't find what you're looking for? Create a new comp by <a href="#" onClick={()=>setCreateCompsIsVisible(true)}>clicking here.</a></p>
                            </Col>
                            <Col s={12} m={12} l={6}>
                                <Row className="mb-0">
                                    <Col s={12} m={12} l={6}>
                                        <Row className="mb-0">
                                            <Col s={12} m={12} l={12}>
                                                <MainCaption1>CREATE A NEW ACCOUNT</MainCaption1>
                                            </Col>
                                            <Col s={12} m={12} l={12}>
                                                <FormControll className="searchField">
                                                        <SelectField label="Comp Type" option={newComp}></SelectField>
                                                </FormControll>
                                            </Col>
                                            <Col s={12} m={12} l={12}>
                                                <FormControll className="searchField">
                                                        <SelectField label="Select Type" option={selectTypeOptions}></SelectField>
                                                </FormControll>
                                            </Col>
                                            <Col s={12} m={12} l={12}>
                                                <FormControll className="searchField">
                                                        <SelectField label="Property Type" option={propertyTypeOption}></SelectField>
                                                </FormControll>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col s={12} m={12} l={6}>
                                        <Row className="mb-0">
                                            <Col s={12} m={12} l={12}>
                                                <MainCaption1>Location</MainCaption1>
                                            </Col>
                                            <Col s={12} m={12} l={12}>
                                                <FormControll className="searchField">
                                                    <SelectField label="State" option={statesOptions}></SelectField>
                                                </FormControll>
                                            </Col>
                                            <Col s={12} m={12} l={12}>
                                                <FormControll className="searchField">
                                                    <SelectField label="City" option={cityOptions}></SelectField>
                                                </FormControll>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col s={12} m={12} l={12}>
                                        <FormControll> 
                                            <InputLabelfield label="Street Address"></InputLabelfield>            
                                        </FormControll>
                                    </Col>
                                </Row>
                            </Col>
                            <Col s={12} m={12} l={6}>
                                <Row className="mb-0">
                                    <Col s={12} m={12} l={12}>
                                        <MainCaption1>Additional Criteria</MainCaption1>
                                    </Col>
                                    <Col s={12} m={6} l={6}>
                                        <FormControll>
                                            <Datepicker />
                                        </FormControll>
                                    </Col>
                                    <Col s={12} m={6} l={6}>
                                        <FormControll>
                                            <Datepicker />
                                        </FormControll>
                                    </Col>
                                    <Col s={12} m={6} l={6}>
                                        <InputLabelfield label="Building SF Min" />
                                    </Col>
                                    <Col s={12} m={6} l={6}>
                                        <InputLabelfield label="Building SF Max" />
                                    </Col>
                                    <Col s={6} m={6} l={6}>
                                        <InputLabelfield label="Land ACRE Min" />
                                    </Col>
                                    <Col s={6} m={6} l={6}>
                                        <InputLabelfield label="Land ACRE Max" />
                                    </Col>
                                    <Col s={6} m={6} l={6}>
                                        <InputLabelfield label="CAP Rate Min" />
                                    </Col>
                                        <Col s={6} m={6} l={6} >
                                        <InputLabelfield label="CAP Rate Max" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </GridWrapper>
                    <Row>
                        

                        

                        

                        <Col s={12} m={12} l={12}>
                           
                            

                            

                            
                            
                        </Col>
                        <Col s={12} m={12} l={12}>
                            <ButtonWrapper>
                                <CommonButton buttonText="Search" />
                            </ButtonWrapper>
                        </Col>


                       
                        
                    </Row>
                </FormWrapper>
                    
                
                   
            </>
        );
    };
    
export default AddNewComp;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

