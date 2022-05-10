
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
    padding:0 30px;
    p{
        color: ${Colors.blackShade};
        font-size: 12px;
        font-family: Montserrat,sans-serif;
        margin: 1rem 0rem 0;
        text-align: left;
        padding: 0 15px;
    }
`;
export const NoDataFound = styled.h5`
    text-align: center;
    padding: 20px 0;
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
            {/* <MainWrapper>
                <Header/>

                <ContentWrapper> */}
                    <SearchCol>
                        <Row>
                            <Col className="subHeaderCaption searchWrapper" s={12} m={8} l={8}>
                                <MainCaption>LISTINGS  </MainCaption>
                                <SearchFieldWrap placeholder="Search Listings" icon="search" />  
                            </Col>
                            <Col className="addClientBtn" s={12} m={4} l={4}> 
                                <CommonButton onClick={()=> navigate(RoutePath.OVERVIEW)} buttonText="Add User List"  icon={Icons.PlusIcon}/>
                            </Col>
                            
                        </Row>
                    </SearchCol>
                    <TableWrapper>
                        <Table responsive>
                                    <thead>
                                        <tr>
                                            <th className="sorting_asc">Name <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Address <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Type </th>
                                            <th data-field="name">Asking Price <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Date Listed <Icon icon={Icons.Sort}></Icon></th> 
                                            <th data-field="name">Expiration <Icon icon={Icons.Sort}></Icon></th> 
                                            <th data-field="price" className="actionBtn">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Name" colSpan={7}>
                                                <NoDataFound>No matching records found</NoDataFound>
                                            </td>                                            
                                        </tr>
                                        
                                        
                                    </tbody>
                                </Table>
                    </TableWrapper>                   

                    <DataTablesInfo>
                        <p>Showing 0 to 0 of 0 entries (filtered from 30,152 total entries)</p>
                    </DataTablesInfo>


                   


                {/* </ContentWrapper>
                <Footer/>
            </MainWrapper> */}

            
            
           
            
        </>
    );
 };
 
 export default Clients;
 