
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
export const ListWrap = styled.div`    
    border: 1px solid ${Colors.extralightblue1};
    border-radius: 5px;
    padding: 12px 25px;
    margin-top: 30px;
    background-color: ${Colors.extralightblue2};
    ul{
        display: grid;
        grid-gap: 15px;        
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        li{
            justify-content: flex-start;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            min-height: 45px;
            p{
                margin: 0 ;
                color: ${Colors.blue} !important;
                font-size: 13px;
                font-family: Montserrat,sans-serif;
                text-align: left;
                position: relative;
                font-weight: 600;
            }
            h3{
                margin: 5px 0;
                font-size: 16px;
                font-weight: 600;
                text-align: left;
                color: ${Colors.darkblue};
            }
        }
    }
`;
const BodyContent = styled.div` 
    padding: 10px 0px;
    border-radius: 5px;
    p{
        margin: 5px;
    }
    
`;
export const MasterPropertiesTable = styled.table`
    border: 1px solid ${Colors.extralightblue1};
    tr{
        border: none;
        th{
            max-width: 230px;
            width: 230px;
            padding: 14px 15px;
        }
        &:nth-child(odd){
            background-color: ${Colors.extralightblue1};
        }
    }
`;

const MasterProperties = () => {

    const navigate = useNavigate();

    return (        
        <>
 
            
                    <SearchCol>
                        <Row>
                            <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                <MainCaption>MASTER PROPERTY | 1000 10TH AVENUE </MainCaption>
                            </Col>                            
                            
                            <Col s={12} m={6} l={6}>
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
                                <Row>
                                    
                                    <Col s={12} m={12} l={12} className="subHeaderCaption">
                                        <MainCaption1>LISTINGS </MainCaption1>
                                        <BodyContent>
                                            <p>No listings created</p>
                                        </BodyContent>
                                       
                                    </Col>
                                    <Col s={12} m={12} l={12} className="subHeaderCaption">
                                        <MainCaption1>SALES COMPS </MainCaption1>
                                        <Collapsible accordion className="accordionWrapper">
                                            <CollapsibleItem
                                                expanded={false}
                                                header="1000 10th Avenue by Super Admin test (Whitewater Tech)"
                                                icon={<MaterializeIcon>expand_more</MaterializeIcon>}
                                                node="div"
                                            >

                                                <MasterPropertiesTable>
                                                    <tr>
                                                        <th className="bold">Id :</th>
                                                        <td className="left">View Comp</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="bold">Property Id :</th>
                                                        <td className="left">25348</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="bold">User Id :</th>
                                                        <td className="left">2294</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Account Id :</th>
                                                        <td className="left">2529</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Business Name :</th>
                                                        <td className="left">treeland</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="bold">Street Address :</th>
                                                        <td className="left">1000 10th Avenue</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Street Suite :</th>
                                                        <td className="left">1000</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">City :</th>
                                                        <td className="left">New York</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">County :</th>
                                                        <td className="left">New York County</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">State :</th>
                                                        <td className="left">New York</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Zipcode :</th>
                                                        <td className="left">10019</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Type :</th>
                                                        <td className="left">Sale </td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Condition :</th>
                                                        <td className="left">Good</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Sale Price :</th>
                                                        <td className="left">$222.11</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Price Square Foot :</th>
                                                        <td className="left">$0.92</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Concessions :</th>
                                                        <td className="left"> </td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Building Size :</th>
                                                        <td className="left">242</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Land Size :</th>
                                                        <td className="left">0.000 </td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Land Dimension :</th>
                                                        <td className="left">SF</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Date Sold :</th>
                                                        <td className="left">07/31/2021 </td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Net Operating Income :</th>
                                                        <td className="left">$0.00</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Cap Rate :</th>
                                                        <td className="left">0% </td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Frontage :</th>
                                                        <td className="left">Poor</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Utilities Select :</th>
                                                        <td className="left">Full City Services</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Utilities Text :</th>
                                                        <td className="left"></td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Zoning Type :</th>
                                                        <td className="left"></td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Summary :</th>
                                                        <td className="left">jswj</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Map Pin Lat :</th>
                                                        <td className="left">40.7699982</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Map Pin Lng :</th>
                                                        <td className="left">-73.9874797</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Map Pin Zoom :</th>
                                                        <td className="left">15</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Latitude :</th>
                                                        <td className="left">40.7699982</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Longitude :</th>
                                                        <td className="left">-73.9874797</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Comp Type :</th>
                                                        <td className="left">Building(s) with Land</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Topography :</th>
                                                        <td className="left"></td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Lot Shape :</th>
                                                        <td className="left"></td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Offeror :</th>
                                                        <td className="left"></td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Acquirer :</th>
                                                        <td className="left"></td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Total Operating Expense :</th>
                                                        <td className="left">$0.00</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Operating Expense Psf :</th>
                                                        <td className="left">$0.00</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">List Price :</th>
                                                        <td className="left">$0.00</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Date List :</th>
                                                        <td className="left"></td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Days On Market :</th>
                                                        <td className="left"></td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Total Concessions :</th>
                                                        <td className="left">$0.00</td>
                                                    </tr>    
                                                    <tr>
                                                        <th className="bold">Private Comp :</th>
                                                        <td className="left">Yes</td>
                                                    </tr>
                                                </MasterPropertiesTable>

                                            </CollapsibleItem>
                                           
                                        </Collapsible>
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

export default MasterProperties;
