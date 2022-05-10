
// import { useNavigate } from "react-router-dom";
import { Col, Row, Icon as MaterializeIcon, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import Footer from "../../components/elements/footer/Footer";
import Header from "../../components/elements/header/Header";
import { Icons } from "../../components/elements/icon/Icons";
import { DividerLine } from "../client/CreateClients";
import CommonButton from "../../components/elements/button/CommonButton";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";
import { useState } from "react";
import { FormControll } from "../accounts/CreateAccount";
import InputLabelfield from "../../components/elements/input/InputLabelfield";
import { GridWrapper } from "../CreateAccount";
import TextEditor from "../../components/elements/textEditor/TextEditor";
import RoutePath from "../../config/RoutePath";



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

                    <SearchCol>
                        <Row>
                            <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                <MainCaption>Edit PAGE</MainCaption>
                            </Col>
                        </Row>
                    </SearchCol>
                    <DividerLine className="mb-2 mt-2"></DividerLine>
                    <SearchCol>
                        
                        <GridWrapper>
                            <Row>
                                <Col s={12} m={12} l={12}>
                                    <FormControll>
                                        <InputLabelfield label="Title"></InputLabelfield>            
                                    </FormControll>
                                </Col>
                                <Col s={12} m={12} l={12}>
                                    <FormControll>
                                        <InputLabelfield label="Slug"></InputLabelfield>            
                                    </FormControll>
                                </Col>
                                <Col s={12} m={12} l={12}>
                                    <FormControll>
                                        <InputLabelfield label="Icon"></InputLabelfield>            
                                    </FormControll>
                                </Col>
                                <Col s={12} m={12} l={12}>
                                    <FormControll className="textEditorWrap">
                                        <TextEditor />
                                    </FormControll>
                                </Col>
                                <Col className="addClientBtn mt-2" s={12} m={12} l={12}> 
                                    <CommonButton  buttonText="Save" onClick={()=> navigate(RoutePath.PAGELIST)} icon={Icons.SaveIcon}/>
                                </Col>
                            </Row>
                        </GridWrapper>   
                    </SearchCol> 
 
            
        </>
    );
 };
 
 export default Clients;
 