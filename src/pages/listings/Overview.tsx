
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Collapsible, CollapsibleItem, Icon, Row, Tab, Icon as MaterializeIcon, Tabs } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import CommonButton from "../../components/elements/button/CommonButton";
import ChooseFile from "../../components/elements/chooseFile/ChooseFile";
import Footer from "../../components/elements/footer/Footer";
import Header from "../../components/elements/header/Header";
import { Icons } from "../../components/elements/icon/Icons";
import InputLabelfield from "../../components/elements/input/InputLabelfield";
import SelectField from "../../components/elements/input/SelectField";
import SideBar1 from "../../components/elements/sidebar/SideBar1";
import Textarea from "../../components/elements/textarea/Textarea";
import TextEditor from "../../components/elements/textEditor/TextEditor";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";
import { GoogleMap } from "../../components/modal/comps/EditComps";
import RoutePath from "../../config/RoutePath";
import TABS from "../../utils/Tabs.Utils";
import { DividerLine } from "../client/CreateClients";
import { GridWrapper } from "../CreateAccount";
import { FormControll, SubCaption } from "../setting/Setting";
import { RemoveFieldWrap } from "../userList/EditUserList";


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
    .formLabel{
        font-family: Montserrat,sans-serif;
        font-size: 13px;
        color: ${Colors.lightblue};  
        margin: 15px 0 10px; 
        text-align: left;
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
export const AddFieldWrap = styled.div`
    min-height: 70px;
    display: flex;
    align-items: center;
    i{
      color: ${Colors.blue};  
      cursor: pointer;
    }
`;




const Overview = () => {

    const navigate = useNavigate();
    const [ClosingPropertyIsVisible, setClosingPropertyIsVisible] = useState(false);
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
    const [primaryBrokerOptions, setPrimaryBrokerOptions] = useState([
        {
            label: "Brad Weidman",
            value: "Brad Weidman",
        },
        {
            label: "Jerry Fiume, SIOR, CCIM",
            value: "Jerry Fiume, SIOR, CCIM",
        },
        {
            label: "Jon Caiazza",
            value: "Jon Caiazza",
        },
        {
            label: "Max Straus",
            value: "Max Straus",
        },
        {
            label: "Nichole Booker, PhD",
            value: "Nichole Booker, PhD",
        },
    ])
    const [secondayBrokerOptions, setsecondayBrokerOptions] = useState([
        {
            label: "No secondary broker",
            value: "No secondary broker",
        },
        {
            label: "Brad Weidman",
            value: "Brad Weidman",
        },
        {
            label: "Jerry Fiume, SIOR, CCIM",
            value: "Jerry Fiume, SIOR, CCIM",
        },
        {
            label: "Jon Caiazza",
            value: "Jon Caiazza",
        },
        {
            label: "Max Straus",
            value: "Max Straus",
        },
    ])
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
    const [listingTypeOptions, setlistingTypeOptions] = useState([
        {
            label: "--Select Option--",
            value: "--Select Option--",
        },
        {
            label: "Sale",
            value: "Sale",
        },
        {
            label: "Lease",
            value: "Lease",
        },
        
    ])
    const [listingType2Options, setlistingType2Options] = useState([
        {
            label: "-- Select Lease Type --",
            value: "-- Select Lease Type --",
        },
        {
            label: "Absolute Net",
            value: "Absolute Net",
        },
        {
            label: "Gross",
            value: "Gross",
        },
        {
            label: "Modified Gross",
            value: "Modified Gross",
        },
        {
            label: "NNN",
            value: "NNN",
        },
        {
            label: "Modified Net",
            value: "Modified Net",
        },
        {
            label: "Full Service",
            value: "Full Service",
        },
        
    ])
    const [paymentOptions, setPaymentOptions] = useState([
        {
            label: "-- Select Lease Type --",
            value: "-- Select Lease Type --",
        },
        {
            label: "$/SF/Yr",
            value: "$/SF/Yr",
        },
        {
            label: "Monthly",
            value: "Monthly",
        },
        {
            label: "$/SF/Mo",
            value: "$/SF/Mo",
        },
        {
            label: "Annual Rent",
            value: "Annual Rent",
        },
                
    ])
    const [dimensionsOptions, setDimensionsOptions] = useState([
        {
            label: "SF",
            value: "SF",
        },
        {
            label: "AC",
            value: "AC",
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
    const [propertyClassOptions, setPropertyClassOptions] = useState([
        {
            label: "-- Select Property Class --",
            value: "-- Select Property Class --",
        },
        {
            label: "Class A",
            value: "Class A",
        },
        {
            label: "Class B",
            value: "Class B",
        },
        {
            label: "Class C",
            value: "Class C",
        },
        {
            label: "Class D",
            value: "Class D",
        },
        
        
    ])
    
    const [dadCompliantOptions, setDadCompliantOptions] = useState([
        {
            label: "Appears to be compliant",
            value: "Appears to be compliant",
        },
        {
            label: "Appears to be non-compliant",
            value: "Appears to be non-compliant",
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
    return (
        <>
            <BaseModal
                open={ClosingPropertyIsVisible}
                modalType={ModalList.ClosingProperty}
                subTitle={"Linkbynet"}
                onClose={setClosingPropertyIsVisible}
            />
            <SearchCol>
                <Row>
                    <Col className="subHeaderCaption" s={12} m={12} l={12}>
                        <MainCaption>CREATE PROPERTY | OVERVIEW </MainCaption>
                        <p className="subTitle"><Icon>info_outline</Icon> Lets get started! Enter some general information for this listing</p>
                    </Col>
                </Row>
            </SearchCol>
                <DividerLine className="mb-3"></DividerLine>
            <SearchCol>
                <Row>
                    <Col s={12} m={3} l={2}>
                        <SideBar1 />
                    </Col>
                    <Col s={12} m={9} l={10} className="sideNavWrapper">
                        <GridWrapper id="brokers">
                            <Row>
                                <Col s={12} m={12} l={12} className="mb-2">
                                    <MainCaption1>Brokers </MainCaption1>
                                </Col>
                                <Col s={12} m={12} l={12}>
                                    <FormControll className="searchField">
                                        <SelectField label="Primary Broker" option={primaryBrokerOptions}></SelectField>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={12} l={12}>
                                    <FormControll className="searchField">
                                        <SelectField label="Secondary Brokers" option={secondayBrokerOptions}></SelectField>
                                    </FormControll>
                                </Col>
                            </Row>
                        </GridWrapper>

                        <DividerLine className="deviderLine"></DividerLine>

                        <GridWrapper id="propertyDetails">
                            <Row>
                                <Col s={12} m={12} l={12}>
                                    <MainCaption1>Property Details </MainCaption1>
                                </Col>
                                <Col s={12} m={12} l={12}>
                                    <FormControll>
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

                                <Col s={12} m={6} l={3}>
                                    <FormControll className="asteriskSign" >
                                        <InputLabelfield label="City"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={3}>
                                    <FormControll className="searchField asteriskSign">
                                        <SelectField label="State" option={stateOptions}></SelectField>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={3}>
                                    <FormControll className="asteriskSign">
                                        <InputLabelfield label="ZipCode"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={3}>
                                    <FormControll className="asteriskSign">
                                        <InputLabelfield label="County"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={12} l={12}>
                                    <GoogleMap className="mt-1">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13004073.069200484!2d-104.65636269386096!3d37.275635351152815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1650275488919!5m2!1sen!2sin"></iframe>
                                    </GoogleMap>
                                </Col>

                                <Col s={12} m={12} l={12}>
                                    <p className="formLabel mb-1">Property Description</p>
                                    <FormControll className="mb-3">
                                        <TextEditor />
                                    </FormControll>
                                </Col>
                                <Col s={12} m={12} l={12}>
                                    <p className="formLabel mb-1">Sales Notes</p>
                                    <FormControll className="mb-3">
                                        <TextEditor />
                                    </FormControll>
                                </Col>

                                <Col s={12} m={3} l={3}>
                                    <FormControll className="searchField asteriskSign">
                                        <SelectField label="Listing Type" option={listingTypeOptions}></SelectField>
                                    </FormControll>
                                </Col>
                                {/* <Col s={12} m={6} l={4}>
                                    <FormControll className="searchField">
                                        <SelectField label="Listing Type" option={listingType2Options}></SelectField>
                                    </FormControll>
                                </Col> */}
                                <Col s={12} m={9} l={9}>
                                    <FormControll>
                                        <InputLabelfield label="Asking Price (Sale)"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                {/* <Col s={12} m={6} l={4}>
                                    <FormControll className="searchField">
                                        <SelectField label="Payment (Lease)" option={paymentOptions}></SelectField>
                                    </FormControll>
                                </Col> */}
                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="No. Stories"></InputLabelfield>
                                    </FormControll>
                                </Col>

                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="APN / Parcel ID / Tax ID"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="Owner of Record"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="Property Geocode"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={12} l={12}>
                                    <FormControll>
                                        <InputLabelfield label="Property Legal"></InputLabelfield>
                                    </FormControll>
                                </Col>


                            </Row>
                        </GridWrapper>

                        <DividerLine className="deviderLine"></DividerLine>

                        <GridWrapper id="specifications">
                            <Row>
                                <Col s={12} m={12} l={12}>
                                    <MainCaption1>Specifications </MainCaption1>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="Lot Size"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll className="searchField">
                                        <SelectField label="Dimensions" option={dimensionsOptions}></SelectField>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll className="searchField">
                                        <SelectField label="Topography" option={typographyOptions} ></SelectField>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll className="searchField">
                                        <SelectField label="Lot Shape" option={lotShapeOptions}></SelectField>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={12} l={12}>
                                    <Row>
                                        <Col s={12} m={6} l={6}>
                                            <FormControll className="searchField">
                                                <SelectField label="Frontage" option={frontageOptions}></SelectField>
                                            </FormControll>
                                        </Col>
                                    </Row>
                                </Col>
                                
                                
                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="Lot Frontage"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="Lot Depth"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll className="searchField">
                                        <SelectField label="Utilities" option={utilitiesOptions}></SelectField>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={12} l={12}>
                                    <FormControll className="asteriskSign">
                                        <InputLabelfield label="Zoning Type"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={12} l={12}>
                                    <FormControll>
                                        <Textarea label="Zoning Description" />
                                    </FormControll>
                                </Col>
                                <div className="optionalAddBlock mb-2">
                                    <Row>
                                        <Col s={10} m={5} l={5}>
                                            <FormControll className="searchField asteriskSign">
                                                <SelectField label="Property Type" option={propertyTypeOptions}></SelectField>
                                            </FormControll>
                                        </Col>
                                        <Col s={10} m={5} l={5}>
                                            <FormControll className="searchField asteriskSign">
                                                <SelectField label="Sub Property" option={subPropertyOptions}></SelectField>
                                            </FormControll>
                                        </Col>
                                        <Col s={2} m={2} l={2}>
                                            <AddFieldWrap><Icon>add_circle</Icon></AddFieldWrap>
                                        </Col>
                                    </Row>
                                </div>

                                <Col s={12} m={6} l={6}>
                                    <FormControll className="searchField">
                                        <SelectField label="Property Condition" option={propertyConditionOptions}></SelectField>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll className="searchField">
                                        <SelectField label="Property Class" option={propertyClassOptions}></SelectField>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={4}>
                                    <FormControll>
                                        <InputLabelfield label="Year Built"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={4}>
                                    <FormControll>
                                        <InputLabelfield label="Building Size"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={4}>
                                    <FormControll>
                                        <InputLabelfield label="Ceiling Height"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="Main Structure Base"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="Foundation"></InputLabelfield>
                                    </FormControll>
                                </Col>

                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="Parking"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="Basement"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={12} l={12}>
                                    <FormControll className="searchField">
                                        <SelectField label="ADA Compliance"option={dadCompliantOptions}></SelectField>
                                    </FormControll>
                                </Col>
                            </Row>
                        </GridWrapper>

                        <DividerLine className="deviderLine"></DividerLine>

                        <GridWrapper id="amenities">
                            <Row>
                                <Col s={12} m={12} l={12}>
                                    <MainCaption1>Amenities </MainCaption1>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="Exterior"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="Roof"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="Electrical"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="Plumbing"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="Heating/Cooling"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={6}>
                                    <FormControll>
                                        <InputLabelfield label="Windows"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={12} l={11}>
                                    <FormControll>
                                        <InputLabelfield label="Additional Feature"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={12} l={12} className="leftAlign">
                                    <CommonButton buttonText="Add a new feature" icon={Icons.PlusIcon} onClick={() => navigate(RoutePath.USERLIST)} />
                                </Col>
                            </Row>
                        </GridWrapper>

                        <DividerLine className="deviderLine"></DividerLine>

                        <GridWrapper id="images">
                            <Row>
                                <Col s={12} m={12} l={12}>
                                    <MainCaption1>Images </MainCaption1>
                                </Col>
                                <Col s={12} m={12} l={12}>
                                    <ChooseFile />
                                </Col>
                            </Row>
                        </GridWrapper>

                        <DividerLine className="deviderLine"></DividerLine>

                        <GridWrapper id="expirationDate">
                            <Row>
                                <Col s={12} m={12} l={12}>
                                    <MainCaption1>Expiration Date </MainCaption1>
                                </Col>
                                <Col s={12} m={6} l={4}>
                                    <FormControll className="searchField asteriskSign">
                                        <SelectField label="Status" option={statusOption} ></SelectField>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={6} l={4}>
                                    <FormControll>
                                        <InputLabelfield label="Expiration Date"></InputLabelfield>
                                    </FormControll>
                                </Col>
                                <Col s={12} m={12} l={12} className="leftAlign">
                                    <CommonButton onClick={() => setClosingPropertyIsVisible(true)} buttonText="Next Step" />
                                </Col>
                            </Row>
                        </GridWrapper>

                    </Col>
                </Row>

            </SearchCol>





        </>
    );
};

export default Overview;
