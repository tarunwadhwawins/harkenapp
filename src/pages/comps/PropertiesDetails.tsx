
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
import { ListWrap } from "./MasterProperties";
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
    padding: 0 30px;
    @media(max-width:991px){
        padding: 0 ;
    }
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
                color: ${Colors.grey};
                font-size: 12px;
                font-family: Montserrat,sans-serif;
                text-align: left;
                position: relative;
            }
            h3{
                margin: 5px 0;
                font-size: 16px;
                font-weight: 600;
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
`;
const ImageWrapper = styled.div`
    width: 100%;
    max-height: 450px;
    overflow: hidden;
    border-radius: 20px;
    margin-top: 30px;
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
    
    margin-top: 30px;
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
                font-size: 13px;
                font-family: Montserrat,sans-serif;
                text-align: left;
                position: relative;
                font-weight: 600;
            }
            h3{
                margin: 5px 0;
                font-size: 16px;
                font-weight: 600;
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
                                <CommonButton onClick={()=>navigate(RoutePath.COMPS)} buttonText="Back" icon={Icons.LeArrow}/>
                            </Col>
                        </Row> 
                    </SearchCol>
                    <DividerLine></DividerLine>
                    <ListContainer>
                        <Row>
                            <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                <MainCaption>treeland </MainCaption>
                                <SubCaption>1000 10th Avenue, 1000 New York, NY 10019</SubCaption>                                
                            </Col> 
                            <Col s={12} m={7} l={7}>
                                    <ListWrap2>
                                        <SubCaption2>PROPERTY DETAILS</SubCaption2>
                                        <SubCaption>Sale</SubCaption>  
                                            <ul>
                                                <li>
                                                    <p>Property Summary</p>
                                                    <h3>jswj</h3>
                                                </li>                                                
                                                <li>
                                                    <p>Building Size</p>
                                                    <h3> 242 SF</h3>
                                                </li>
                                                <li>
                                                    <p>Land Size</p>
                                                    <h3></h3>
                                                </li>
                                                <li>
                                                    <p>Topography</p>
                                                    <h3></h3>
                                                </li>
                                                <li>
                                                    <p>Lot Shape</p>
                                                    <h3></h3>
                                                </li>
                                                <li>
                                                    <p>Frontage</p>
                                                    <h3>Poor</h3>
                                                </li>
                                                <li>
                                                    <p>Condition</p>
                                                    <h3>Good</h3>
                                                </li>
                                                <li>
                                                    <p>Built Year</p>
                                                    <h3></h3>
                                                </li>
                                                <li>
                                                    <p>Remodeled Year</p>
                                                    <h3></h3>
                                                </li>
                                                <li>
                                                    <p>Utilities</p>
                                                    <h3>Full City Services</h3>
                                                </li>
                                                <li>
                                                    <p>Zoning Type</p>
                                                    <h3></h3>
                                                </li>
                                                <li>
                                                    <p>SBuildings</p>
                                                    <h3>Multi-Family - Low-Rise/Garden - 92 SF Industrial - Distribution - 150 SF</h3>
                                                </li>
                                            </ul>
                                        </ListWrap2>

                                        <ListWrap2>
                                            <SubCaption2>TRANSACTION DETAILS</SubCaption2>
                                            <ul>
                                                <li>
                                                    <p>Sale Price</p>
                                                    <h3> $222.11</h3>
                                                </li>                                                
                                                <li>
                                                    <p>Date Sold</p>
                                                    <h3>07/31/2021</h3>
                                                </li>
                                                <li>
                                                    <p>Net Operating Income</p>
                                                    <h3></h3>
                                                </li>
                                                <li>
                                                    <p>CAP Rate</p>
                                                    <h3></h3>
                                                </li>
                                                <li>
                                                    <p>Total Operating Expense</p>
                                                    <h3></h3>
                                                </li>
                                                <li>
                                                    <p>Operating Expense (PSF)</p>
                                                    <h3></h3>
                                                </li>
                                                <li>
                                                    <p>List Price</p>
                                                    <h3></h3>
                                                </li>
                                                <li>
                                                    <p>List Date</p>
                                                    <h3></h3>
                                                </li>
                                                <li>
                                                    <p>Days on Market</p>
                                                    <h3></h3>
                                                </li>
                                                <li>
                                                    <p>Total Concessions</p>
                                                    <h3>Full City Services</h3>
                                                </li>
                                                <li>
                                                    <p>Seller</p>
                                                    <h3></h3>
                                                </li>
                                                <li>
                                                    <p>Buyer</p>
                                                    <h3></h3>
                                                </li>
                                            </ul>
                                        </ListWrap2>
                                    <div className="editBtn mt-2">
                                        <CommonButton onClick={()=>setEditCompsIsVisible(true)} buttonText="Edit Comp" icon={Icons.Edit}/>
                                    </div>
                                        
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
