
// import { useNavigate } from "react-router-dom";
import { Col, Row, Tab, Table, Tabs, Icon as MaterializeIcon } from "react-materialize";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import CommonButton from "../../components/elements/button/CommonButton";
import Footer from "../../components/elements/footer/Footer";
import Header from "../../components/elements/header/Header";
import { Icons } from "../../components/elements/icon/Icons";
import InputLabelfield from "../../components/elements/input/InputLabelfield";
import SearchFieldWrap from "../../components/elements/search/SearchField";
import TextEditor from "../../components/elements/textEditor/TextEditor";
import { ContentWrapper, SearchCol, TableWrapper } from "../client/Clients";
import { InnerContentWrapper } from "./../client/CreateClients";
import  Icon   from "../../components/elements/icon/Icon";
import Paginations from "../../components/elements/pagination/Pagination";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";
import { useEffect, useState } from "react";
import RoutePath from "../../config/RoutePath";
import SideBar from "../../components/elements/sidebar/SideBar";
import TABS from "../../utils/Tabs.Utils";



export const FormControll = styled.div`
    width: 100%;
    
    &.googleIcon{
        position: relative;
        input{
            padding-right: 40px !important;
        }
        img {
            position: absolute;
            right: 10px;
            top: 26px;
            @media(max-width:991px){
                top: 25px;
            }
        }
    }
    label {
        font-size: 12px;
        color: ${Colors.lightblue};
        width: 100%;
        display: flex;
        font-family: 'montserratregular';
    }
    input{
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${Colors.lightgrey};
        border-radius: 0;
        outline: 0;
        height: 3rem;
        width: 100%;
        font-size: 1rem;
        margin: 0 0 20px 0; 
        padding: 0;
        // color: ${Colors.white};
        font-family: 'montserratregular';
        &:focus{
            border-bottom: 1px solid ${Colors.blue} !important;
        }        
    }
    &.buttonDiv{
        margin-top: 10px;
    }
    &.searchField{
        .select-wrapper{
            color: ${Colors.lightblue} ;
            input{
                color: ${Colors.lightblue} ;
            }
        }
        label{
            font-size: 12px;
            color: ${Colors.lightgrey}  !important;
        }
        ul{
            li{
                min-height: inherit;
                span{
                    color: ${Colors.blackShade} !important;
                    font-size: 12px;
                    padding: 10px 16px;
                }
            }
        }
        
    }
    .col{
        width:100%;
    }
`;
const MainCaption = styled.h1`
    color: ${Colors.black};
    font-family: 'roboto_slabbold';
    text-align: left;
    font-size: 24px;
    line-height: 32px;
    margin: 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    i{
        margin-left: 20px;
        color: ${Colors.blue};
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
        margin: 1rem  0rem;
        text-align: left;
        padding: 0 15px;
    }
`;
const DividerLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${Colors.lightblue};
`;
export const SubCaption = styled.h2`
    color: ${Colors.black};
    font-family: 'roboto_slabbold';
    text-align: left;
    font-size: 18px;
    line-height: 30px;
    margin: 33px 0 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    
`;
export const FormFieldWrapper = styled.div`
    .input-field{
        padding: 0; 
        width: 100%;
        margin: 22px 0 40px;
    }
    .subHeaderCaption{
        p{
            font-family: Montserrat,sans-serif;
            font-size: 13px;
            color: ${Colors.blackShade};  
            margin-bottom: 25px;       
        }
    }
    .smBtn{
        text-align: left;
    }
    .formLabel{
        font-family: Montserrat,sans-serif;
        font-size: 13px;
        color: ${Colors.lightblue};  
        margin: 15px 0 10px; 
        text-align: left;
    }
    .signatureImage{
        max-width: 150px;
    }
    .chooseFile{
        margin: 0;
    }
`;
export const SidebarNavigation = styled.div`
    margin-top: 30px;
    background-color: ${Colors.extralightblue1};
    padding: 15px;
    border-radius: 5px;
    button{
        margin-bottom: 0 !important;
    }
    ul{
        margin-bottom: 0;
        li{
            line-height: 38px;
            font-family: Montserrat,sans-serif;
            font-size: 15px;
            cursor: pointer;
            color: ${Colors.darkgrey};
            svg{
                font-size: 14px !important;                
                margin-right: 5px;
                color: ${Colors.blue};

            }
            &.active, &:hover{
                color: ${Colors.darkblue}; 
                font-weight: 600;
            }
        }
    }
    
`;
export const TabRightContent = styled.div`
    margin-top: 30px;
    padding: 15px;
    border-radius: 5px;  
    background-color: ${Colors.extralightblue2};
    p{
        max-width: 70%;
        text-align: center;
        margin: 15px auto;
    }
`;
export const HandShakeIcon = styled.div`
    text-align: center;
    svg{
        font-size: 75px !important;
        color:${Colors.lightblue}
    }
`;


const CreateAccount = (props: any) => {  

    const navigate = useNavigate();
    const [AddPromoCodeIsVisible, setAddPromoCodeIsVisible] = useState(false);
    const [DeleteConfirmIsVisible, setDeleteConfirmIsVisible] = useState(false);
    const location = useLocation()
    const pathName = location?.pathname

    const [activeTab, setActiveTab] = useState(TABS.Evaluation)

    useEffect(()  => {
        console.log("activeTab Update...", activeTab)
    }, [])
    
    return ( 
        <>

            <BaseModal
            open={AddPromoCodeIsVisible}
            modalType={ModalList.AddPromoCode}
            subTitle={"Linkbynet"}
            onClose={setAddPromoCodeIsVisible}
            />
            <BaseModal
            open={DeleteConfirmIsVisible}
            modalType={ModalList.DeleteConfirm}
            subTitle={"Linkbynet"}
            onClose={setDeleteConfirmIsVisible}
            isConfirmationModal={true}
            />

            {/* <MainWrapper>
                <Header/> */}

                <InnerContentWrapper>
                    <SearchCol>
                        <Row>
                            <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                <MainCaption>SETTINGS</MainCaption>                                
                            </Col>
                        </Row>
                    </SearchCol>
                    <FormFieldWrapper>
                        <Tabs className="tabContainer z-depth-1 " onChange={(e) => {
                                    console.log(e.target)
                                    // debugger
                                    // setActiveTab(tab)}
                                }}>
                                    <Tab  title={TABS.Evaluation} active = {TABS.Evaluation === activeTab}>
                                        <div className="tabContentWrapper">
                                            <SubCaption>Engagement Letter</SubCaption>
                                            <p>The Engagement Letter is in the 3rd page of the evaluation report. If you leave it empty, the default content will be used.</p>
                                            <FormControll className="mb-3">
                                                <TextEditor />
                                            </FormControll> 
                                            <div className="lightGrayBox">
                                                <strong>Default</strong>
                                                <p>The Brokers Property Evaluation of a commercial property utilizes a combination of the information gathered from a drive-by exterior examination, interior site analysis, external data sources, previous lease data, property assessment data, recent comparable leases, current area leasing information, pertinent property profit and loss information, as well as a thorough photo documentation of the subject property.</p>
                                                <p>The BPE includes area information, site description, structure description, county assessment data, pertinent and available documents of record, three assessments of value (Income, Sales Comparison and Cost), as well as photographs of the subject property. The descriptions and statements made in this analysis are from sources that are deemed reliable, however no warranty is made as to the accuracy thereof.</p>
                                                <p>This analysis only represents the personal, impartial and unbiased professional opinion of the authors.</p>
                                                <p>The liability of the analysis to the authors shall be limited to the fee collected from the client, and the authors assume no responsibility for additional costs incurred by the client on this project.</p>
                                            </div>
                                            
                                            <div className="smBtn mt-2">
                                                <CommonButton  buttonText="Publish"/>
                                            </div> 

                                            <DividerLine></DividerLine>

                                            <SubCaption>Executive Summary</SubCaption>
                                            <p>The Executive Summary is in the 5th page of the evaluation report. If you leave it empty, the default content will be used. If you override the content, beware of the {0}, {1}, and {2}, which will be replaced by the most likely user, weighted market value, and weighted market value PSF.</p>
                                            <FormControll className="mb-3">
                                                <TextEditor />
                                            </FormControll> 
                                            <div className="lightGrayBox">
                                                <strong>Default</strong>                                               
                                                <p>The author's analysis and assumptions of: use/condition factors of the property, current market data, actual and market income information and general assessment of the property; results in a Final Market Value of {0} ({1}).</p>                                                
                                            </div>
                                            <div className="smBtn mt-2">
                                                <CommonButton  buttonText="Publish"/>
                                            </div> 
                                            
                                        </div>
                                    </Tab>
                                    <Tab title={TABS.Content_Management} active = {TABS.Content_Management === activeTab}>
                                        <div className="tabContentWrapper customGridCol">      
                                            <SideBar tabChanged={(tab: string) => {
                                                setActiveTab(tab)}
                                                }/> 
                                            <TabRightContent>
                                                <HandShakeIcon><Icon icon={Icons.Handshake}></Icon></HandShakeIcon>
                                                <p>Welcome to the content management system! Create, update, and remove pages from the MLS menu.
                                                    Here you can manage the creation and modification of front-end digital content. Create, update, and remove pages from the MLS menu, as well as rearrange the menu.
                                                </p>
                                            </TabRightContent>                                         
                                        </div>
                                    </Tab>
                                    <Tab title={TABS.Pricing} active = {TABS.Pricing === activeTab}>
                                        <div className="tabContentWrapper">
                                            <Row>
                                                <Col s={12} m={12} l={12}>
                                                    <SubCaption className="mb-2">MONTHLY PRICES</SubCaption>
                                                </Col>
                                                <Col s={12} m={6} l={6}>
                                                    <div className="lightGrayBox">
                                                        <InputLabelfield label="User-level Pricing"></InputLabelfield>
                                                        <div className="smBtn mt-2">
                                                            <CommonButton  buttonText="Save"/>
                                                        </div> 
                                                    </div>
                                                </Col>
                                                <Col s={12} m={6} l={6}>
                                                    <div className="lightGrayBox">
                                                        <InputLabelfield label="Account-level Pricing"></InputLabelfield>
                                                        <div className="smBtn mt-2">
                                                            <CommonButton  buttonText="Save"/>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab>
                                    <Tab title={TABS.Promo_Codes} active = {TABS.Promo_Codes === activeTab}>
                                        <div className="tabContentWrapper">
                                            <ContentWrapper className="p-0">
                                                <SearchCol>
                                                    <Row>
                                                        <Col className="subHeaderCaption searchWrapper" s={12} m={8} l={8}>
                                                            <MainCaption>NEW PROMO CODE </MainCaption>
                                                            <SearchFieldWrap placeholder="Search Listings" icon="search" />  
                                                        </Col>
                                                        <Col className="addClientBtn" s={12} m={4} l={4}> 
                                                            <CommonButton onClick={()=>setAddPromoCodeIsVisible(true)} buttonText="Add promo code"  icon={Icons.PlusIcon}/>
                                                        </Col>
                                                        
                                                    </Row>
                                                </SearchCol>
                                                <TableWrapper>
                                                    <Row>
                                                        <Col className="subHeaderCaption searchWrapper" s={12} m={12} l={12}>
                                                            <Table responsive>
                                                                <thead>
                                                                    <tr>
                                                                        <th className="sorting_asc">ID <Icon icon={Icons.Sort}></Icon></th>
                                                                        <th data-field="name">Promo Code <Icon icon={Icons.Sort}></Icon></th>
                                                                        <th data-field="name">Valid Thru Date </th>
                                                                        <th data-field="name">Number of Months Free <Icon icon={Icons.Sort}></Icon></th>
                                                                        <th data-field="price" className="actionBtn">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td data-label="ID">1</td>
                                                                        <td data-label="Promo Code">Test123</td>
                                                                        <td data-label="Valid Thru Date">12/31/2021</td>
                                                                        <td data-label="Number of Months Free">	2</td>
                                                                        <td data-label="Action" className="actionBtn">
                                                                            <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                                                        </td>
                                                                    </tr> 
                                                                    <tr>
                                                                        <td data-label="ID">2</td>
                                                                        <td data-label="Promo Code">Test@786</td>
                                                                        <td data-label="Valid Thru Date">12/31/2021</td>
                                                                        <td data-label="Number of Months Free">	2</td>
                                                                        <td data-label="Action" className="actionBtn">
                                                                            <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td data-label="ID">3</td>
                                                                        <td data-label="Promo Code">Test123!</td>
                                                                        <td data-label="Valid Thru Date">12/30/2021</td>
                                                                        <td data-label="Number of Months Free">	3</td>
                                                                        <td data-label="Action" className="actionBtn">
                                                                            <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                                                        </td>
                                                                    </tr>  
                                                                    <tr>
                                                                        <td data-label="ID">4</td>
                                                                        <td data-label="Promo Code">Test1234</td>
                                                                        <td data-label="Valid Thru Date">12/30/2021</td>
                                                                        <td data-label="Number of Months Free">	2</td>
                                                                        <td data-label="Action" className="actionBtn">
                                                                            <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                                                        </td>
                                                                    </tr>                                                                  
                                                                </tbody>
                                                            </Table>
                                                        </Col>                                    
                                                    </Row>
                                                </TableWrapper>  

                                                <DataTablesInfo className="mb-3">
                                                    <p>Showing 1 to 10 of 41 entries</p>
                                                </DataTablesInfo>

                                                <Paginations/>

                                            </ContentWrapper>
                                        </div>
                                    </Tab>
                                </Tabs>
                    </FormFieldWrapper>
                   
                        
                   
                </InnerContentWrapper>
                {/* <Footer/>
            </MainWrapper> */}

            
            
           
            
        </>
    );
 };
 
 export default CreateAccount;
 