
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Collapsible, CollapsibleItem, Row, Tab, Icon as MaterializeIcon, Tabs, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import EvaluationTab from "../../components/elements/sidebar/EvaluationTab";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";
import { TableWrapper } from "../client/Clients";
import { DividerLine } from "../client/CreateClients";
import  Icon   from "../../components/elements/icon/Icon";
import { Icons } from "../../components/elements/icon/Icons";
import ChooseFile from "../../components/elements/chooseFile/ChooseFile";
import CommonButton from "../../components/elements/button/CommonButton";
import RoutePath from "../../config/RoutePath";
import { GoogleMap } from "./EvaluationAerialMap";
import GrayButton from "../../components/elements/button/GrayButton";



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





const CompAreaMap    = () => {

    const navigate = useNavigate();
    const [ImageModalIsVisible, setImageModalIsVisible] = useState(false);
    
    
    
    return (
        <>
            
            <BaseModal
                open={ImageModalIsVisible}
                modalType={ModalList.ImageModal}
                subTitle={"Linkbynet"}
                onClose={setImageModalIsVisible}
            /> 

            <EvaluationTab />
            <SearchCol>
                <Row>
                    <Col className="subHeaderCaption" s={12} m={12} l={12}>
                        <MainCaption>COMP AREA MAP</MainCaption>
                        <p className="subTitle"><MaterializeIcon>info_outline</MaterializeIcon>  Lets get started! Enter some general information for this evaluation.</p>
                    </Col>
                </Row>
                

            </SearchCol>
            <GoogleMap>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16024226.850857116!2d39.375945882335586!3d40.87864431309226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1651564415634!5m2!1sen!2sin" width="600" height="450"></iframe>
                    <div className="detailPopUp">
                        <h4>Set the comp map view</h4>
                        <p>Zoom and orient the map for final PDF display. When complete, press 'Save & Continue' to save the boundaries..</p>
                        <Col className="rightAlign"> 
                            <GrayButton onClick={()=>navigate(RoutePath.SALESCOMPS)}  icon={Icons.Back}/>                        
                            <CommonButton onClick={()=>navigate(RoutePath.EXHIBITS)} buttonText="Save & Continue" />                        
                            <GrayButton onClick={()=>navigate(RoutePath.EXHIBITS)} buttonText="Skip" />                        
                        </Col>
                </div>
            </GoogleMap>





        </>
    );
};

export default CompAreaMap  ;
