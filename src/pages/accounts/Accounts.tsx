
// import { useNavigate } from "react-router-dom";
import { Col,  Row, Table, Icon as MaterializeIcon } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import Footer from "../../components/elements/footer/Footer";
import Header from "../../components/elements/header/Header";
import Paginations from "../../components/elements/pagination/Pagination";
import SearchFieldWrap from "../../components/elements/search/SearchField";
import RoutePath from "../../config/RoutePath";
import { ContentWrapper, SearchCol, TableWrapper } from "../client/Clients";
import  Icon   from "../../components/elements/icon/Icon";
import { Icons } from "../../components/elements/icon/Icons";
import CommonButton from "../../components/elements/button/CommonButton";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";
import { useState } from "react";




const MainWrapper = styled.div`
    text-align: center;
    width: 100%;
`;
const MainCaption = styled.h1`
    color: ${Colors.black};
    font-family: 'roboto_slabbold';
    text-align: left;
    font-size: 24px;
    line-height: 32px;
    margin: 0 20px 0 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    white-space: nowrap;
    svg{
        margin-left: 20px;
        color: ${Colors.blue};
        cursor: pointer;
        font-size: 22px !important;
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




const Clients = () => {  

    const navigate = useNavigate ();
    const [SendInviteIsVisible, setSendInviteIsVisible] = useState(false);
    const [DeleteConfirmIsVisible, setDeleteConfirmIsVisible] = useState(false);
    
    return ( 
        <>
            <BaseModal
            open={SendInviteIsVisible}
            modalType={ModalList.SendInvite}
            subTitle={"Linkbynet"}
            onClose={setSendInviteIsVisible}
            isConfirmationModal={true}
            />
            <BaseModal
            open={DeleteConfirmIsVisible}
            modalType={ModalList.DeleteConfirm}
            subTitle={"Linkbynet"}
            onClose={setDeleteConfirmIsVisible}
            isConfirmationModal={true}
            />


                <ContentWrapper>
                    <SearchCol>
                        <Row>
                            <Col className="subHeaderCaption searchWrapper" s={12} m={8} l={8}>
                                <MainCaption>ACCOUNT LIST </MainCaption>
                                <SearchFieldWrap placeholder="Search Listings" icon="search" />  
                            </Col>
                            <Col className="addClientBtn" s={12} m={4} l={4}> 
                                <CommonButton onClick={()=> navigate(RoutePath.CREATEACCOUNTS)} buttonText="Add Accounts"  icon={Icons.PlusIcon}/>
                            </Col>
                            
                        </Row>
                    </SearchCol>
                    <TableWrapper>
                    <Table responsive>
                                    <thead>
                                        <tr>
                                            <th className="sorting_asc">Name <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name"># Listings <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name"># Users </th>
                                            <th data-field="name"># Comps <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Subscription Type <Icon icon={Icons.Sort}></Icon></th> 
                                            <th data-field="price" className="actionBtn">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITACCOUNTS)}>1 Utama Shopping Centre</Link></td>
                                            <td data-label="Address">0</td>
                                            <td data-label="Type">0</td>
                                            <td data-label="Asking Price">0</td>
                                            <td data-label="Date Listed">User-level</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITACCOUNTS)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=>setSendInviteIsVisible(true)}><Icon icon={Icons.UserPlus}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITACCOUNTS)}>5M Real Estate, Inc.</Link></td>
                                            <td data-label="Address">61</td>
                                            <td data-label="Type">2</td>
                                            <td data-label="Asking Price">0</td>
                                            <td data-label="Date Listed">User-level</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITACCOUNTS)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=>setSendInviteIsVisible(true)}><Icon icon={Icons.UserPlus}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITACCOUNTS)}>801 West Bay Center</Link></td>
                                            <td data-label="Address">61</td>
                                            <td data-label="Type">1</td>
                                            <td data-label="Asking Price">0</td>
                                            <td data-label="Date Listed">User-level</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITACCOUNTS)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=>setSendInviteIsVisible(true)}><Icon icon={Icons.UserPlus}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITACCOUNTS)}>A Haus of Realty Inc</Link></td>
                                            <td data-label="Address">0</td>
                                            <td data-label="Type">1</td>
                                            <td data-label="Asking Price">0</td>
                                            <td data-label="Date Listed">User-level</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITACCOUNTS)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=>setSendInviteIsVisible(true)}><Icon icon={Icons.UserPlus}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITACCOUNTS)}>A Haus of Realty Inc</Link></td>
                                            <td data-label="Address">0</td>
                                            <td data-label="Type">1</td>
                                            <td data-label="Asking Price">0</td>
                                            <td data-label="Date Listed">User-level</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITACCOUNTS)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=>setSendInviteIsVisible(true)}><Icon icon={Icons.UserPlus}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITACCOUNTS)}>A Haus of Realty Inc</Link></td>
                                            <td data-label="Address">0</td>
                                            <td data-label="Type">1</td>
                                            <td data-label="Asking Price">0</td>
                                            <td data-label="Date Listed">User-level</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITACCOUNTS)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=>setSendInviteIsVisible(true)}><Icon icon={Icons.UserPlus}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITACCOUNTS)}>A Haus of Realty Inc</Link></td>
                                            <td data-label="Address">0</td>
                                            <td data-label="Type">1</td>
                                            <td data-label="Asking Price">0</td>
                                            <td data-label="Date Listed">User-level</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITACCOUNTS)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=>setSendInviteIsVisible(true)}><Icon icon={Icons.UserPlus}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITACCOUNTS)}>A Haus of Realty Inc</Link></td>
                                            <td data-label="Address">0</td>
                                            <td data-label="Type">1</td>
                                            <td data-label="Asking Price">0</td>
                                            <td data-label="Date Listed">User-level</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITACCOUNTS)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=>setSendInviteIsVisible(true)}><Icon icon={Icons.UserPlus}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITACCOUNTS)}>A Haus of Realty Inc</Link></td>
                                            <td data-label="Address">0</td>
                                            <td data-label="Type">1</td>
                                            <td data-label="Asking Price">0</td>
                                            <td data-label="Date Listed">User-level</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITACCOUNTS)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=>setSendInviteIsVisible(true)}><Icon icon={Icons.UserPlus}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                </Table>
                    </TableWrapper>                   

                    <DataTablesInfo>
                        <p>Showing 1 to 10 of 41 entries</p>
                    </DataTablesInfo>


                    <Paginations/>


                </ContentWrapper>

           
            
        </>
    );
 };
 
 export default Clients;
 