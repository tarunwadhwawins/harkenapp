
// import { useNavigate } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Radio, Route } from "@mui/icons-material";
import { Col, Icon as MaterializeIcon, Row, Table } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import CommonButton from "../../components/elements/button/CommonButton";
import Footer from "../../components/elements/footer/Footer";
import Header from "../../components/elements/header/Header";
import Paginations from "../../components/elements/pagination/Pagination";
import RadioSelect from "../../components/elements/radio/RadioSelect";
import SearchFieldWrap from "../../components/elements/search/SearchField";
import RoutePath from "../../config/RoutePath";
import { ContentWrapper, SearchCol, TableWrapper } from "../client/Clients";
import  Icon   from "../../components/elements/icon/Icon";
import { Icons } from "../../components/elements/icon/Icons";
import { useState } from "react";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";



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
    padding: 0 30px;
    @media(max-width:991px){
        padding: 0 ;
    }
    p{
        color: ${Colors.blackShade};
        font-size: 12px;
        font-family: Montserrat,sans-serif;
        margin: 1rem 0rem 0;
        text-align: left;
        padding: 0 15px;
    }
`;
const RadioWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const SearchWithRadio = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    .input-field{
        &.col{
            width: 100%;
        }
    }
`;




const Clients = () => {

    const navigate = useNavigate();
    const [radioDropdown, setRadioDropdown] = useState("xl");
    const [UploadCompsIsVisible, setUploadCompsIsVisible] = useState(false);
    const [CreateCompsIsVisible, setCreateCompsIsVisible] = useState(false);
    const [EditCompsIsVisible, setEditCompsIsVisible] = useState(false);

    return (        
        <>
 
            <BaseModal
            open={UploadCompsIsVisible}
            modalType={ModalList.UploadComps}
            subTitle={"Linkbynet"}
            onClose={setUploadCompsIsVisible}
            isConfirmationModal={true}
            />
            <BaseModal
            open={CreateCompsIsVisible}
            modalType={ModalList.CreateComps}
            subTitle={"Linkbynet"}
            onClose={setCreateCompsIsVisible}
            />
            <BaseModal
            open={EditCompsIsVisible}
            modalType={ModalList.EditComps}
            subTitle={"Linkbynet"}
            onClose={setEditCompsIsVisible}
            />


                    <SearchCol className="subHeaderWrapper responsiveSubHeader">
                        <Row>
                            <Col className="subHeaderCaption searchWrapper" s={12} m={7} l={7}>
                                <MainCaption>COMPS LIST</MainCaption>
                                <SearchFieldWrap placeholder="Search Sales Comps" icon="search" />
                            </Col>
                            <Col className="editBtn" s={12} m={5} l={5}>       
                                <SearchWithRadio>
                                    <RadioWrapper>
                                        <RadioSelect value={radioDropdown}
                                            options={[
                                                {
                                                    label: `Leases`,
                                                    value: 'xl'
                                                },
                                                {
                                                    label: `Sales`,
                                                    value: 'l'
                                                }
                                            ]}
                                            onchange={(e: any) => {
                                                setRadioDropdown(e.target.value);
                                            }}

                                        />
                                    </RadioWrapper>
                                </SearchWithRadio>                         
                                <CommonButton onClick={()=>setUploadCompsIsVisible(true)} buttonText="Upload comps" icon={Icons.UploadIcon} />
                                <CommonButton onClick={()=>setCreateCompsIsVisible(true)} buttonText="Add comps" icon={Icons.PlusIcon}/>
                            </Col>
                        </Row>
                    </SearchCol>
                    <TableWrapper>
                    <Table responsive>
                                    <thead>
                                        <tr>
                                            <th className="sorting_asc">Name <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Sale Price <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Building Size </th>
                                            <th data-field="name">Land Size <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">$ / SF <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="name">Type <Icon icon={Icons.Sort}></Icon></th>
                                            <th data-field="Date Sold">Date Sold</th>
                                            <th data-field="price" className="actionBtn">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=>navigate(RoutePath.PROPERTYDETAILS)}>1000 10th Avenue</Link></td>
                                            <td data-label="Sale Price">$23,456,546.00</td>
                                            <td data-label="Building Size">446 SF</td>
                                            <td data-label="Land Size">7,567 SF</td>
                                            <td data-label="$ / SF">--</td>
                                            <td data-label="Type">Multi-Family</td>
                                            <td data-label="Date Sold">3/25/2021</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=>setEditCompsIsVisible(true)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" onClick={()=>navigate(RoutePath.MASTERPROPERTY)} title="Master Property"><Icon icon={Icons.BarChart}></Icon></span> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=>navigate(RoutePath.PROPERTYDETAILS)}>Water Users Ln Co Road 1-12 B</Link></td>
                                            <td data-label="Sale Price">$100,000.00</td>
                                            <td data-label="Building Size">300 SF</td>
                                            <td data-label="Land Size">7,567 SF</td>
                                            <td data-label="$ / SF">--</td>
                                            <td data-label="Type">Multi-Family</td>
                                            <td data-label="Date Sold">3/25/2021</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=>setEditCompsIsVisible(true)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" onClick={()=>navigate(RoutePath.MASTERPROPERTY)} title="Master Property"><Icon icon={Icons.BarChart}></Icon></span> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=>navigate(RoutePath.PROPERTYDETAILS)}>U.S. Highway 62</Link></td>
                                            <td data-label="Sale Price">$12,000,000.00</td>
                                            <td data-label="Building Size">446 SF</td>
                                            <td data-label="Land Size">7,567 SF</td>
                                            <td data-label="$ / SF">--</td>
                                            <td data-label="Type">Multi-Family</td>
                                            <td data-label="Date Sold">3/25/2021</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=>setEditCompsIsVisible(true)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" onClick={()=>navigate(RoutePath.MASTERPROPERTY)} title="Master Property"><Icon icon={Icons.BarChart}></Icon></span> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=>navigate(RoutePath.PROPERTYDETAILS)}>U.S. 23</Link></td>
                                            <td data-label="Sale Price">$23,456,546.00</td>
                                            <td data-label="Building Size">446 SF</td>
                                            <td data-label="Land Size">7,567 SF</td>
                                            <td data-label="$ / SF">--</td>
                                            <td data-label="Type">Multi-Family</td>
                                            <td data-label="Date Sold">3/25/2021</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=>setEditCompsIsVisible(true)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" onClick={()=>navigate(RoutePath.MASTERPROPERTY)} title="Master Property"><Icon icon={Icons.BarChart}></Icon></span> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=>navigate(RoutePath.PROPERTYDETAILS)}>U.S. 219</Link></td>
                                            <td data-label="Sale Price">$23,456,546.00</td>
                                            <td data-label="Building Size">446 SF</td>
                                            <td data-label="Land Size">7,567 SF</td>
                                            <td data-label="$ / SF">--</td>
                                            <td data-label="Type">Multi-Family</td>
                                            <td data-label="Date Sold">3/25/2021</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=>setEditCompsIsVisible(true)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" onClick={()=>navigate(RoutePath.MASTERPROPERTY)} title="Master Property"><Icon icon={Icons.BarChart}></Icon></span> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=>navigate(RoutePath.PROPERTYDETAILS)}>U.S. 12</Link></td>
                                            <td data-label="Sale Price">$23,456,546.00</td>
                                            <td data-label="Building Size">446 SF</td>
                                            <td data-label="Land Size">7,567 SF</td>
                                            <td data-label="$ / SF">--</td>
                                            <td data-label="Type">Multi-Family</td>
                                            <td data-label="Date Sold">3/25/2021</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=>setEditCompsIsVisible(true)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" onClick={()=>navigate(RoutePath.MASTERPROPERTY)} title="Master Property"><Icon icon={Icons.BarChart}></Icon></span> 
                                            </td>
                                        </tr><tr>
                                            <td data-label="Name"><Link onClick={()=>navigate(RoutePath.PROPERTYDETAILS)}>U.S. 12</Link></td>
                                            <td data-label="Sale Price">$23,456,546.00</td>
                                            <td data-label="Building Size">446 SF</td>
                                            <td data-label="Land Size">7,567 SF</td>
                                            <td data-label="$ / SF">--</td>
                                            <td data-label="Type">Multi-Family</td>
                                            <td data-label="Date Sold">3/25/2021</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=>setEditCompsIsVisible(true)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" onClick={()=>navigate(RoutePath.MASTERPROPERTY)} title="Master Property"><Icon icon={Icons.BarChart}></Icon></span> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-label="Name"><Link onClick={()=>navigate(RoutePath.PROPERTYDETAILS)}>Tract 3 of COS 1282</Link></td>
                                            <td data-label="Sale Price">$23,456,546.00</td>
                                            <td data-label="Building Size">446 SF</td>
                                            <td data-label="Land Size">7,567 SF</td>
                                            <td data-label="$ / SF">--</td>
                                            <td data-label="Type">Multi-Family</td>
                                            <td data-label="Date Sold">3/25/2021</td>
                                            <td data-label="Action" className="actionBtn">
                                                <span className="blueColor" onClick={()=>setEditCompsIsVisible(true)} title="Edit Client"><Icon icon={Icons.EyeImage}></Icon></span>
                                                <span className="greenColor" onClick={()=>navigate(RoutePath.MASTERPROPERTY)} title="Master Property"><Icon icon={Icons.BarChart}></Icon></span> 
                                            </td>
                                        </tr>



                                    </tbody>
                                </Table>
                    </TableWrapper>

                    <DataTablesInfo>
                        <p>Showing 1 to 10 of 41 entries</p>
                    </DataTablesInfo>


                    <Paginations />




        </>
    );
};

export default Clients;
