
// import { useNavigate } from "react-router-dom";
import { Col, Row, Tab, Table, Tabs, Icon as MaterializeIcon } from "react-materialize";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../../assets/style/Colors";
import CommonButton from "../../../components/elements/button/CommonButton";
import { Icons } from "../../../components/elements/icon/Icons";

import  Icon   from "../../../components/elements/icon/Icon";
import RoutePath from "../../../config/RoutePath";
import TABS from "../../../utils/Tabs.Utils";
import { useRef, useState } from "react";



export const SidebarNavigation = styled.div`
    // background-color: ${Colors.extralightblue1};
    border-radius: 5px;
    width: 100%;
    // max-width: 240px;
    text-align: left;
    button{
        margin-bottom: 0 !important;
        width: 100%;
    }
    ul{
        margin-bottom: 0;
        li{
            line-height: 45px;
            font-family: Montserrat,sans-serif;
            font-size: 15px;
            cursor: pointer;
            color: ${Colors.darkgrey};
            svg{
                font-size: 14px !important;                
                margin-right: 5px;
                color: ${Colors.blue};

            }            
            a{
                color: ${Colors.darkgrey}; 
                &.active, &:hover{
                    color: ${Colors.darkblue}; 
                    font-weight: 600;                  
                }
            }
            
        }
    }
    
`;



const SideBar1 = (props : any) => {  

    const navigate = useNavigate();
    const location = useLocation()
    const pathName = location?.pathname

    const [active, setActive] = useState("propertyDetails")

    const SIDEBAR_TABS = {
        Brokers: "brokers",
        PropertyDetails: "propertyDetails",
        Specifications: "specifications",
        Amenities: "amenities",
        Images: "images",
        TaxAssessment: "taxAssessment",
        ExpirationDate: "expirationDate",
    }
    
    return ( 
        <>

            <SidebarNavigation className="sideNav">
                <ul>
                  <li><a href={`#${SIDEBAR_TABS.Brokers}`} className={active === SIDEBAR_TABS.Brokers ? "active": ""} onClick={() => setActive(SIDEBAR_TABS.Brokers)}><Icon icon={Icons.CaretRight}></Icon> Brokers</a></li>
                  <li><a href="#propertyDetails" className={active === "PropertyDetails" ? "active": ""} onClick={() => setActive("PropertyDetails")}><Icon icon={Icons.CaretRight}></Icon> Property Details </a></li>
                  <li><a href="#specifications" className={active === "specifications" ? "active": ""} onClick={() => setActive("specifications")}><Icon icon={Icons.CaretRight}></Icon> Specifications </a></li>
                  <li><a href="#amenities" className={active === "amenities" ? "active": ""} onClick={() => setActive("amenities")}><Icon icon={Icons.CaretRight}></Icon> Amenities </a></li>
                  <li><a href="#images" className={active === "images" ? "active": ""} onClick={() => setActive("images")}><Icon icon={Icons.CaretRight}></Icon> Images </a></li>
                  <li><a href="#expirationDate" className={active === "expirationDate" ? "active": ""} onClick={() => setActive("expirationDate")}><Icon icon={Icons.CaretRight}></Icon> Expiration Date  </a></li>
                </ul>                                                        
            </SidebarNavigation> 
           
            
        </>
    );
 };
 
 export default SideBar1;
 