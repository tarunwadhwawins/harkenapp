
// import { useNavigate } from "react-router-dom";
import { Col, Row, Icon as MaterializeIcon, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import Footer from "../../components/elements/footer/Footer";
import Header from "../../components/elements/header/Header";
import { Icons } from "../../components/elements/icon/Icons";
import  Icon   from "../../components/elements/icon/Icon";
import SideBar from "../../components/elements/sidebar/SideBar";
import { TableWrapper } from "../client/Clients";
import CommonButton from "../../components/elements/button/CommonButton";
import SearchFieldWrap from "../../components/elements/search/SearchField";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";
import { useState } from "react";
import RoutePath from "../../config/RoutePath";
import Paginations from "../../components/elements/pagination/Pagination";
import { DividerLine } from "../../components/modal/comps/AddNewComp";




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
        &.searchWrapper{
            display: flex;
            align-items: center;
            h1{
                margin: 0;
            }
        }
    }
    .addClientBtn{
        justify-content: flex-end;
        display: flex;
        align-items: center;
        @media(min-width:991px){
            min-height: 75px;
        }
        button{
            margin-bottom: 0;
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
`;
const MainCaption = styled.h1`
    color: ${Colors.black};
    font-family: 'roboto_slabbold';
    text-align: left;
    font-size: 24px;
    line-height: 32px;
    margin: 20px 0 0;
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
            {/* <MainWrapper>
                <Header/>

                <ContentWrapper> */}
                    <SearchCol>
                        <Row>
                            <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                <MainCaption>CONTENT MANAGEMENT - PAGES </MainCaption>
                                <p className="subTitle"><MaterializeIcon>info_outline</MaterializeIcon> Lets get started! Create or update pages</p>
                            </Col>
                        </Row>
                    </SearchCol>
                    <DividerLine></DividerLine>
                    <div className="tabContentWrapper customGridCol">      
                        <SideBar /> 
                        
                        <TableWrapper className="tableGrid mt-3">
                            <Row className="m-0">
                                <Col className="subHeaderCaption searchWrapper" s={12} m={8} l={8}>
                                    <MainCaption className="m-0">CREATE PAGE </MainCaption> 
                                </Col>
                                <Col className="addClientBtn rightAlign" s={12} m={4} l={4}> 
                                   <CommonButton buttonText="Create List" onClick={()=> navigate(RoutePath.CREATEPAGE)} icon={Icons.PlusIcon}/>
                                </Col>
                                                        
                            </Row>
                            <Table responsive>
                                    <thead>
                                        <tr>
                                            <th className="sorting_asc">Title <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Slug <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Icon </th>
                                            <th data-field="name">Created By <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Date Created <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="price" className="actionBtn">Action</th>
                                        </tr>
                                     </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Title">Privacy Policy</td>
                                            <td data-label="Slug">	privacy-policy</td>
                                            <td data-label="Icon"><MaterializeIcon>lock_outline</MaterializeIcon></td>
                                            <td data-label="Created By">Elder Patten Ferreira</td>
                                            <td data-label="Date Created">2018-12-04 18:14:40</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EDITPAGE)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                           </td>
                                        </tr> 
                                        <tr>
                                            <td data-label="Title">Contact</td>
                                            <td data-label="Slug">contact</td>
                                            <td data-label="Icon"><MaterializeIcon>email</MaterializeIcon></td>
                                            <td data-label="Created By">Elder Patten Ferreira</td>
                                            <td data-label="Date Created">2018-12-04 19:30:41</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EDITPAGE)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                           </td>
                                        </tr>  
                                        <tr>
                                            <td data-label="Title">Terms of Service</td>
                                            <td data-label="Slug">	terms-of-service</td>
                                            <td data-label="Icon"><MaterializeIcon>format_align_left</MaterializeIcon></td>
                                            <td data-label="Created By">Elder Patten Ferreira</td>
                                            <td data-label="Date Created">2018-12-04 21:17:25</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EDITPAGE)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                           </td>
                                        </tr> 
                                        <tr>
                                            <td data-label="Title">Sitemap</td>
                                            <td data-label="Slug">sitemap</td>
                                            <td data-label="Icon"><MaterializeIcon>map</MaterializeIcon></td>
                                            <td data-label="Created By">Elder Patten Ferreira</td>
                                            <td data-label="Date Created">2018-12-04 21:17:58</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EDITPAGE)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                           </td>
                                        </tr>  
                                        <tr>
                                            <td data-label="Title">What's Next</td>
                                            <td data-label="Slug">what's-next</td>
                                            <td data-label="Icon"><MaterializeIcon>forum</MaterializeIcon></td>
                                            <td data-label="Created By">Elder Patten Ferreira</td>
                                            <td data-label="Date Created">2018-12-05 21:04:31</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EDITPAGE)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                           </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Title">Owners</td>
                                            <td data-label="Slug">owners</td>
                                            <td data-label="Icon"><MaterializeIcon>business_center</MaterializeIcon></td>
                                            <td data-label="Created By">Elder Patten Ferreira</td>
                                            <td data-label="Date Created">2018-12-05 22:08:45</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EDITPAGE)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                           </td>
                                        </tr>  
                                        <tr>
                                            <td data-label="Title">Brokers</td>
                                            <td data-label="Slug">brokers</td>
                                            <td data-label="Icon"><MaterializeIcon>account_circle</MaterializeIcon></td>
                                            <td data-label="Created By">Elder Patten Ferreira</td>
                                            <td data-label="Date Created">2018-12-05 22:09:14</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client " onClick={()=> navigate(RoutePath.EDITPAGE)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                           </td>
                                        </tr> 
                                        <tr>
                                            <td data-label="Title">Buyers</td>
                                            <td data-label="Slug">buyers</td>
                                            <td data-label="Icon"><MaterializeIcon>monetization_on</MaterializeIcon></td>
                                            <td data-label="Created By">Elder Patten Ferreira</td>
                                            <td data-label="Date Created">2018-12-05 22:09:41</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EDITPAGE)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                           </td>
                                        </tr>                                                     
                                    </tbody>
                                </Table>
                                <DataTablesInfo className="mb-3">
                                    <p>Showing 1 to 10 of 41 entries</p>
                                </DataTablesInfo>    
                                <Paginations/>                       
                        </TableWrapper>
                                                                 
                    </div>
                {/* </ContentWrapper>
                <Footer/>
            </MainWrapper> */}

            
            
           
            
        </>
    );
 };
 
 export default Clients;
 