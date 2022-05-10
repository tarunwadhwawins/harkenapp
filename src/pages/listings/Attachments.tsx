
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Row, Icon as MaterializeIcon, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import CommonButton from "../../components/elements/button/CommonButton";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";
import RoutePath from "../../config/RoutePath";
import { SearchCol, TableWrapper } from "../client/Clients";
import { DividerLine } from "../client/CreateClients";
import  Icon   from "../../components/elements/icon/Icon";
import { Icons } from "../../components/elements/icon/Icons";
import { NoDataFound } from "../userList/BrokerList";
import GrayButton from "../../components/elements/button/GrayButton";




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

export const AddFieldWrap = styled.div`
    min-height: 70px;
    display: flex;
    align-items: center;
    i{
      color: ${Colors.blue};  
      cursor: pointer;
    }
`;




const Attachments = () => {

    const navigate = useNavigate();
    const [UploadFileIsVisible, setUploadFileIsVisible] = useState(false);
    
    return (
        <>
            <BaseModal
                open={UploadFileIsVisible}
                modalType={ModalList.UploadFile}
                subTitle={"Linkbynet"}
                onClose={setUploadFileIsVisible}    
            />


            <SearchCol>
                <Row>
                    <Col className="subHeaderCaption" s={12} m={8} l={8}>
                        <MainCaption>Attachments</MainCaption>
                        <p className="subTitle mb-0"><MaterializeIcon>info_outline</MaterializeIcon> Upload any attachment (.pdf) that to be desplayed in the property listing.</p>
                    </Col>
                    <Col className="addClientBtn" s={12} m={4} l={4}> 
                        <CommonButton onClick={()=> setUploadFileIsVisible(true)} buttonText="File Attach"  icon={Icons.AttachIcon}/>                        
                    </Col>
                </Row>
            </SearchCol>
            <TableWrapper className="mt-1">
                <Table responsive>
                    <thead>
                        <tr>
                            <th className="sorting_asc">Name <Icon icon={Icons.Sort}></Icon></th>
                            <th data-field="name">Description <Icon icon={Icons.Sort}></Icon></th>
                            <th data-field="name">File </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Name" colSpan={3}>
                                <NoDataFound>No matching records found</NoDataFound>
                            </td> 
                        </tr>                                       
                                        
                    </tbody>
                </Table>
            </TableWrapper> 
            <SearchCol>
                <Row>
                    <Col className="rightAlign multiButtonWrapper" s={12} m={12} l={12}> 
                        <GrayButton onClick={()=>navigate(RoutePath.OVERVIEW)}  icon={Icons.Back}/>    
                        <CommonButton onClick={()=>navigate(RoutePath.PROPERTYBOUNDARIES)} buttonText="Next Step" />                        
                    </Col>
                </Row>
            </SearchCol>
            



 

        </>
    );
};

export default Attachments;
