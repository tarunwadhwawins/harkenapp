
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
                            <Col className="subHeaderCaption searchWrapper" s={12} m={8} l={8}>
                                <MainCaption>LISTINGS </MainCaption>
                                <SearchFieldWrap placeholder="Search Listings" icon="search" />  
                            </Col>
                            <Col className="addClientBtn" s={12} m={4} l={4}> 
                                <CommonButton onClick={()=> navigate(RoutePath.OVERVIEW)} buttonText="Add Listing"  icon={Icons.PlusIcon}/>
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
                                            <td data-label="Name"><Link  onClick={()=> navigate(RoutePath.LISTINGSPROPERTYDETAILS)}>Test</Link></td>
                                            <td data-label="Address">Usmanpur Gujran Marg</td>
                                            <td data-label="Type">Hospitality</td>
                                            <td data-label="Asking Price">-$10.00</td>
                                            <td data-label="Date Listed">11/19/2021</td>
                                            <td data-label="Expiration">--</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.OVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Master Property" onClick={()=> navigate(RoutePath.LISTINGSMASTERPROPERTY)}><Icon icon={Icons.BarChart}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.LISTINGSPROPERTYDETAILS)}>Reserve Park I</Link></td>
                                            <td data-label="Address">3637 Medina Road</td>
                                            <td data-label="Type">Office</td>
                                            <td data-label="Asking Price">Price Not Disclosed</td>
                                            <td data-label="Date Listed">10/31/2018</td>
                                            <td data-label="Expiration">--</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.OVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Master Property" onClick={()=> navigate(RoutePath.LISTINGSMASTERPROPERTY)}><Icon icon={Icons.BarChart}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.LISTINGSPROPERTYDETAILS)}>Test - Delete</Link></td>
                                            <td data-label="Address">2980 Big Flat Road</td>
                                            <td data-label="Type">Industrial</td>
                                            <td data-label="Asking Price">Price Not Disclosed</td>
                                            <td data-label="Date Listed">8/20/2021</td>
                                            <td data-label="Expiration">8/20/2021</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.OVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Master Property" onClick={()=> navigate(RoutePath.LISTINGSMASTERPROPERTY)}><Icon icon={Icons.BarChart}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.LISTINGSPROPERTYDETAILS)}>High Country Traders</Link></td>
                                            <td data-label="Address">65-1291 Kawaihae Rd</td>
                                            <td data-label="Type">Retail</td>
                                            <td data-label="Asking Price">Price Not Disclosed</td>
                                            <td data-label="Date Listed">2/2/2021</td>
                                            <td data-label="Expiration">8/12/2021</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.OVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Master Property" onClick={()=> navigate(RoutePath.LISTINGSMASTERPROPERTY)}><Icon icon={Icons.BarChart}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.LISTINGSPROPERTYDETAILS)}>smartcity</Link></td>
                                            <td data-label="Address">786 U.S. 1 Bypass</td>
                                            <td data-label="Type">Office</td>
                                            <td data-label="Asking Price">	$838.38</td>
                                            <td data-label="Date Listed">7/27/2021</td>
                                            <td data-label="Expiration">7/27/20211</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.OVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Master Property" onClick={()=> navigate(RoutePath.LISTINGSMASTERPROPERTY)}><Icon icon={Icons.BarChart}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.LISTINGSPROPERTYDETAILS)}>Theameland</Link></td>
                                            <td data-label="Address">2019 U.S. 81</td>
                                            <td data-label="Type">Single Family Residence, Single Family Resid</td>
                                            <td data-label="Asking Price">$838.38</td>
                                            <td data-label="Date Listed">7/26/2021</td>
                                            <td data-label="Expiration">7/26/2021</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.OVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Master Property" onClick={()=> navigate(RoutePath.LISTINGSMASTERPROPERTY)}><Icon icon={Icons.BarChart}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.LISTINGSPROPERTYDETAILS)}>test DNS</Link></td>
                                            <td data-label="Address">California 125</td>
                                            <td data-label="Type">Multi-Family</td>
                                            <td data-label="Asking Price">$1,200,000.00</td>
                                            <td data-label="Date Listed">7/26/2021</td>
                                            <td data-label="Expiration">7/26/2021</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.OVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Master Property" onClick={()=> navigate(RoutePath.LISTINGSMASTERPROPERTY)}><Icon icon={Icons.BarChart}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.LISTINGSPROPERTYDETAILS)}>Theameland</Link></td>
                                            <td data-label="Address">2019 U.S. 81</td>
                                            <td data-label="Type">Single Family Residence</td>
                                            <td data-label="Asking Price">$838.38</td>
                                            <td data-label="Date Listed">7/26/2021</td>
                                            <td data-label="Expiration">7/26/2021</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.OVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Master Property" onClick={()=> navigate(RoutePath.LISTINGSMASTERPROPERTY)}><Icon icon={Icons.BarChart}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.LISTINGSPROPERTYDETAILS)}>TR Test Lat/Lng 07.15</Link></td>
                                            <td data-label="Address">2019 U.S. 81</td>
                                            <td data-label="Type">Single Family Residence</td>
                                            <td data-label="Asking Price">$375,000.00</td>
                                            <td data-label="Date Listed">7/15/2021</td>
                                            <td data-label="Expiration">7/15/2021</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.OVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Master Property" onClick={()=> navigate(RoutePath.LISTINGSMASTERPROPERTY)}><Icon icon={Icons.BarChart}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.LISTINGSPROPERTYDETAILS)}>TR Test Lat/Long 07.14</Link></td>
                                            <td data-label="Address">2019 U.S. 81</td>
                                            <td data-label="Type">Single Family Residence</td>
                                            <td data-label="Asking Price">$450,000.00</td>
                                            <td data-label="Date Listed">7/14/2021</td>
                                            <td data-label="Expiration">7/14/2021</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.OVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="Master Property" onClick={()=> navigate(RoutePath.LISTINGSMASTERPROPERTY)}><Icon icon={Icons.BarChart}></Icon></span>
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
 