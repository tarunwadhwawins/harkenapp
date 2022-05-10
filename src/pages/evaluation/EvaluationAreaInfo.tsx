
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Icon as MaterializeIcon, Row, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import CommonButton from "../../components/elements/button/CommonButton";
import GrayButton from "../../components/elements/button/GrayButton";
import  Icon   from "../../components/elements/icon/Icon";
import { Icons } from "../../components/elements/icon/Icons";
import EvaluationTab from "../../components/elements/sidebar/EvaluationTab";
import TextEditor from "../../components/elements/textEditor/TextEditor";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";
import RoutePath from "../../config/RoutePath";
import { DividerLine } from "../client/CreateClients";
import { FormControll } from "../setting/Setting";


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
    padding:0 30px;
    .row{
        margin-bottom:10px;
    }
    .navigationWraper{
        .col{
            width:100%;
        }
    }
    .MarketTrendsIcons{
        .row{
            justify-content: center;
            display: flex;
            align-items: center;
            margin: 0;
            .col{
                width: 100%;
            }
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
const MarketTrendsWrap = styled.div`
    max-width: 220px;
    margin: 20px auto 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .SingleIcon{
        img{
            max-width: 100px;
            width: 100%;
        }
    }
    .actionIcons{
        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 7px;
        display: none;
        position: absolute;
        bottom: -40px;
        img{
            cursor: pointer;
            width: 35px;
        }
    }
    &:hover{
        .actionIcons{
            display: block;
        } 
    }
`;



const EvaluationAreaInfo = () => {

    const navigate = useNavigate();
    const [radioDropdown, setRadioDropdown] = useState("xl");
    const [ClosingPropertyIsVisible, setClosingPropertyIsVisible] = useState(false);
   
    
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
                        <MainCaption>Area Info</MainCaption>
                        <p className="subTitle"><MaterializeIcon>info_outline</MaterializeIcon> Lets get started! Enter some general information for this evaluation.</p>
                    </Col>
                </Row>
            </SearchCol>
            <DividerLine className="mb-3"></DividerLine>
            <SearchCol>
                <Row>
                    <Col s={12} m={12} l={12}>
                        

                        <div className="tabContentWrapper">
                                    <Row>
                                        <Col s={12} m={12} l={12}>
                                            <p className="formLabel">City Info (Only 1200 characters allowed)</p>
                                            <FormControll className="mb-3">
                                                <TextEditor />
                                            </FormControll>
                                        </Col>
                                        <Col s={12} m={12} l={12}>
                                            <p className="formLabel">County Info (Only 1200 characters allowed)</p>
                                            <FormControll className="mb-3">
                                                <TextEditor />
                                            </FormControll>
                                        </Col>
                                        <Col s={12} m={12} l={12}>
                                            <DividerLine className="mb-3"></DividerLine>
                                        </Col>
                                        <Col s={12} m={12} l={12}>
                                            <MainCaption className="m-0">Market Trends</MainCaption>
                                        </Col>

                                        <Col s={12} m={12} l={12} className="MarketTrendsIcons mb-3">
                                            <Row>
                                                <Col s={6} m={4} l={2}>
                                                    <MarketTrendsWrap>
                                                        <div className="SingleIcon">                                                            
                                                            <img src={Icons.LeftRightOuter} alt="Image"></img>    
                                                        </div>
                                                        <h6>Sales</h6>
                                                        <div className="actionIcons">
                                                            <img src={Icons.RoundDownImage}  alt="Image"></img>                                                        
                                                            <img src={Icons.RoundUpImage}  alt="Image"></img>  
                                                            <img src={Icons.RoundLeftRightImage}  alt="Image"></img>                                                         
                                                        </div>
                                                    </MarketTrendsWrap>
                                                </Col>
                                                <Col s={6} m={4} l={2}>
                                                    <MarketTrendsWrap>
                                                        <div className="SingleIcon">                                                            
                                                            <img src={Icons.UpArrowImage} alt="Image"></img>    
                                                        </div>
                                                        <h6>Vacancy</h6>
                                                        <div className="actionIcons">
                                                            <img src={Icons.RoundDownImage} alt="Image"></img>                                                        
                                                            <img src={Icons.RoundUpImage}  alt="Image"></img>  
                                                            <img src={Icons.RoundLeftRightImage}  alt="Image"></img>                                                           
                                                        </div>
                                                    </MarketTrendsWrap>
                                                </Col>
                                                <Col s={6} m={4} l={2}>
                                                    <MarketTrendsWrap>
                                                        <div className="SingleIcon">                                                            
                                                            <img src={Icons.DownArrowImage} alt="Image"></img>    
                                                        </div>
                                                        <h6>Net Absorption</h6>
                                                        <div className="actionIcons">
                                                            <img src={Icons.RoundDownImage}  alt="Image"></img>                                                        
                                                            <img src={Icons.RoundUpImage}  alt="Image"></img>  
                                                            <img src={Icons.RoundLeftRightImage}  alt="Image"></img>                                                         
                                                        </div>
                                                    </MarketTrendsWrap>
                                                </Col>
                                                <Col s={6} m={4} l={2}>
                                                    <MarketTrendsWrap>
                                                        <div className="SingleIcon">                                                            
                                                            <img src={Icons.LeftRightOuter}  alt="Image"></img>    
                                                        </div>
                                                        <h6>Construction</h6>
                                                        <div className="actionIcons">
                                                            <img src={Icons.RoundDownImage}  alt="Image"></img>                                                        
                                                            <img src={Icons.RoundUpImage}  alt="Image"></img>  
                                                            <img src={Icons.RoundLeftRightImage}  alt="Image"></img>                                                          
                                                        </div>
                                                    </MarketTrendsWrap>
                                                </Col>
                                                <Col s={6} m={4} l={2}>
                                                    <MarketTrendsWrap>
                                                        <div className="SingleIcon">                                                            
                                                            <img src={Icons.DownArrowImage}  alt="Image"></img>    
                                                        </div>
                                                        <h6>Lease Rates</h6>
                                                        <div className="actionIcons">
                                                            <img src={Icons.RoundDownImage}  alt="Image"></img>                                                        
                                                            <img src={Icons.RoundUpImage}  alt="Image"></img>  
                                                            <img src={Icons.RoundLeftRightImage}  alt="Image"></img>                                                           
                                                        </div>
                                                    </MarketTrendsWrap> 
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col s={12} m={12} l={12} className="leftAlign fixeBtn">
                                            <GrayButton onClick={()=>navigate(RoutePath.EVALUATIONAERIALMAP)}  icon={Icons.Back}/> 
                                            <CommonButton onClick={()=>navigate(RoutePath.SALESCOMPS)} buttonText="Save and Continue" />
                                        </Col>
                                        
                                    </Row>
                                </div>

                        
                    </Col>
                    
                </Row>
                
                

            </SearchCol>





        </>
    );
};

export default EvaluationAreaInfo;
