
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Collapsible, CollapsibleItem, Icon, Row, Tab, Icon as MaterializeIcon, Tabs } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import CommonButton from "../../components/elements/button/CommonButton";
import CheckBoxWithLabel from "../../components/elements/checkbox/CheckBoxWithLabel";
import InputLabelfield from "../../components/elements/input/InputLabelfield";
import SelectField from "../../components/elements/input/SelectField";
import RadioSelect from "../../components/elements/radio/RadioSelect";
import EvaluationTab from "../../components/elements/sidebar/EvaluationTab";
import SideBar2 from "../../components/elements/sidebar/SideBar2";
import TextEditor from "../../components/elements/textEditor/TextEditor";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";
import { GoogleMap } from "../../components/modal/comps/EditComps";
import RoutePath from "../../config/RoutePath";
import { DividerLine } from "../client/CreateClients";
import { GridWrapper } from "../CreateAccount";
import { FormControll, SubCaption } from "../setting/Setting";


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
const RadioWrapper = styled.div`
`;




const EvaluationOverview = () => {

    const navigate = useNavigate();
    const [radioDropdown, setRadioDropdown] = useState("xl");
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
    const [electricalOption, setElectricalOptionOptions] = useState([
        {
            label: "--Select Option--",
            value: "--Select Option--",
        },
        {
            label: "Single Phase",
            value: "Single Phase",
        },
        {
            label: "Three Phase",
            value: "Three Phase",
        },
        {
            label: "Type My Own",
            value: "Type My Own",
        },
    ])
    const [roofOptions, setRoofOptionsOptions] = useState([
        {
            label: "-- Select Lease Type --",
            value: "-- Select Lease Type --",
        },
        {
            label: "Standing Seam Metal",
            value: "Standing Seam Metal",
        },
        {
            label: "60mil TPO Membrane",
            value: "60mil TPO Membrane",
        },
        {
            label: "EPDM Membrane",
            value: "EPDM Membrane",
        },
        {
            label: "Asphalt Shingle",
            value: "Asphalt Shingle",
        },
        {
            label: "Tar and Gravel",
            value: "Tar and Gravel",
        },
        {
            label: "Type My Own",
            value: "Type My Own",
        },
        
    ])
    const [paymentOptions, setPaymentOptions] = useState([
        {
            label: "-- Select Lease Type --",
            value: "-- Select Lease Type --",
        },
        {
            label: "Wood Siding",
            value: "Wood Siding",
        },
        {
            label: "Steel",
            value: "Steel",
        },
        {
            label: "Wood",
            value: "Wood",
        },
        {
            label: "Glass",
            value: "Glass",
        },
        {
            label: "Brick",
            value: "Brick",
        },
        {
            label: "Masonry",
            value: "Masonry",
        },
        {
            label: "Concrete Block",
            value: "Concrete Block",
        },
        {
            label: "Masonry with Block Back Up",
            value: "Masonry with Block Back Up",
        },
        {
            label: "Concrete Board and Masonry",
            value: "Concrete Board and Masonry",
        },
        {
            label: "Masonry and EFIS exterior",
            value: "Masonry and EFIS exterior",
        },
        {
            label: "Type My Own",
            value: "Type My Own",
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
        {
            label: "Type My Own",
            value: "Type My Own",
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
    const [typeOption, setTypeOption] = useState([
        {
            label: "--Select Type--",
            value: "--Select Type--",
        },
        {
            label: "Sale",
            value: "Sale",
        },
        {
            label: "Non Sale",
            value: "Non Sale",
        },
                    
    ])
    const [propertyRightsOption, setPropertyRightsOption] = useState([
        {
            label: "Fee Simple",
            value: "Fee Simple",
        },
        {
            label: "Leased Fee",
            value: "Leased Fee",
        },
        {
            label: "Leasehold Interest",
            value: "Leasehold Interest",
        },
                    
    ])
    const [propertyTypeOptions, setPropertyTypeOptions] = useState([        
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
    const [constructionTypeOptions, setConstructionTypeOptions] = useState([
        {
            label: "-- Construction Type --",
            value: "-- ConstructionT Type --",
        },
        {
            label: "Wood Frame",
            value: "Wood Frame",
        },
        {
            label: "Pre-Engineered Steel",
            value: "Pre-Engineered Steel",
        },
        {
            label: "Concrete Tilt Up Panels",
            value: "Concrete Tilt Up Panels",
        },
        {
            label: "Post Beam",
            value: "Post Beam",
        },
        {
            label: "Concrete Masonry Units (CMU)",
            value: "Concrete Masonry Units (CMU)",
        },
        {
            label: "Structural Insulated Panels (SIPs)",
            value: "Structural Insulated Panels (SIPs)",
        },
        {
            label: "Type My Own",
            value: "Type My Own",
        },
        
    ])
    const [foundationOptions, setFoundationOptions] = useState([
        {
            label: "-- Choose Foundation --",
            value: "-- Choose Foundation --",
        },
        {
            label: "Slab On Grade",
            value: "Slab On Grade",
        },
        {
            label: "4 with Standard Footings",
            value: "4 with Standard Footings",
        },
        {
            label: "6 with Standard Footings",
            value: "6 with Standard Footings",
        },
        {
            label: "8 with Standard Footings",
            value: "8 with Standard Footings",
        },
        {
            label: "Standard Footings Only",
            value: "Standard Footings Only",
        },
        {
            label: "Helical Piers",
            value: "Helical Piers",
        },
        {
            label: "Type My Own",
            value: "Type My Own",
        },
        
    ])
    const [parkingOptions, setParkingOptions] = useState([
        {
            label: "-- Select Parking --",
            value: "-- Select Parking --",
        },
        {
            label: "Off Street",
            value: "Off Street",
        },
        {
            label: "Shared On Street",
            value: "Shared On Street",
        },
        {
            label: "Parking Garage",
            value: "Parking Garage",
        },
        {
            label: "Type My Own",
            value: "Type My Own",
        },
                
    ])
    const [basementOptions, setBasementOptions] = useState([
        {
            label: "-- Select Basement --",
            value: "-- Select Basement --",
        },
        {
            label: "None",
            value: "None",
        },
        {
            label: "Partial",
            value: "Partial",
        },
        {
            label: "Full",
            value: "Full",
        },
        {
            label: "Type My Own",
            value: "Type My Own",
        },
                
    ])
    const [conformingDeterminationOptions, setConformingDeterminationOptions] = useState([

        {
            label: "Appears to be conforming",
            value: "Appears to be conforming",
        },
        {
            label: "Appears to be non-conforming",
            value: "Appears to be non-conforming",
        },
        {
            label: "Appears to be conforming pending special review",
            value: "Appears to be conforming pending special review",
        },
        
                
    ])
    const [windowsOptions, setWindowsOptions] = useState([

        {
            label: "Insulated Double Pane",
            value: "Insulated Double Pane",
        },
        {
            label: "Insulated & Cased",
            value: "Insulated & Cased",
        },
        {
            label: "Single Pane",
            value: "Single Pane",
        },
        {
            label: "No Windows",
            value: "No Windows",
        },
        {
            label: "Mix of Old & New",
            value: "Mix of Old & New",
        },
        {
            label: "Type My Own",
            value: "Type My Own",
        },
        
                
    ])
    const [coolingOptions, setCoolingOptions] = useState([

        {
            label: "GFA with Cooling",
            value: "GFA with Cooling",
        },
        {
            label: "GFA Blowers",
            value: "GFA Blowers",
        },
        {
            label: "Infrared Gas Radiant Tube",
            value: "Infrared Gas Radiant Tube",
        },
        {
            label: "NHVAC System",
            value: "NHVAC System",
        },
        {
            label: "Boiler & Chiller System",
            value: "Boiler & Chiller System",
        },
        {
            label: "Electric",
            value: "Electric",
        },
        {
            label: "In Floor Radiant Heating",
            value: "In Floor Radiant Heating",
        },
        {
            label: "No Heating",
            value: "No Heating",
        },
        {
            label: "Type My Own",
            value: "Type My Own",
        },
        
                
    ])
    const [plumbingOptions, setPlumbingOptions] = useState([

        {
            label: "No Plumbing",
            value: "No Plumbing",
        },
        {
            label: "Average per Code",
            value: "Average per Code",
        },
        {
            label: "Above Average",
            value: "Above Average",
        },
        {
            label: "Type My Own",
            value: "Type My Own",
        },
               
    ])
    const [trafficCountOption, SetTrafficCountOptions] = useState([
        {
            label: "-- Select Traffic Count (ADT) Option --",
            value: "-- Select Traffic Count (ADT) Option --",
        },
        {
            label: "Input a Value",
            value: "Input a Value",
        },
        {
            label: "Under 2,500",
            value: "Under 2,500",
        },
        {
            label: "Unknown",
            value: "Unknown",
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
            <EvaluationTab />
            <SearchCol>                
                <Row>
                    <Col className="subHeaderCaption" s={12} m={12} l={12}>
                        <MainCaption>OVERVIEW</MainCaption>
                        <p className="subTitle"><MaterializeIcon>info_outline</MaterializeIcon> Lets get started! Enter some general information for this listing.</p>
                    </Col>
                </Row>
            </SearchCol>
                <DividerLine className="mb-3"></DividerLine>
            <SearchCol> 
                <Row>
                    <Col s={12} m={12} l={12}>
                        

                        <div className="tabContentWrapper">
                                    <Row>                                        
                                        
                                        <Col s={12} m={3} l={2}>
                                            <SideBar2 />
                                        </Col>
                                        <Col s={12} m={9} l={10} className="sideNavWrapper">
                                            <GridWrapper id="propertyDetails">
                                                <Row>
                                                    <Col s={12} m={12} l={12}>
                                                        <MainCaption1>Property Details </MainCaption1>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll>
                                                            <InputLabelfield label="Street Address"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll>
                                                            <InputLabelfield label="Suite Number"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={3}>
                                                        <FormControll>
                                                            <InputLabelfield label="City"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={3}>
                                                        <FormControll className="searchField">
                                                            <SelectField label="State" option={stateOptions}></SelectField>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={3}>
                                                        <FormControll>
                                                            <InputLabelfield label="Zipcode"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={3}>
                                                        <FormControll>
                                                            <InputLabelfield label="County"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={12} l={12}>
                                                        <FormControll>
                                                            <InputLabelfield label="Report Title"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={12} l={12}>
                                                        <GoogleMap className="mt-1">
                                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13004073.069200484!2d-104.65636269386096!3d37.275635351152815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1650275488919!5m2!1sen!2sin"></iframe>
                                                        </GoogleMap>
                                                    </Col>
                                                    <Col className="mt-3 mb-3" s={12} m={12} l={12}>
                                                        <strong className="mb-1">Approaches</strong>
                                                        <CheckBoxWithLabel  label="Sale Comparison Approach"  value="Sale Comparison Approach"/>
                                                    </Col>

                                                    <Col s={12} m={6} l={2}>
                                                        <FormControll className="searchField">
                                                            <SelectField label="Type" option={typeOption}></SelectField>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={3}>
                                                        <FormControll>
                                                            <InputLabelfield label="Under Contract Price"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={2}>
                                                        <FormControll>
                                                            <InputLabelfield label="Close Date"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>

                                                    <Col s={12} m={6} l={2}>
                                                        <label>Is Last Sale Date Known?</label>
                                                        <RadioWrapper>
                                                            <RadioSelect value={radioDropdown}
                                                                options={[
                                                                    {
                                                                        label: `Yes`,
                                                                        value: 'xl'
                                                                    },
                                                                    {
                                                                        label: `No`,
                                                                        value: 'l'
                                                                    }
                                                                ]}
                                                                onchange={(e: any) => {
                                                                    setRadioDropdown(e.target.value);
                                                                }}

                                                            />
                                                        </RadioWrapper>
                                                    </Col>
                                                    <Col s={12} m={6} l={3}>
                                                        <FormControll>
                                                            <InputLabelfield label="Last Sale Date"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={4}>
                                                        <FormControll>
                                                            <InputLabelfield label="APN / Parcel ID / Tax ID"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={4}>
                                                        <FormControll>
                                                            <InputLabelfield label="Owner of Record"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={4}>
                                                        <FormControll>
                                                            <InputLabelfield label="Property Geocode"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={12} l={12}>
                                                        <FormControll>
                                                            <InputLabelfield label="Property Legal"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={12} l={12}>
                                                        <FormControll className="searchField">
                                                            <SelectField label="Property Rights" option={propertyRightsOption}></SelectField>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={12} l={12}>
                                                        <FormControll>
                                                            <InputLabelfield label="File #"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={12} l={12}>
                                                        <FormControll>
                                                            <InputLabelfield label="Report Intended Use"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={12} l={12}>
                                                        <FormControll>
                                                            <InputLabelfield label="Intended User(s)"></InputLabelfield>
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
                                                    <Col s={12} m={12} l={12}>
                                                        <RadioWrapper>
                                                            <RadioSelect value={radioDropdown}
                                                                options={[
                                                                    {
                                                                        label: `Building(s) with Land`,
                                                                        value: 'xl'
                                                                    }
                                                                    // {
                                                                    //     label: `No`,
                                                                    //     value: 'l'
                                                                    // }
                                                                ]}
                                                                onchange={(e: any) => {
                                                                    setRadioDropdown(e.target.value);
                                                                }}

                                                            />
                                                        </RadioWrapper>
                                                    </Col>
                                                    <div className="optionalAddBlock mt-2">
                                                        <Row>
                                                            <Col s={10} m={4} l={4}> 
                                                                <FormControll className="searchField asteriskSign">
                                                                    <SelectField label="Property Type" option={propertyTypeOptions}></SelectField>
                                                                </FormControll>
                                                            </Col>
                                                            <Col s={10} m={4} l={4}>
                                                                <FormControll className="searchField asteriskSign">
                                                                    <SelectField label="Sub Property" option={subPropertyOptions}></SelectField>
                                                                </FormControll>
                                                            </Col>
                                                            <Col s={10} m={3} l={2}>
                                                                <FormControll>
                                                                    <InputLabelfield label="SQ. FT."></InputLabelfield>
                                                                </FormControll>
                                                            </Col>
                                                            <Col s={2} m={2} l={2}>
                                                                <AddFieldWrap><Icon>add_circle</Icon></AddFieldWrap>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll className="asteriskSign">
                                                            <InputLabelfield label="Lot Size"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll className="searchField">
                                                            <SelectField label="Size Type" option={dimensionsOptions}></SelectField>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll>
                                                            <InputLabelfield label="Highest and Best Use"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll>
                                                            <InputLabelfield label="Most Likely Owner/User"></InputLabelfield>
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
                                                            <Col s={12} m={6} l={4}>
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
                                                        <p className="formLabel">Property Summary (Only 1400 characters allowed)</p>
                                                        <FormControll className="mb-3">
                                                            <TextEditor />
                                                        </FormControll>
                                                    </Col>
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
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll>
                                                            <InputLabelfield label="Year Built"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll>
                                                            <InputLabelfield label="Base Year Remodeled"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll>
                                                            <InputLabelfield label="# Stories"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll>
                                                            <InputLabelfield label="Ceiling Height"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll className="searchField">
                                                            <SelectField label="Structure Construction Type" option={constructionTypeOptions}></SelectField>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll className="searchField">
                                                            <SelectField label="Foundation" option={foundationOptions}></SelectField>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll className="searchField">
                                                            <SelectField label="Parking" option={parkingOptions}></SelectField>
                                                        </FormControll>
                                                    </Col>

                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll className="searchField">
                                                            <SelectField label="Basement" option={basementOptions}></SelectField>
                                                        </FormControll>
                                                    </Col>                                                    
                                                    <Col s={12} m={12} l={12}>
                                                        <FormControll className="searchField">
                                                            <SelectField label="ADA Compliance" option={dadCompliantOptions}></SelectField>
                                                        </FormControll>
                                                    </Col>

                                                </Row>
                                            </GridWrapper>

                                            <DividerLine className="deviderLine"></DividerLine>

                                            <GridWrapper id="analysis">
                                                <Row>
                                                    <Col s={12} m={12} l={12}>
                                                        <MainCaption1>Analysis </MainCaption1>
                                                    </Col>
                                                    <Col s={12} m={12} l={12}>
                                                        <FormControll>
                                                            <InputLabelfield label="Date of Inspection"></InputLabelfield>
                                                        </FormControll>
                                                    </Col> 
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll>
                                                            <InputLabelfield label="Inspector Name"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll>
                                                            <InputLabelfield label="Effective Date"></InputLabelfield>
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
                                                        <FormControll className="searchField">
                                                            <SelectField label="Exterior" option={paymentOptions} ></SelectField>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll className="searchField">
                                                            <SelectField label="Roof" option={roofOptions} ></SelectField>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll className="searchField">
                                                            <SelectField label="Electrical" option={electricalOption} ></SelectField>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll className="searchField">
                                                            <SelectField label="Plumbing" option={plumbingOptions} ></SelectField>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll className="searchField">
                                                            <SelectField label="Heating/Cooling" option={coolingOptions} ></SelectField>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll className="searchField">
                                                            <SelectField label="Windows" option={windowsOptions} ></SelectField>
                                                        </FormControll>
                                                    </Col> 
                                                </Row>
                                            </GridWrapper>

                                            <DividerLine className="deviderLine"></DividerLine>

                                            <GridWrapper id="zoning">
                                                <Row>
                                                    <Col s={12} m={12} l={12}>
                                                        <MainCaption1>Zoning  </MainCaption1>
                                                    </Col>
                                                    <Col s={12} m={12} l={12}>
                                                        <FormControll>
                                                            <InputLabelfield label="Zoning Type"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={12} l={12}>
                                                        <p className="formLabel">Zoning Description (Only 1000 characters allowed)</p>
                                                        <FormControll className="mb-3">
                                                            <TextEditor />
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={12} l={12}>
                                                        <FormControll className="searchField asteriskSign" >
                                                            <SelectField label="Conforming Use Determination" option={conformingDeterminationOptions} ></SelectField>
                                                        </FormControll>
                                                    </Col>
                                                    
                                                    
                                                </Row>
                                            </GridWrapper>

                                            <DividerLine className="deviderLine"></DividerLine>

                                            <GridWrapper id="taxAssessment">
                                                <Row>
                                                    <Col s={12} m={12} l={12}>
                                                        <MainCaption1>Tax Assessment</MainCaption1>
                                                    </Col>
                                                    <Col s={12} m={6} l={3}>
                                                        <FormControll>
                                                            <InputLabelfield label="Land Assessment"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={3}>
                                                        <FormControll>
                                                            <InputLabelfield label="Improvements Assessed Value"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={3}>
                                                        <FormControll>
                                                            <InputLabelfield label="Land + Improvements"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={3}>
                                                        <FormControll>
                                                            <InputLabelfield label="$/SF"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={4}>
                                                        <FormControll>
                                                            <InputLabelfield label="SID's"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={4}>
                                                        <FormControll>
                                                            <InputLabelfield label="Taxes in Arrears"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={4}>
                                                        <FormControll>
                                                            <InputLabelfield label="Tax Liability"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll>
                                                            <InputLabelfield label="Assessed Market Value Year"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={6}>
                                                        <FormControll>
                                                            <InputLabelfield label="Tax Liability Year"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                </Row>
                                            </GridWrapper>

                                            <DividerLine className="deviderLine"></DividerLine>

                                            <GridWrapper id="mapBoundaries">
                                                <Row>
                                                    <Col s={12} m={12} l={12}>
                                                        <MainCaption1>Map Boundaries</MainCaption1>
                                                    </Col>
                                                    <Col s={12} m={6} l={5}>
                                                        <FormControll>
                                                            <InputLabelfield label="Traffic Counts - Numbers based on the average daily traffic (ADT)"></InputLabelfield>
                                                        </FormControll>
                                                    </Col>
                                                    <Col s={12} m={6} l={3}>
                                                        <FormControll className="searchField">
                                                            <SelectField label="Traffic Count (ADT)" option={trafficCountOption} ></SelectField>
                                                        </FormControll>
                                                    </Col>
                                                    
                                                    <Col s={12} m={12} l={12} className="leftAlign fixeBtn">
                                                        <CommonButton onClick={()=>navigate(RoutePath.IMAGEPAGE)} buttonText="Save and Continue" />
                                                    </Col>
                                                </Row>
                                            </GridWrapper>

                                        </Col>
                                    </Row>
                                </div>



                        
                    </Col>
                    
                </Row>
                
                

            </SearchCol>





        </>
    );
};

export default EvaluationOverview;
