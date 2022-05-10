
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
    const [NewEvaluatonIsVisible, setNewEvaluatonIsVisible] = useState(false);
    
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
            open={NewEvaluatonIsVisible}
            modalType={ModalList.NewEvaluaton}
            subTitle={"Linkbynet"}
            onClose={setNewEvaluatonIsVisible}
        isConfirmationModal={true}
            />

                    <SearchCol>
                        <Row>
                            <Col className="subHeaderCaption searchWrapper" s={12} m={8} l={8}>
                                <MainCaption>Evaluation </MainCaption>
                                <SearchFieldWrap placeholder="Search Evaluation" icon="search" />  
                            </Col>
                            <Col className="addClientBtn" s={12} m={4} l={4}> 
                                <CommonButton onClick={()=>setNewEvaluatonIsVisible(true)} buttonText="Add Evaluation"  icon={Icons.PlusIcon}/>
                            </Col>
                            
                        </Row>
                    </SearchCol>
                    <TableWrapper>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th className="sorting_asc">Name <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Client <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Address <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Inspection Date <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="price" className="actionBtn">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}>4.26.22 EJK Super Admin Test - Lease Comps</Link></td>
                                            <td data-label="Address">Tom Rupsis() </td>
                                            <td data-label="Type">3312 4th Avenue North, Billings, MT</td>
                                            <td data-label="Asking Price">4/26/2022</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="View PDF"><a href="https://app.harkenbov.com/wggenerator/report/335" target="_blank"><MaterializeIcon className="pdfIcon">picture_as_pdf</MaterializeIcon></a></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}>4.26.22 EJK Super Admin Test - Lease Comps</Link></td>
                                            <td data-label="Address">Kevin Kraft(Yellowstone Bank) </td>
                                            <td data-label="Type">3312 4th Avenue North, Billings, MT</td>
                                            <td data-label="Asking Price">4/26/2022 </td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="View PDF"><a href="https://app.harkenbov.com/wggenerator/report/335" target="_blank"><MaterializeIcon className="pdfIcon">picture_as_pdf</MaterializeIcon></a></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}>3.22.22 EJK Super Admin Test Land Only</Link></td>
                                            <td data-label="Address">Kevin Kraft(Yellowstone Bank) </td>
                                            <td data-label="Type">117 Washington Street, Billings, MT</td>
                                            <td data-label="Asking Price">3/22/2022</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="View PDF"><a href="https://app.harkenbov.com/wggenerator/report/335" target="_blank"><MaterializeIcon className="pdfIcon">picture_as_pdf</MaterializeIcon></a></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}>3.8.22 EJK Super Admin Test - Land Only ($/AC)</Link></td>
                                            <td data-label="Address">Maria Lopez(First Interstate Bank) </td>
                                            <td data-label="Type">458 Charles Street, Billings, MT</td>
                                            <td data-label="Asking Price">3/9/2022</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="View PDF"><a href="https://app.harkenbov.com/wggenerator/report/335" target="_blank"><MaterializeIcon className="pdfIcon">picture_as_pdf</MaterializeIcon></a></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}>Hark-4</Link></td>
                                            <td data-label="Address">Maria Lopez(First Interstate Bank) </td>
                                            <td data-label="Type">Texas 12 Loop, Dallas, TX </td>
                                            <td data-label="Asking Price">3/1/2022</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="View PDF"><a href="https://app.harkenbov.com/wggenerator/report/335" target="_blank"><MaterializeIcon className="pdfIcon">picture_as_pdf</MaterializeIcon></a></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}>test hark 4</Link></td>
                                            <td data-label="Address"> Maria Lopez(First Interstate Bank) </td>
                                            <td data-label="Type">Bermuda Road, Irving, NV </td>
                                            <td data-label="Asking Price"> 3/1/2022</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="View PDF"><a href="https://app.harkenbov.com/wggenerator/report/335" target="_blank"><MaterializeIcon className="pdfIcon">picture_as_pdf</MaterializeIcon></a></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}>2.22.22 EJK Super Admin Test</Link></td>
                                            <td data-label="Address">Maria Lopez(First Interstate Bank) </td>
                                            <td data-label="Type">3312 4th Avenue North, Billings, MT </td>
                                            <td data-label="Asking Price">2/22/2022</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="View PDF"><a href="https://app.harkenbov.com/wggenerator/report/335" target="_blank"><MaterializeIcon className="pdfIcon">picture_as_pdf</MaterializeIcon></a></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}>Hark-4</Link></td>
                                            <td data-label="Address">Maria Lopez(First Interstate Bank) </td>
                                            <td data-label="Type">Texas 12 Loop, Dallas, TX </td>
                                            <td data-label="Asking Price">3/1/2022</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="View PDF"><a href="https://app.harkenbov.com/wggenerator/report/335" target="_blank"><MaterializeIcon className="pdfIcon">picture_as_pdf</MaterializeIcon></a></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}>test hark 4</Link></td>
                                            <td data-label="Address"> Maria Lopez(First Interstate Bank) </td>
                                            <td data-label="Type">Bermuda Road, Irving, NV </td>
                                            <td data-label="Asking Price"> 3/1/2022</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="View PDF"><a href="https://app.harkenbov.com/wggenerator/report/335" target="_blank"><MaterializeIcon className="pdfIcon">picture_as_pdf</MaterializeIcon></a></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}>2.22.22 EJK Super Admin Test</Link></td>
                                            <td data-label="Address">Maria Lopez(First Interstate Bank) </td>
                                            <td data-label="Type">3312 4th Avenue North, Billings, MT </td>
                                            <td data-label="Asking Price">2/22/2022</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" title="Edit Client" onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" title="View PDF"><a href="https://app.harkenbov.com/wggenerator/report/335" target="_blank"><MaterializeIcon className="pdfIcon">picture_as_pdf</MaterializeIcon></a></span>
                                                <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            
                    </TableWrapper>                   

                    <DataTablesInfo>
                        <p>Showing 1 to 10 of 194 entries</p>
                    </DataTablesInfo>


                    <Paginations/>

           
            
        </>
    );
 };
 
 export default Clients;
 