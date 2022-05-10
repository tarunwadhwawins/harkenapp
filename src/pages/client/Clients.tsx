
// import { useNavigate } from "react-router-dom";
import { Col, Icon as MaterializeIcon, Row, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import Footer from "../../components/elements/footer/Footer";
import Header from "../../components/elements/header/Header";
import Paginations from "../../components/elements/pagination/Pagination";
import SearchFieldWrap from "../../components/elements/search/SearchField";
import RoutePath from "../../config/RoutePath";
import  Icon   from "../../components/elements/icon/Icon";
import { Icons } from "../../components/elements/icon/Icons";
import CommonButton from "../../components/elements/button/CommonButton";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";
import { useState } from "react";


export const ContentWrapper = styled.div`
    min-height: calc(100vh - 150px);

    @media(max-width:991px){
        padding: 0 10px;
    }
    .subHeaderCaption{
        text-align: left;
        p{
            font-family: Montserrat,sans-serif;
            font-size: 13px;
            color: ${Colors.blackShade};
            
        }
        
    }
    .editBtn{
        display: flex;
        align-items: center;
        
        @media(min-width:768px){
            justify-content: flex-end;
        }        
        .addClient{
            background-color: #0da1c7;
            color: #fff;
            display: flex;
            align-items: center;
            white-space: nowrap;
            height: 40px;
            text-transform: uppercase;
            font-family: Montserrat,sans-serif;
            font-size: 13px;
            padding: 0 12px;
            border-radius: 3px;
            margin-left: 16px;
            cursor: pointer;
            i{
                font-size: 20px;
                margin-right: 5px;
            }
        }
    }
`;

export const SearchCol = styled.div`
    padding: 25px 30px;
    @media(min-width:768px){
        padding: 25px 0px;
    }
    .row{
        margin-bottom:0px;
        @media(min-width:768px){
            display: flex;
            align-items: center;
        }
    }
    .searchWrapper{        
        @media(min-width:768px){
            display: flex;
            align-items: center;
            .col{
                width:100%;
                margin:0;
            }
        }
        .col{
            width:100%;
        }
    }
    .addClientBtn{  
        text-align: left;      
        @media(min-width:768px){
            text-align: right;
        }
        button{
            margin-bottom: 0;
        }
    }
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
export const TableWrapper = styled.div`
    @media(max-width:991px){
        margin-bottom: 25px;
    }
    Table{
        thead{            
            th{
                color: ${Colors.lightblue};
                padding: 15px 10px;                
                overflow: hidden;
                background-color: ${Colors.extralightblue};
                border-bottom: 2px solid ${Colors.lightblue};
                border-radius: 0;
                font-family: Montserrat,sans-serif;
                font-size: 16px ;
                font-weight: 400;
                white-space: nowrap;
                &:first-child{
                    border-radius: 5px 0 0 0;
                    padding-left: 50px;
                }
                &:last-child{
                    border-radius:0 5px 0 0;
                }
                svg{
                    font-size: 12px !important;
                    cursor: pointer;
                }
            }
            @media(max-width:1024px){
                border-right: none;
                tr{
                    // padding: 0;
                    th{
                        border-bottom: 2px solid ${Colors.extralightblue2};
                        font-size: 14px;
                    }                   
                }
            }
        }
        tbody{
            tr{
                border-bottom: none;
                &:nth-child(even) {
                    background-color: ${Colors.extralightgrey};
                }
                td{
                    font-family: Montserrat,sans-serif;
                    color: ${Colors.lightblue};
                    font-size: 16px;
                    padding: 15px 10px;
                    font-weight: 300;
                    @media(max-width:1024px){
                        min-height:45px;
                        font-size: 14px;
                    }
                    &:first-child{
                         padding-left: 50px;
                         @media(max-width:1024px){
                            padding-left: 10px;
                         }
                    }
                    &.actionBtn{
                        max-width: 150px;
                        width: 150px;
                        @media(max-width:991px){
                            max-width: 100%;
                            width: 100%;
                            min-width:180px;
                        }
                        span{                            
                            margin: 0 5px;
                            svg{
                                font-size: 15px !important;
                            }
                            i{
                                &.pdfIcon{
                                    position: relative;
                                    top: 3px;
                                    font-size: 18px ;
                                    color: ${Colors.red};
                                }
                            }
                        }
                    }
                    .dangerColor{
                        color: ${Colors.red};
                        cursor: pointer;
                    }
                    .blueColor{
                        color: ${Colors.blue};
                        cursor: pointer;
                    }
                    .greenColor{
                        color: ${Colors.green};
                        cursor: pointer;
                    }
                    &.orderIcon{
                        svg{
                            font-size: 17px !important;
                        }
                    }
                    &.msImage{
                        .chooseFile{
                            max-width: 130px;
                            margin: 0;
                            .input-field {
                                margin: 0 !important;
                                .file-path-wrapper {
                                    min-height: 60px;
                                    background-size: 57px;
                                }
                            }
                            
                        }
                    }
                }
            }            
        }
    }
`;
export const Link = styled.a`
    cursor: pointer;
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
        @media(max-width:991px){
            padding: 0 ;
        }
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
                                <MainCaption>CLIENT LIST </MainCaption>
                                <SearchFieldWrap placeholder="Search Clients" icon="search" />  
                            </Col>
                            <Col className="addClientBtn" s={12} m={4} l={4}> 
                                <CommonButton onClick={()=> navigate(RoutePath.CREATECLIENTS)} buttonText="Add Client"  icon={Icons.PlusIcon}/>
                            </Col>
                        </Row>
                    </SearchCol>
                    <TableWrapper>
                        <Table responsive>
                                    <thead>
                                        <tr>
                                            <th className="sorting_asc">Name <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Company <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="price" className="actionBtn">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.CLIENTSEDIT)}>Xavier Test</Link></td>
                                            <td data-label="Company">La Cantera Resort & Spa</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=> navigate(RoutePath.CLIENTSEDIT)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>                                       
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.CLIENTSEDIT)}>Tom Rupsis</Link></td>
                                            <td data-label="Company"> </td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=> navigate(RoutePath.CLIENTSEDIT)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>  
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.CLIENTSEDIT)}>Tom R</Link></td>
                                            <td data-label="Company"> </td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=> navigate(RoutePath.CLIENTSEDIT)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>  
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.CLIENTSEDIT)}>Tezz Hobbs "User role"</Link></td>
                                            <td data-label="Company">321 Slammer</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=> navigate(RoutePath.CLIENTSEDIT)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>  
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.CLIENTSEDIT)}>tester John</Link></td>
                                            <td data-label="Company">Testing purpose</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=> navigate(RoutePath.CLIENTSEDIT)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>  
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.CLIENTSEDIT)}>tester smith</Link></td>
                                            <td data-label="Company">Testing purpose</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=> navigate(RoutePath.CLIENTSEDIT)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>  
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.CLIENTSEDIT)}>Tester mk</Link></td>
                                            <td data-label="Company">Testing purpose</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=> navigate(RoutePath.CLIENTSEDIT)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>  
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.CLIENTSEDIT)}>surinder singh</Link></td>
                                            <td data-label="Company">9384 Kadlin Dr Sacramento</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=> navigate(RoutePath.CLIENTSEDIT)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>  
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.CLIENTSEDIT)}>Shank Crist</Link></td>
                                            <td data-label="Company">12315 Venice Blvd Parking</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=> navigate(RoutePath.CLIENTSEDIT)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>  
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.CLIENTSEDIT)}>Sandy Bux</Link></td>
                                            <td data-label="Company">SB</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=> navigate(RoutePath.CLIENTSEDIT)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
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
 