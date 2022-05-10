
// import { useNavigate } from "react-router-dom";
import { Col, Collapsible, CollapsibleItem, Icon as MaterializeIcon, Row, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import Footer from "../../components/elements/footer/Footer";
import Header from "../../components/elements/header/Header";
import { ContentWrapper } from "../client/Clients";
import { Icons } from "../../components/elements/icon/Icons";
import { useState } from "react";
import ChooseFile from "../../components/elements/chooseFile/ChooseFile";
import { MasterPropertiesTable } from "../comps/MasterProperties";



export const MainWrapper = styled.div`
    text-align: center;
    width: 100%;
    .editBtn{
        grid-gap: 15px;
        button{
            white-space: nowrap;
            min-width: inherit;
            display: flex;
            align-items: center;
            margin:0;
            svg{
                font-size: 13px !important;
                margin-right: 7px;
            }
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
    .browseIMage{
        .chooseFile{
            max-width: 100%;
        }
    }
    .subHeaderCaption{
        text-align: left;
        p{
            font-family: Montserrat,sans-serif;
            font-size: 13px;
            color: ${Colors.blackShade};
            display: flex;
            align-items: center;
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
    svg{
        margin-left: 20px;  
        color: ${Colors.blue};
        cursor: pointer;
        font-size: 20px !important;
    }
`;
const MainCaption1 = styled.h2`
    color: ${Colors.black};
    font-family: 'roboto_slabbold';
    text-align: left;
    font-size: 16px;
    line-height: 32px;
    margin: 22px 0 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    svg{
        margin-left: 20px;  
        color: ${Colors.blue};
        cursor: pointer;
        font-size: 20px !important;
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
const ImageWrapper = styled.div`
    width: 100%;
    max-height: 450px;
    overflow: hidden;
    border-radius: 20px;
    margin-top: 30px;
    border: 10px solid ${Colors.extralightblue1};
    img{
        max-width: 100%
    }
`;

const BodyContent = styled.div` 
    padding: 10px 0;
    border-radius: 5px;
    p{
        margin: 5px;
    }
    
`;


const ListingsMasterProperties = () => {

    const navigate = useNavigate();

    return (        
        <>
 
            
                    <SearchCol>
                        <Row>
                            <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                <MainCaption>MASTER PROPERTY | USMANPUR GUJRAN MARG </MainCaption>
                            </Col>                            
                            
                            <Col s={12} m={6} l={6}>
                                <Row>
                                    <Col s={12} m={12} l={12}>
                                        <MasterPropertiesTable className="mt-3 mb-3">
                                            <tr>
                                                <th>Property Name:</th>
                                                <td>treeland</td>
                                            </tr> 
                                            <tr>
                                                <th>Street Address:</th>
                                                <td>1000 10th Avenue</td>
                                            </tr>  
                                            <tr>
                                                <th>City:</th>
                                                <td>New York</td>
                                            </tr> 
                                            <tr>
                                                <th>County:</th>
                                                <td>New York County</td>
                                            </tr> 
                                            <tr>
                                                <th>State:</th>
                                                <td>NY</td>
                                            </tr> 
                                            <tr>
                                                <th>Zipcode:</th>
                                                <td>10019</td>
                                            </tr> 
                                            <tr>
                                                <th>Latitude:</th>
                                                <td>40.7699982</td>
                                            </tr> 
                                            <tr>
                                                <th>Longitude</th>
                                                <td>-73.9874797</td>
                                            </tr> 
                                            <tr>
                                                <th>Created at:</th>
                                                <td>2021-07-20 9:34am</td>
                                            </tr>                                   
                                        </MasterPropertiesTable>
                                    </Col>
                                    
                                    <Col s={12} m={12} l={12} className="subHeaderCaption">
                                        <MainCaption1>LISTINGS </MainCaption1>
                                        <Collapsible accordion className="accordionWrapper">
                                            <CollapsibleItem
                                                expanded={false}
                                                header="Usmanpur Gujran Marg by Super Admin test (Whitewater Tech)"
                                                icon={<MaterializeIcon>expand_more</MaterializeIcon>}
                                                node="div"
                                            >
                                            <MasterPropertiesTable className="mt-3 mb-3">
                                                <tr>
                                                    <th>Id :</th>
                                                    <td>15797 - View Comp</td>
                                                </tr> 
                                                <tr>
                                                    <th>Property Id :</th>
                                                    <td>25348</td>
                                                </tr>  
                                                <tr>
                                                    <th>User Id :</th>
                                                    <td>2294</td>
                                                </tr> 
                                                <tr>
                                                    <th>Account Id :</th>
                                                    <td>2529</td>
                                                </tr> 
                                                <tr>
                                                    <th>Street Address :</th>
                                                    <td>1000 10th Avenue</td>
                                                </tr> 
                                                <tr>
                                                    <th>Street Suite :</th>
                                                    <td>1000</td>
                                                </tr> 
                                                <tr>
                                                    <th>City :</th>
                                                    <td>-New York</td>
                                                </tr> 
                                                <tr>
                                                    <th>County :</th>
                                                    <td>New York County</td>
                                                </tr> 
                                                <tr>
                                                    <th>State :</th>
                                                    <td>New York</td>
                                                </tr> 
                                                <tr>
                                                    <th>Zipcode :</th>
                                                    <td>10019</td>
                                                </tr>
                                                <tr>
                                                    <th>Type :</th>
                                                    <td>Sale</td>
                                                </tr> 
                                                <tr>
                                                    <th>Condition :</th>
                                                    <td>Good</td>
                                                </tr>                                  
                                            </MasterPropertiesTable>  

                                            </CollapsibleItem>
                                           
                                        </Collapsible>
                                    </Col>

                                    <Col s={12} m={12} l={12} className="subHeaderCaption">
                                        <MainCaption1>SALES COMPS </MainCaption1>
                                        <BodyContent>
                                            <p>No listings created</p>
                                        </BodyContent>
                                       
                                    </Col>

                                    <Col s={12} m={12} l={12} className="subHeaderCaption">
                                        <MainCaption1>LEASE COMPS </MainCaption1>
                                        <BodyContent>
                                            <p>No lease comps created</p>
                                        </BodyContent>
                                        
                                    </Col>
                                    <Col s={12} m={12} l={12} className="subHeaderCaption">
                                        <MainCaption1>EVALUATIONS </MainCaption1>
                                        <BodyContent>
                                            <p>No Evaluations created</p>
                                        </BodyContent>
                                        
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="browseIMage" s={12} m={6} l={6}>  
                                <ChooseFile/>                              
                                <ImageWrapper><img src={Icons.GoogleMap}></img></ImageWrapper>                                
                            </Col>
                        </Row>
                    </SearchCol>



        </>
    );
};

export default ListingsMasterProperties;
