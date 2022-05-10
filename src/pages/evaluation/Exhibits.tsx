
// import { useNavigate } from "react-router-dom";
import { Col,  Row, Table, Icon as MaterializeIcon } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import RoutePath from "../../config/RoutePath";
import { TableWrapper } from "../client/Clients";
import  Icon   from "../../components/elements/icon/Icon";
import { Icons } from "../../components/elements/icon/Icons";
import CommonButton from "../../components/elements/button/CommonButton";

import { DividerLine } from "../client/CreateClients";
import EvaluationTab from "../../components/elements/sidebar/EvaluationTab";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";
import { useState } from "react";
import ChooseFile from "../../components/elements/chooseFile/ChooseFile";
import GrayButton from "../../components/elements/button/GrayButton";


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
const MainCaption = styled.h1`
    color: ${Colors.black};
    font-family: 'roboto_slabbold';
    text-align: left;
    font-size: 24px;
    line-height: 32px;
    margin:22px 0 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    i{
        margin-left: 20px;
        color: ${Colors.blue};
        cursor: pointer;
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
const LeftAlign = styled.div`
    max-width: 380px;
    width: 100%;
    margin-top: 20px;
`;
const SearchCol = styled.div`
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
export const SaleDetails = styled.div`
    text-align: center;
    background-color: ${Colors.extralightblue};
    display: flex;
    flex-direction: column;
    height: calc(100vh - 98px);
    h2{
        font-family: Montserrat,sans-serif;
        text-transform: uppercase;
        color: ${Colors.darkblue};
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 0;
    }
    h3{
        font-family: Montserrat,sans-serif;
        color: ${Colors.darkblue};
        font-weight: 700;
        font-size: 16px;
        line-height: 26px;
        margin: 0;
        svg{
            font-size: 15px !important;
            margin-left: 5px;
        }
        span{
            color: ${Colors.blue}; 
            font-size: 16px;
            margin-right: 3px;
        }
    }
    p{
        font-family: Montserrat,sans-serif;
        color: ${Colors.blue};
    }
    .leftAlign{
        grid-gap: 10px;
        justify-content: center;
        button{
            min-width: inherit;
        }
    }
`;



const Exhibits = () => {  

    const navigate = useNavigate ();
    const [DeleteConfirmIsVisible, setDeleteConfirmIsVisible] = useState(false);
    const [SalesApproachIsVisible, setSalesApproachIsVisible] = useState(false);
    
    return ( 
        <>
            
            <BaseModal
            open={DeleteConfirmIsVisible}
            modalType={ModalList.DeleteConfirm}
            subTitle={"Linkbynet"}
            onClose={setDeleteConfirmIsVisible}
            isConfirmationModal={true}
            /> 
            <BaseModal
            open={SalesApproachIsVisible}
            modalType={ModalList.SalesApproach}
            subTitle={"Linkbynet"}
            onClose={setSalesApproachIsVisible}
            isConfirmationModal={true}
            /> 
            <SearchCol>
                <Row>
                    <Col s={12} m={9} l={10} className="p-0">
                        <EvaluationTab />

                        <div className="tabContentWrapper">
                                    <Row>
                                        <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                            <MainCaption>EXHIBITS</MainCaption>
                                            <p className="subTitle"><MaterializeIcon>info_outline</MaterializeIcon>  Add any additional exhibits that you would like to include in this document.</p>
                                        </Col>

                                        <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                            <DividerLine className="mb-3"></DividerLine>
                                        </Col>
                                        <Col s={12} m={12} l={12}>
                                            <TableWrapper>
                                                <Row>
                                                    <Col s={12} m={12} l={12}>
                                                        <Table responsive>
                                                            <thead>
                                                                <tr>
                                                                    <th data-field="Order">Order</th>
                                                                    <th data-field="price">Title</th>
                                                                    <th data-field="File">File</th>
                                                                    <th data-field="Action">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    
                                                                    <td data-label="Order" className="orderIcon"><Icon icon={Icons.Right} ></Icon></td>
                                                                    <td data-label="Description">image_2022_04_12T07_15_16_501Z</td>
                                                                    <td data-label="Orientation"><a href="#">evaluations/327/image_2022_04_12T07_15_16_501Z_20220503_6270d0e9a697f.png</a></td>
                                                                    <td data-label="Action" className="actionBtn">
                                                                        <span className="blueColor" title="Download File"><Icon icon={Icons.DownloadIcon}></Icon></span>  
                                                                        <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>  
                                                                    </td>
                                                                </tr>                                                                
                                                                
                                                            </tbody>
                                                        </Table>
                                                    </Col>
                                                    <Col s={12} m={12} l={12} className="leftAlign">
                                                        <LeftAlign>
                                                            <ChooseFile />
                                                        </LeftAlign>
                                                        
                                                    </Col>

                                                    
                                                </Row>
                                            </TableWrapper>  

                                        </Col>
                                    </Row>
                                </div>
                    </Col>
                    <Col s={12} m={3} l={2} className="p-0">
                        <SaleDetails>
                            <h2>INCOME</h2>
                            <h2 className="mt-0">SALES</h2>
                            <h2 className="mt-0">WEIGHTED TOTAL</h2>
                            <h3><span>$ 12,257,784</span></h3>
                            <p>$281 PSF</p>

                            <div className="leftAlign mt-3">
                                <GrayButton onClick={()=>navigate(RoutePath.COMPAREAMAP)}  icon={Icons.Back}/> 
                                <CommonButton onClick={()=>navigate(RoutePath.REVIEW)} buttonText="Next" />
                            </div>
                        </SaleDetails>
                        
                    </Col>
                    
                </Row>
                
                

            </SearchCol>
            
            
        </>
    );
 };
 
 export default Exhibits;
 