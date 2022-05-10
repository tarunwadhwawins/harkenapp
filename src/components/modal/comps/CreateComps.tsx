import React, { useState } from "react";
import { Col, Icon, Row, TextInput } from "react-materialize";

import styled from "styled-components";
import Colors from "../../../assets/style/Colors";
import { FormControll } from "../../../pages/client/CreateClients";
import { AddFieldWrap } from "../../../pages/listings/Overview";
import { FormGroup } from "../../../pages/ToolLogin";
import CommonButton from "../../elements/button/CommonButton";
import ChooseFile from "../../elements/chooseFile/ChooseFile";
import Datepicker from "../../elements/datepicker/Datepicker";
import { Icons } from "../../elements/icon/Icons";
import InputLabelfield from "../../elements/input/InputLabelfield";
import SelectField from "../../elements/input/SelectField";
import RadioSelect from "../../elements/radio/RadioSelect";
import Textarea from "../../elements/textarea/Textarea";
import BaseModal, { ModalList } from "../BaseModal";



const FormWrapper = styled.div`
    padding: 15px 20px;
    max-height: 80%;
    overflow: auto;
    
`;
const PopUpactionBtn = styled.div`    
    display: flex;
    justify-content: center;
    grid-gap: 15px;
    button{
        
    }
`;
export const UploadPropertyImage =styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`; 
export const RadioWrapper = styled.div`
    display: flex;
    justify-content: center;
    &.leftAlign{
        justify-content: flex-start;
        margin-top:15px;
    }
`;
export const SubCaption = styled.h2`
    color: ${Colors.black};
    font-family: 'roboto_slabbold';
    text-align: left;
    font-size: 22px;
    line-height: 30px;
    margin: 33px 0 20px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    
`;
export const SubCaption1 = styled.h2`
    color: ${Colors.black};
    font-family: 'roboto_slabbold';
    text-align: left;
    font-size: 16px;
    line-height: 30px;
    margin: 5px 0 0px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    
`;
export const GoogleMap = styled.div`
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    iframe{
        width: 100%;
        min-height: 250px;
    }
    
`;
export const AddOnBlock = styled.div`
    width: 100%;
    padding: 20px;
    display: flex; 
    background-color: ${Colors.extralightblue1};
    margin: 30px 0;
    border-radius: 5px;
   .row{
        width: 100%;
        margin-bottom: 0;
        button{
            margin-bottom: 0;
        }
        &.addExtraPropertyCol {
            margin: 20px 0;
            padding: 20px 0;
            border-radius: 5px;
            background-color: #fff;
        }
   }
`;


const TaskDetails = () => {
    console.log("Startdate",startDate);
    const [radioDropdown, setRadioDropdown] = useState("xl");
    const [AddCompanyIsVisible, setAddCompanyIsVisible] = useState(false);
    const [AddPersonIsVisible, setAddPersonIsVisible] = useState(false);

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
    const [propertyTypeOptions, setPropertyTypeOptions] = useState([
        {
            label: "-- Select Property Type --",
            value: "-- Select Property Type --",
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
            label: "Single Family Residence",
            value: "Single Family Residence",
        },
        
    ])
    const [subPropertyOptions, setSubPropertyOptions] = useState([
        {
            label: "-- Select Subtype --",
            value: "-- Select Subtype --",
        },
        {
            label: "Office Building",
            value: "Office Building",
        },
        {
            label: "Creative Loft",
            value: "Creative Loft",
        },
        {
            label: "Executive Suites",
            value: "Executive Suites",
        },
        {
            label: "Medical",
            value: "Medical",
        },
        {
            label: "Office Warehouse",
            value: "Office Warehouse",
        },
        {
            label: "Type My Own",
            value: "Type My Own",
        },
        
    ])
    const [typographyOptions, setTypographyOptions] = useState([
        {
            label: "-- Select Topography --",
            value: "-- Select Topography --",
        },
        {
            label: "Level",
            value: "Level",
        },
        {
            label: "Sloped",
            value: "Sloped",
        },
        {
            label: "Very Sloped",
            value: "Very Sloped",
        },
        {
            label: "Type My Own",
            value: "Type My Own",
        },
    ])
    const [lotShapeOptions, setLotShapeOptions] = useState([
        {
            label: "-- Select Lot Shape --",
            value: "-- Select Lot Shape --",
        },
        {
            label: "Rectangular",
            value: "Rectangular",
        },
        {
            label: "Square",
            value: "Square",
        },
        {
            label: "Irregular",
            value: "Irregular",
        },
        {
            label: "Type My Own",
            value: "Type My Own",
        },
        
    ])
    const [frontageOptions, setFrontageOptions] = useState([
        {
            label: "-- Select Frontage --",
            value: "-- Select Frontage --",
        },
        {
            label: "Poor",
            value: "Poor",
        },
        {
            label: "Fair",
            value: "Fair",
        },
        {
            label: "Average",
            value: "Average",
        },
        {
            label: "Good",
            value: "Good",
        },
        {
            label: "Very Good",
            value: "Very Good",
        },
        {
            label: "Excellent",
            value: "Excellent",
        },
        
    ])
    const [propertyConditionOptions, setPropertyConditionOptions] = useState([
        {
            label: "-- Select Property Condition --",
            value: "-- Select Property Condition --",
        },
        {
            label: "Excellent",
            value: "Excellent",
        },
        {
            label: "Very Good",
            value: "Very Good",
        },
        {
            label: "Good",
            value: "Good",
        },
        {
            label: "Average",
            value: "Average",
        },
        {
            label: "Fair",
            value: "Fair",
        },
        {
            label: "Poor",
            value: "Poor",
        },
        
    ])
    const [utilitiesOptions, setUtilitiesOptions] = useState([
        {
            label: "-- Select Utilities --",
            value: "-- Select Utilities --",
        },
        {
            label: "Full City Services",
            value: "Full City Services",
        },
        {
            label: "Septic and Cistern",
            value: "Septic and Cistern",
        },
        {
            label: "Septic and Well",
            value: "Septic and Well",
        },
        {
            label: "Community Sewer and Water",
            value: "Community Sewer and Water",
        },
        {
            label: "No City Services",
            value: "No City Services",
        },
        {
            label: "Type My Own",
            value: "Type My Own",
        },
        
    ])
    const [dimensionsOptions, setDimensionsOptions] = useState([
        {
            label: "--Select Option--",
            value: "--Select Option--",
        },
        {
            label: "SF",
            value: "SF",
        },
        {
            label: "AC",
            value: "AC",
        },
        
    ])
    const [sellerTypeOptions, setSellerTypeOptions] = useState([
        {
            label: "-- Select Seller Type --",
            value: "-- Select Seller Type --",
        },
        {
            label: "Person",
            value: "Person",
        },
        {
            label: "Company",
            value: "Company",
        },
        
    ])
    const [sellerNameOptions, setSellerNameOptions] = useState([
        {
            label: "-- Select Type --",
            value: "-- Select Type --",
        },
        {
            label: "Bhanu Priya",
            value: "Bhanu Priya",
        },
        {
            label: "Robyn Holiday",
            value: "Robyn Holiday",
        },
        {
            label: "Eric Wilson",
            value: "Eric Wilson",
        },
        {
            label: "Jasica Crist",
            value: "Jasica Crist",
        },
        
        
    ])

    return (
        
        <>  
 
            <BaseModal
                open={AddCompanyIsVisible}
                modalType={ModalList.AddCompany}
                subTitle={"Linkbynet"}
                onClose={setAddCompanyIsVisible}
                isConfirmationModal={true}
            />
            <BaseModal
                open={AddPersonIsVisible}
                modalType={ModalList.AddPerson}
                subTitle={"Linkbynet"}
                onClose={setAddPersonIsVisible}
            />
                      
                <FormWrapper>

                    <Row>
                        <Col s={12} m={12} l={12}>
                            <ChooseFile />
                        </Col>
                        <Col s={12} m={12} l={12}>
                            <RadioWrapper>
                                <RadioSelect value={radioDropdown}
                                            options={[
                                                {
                                                    label: `Leases`,
                                                    value: 'xl'
                                                },
                                                {
                                                    label: `Sales`,
                                                    value: 'l'
                                                }
                                            ]}
                                            onchange={(e: any) => {
                                                setRadioDropdown(e.target.value);
                                            }}

                                />
                            </RadioWrapper>
                        </Col>
                        <Col s={12} m={12} l={12} className="mb-1">
                            <SubCaption>LOCATION DETAILS</SubCaption>
                        </Col>

                        <Col s={12} m={12} l={12}>
                            <FormControll className="asteriskSign">
                                <InputLabelfield label="Property Name"></InputLabelfield>  
                            </FormControll> 
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll className="asteriskSign">
                                <InputLabelfield label="Street Address"></InputLabelfield>
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll>
                                <InputLabelfield label="Suite Number"></InputLabelfield>
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={4}>
                            <FormControll className="asteriskSign">
                                <InputLabelfield label="City"></InputLabelfield>
                            </FormControll>   
                        </Col>
                        <Col s={12} m={6} l={4}>
                            <FormControll className="asteriskSign searchField">
                                <SelectField label="State" option={stateOptions}></SelectField>            
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={4}>
                            <FormControll className="asteriskSign">
                                <InputLabelfield label="Zipcode"></InputLabelfield>
                            </FormControll>
                        </Col>
                        <Col s={12} m={12} l={12}>
                            <GoogleMap>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13004073.069200484!2d-104.65636269386096!3d37.275635351152815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1650275488919!5m2!1sen!2sin"></iframe>
                            </GoogleMap>                        
                        </Col>

                        <Col s={12} m={12} l={12}>
                            <SubCaption>PROPERTY DETAILS</SubCaption>
                        </Col>                        
                        <Col s={12} m={12} l={12}>
                            <FormControll>
                                <Textarea  label="Property Summary"/>
                            </FormControll>
                        </Col>
                        <Col s={12} m={12} l={12}>
                            <RadioWrapper className="leftAlign">
                                <RadioSelect value={radioDropdown}
                                            options={[
                                                {
                                                    label: `Building(s) with Land`,
                                                    value: 'bl'
                                                },
                                                {
                                                    label: `Land Only`,
                                                    value: 'land'
                                                }
                                            ]}
                                            onchange={(e: any) => {
                                                setRadioDropdown(e.target.value);
                                            }}

                                />
                            </RadioWrapper>
                        </Col>
                        <Col s={12} m={12} l={12}>
                            <div className="optionalAddBlock mt-2 mb-2 p-0">
                                <Row>
                                    <Col s={10} m={4} l={4}>
                                        <FormControll className="asteriskSign searchField">
                                            <SelectField label="Property Type" option={propertyTypeOptions}></SelectField>            
                                        </FormControll>
                                    </Col>
                                    <Col s={10} m={4} l={4}>
                                        <FormControll className="asteriskSign searchField">
                                            <SelectField label="Sub Property" option={subPropertyOptions}></SelectField>            
                                        </FormControll>
                                    </Col>
                                    <Col s={10} m={3} l={3}>
                                        <FormControll>
                                            <InputLabelfield label="SQ.FT."></InputLabelfield>           
                                        </FormControll>
                                    </Col>
                                    <Col s={2} m={1} l={1}>
                                        <AddFieldWrap><Icon>add_circle</Icon></AddFieldWrap>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        
                        

                        <Col s={12} m={6} l={6}>
                            <FormControll className="asteriskSign">
                                <InputLabelfield label="Land Size"></InputLabelfield>            
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll className="searchField">
                                <SelectField label="Size Type" option={dimensionsOptions}></SelectField>
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll className="searchField">
                                <SelectField label="Topography" option={typographyOptions}></SelectField>
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll className="searchField">
                                <SelectField label="Lot Shape" option={lotShapeOptions}></SelectField>
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll className="searchField">
                                <SelectField label="Frontage " option={frontageOptions}></SelectField>
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll className="asteriskSign searchField">
                                <SelectField label="Condition" option={propertyConditionOptions}></SelectField>
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll>
                                <InputLabelfield label="Built Year"></InputLabelfield>
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll>
                                <InputLabelfield label="Remodeled Year"></InputLabelfield>
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll className="searchField">
                                <SelectField label="Utilities" option={utilitiesOptions}></SelectField>
                            </FormControll>
                        </Col>
                        <Col s={12} m={12} l={12}>
                            <FormControll>
                                <InputLabelfield label="Zoning Type"></InputLabelfield>  
                            </FormControll>
                        </Col>
                        <Col s={12} m={12} l={12}>
                            <FormControll>
                                <Textarea label="Sales Notes" />
                            </FormControll>
                        </Col>


                        <Col s={12} m={12} l={12}>
                            <SubCaption>TRANSACTION DETAILS</SubCaption>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll className="asteriskSign">
                                <InputLabelfield label="Sale Price"></InputLabelfield>
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll className="asteriskSign">
                                <Datepicker />
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll>
                                <InputLabelfield label="Net Operating Income (NOI)"></InputLabelfield>
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll>
                                <InputLabelfield label="CAP Rate"></InputLabelfield>
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll>
                                <InputLabelfield label="Total Operating Expense"></InputLabelfield>
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll>
                                <InputLabelfield label="Operating Expense (PSF)"></InputLabelfield>
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll>
                                <InputLabelfield label="List Price"></InputLabelfield>
                            </FormControll>
                        </Col>                        
                        <Col s={12} m={6} l={6}>
                            <FormControll>
                                <Datepicker />
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll>
                                <InputLabelfield label="Days on Market"></InputLabelfield>
                            </FormControll>
                        </Col>  
                        <Col s={12} m={6} l={6}>
                            <FormControll>
                                <InputLabelfield label="Total Concessions"></InputLabelfield>
                            </FormControll>
                        </Col>  

                        <Col s={12} m={12} l={12}>
                            <SubCaption1>Seller</SubCaption1>
                        </Col>
                        <Col s={12} m={12} l={12}>
                            <div className="optionalAddBlock mt-2 mb-2 p-0">
                                <Row>
                                    <Col s={10} m={6} l={6}>
                                        <FormControll className="searchField">
                                            <SelectField label="Type" option={sellerTypeOptions}></SelectField>            
                                        </FormControll>
                                    </Col>
                                    <Col s={10} m={5} l={5}>
                                        <FormControll className="searchField">
                                            <SelectField label="Name" option={sellerNameOptions}></SelectField>            
                                        </FormControll>
                                    </Col>
                                    <Col s={2} m={1} l={1}>
                                        <AddFieldWrap onClick={()=> setAddCompanyIsVisible(true)}><Icon>add_circle</Icon></AddFieldWrap>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        {/* <Col s={12} m={12} l={12}>
                            <AddOnBlock>
                                <Row>
                                    <Col s={12} m={6} l={6}>
                                        <FormControll>
                                            <SelectField label="Type" option={sellerTypeOptions}></SelectField>            
                                        </FormControll>
                                    </Col>
                                    <Col s={12} m={6} l={6}>
                                        <FormControll>
                                            <SelectField label="Name" option={sellerNameOptions}></SelectField>            
                                        </FormControll>
                                    </Col>
                                    <Col s={12} m={12} l={12}>
                                        <PopUpactionBtn>
                                            <CommonButton onClick={()=> setAddCompanyIsVisible(true)} buttonText="Add Seller" icon={Icons.PlusIcon}/>
                                        </PopUpactionBtn>
                                    </Col>
                                </Row>                                
                            </AddOnBlock>                            
                        </Col> */}
                        
                        <Col s={12} m={12} l={12}>
                            <SubCaption1>Buyer</SubCaption1>
                        </Col>
                        <Col s={12} m={12} l={12}>
                            <div className="optionalAddBlock mt-2 mb-2 p-0">
                                <Row>
                                    <Col s={10} m={6} l={6}>
                                        <FormControll className="searchField">
                                            <SelectField label="Type" option={sellerTypeOptions}></SelectField>            
                                        </FormControll>
                                    </Col>
                                    <Col s={10} m={5} l={5}>
                                        <FormControll className="searchField">
                                            <SelectField label="Name" option={sellerNameOptions}></SelectField>            
                                        </FormControll>
                                    </Col>
                                    <Col s={2} m={1} l={1}>
                                        <AddFieldWrap onClick={()=> setAddPersonIsVisible(true)}><Icon>add_circle</Icon></AddFieldWrap>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        {/* <Col s={12} m={12} l={12}>
                            <AddOnBlock>
                                <Row>
                                    <Col s={12} m={6} l={6}>
                                        <FormControll>
                                            <SelectField label="Type" option={sellerTypeOptions}></SelectField>            
                                        </FormControll>
                                    </Col>
                                    <Col s={12} m={6} l={6}>
                                        <FormControll>
                                            <SelectField label="Name" option={sellerNameOptions}></SelectField>            
                                        </FormControll>
                                    </Col>
                                    <Col s={12} m={12} l={12}>
                                        <PopUpactionBtn>
                                            <CommonButton  onClick={()=> setAddPersonIsVisible(true)} buttonText="Add Buyer" icon={Icons.PlusIcon}/>
                                        </PopUpactionBtn>
                                    </Col>
                                </Row>                                
                            </AddOnBlock>                            
                        </Col> */}

                        <Col s={12} m={12} l={12}>
                            <SubCaption1>Mark this comp private</SubCaption1>
                        </Col>
                        <Col s={12} m={12} l={12}>
                            <RadioWrapper className="leftAlign">
                                <RadioSelect value={radioDropdown}
                                            options={[
                                                {
                                                    label: `No`,
                                                    value: 'bl'
                                                },
                                                {
                                                    label: `Yes`,
                                                    value: 'land'
                                                }
                                            ]}
                                            onchange={(e: any) => {
                                                setRadioDropdown(e.target.value);
                                            }}

                                />
                            </RadioWrapper>
                        </Col>

                    </Row>
                    <PopUpactionBtn>
                        <CommonButton buttonText="Create"/>
                    </PopUpactionBtn>


                </FormWrapper>
                    
                
                   
            </>
        );
    };
    
export default TaskDetails;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

