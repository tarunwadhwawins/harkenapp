
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
    padding: 0 30px;
    @media(max-width:991px){
        padding: 0 ;
    }
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

                    <SearchCol>
                        <Row>
                            <Col className="subHeaderCaption searchWrapper" s={12} m={8} l={8}>
                                <MainCaption>USER LIST </MainCaption>
                                <SearchFieldWrap placeholder="Search Listings" icon="search" />  
                            </Col>
                            <Col className="addClientBtn" s={12} m={4} l={4}> 
                                <CommonButton onClick={()=> navigate(RoutePath.CREATEUSERLIST)} buttonText="Add User List"  icon={Icons.PlusIcon}/>
                            </Col>
                            
                        </Row>
                    </SearchCol>
                    <TableWrapper>
                    <Table responsive>
                                    <thead>
                                        <tr>
                                            <th className="sorting_asc">Name <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Email <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Role </th>
                                            <th data-field="name">Status <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Account Type <Icon icon={Icons.Sort}></Icon></th> 
                                            <th data-field="price" className="actionBtn">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITUSERLIST)}>aaa bhangu</Link></td>
                                            <td data-label="Address"><a href="mailto:aaa@yopmail.com">aaa@yopmail.com</a></td>
                                            <td data-label="Type">User</td>
                                            <td data-label="Status">Active</td>
                                            <td data-label="Account Type"><Link onClick={()=> navigate(RoutePath.USEREDITACCOUNT)}>Whitewater Tech</Link></td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITUSERLIST)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=> navigate(RoutePath.BROKERLIST)}><Icon icon={Icons.ListIcon}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITUSERLIST)}>Aaron Hanes</Link></td>
                                            <td data-label="Address"><a href="mailto:aaronhanes_2095@granitepeaksys.com">aaronhanes_2095@granitepeaksys.com</a></td>
                                            <td data-label="Type">User</td>
                                            <td data-label="Status">Active</td>
                                            <td data-label="Account Type"><Link onClick={()=> navigate(RoutePath.USEREDITACCOUNT)}>Whitewater Tech</Link></td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITUSERLIST)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=> navigate(RoutePath.BROKERLIST)}><Icon icon={Icons.ListIcon}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITUSERLIST)}>Aaron Diehl</Link></td>
                                            <td data-label="Address"><a href="mailto:aaron_1156@granitepeaksys.com">aaron_1156@granitepeaksys.com</a></td>
                                            <td data-label="Type">User</td>
                                            <td data-label="Status">Active</td>
                                            <td data-label="Account Type"><Link onClick={()=> navigate(RoutePath.USEREDITACCOUNT)}>KW COMMERCIAL</Link></td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITUSERLIST)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=> navigate(RoutePath.BROKERLIST)}><Icon icon={Icons.ListIcon}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITUSERLIST)}>Aaron McDermott, CCIM</Link></td>
                                            <td data-label="Address"><a href="mailto:aaron_726@granitepeaksys.com">aaron_726@granitepeaksys.com</a></td>
                                            <td data-label="Type">Administrator</td>
                                            <td data-label="Status">Active</td>
                                            <td data-label="Account Type"><Link onClick={()=> navigate(RoutePath.USEREDITACCOUNT)}>Levinson Real Estate</Link></td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITUSERLIST)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=> navigate(RoutePath.BROKERLIST)}><Icon icon={Icons.ListIcon}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITUSERLIST)}>Aaron Davis</Link></td>
                                            <td data-label="Address"><a href="mailto:aaron.davis_501@granitepeaksys.com">aaron.davis_501@granitepeaksys.com</a></td>
                                            <td data-label="Type">Data Entry / Non-Eval Access</td>
                                            <td data-label="Status">Active</td>
                                            <td data-label="Account Type"><Link onClick={()=> navigate(RoutePath.USEREDITACCOUNT)}>T & E Realty Inc</Link></td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITUSERLIST)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=> navigate(RoutePath.BROKERLIST)}><Icon icon={Icons.ListIcon}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITUSERLIST)}>Aaron finch Elizondo</Link></td>
                                            <td data-label="Address"><a href="mailto:aaron.elizondo_885@granitepeaksys.com">aaron.elizondo_885@granitepeaksys.com</a></td>
                                            <td data-label="Type">Data Entry / Non-Eval Access</td>
                                            <td data-label="Status">Active</td>
                                            <td data-label="Account Type"><Link onClick={()=> navigate(RoutePath.USEREDITACCOUNT)}>Memphis Central</Link></td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITUSERLIST)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=> navigate(RoutePath.BROKERLIST)}><Icon icon={Icons.ListIcon}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITUSERLIST)}>Abe Mizrahi</Link></td>
                                            <td data-label="Address"><a href="mailto:AMizrahi_177@granitepeaksys.com">AMizrahi_177@granitepeaksys.com</a></td>
                                            <td data-label="Type">User</td>
                                            <td data-label="Status">Active</td>
                                            <td data-label="Account Type"><Link onClick={()=> navigate(RoutePath.USEREDITACCOUNT)}>Keller Williams Longmont</Link></td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITUSERLIST)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=> navigate(RoutePath.BROKERLIST)}><Icon icon={Icons.ListIcon}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITUSERLIST)}>AcfmeGUYRDHt ETmSvFVHRdMJ</Link></td>
                                            <td data-label="Address"><a href="mailto:AMizrahi_177@granitepeaksys.com">AMizrahi_177@granitepeaksys.com</a></td>
                                            <td data-label="Type">Data Entry / Non-Eval Access</td>
                                            <td data-label="Status">Active</td>
                                            <td data-label="Account Type"><Link onClick={()=> navigate(RoutePath.USEREDITACCOUNT)}>Hilco Real Estate</Link></td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITUSERLIST)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=> navigate(RoutePath.BROKERLIST)}><Icon icon={Icons.ListIcon}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EDITUSERLIST)}>Ada Wang</Link></td>
                                            <td data-label="Address"><a href="mailto:AMizrahi_177@granitepeaksys.com">AMizrahi_177@granitepeaksys.com</a></td>
                                            <td data-label="Type">User</td>
                                            <td data-label="Status">Active</td>
                                            <td data-label="Account Type"><Link onClick={()=> navigate(RoutePath.USEREDITACCOUNT)}>OnRVQvTrcLxJ</Link></td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Account" onClick={()=> navigate(RoutePath.EDITUSERLIST)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Invite New Brokers" onClick={()=> navigate(RoutePath.BROKERLIST)}><Icon icon={Icons.ListIcon}></Icon></span>
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


            
        </>
    );
 };
 
 export default Clients;
 