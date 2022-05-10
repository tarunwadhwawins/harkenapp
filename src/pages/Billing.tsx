
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Row, Tab, Icon as MaterializeIcon, Tabs, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../assets/style/Colors";
import CommonButton from "../components/elements/button/CommonButton";
import Icon from "../components/elements/icon/Icon";
import { Icons } from "../components/elements/icon/Icons";
import Paginations from "../components/elements/pagination/Pagination";
import BaseModal, { ModalList } from "../components/modal/BaseModal";
import RoutePath from "../config/RoutePath";
import { TableWrapper } from "./client/Clients";


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
export const AddFieldWrap = styled.div`
    min-height: 70px;
    display: flex;
    align-items: center;
    i{
      color: ${Colors.blue};  
      cursor: pointer;
    }
`;
const TabTable =styled.table`
    tr{
        border:none;
        &:nth-child(even){
            background-color: ${Colors.extralightblue1}
        }
        th{

        }
        td{

        }
    }
`;





const Billing = () => {

    const navigate = useNavigate();
    const [DeleteConfirmIsVisible, setDeleteConfirmIsVisible] = useState(false);
   
    
    
    
    return (
        <>
           <BaseModal
            open={DeleteConfirmIsVisible}
            modalType={ModalList.DeleteConfirm}
            subTitle={"Linkbynet"}
            onClose={setDeleteConfirmIsVisible}
            isConfirmationModal={true}
            /> 
            
            
            


            <SearchCol>                
                <Row>
                    <Col className="subHeaderCaption mb-2" s={12} m={12} l={12}>
                        <MainCaption>BILLING</MainCaption>
                    </Col>
                </Row>
            </SearchCol>
            <Tabs className="tabContainer z-depth-1 ">
                <Tab active title="Subscription">
                    <div className="tabContentWrapper">
                        <Row>
                            <Col className="subHeaderCaption mb-2" s={12} m={12} l={12}>
                                <MainCaption>SUBSCRIPTION DETAILS</MainCaption>
                            </Col>
                            <Col s={12} m={6} l={6}>
                                <TabTable>
                                    <tr>
                                        <th>Plan :</th>
                                        <td>Harken Evaluations (Staging)</td>
                                    </tr>
                                    <tr>
                                        <th>Monthly Cost :</th>
                                        <td>$65.00</td>
                                    </tr>
                                    <tr>
                                        <th>Subscription Start Date :</th>
                                        <td>May 02, 2022</td>
                                    </tr>
                                    <tr>
                                        <th>Last Processed Date :</th>
                                        <td>May 02, 2022</td>
                                    </tr>
                                    <tr>
                                        <th>Paid Through Date :</th>
                                        <td>Jun 03, 2022</td>
                                    </tr>
                                </TabTable>
                            </Col>
                            <Col s={12} m={12} l={12} className="smBtn mt-3 subscriptionBtn">
                                <CommonButton onClick={()=> navigate(RoutePath.PAYMENTMETHOD)} buttonText="Update payment method" />
                                <CommonButton buttonText="Cancel Subscription" onClick={()=>setDeleteConfirmIsVisible(true)}/>
                            </Col>  
                        </Row>
                    </div>
                </Tab>
                <Tab title="Payments">
                    <div className="tabContentWrapper mt-3">
                    <TableWrapper>
                        <Table responsive>
                                    <thead>
                                        <tr>
                                            <th className="sorting_asc">Payment Date <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Payment Amount </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Payment Date">11/23/2021</td>
                                            <td data-label="Payment Amount">$75.00</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Payment Date">5/2/2022</td>
                                            <td data-label="Payment Amount">$65.00</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Payment Date">12/13/2021</td>
                                            <td data-label="Payment Amount">$65.00</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Payment Date">12/6/2021</td>
                                            <td data-label="Payment Amount">$65.00</td>
                                        </tr>
                                        
                                    </tbody>
                                </Table>
                    </TableWrapper>
                    <DataTablesInfo>
                        <p>Showing 1 to 4 of 4 entries</p>
                    </DataTablesInfo>


                    <Paginations/> 
                    </div>
                </Tab>            
            </Tabs>
            





        </>
    );
};

export default Billing;
