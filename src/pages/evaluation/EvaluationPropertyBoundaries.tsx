
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Icon, Row, Tab, Icon as MaterializeIcon } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import CommonButton from "../../components/elements/button/CommonButton";
import GrayButton from "../../components/elements/button/GrayButton";
import { Icons } from "../../components/elements/icon/Icons";
import EvaluationTab from "../../components/elements/sidebar/EvaluationTab";
import RoutePath from "../../config/RoutePath";
import { DividerLine } from "../client/CreateClients";


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
const GoogleMap = styled.div`
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    text-align: center;
    iframe{
        width: 100%;
        height: calc(100vh - 280px);
        min-height: 250px;
    }
    .detailPopUp{
        position: absolute;
        z-index: 99;
        background-color: #fff;
        top: 15px;
        right: 15px;        
        max-width: 420px;
        padding: 20px;
        border-radius:2px;
        h4{
            font-family: 'roboto_slabbold';
            font-size: 18px;
            color: ${Colors.darkblue};
            margin: 0;
        }
        p{
            font-family: Montserrat,sans-serif;
            font-size: 13px;
            color: ${Colors.blackShade};
        }    
        .rightAlign{
            grid-gap: 10px;
            justify-content: center;
            width:100%;
            button{
                min-width: inherit;
                margin-bottom: 0;
            }
        }
    }    
    
`;




const EvaluationPropertyBoundaries = () => {

    const navigate = useNavigate();
 
    return (
        <>
            <EvaluationTab />
            <SearchCol>
                <Row>
                    <Col className="subHeaderCaption" s={12} m={12} l={12}>
                        <MainCaption>Property Boundaries</MainCaption>
                        <p className="subTitle"><Icon>info_outline</Icon>  info_outline Lets get started! Enter some general information for this property.
</p>
                    </Col>
                </Row>
            </SearchCol>
            <GoogleMap>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d947.1934558962239!2d-90.7657386295277!3d39.98448947935518!2m3!1f0.1875!2f0!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x87e09d5a4bc2621f%3A0xe30b4f54258b9bf9!2sTucker%20Law%20Practice%20Lawyer%20in%20Mt.%20Sterling%20and%20Brown%20County%20IL!5e1!3m2!1sen!2sin!4v1651206253526!5m2!1sen!2sin" width="600" height="450" ></iframe>
                        
                <div className="detailPopUp">
                    <h4>Select the boundaries of the property</h4>
                    <p>Click on the map where you would like to place a point. Move your points to the boundaries of the property. When complete, press Submit Listing to save the boundaries.</p>
                    <Col className="rightAlign"> 
                        <GrayButton onClick={()=>navigate(RoutePath.IMAGEPAGE)}  icon={Icons.Back}/>                        
                        <CommonButton onClick={()=>navigate(RoutePath.EVALUATIONAERIALMAP)} buttonText="Save & Continue" />                        
                        <GrayButton onClick={()=>navigate(RoutePath.EVALUATIONAERIALMAP)} buttonText="Skip" />                        
                    </Col>
                </div>
            </GoogleMap> 

            





        </>
    );
};

export default EvaluationPropertyBoundaries;
