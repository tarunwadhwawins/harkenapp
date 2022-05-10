
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Collapsible, CollapsibleItem, Row, Tab, Icon as MaterializeIcon, Tabs, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import EvaluationTab from "../../components/elements/sidebar/EvaluationTab";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";
import { TableWrapper } from "../client/Clients";
import { DividerLine } from "../client/CreateClients";
import  Icon   from "../../components/elements/icon/Icon";
import { Icons } from "../../components/elements/icon/Icons";
import ChooseFile from "../../components/elements/chooseFile/ChooseFile";
import CommonButton from "../../components/elements/button/CommonButton";
import RoutePath from "../../config/RoutePath";
import GrayButton from "../../components/elements/button/GrayButton";


export const ContentWrapper = styled.div`

    min-height: calc(100vh - 150px);
    margin-bottom: 50px;
    .subHeaderCaption{
        text-align: left;
        p{
            font-family: Montserrat,sans-serif;
            font-size: 13px;
            color: ${Colors.lightblue};
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
    padding:0 30px;
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
const UploadIcon = styled.div`
    display: inline-flex;
    border: 1px solid ${Colors.lightblue1};
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    img{
        width: 50px;
    }

`;




const ImagePage = () => {

    const navigate = useNavigate();
    const [ImageModalIsVisible, setImageModalIsVisible] = useState(false);
    const [DeleteConfirmIsVisible, setDeleteConfirmIsVisible] = useState(false);
    const [ViewImageIsVisible, setViewImageIsVisible] = useState(false);
    
    
    return (
        <>
            
            <BaseModal
                open={ImageModalIsVisible}
                modalType={ModalList.ImageModal}
                subTitle={"Linkbynet"}
                onClose={setImageModalIsVisible}
            /> 
            <BaseModal
            open={DeleteConfirmIsVisible}
            modalType={ModalList.DeleteConfirm}
            subTitle={"Linkbynet"}
            onClose={setDeleteConfirmIsVisible}
            isConfirmationModal={true}
            /> 
            <BaseModal
            open={ViewImageIsVisible}
            modalType={ModalList.ViewImage}
            onClose={setViewImageIsVisible}
            /> 

            <EvaluationTab />
            <SearchCol>
                <Row>
                    <Col className="subHeaderCaption" s={12} m={12} l={12}>
                        <MainCaption>IMAGES</MainCaption>
                        <p>For best results, we recommend photo size to be between 2MB - 5MB, if possible.</p>
                        <p className="subTitle"><MaterializeIcon>info_outline</MaterializeIcon>  Upload images to be used in this evaluation.</p>
                    </Col>
                </Row>
            </SearchCol>

            <TableWrapper>
                                                <Row>
                                                    <Col s={12} m={12} l={12} className="p-0">
                                                        <Table responsive>
                                                            <thead>
                                                                <tr>
                                                                    <th className="sorting_asc">Image <Icon icon={Icons.Sort}></Icon></th>
                                                                    <th data-field="name">Description <Icon icon={Icons.Sort}></Icon></th>
                                                                    <th data-field="price">Orientation</th>
                                                                    <th data-field="price">Page</th>
                                                                    <th data-field="price" className="actionBtn">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td data-label="Image" className="msImage" >
                                                                        <UploadIcon onClick={()=>setImageModalIsVisible(true)}><img src={Icons.UploadImage} alt="Image"></img></UploadIcon>
                                                                    </td>
                                                                    <td data-label="Description">Sub. Property</td>
                                                                    <td data-label="Orientation">Horizontal</td>
                                                                    <td data-label="Page">1 - Cover Photo</td>
                                                                    <td data-label="Action" className="actionBtn">
                                                                        <span className="blueColor" onClick={()=>setViewImageIsVisible(true)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                                        <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>                                       
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                 <td data-label="Image" className="msImage" >
                                                                        <UploadIcon onClick={()=>setImageModalIsVisible(true)}><img src={Icons.UploadImage} alt="Image"></img></UploadIcon>
                                                                    </td>
                                                                    <td data-label="Description">Sub. Property 2</td>
                                                                    <td data-label="Orientation">Vertical</td>
                                                                    <td data-label="Page">2 - Table of Contents</td>
                                                                    <td data-label="Action" className="actionBtn">
                                                                        <span className="blueColor" onClick={()=>setViewImageIsVisible(true)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                                        <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>                                       
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td data-label="Image" className="msImage" >
                                                                        <UploadIcon onClick={()=>setImageModalIsVisible(true)}><img src={Icons.UploadImage} alt="Image"></img></UploadIcon>
                                                                    </td>
                                                                    <td data-label="Description">Sub. Property 3</td>
                                                                    <td data-label="Orientation">Vertical</td>
                                                                    <td data-label="Page">5 - Executive Summary </td>
                                                                    <td data-label="Action" className="actionBtn">
                                                                        <span className="blueColor" onClick={()=>setViewImageIsVisible(true)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                                        <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>                                       
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td data-label="Image" className="msImage" >
                                                                        <UploadIcon onClick={()=>setImageModalIsVisible(true)}><img src={Icons.UploadImage} alt="Image"></img></UploadIcon>
                                                                    </td>
                                                                    <td data-label="Description">Sub. Property 4</td>
                                                                    <td data-label="Orientation">Horizontal</td>
                                                                    <td data-label="Page">7 - Property Summary</td>
                                                                    <td data-label="Action" className="actionBtn">
                                                                        <span className="blueColor" onClick={()=>setViewImageIsVisible(true)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                                        <span className="dangerColor" title="Delete" onClick={()=>setDeleteConfirmIsVisible(true)}><Icon icon={Icons.Deleteicons}></Icon></span>                                       
                                                                    </td>
                                                                </tr>
                                                                
                                                            </tbody>
                                                        </Table>
                                                    </Col>
                                                    <Col s={12} m={12} l={12} className="leftAlign fixeBtn">
                                                        <GrayButton onClick={()=>navigate(RoutePath.EVALUATIONOVERVIEW)}  icon={Icons.Back}/> 
                                                        <CommonButton onClick={()=>navigate(RoutePath.EVALUATIONPROPERTYBOUNDARIES)} buttonText="Save and Continue" />
                                                    </Col>
                                                </Row>
                                            </TableWrapper>
                                            <Row>
                                                <Col s={12} m={12} l={12} className="alignCenter">
                                                    <CommonButton onClick={()=>setImageModalIsVisible(true)} buttonText="Click here to add an extra image" />
                                                </Col>
                                            </Row>
                                            
         

        </>
    );
};

export default ImagePage;
