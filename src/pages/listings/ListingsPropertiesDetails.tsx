
// import { useNavigate } from "react-router-dom";
import { Col, Collapsible, CollapsibleItem, Icon as MaterializeIcon, Row, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import Footer from "../../components/elements/footer/Footer";
import Header from "../../components/elements/header/Header";
import { ContentWrapper, SearchCol } from "../client/Clients";
import { Icons } from "../../components/elements/icon/Icons";
import { useState } from "react";
import ChooseFile from "../../components/elements/chooseFile/ChooseFile";
import CommonButton from "../../components/elements/button/CommonButton";
import RoutePath from "../../config/RoutePath";
import { DividerLine } from "../client/CreateClients";
import { SubCaption } from "../client/ClientsEdit";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";


export const MainWrapper = styled.div`
    text-align: center;
    width: 100%;
    .editBtn{
        grid-gap: 15px;
        button{
            white-space: nowrap;
            min-width: inherit;
            display: flex;
            align-items: center;
            margin:0;
            svg{
                font-size: 13px !important;
                margin-right: 7px;
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
    svg{
        margin-left: 20px;  
        color: ${Colors.blue};
        cursor: pointer;
        font-size: 20px !important;
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
export const ListContainer = styled.div`   
    padding:0 30px;
    ul{
        display: grid;
        grid-gap: 15px;        
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        li{
            justify-content: flex-start;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            p{
                margin: 0 ;
                color: ${Colors.blue};
                font-size: 15px;
                font-family: Montserrat,sans-serif;
                text-align: left;
                position: relative;
                font-weight: 600;
            }
            h3{
                margin: 5px 0;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
                color: ${Colors.darkblue};
            }
        }
    }
    h2{
        margin:0;
    }
    .browseIMage{
        .chooseFile{
            max-width:100%;
        }
    }
    .askingPrice{
        h2,h1{
            width: 100%;
            text-align: right;
            display: flex;
            justify-content: flex-end;
        }
    }
`;
const ImageWrapper = styled.div`
    width: 100%;
    max-height: 450px;
    overflow: hidden;
    border-radius: 20px;
    border: 10px solid ${Colors.extralightblue1};
    img{
        max-width: 100%
    }
`;
export const SubCaption2 = styled.h3`
    color: ${Colors.white};
    font-family: 'roboto_slabbold';
    text-align: left;
    font-size: 17px;
    line-height: 30px;
    margin: 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    background-color: ${Colors.blue};
    padding: 10px 20px;
    letter-spacing: 1px;
    
`;
export const ListWrap2 = styled.div`    
    border: 1px solid ${Colors.extralightblue1};
    border-radius: 5px;
    background-color: ${Colors.extralightblue2};
    ul{
        display: grid;
        grid-gap: 15px;        
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        padding: 12px 25px;
        margin: 0;
        li{
            justify-content: flex-start;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            min-height: 45px;
            p{
                margin: 0 ;
                color: ${Colors.blue};
                font-size: 15px;
                font-family: Montserrat,sans-serif;
                text-align: left;
                position: relative;
                font-weight: 600;
            }
            h3{
                margin: 5px 0;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
                color: ${Colors.darkblue};
            }
        }
    }
    h2{
        padding: 15px 20px 10px;
    }
    .editBtn{
        button{
            margin-top: 15px;
        }
    }
    p{
        text-align: left;
    }
`;

const Clients = () => {

    const navigate = useNavigate();
    const [EditCompsIsVisible, setEditCompsIsVisible] = useState(false);

    return (        
        <>
 
            <BaseModal
            open={EditCompsIsVisible}
            modalType={ModalList.EditComps}
            subTitle={"Linkbynet"}
            onClose={setEditCompsIsVisible}
            />

            {/* <MainWrapper>
                <Header />

                <ContentWrapper> */}
                    <SearchCol>
                        <Row>
                            <Col className="leftAlign" s={12} m={12} l={12}>         
                                <CommonButton onClick={()=> navigate(RoutePath.LISTINGS)} buttonText="Back to Listings" icon={Icons.LeArrow}/>
                            </Col>
                        </Row> 
                    </SearchCol>
                    <DividerLine></DividerLine>
                    <ListContainer>
                        <Row className="vrAlignCenter">
                            <Col className="subHeaderCaption" s={12} m={7} l={7}> 
                                <Row>
                                    <Col s={12} m={8} l={8}>
                                        <MainCaption>Usmanpur Gujran Marg </MainCaption>
                                        <SubCaption>Delhi, Alaska 11009</SubCaption>  
                                        <p className="m-0">Listed 159 days ago</p> 
                                    </Col>
                                    <Col s={12} m={4} l={4} className="askingPrice">
                                        <SubCaption className="mt-3">Asking</SubCaption>
                                        <MainCaption className="m-0">$-10/SF </MainCaption> 
                                    </Col>
                                </Row>                               
                                                             
                            </Col> 
                            <Col s={12} m={5} l={5}>                                  
                                <div className="editBtn">
                                    <CommonButton buttonText="Edit Listing" onClick={()=> navigate(RoutePath.OVERVIEW)} icon={Icons.Edit}/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12} m={7} l={7}>
                                    <ListWrap2>
                                        <SubCaption2>Test</SubCaption2>
                                        <SubCaption>AVAILABLE</SubCaption>  
                                            <ul>
                                                <li>
                                                    <p>Property Summary</p>
                                                    <h3>rural</h3>
                                                </li>                                                
                                                <li>
                                                    <p>Building Size</p>
                                                    <h3> Class B</h3>
                                                </li>
                                                <li>
                                                    <p>Offering Type</p>
                                                    <h3>Sale</h3>
                                                </li>
                                                <li>
                                                    <p>Lot Size</p>
                                                    <h3>0.000 SF</h3>
                                                </li>
                                                <li>
                                                    <p>Available SF</p>
                                                    <h3>0.000 SF</h3>
                                                </li>
                                                <li>
                                                    <p>Main Broker</p>
                                                    <h3>Super Admin test</h3>
                                                </li>
                                                <li>
                                                    <p>Secondary Brokers</p>
                                                    <h3> Admin Rupsis</h3>
                                                </li>                                                
                                            </ul>
                                        </ListWrap2>

                                        <ListWrap2 className="mt-3">
                                            <SubCaption2>PROPERTY DESCRIPTION</SubCaption2>
                                            <div className="p-15 leftAlign">
                                                <p>Office Suites are available in a variety of sizes with a conference room available to every suite. Ample parking is available. The Reserve Park I building is located on the north side of State Route 18 between the city of Medina and Interstate 71. Restauraunts, retail, and other business amenities are readily available. Located in Medina Township - NO CITY INCOME TAX</p>
                                            </div>                                            
                                        </ListWrap2> 

                                        <ListWrap2 className="mt-3">
                                            <SubCaption2>SALES NOTES</SubCaption2>                                           
                                        </ListWrap2>                                   
                                        
                            </Col>
                            <Col className="browseIMage" s={12} m={5} l={5}>                                
                                <ImageWrapper><img src={Icons.GoogleMap}></img></ImageWrapper>
                                <ChooseFile/>
                            </Col>
                        </Row>
                    </ListContainer>
                    
                    
                            

                            
                    


                {/* </ContentWrapper>
                <Footer />
            </MainWrapper> */}





        </>
    );
};

export default Clients;
