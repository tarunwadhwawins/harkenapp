
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Collapsible, CollapsibleItem, Row, Tab, Icon as MaterializeIcon, Tabs, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import EvaluationTab from "../../components/elements/sidebar/EvaluationTab";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";
import { DividerLine } from "../client/CreateClients";
import  Icon   from "../../components/elements/icon/Icon";
import { Icons } from "../../components/elements/icon/Icons";
import CommonButton from "../../components/elements/button/CommonButton";
import RoutePath from "../../config/RoutePath";
import { SaleDetails } from "./Exhibits";
import SaleComparisonApproch from "../../components/elements/saleComp/SaleComparisonApproch";
import SaleComparisonApproch1 from "../../components/elements/saleComp/SaleComparisonApproch1";
import SaleComparisonApproch2 from "../../components/elements/saleComp/SaleComparisonApproch2";
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
    .row{
        margin-bottom:10px;
    }
    .navigationWraper{
        .col{
            width:100%;
        }
    }
    .tabContentWrapper{
        .chooseFile {
            .input-field {
                margin: 0 !important;
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
    margin: 22px 0 0;
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
export const AddOption = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    cursor:pointer;
    svg{
        color: ${Colors.blue};
    }
    label{
        color: ${Colors.blue};
        font-weight:600;
        font-size: 14px;
    }
`;




const SalesComps = () => {

    const navigate = useNavigate();
    const [DeleteConfirmIsVisible, setDeleteConfirmIsVisible] = useState(false);
    const [SalesApproachIsVisible, setSalesApproachIsVisible] = useState(false);
    const [AddNewCompIsVisible, setAddNewCompIsVisible] = useState(false);
    
    
    
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
            <BaseModal
                open={AddNewCompIsVisible}
                modalType={ModalList.AddNewComp}
                subTitle={"Linkbynet"}
                onClose={setAddNewCompIsVisible}
                isBigmodal={true}
            /> 
            
           <SearchCol>
                <Row>
                    <Col s={12} m={9} l={10} className="p-0">
                        <EvaluationTab />

                        <div className="tabContentWrapper">
                                    <Row>
                                        <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                            <MainCaption>SALES COMPARISON APPROACH</MainCaption>
                                            <p className="subTitle"><MaterializeIcon>info_outline</MaterializeIcon> Value of the property based on applicable sales comps.</p>
                                        </Col>

                                        <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                            <DividerLine className="mb-3"></DividerLine>
                                        </Col>
                                        <Col s={12} m={4} l={2}>
                                            <SaleComparisonApproch />
                                        </Col>
                                        <Col s={12} m={4} l={2}>
                                            <SaleComparisonApproch1 />
                                        </Col>
                                        <Col s={12} m={4} l={2}>
                                            <SaleComparisonApproch2 />
                                        </Col>
                                        <Col s={12} m={4} l={2}>
                                            <SaleComparisonApproch1 />
                                        </Col>
                                        <Col s={12} m={4} l={2}>
                                            <SaleComparisonApproch2 />
                                        </Col>
                                        <Col s={12} m={4} l={2}>
                                            <AddOption className="mt-3" onClick={()=>setAddNewCompIsVisible(true)}>
                                                <Icon icon={Icons.PlusCirlce}></Icon>
                                                <label>Add New Comp</label>
                                            </AddOption>
                                        </Col>
                                    </Row>
                                </div>
                    </Col>
                    <Col s={12} m={3} l={2} className="p-0">
                        <SaleDetails>
                            <h2>SALES</h2>
                            <h3><span>$ 12,257,784  </span> 100% <Icon icon={Icons.Edit} onClick={()=>setSalesApproachIsVisible(true)}></Icon></h3>
                            <p>$281 /SF</p>
                            <h2>WEIGHTED TOTAL</h2>
                            <h3><span>$ 12,257,784</span></h3>
                            <p>$281 PSF</p>

                            <div className="leftAlign mt-3">
                                <GrayButton onClick={()=>navigate(RoutePath.EVALUATIONAREAINFO)}  icon={Icons.Back}/> 
                                <CommonButton onClick={()=>navigate(RoutePath.COMPAREAMAP)} buttonText="Next" />
                            </div>
                        </SaleDetails>
                        
                    </Col>
                    
                </Row>
                
                

            </SearchCol>





        </>
    );
};

export default SalesComps;
