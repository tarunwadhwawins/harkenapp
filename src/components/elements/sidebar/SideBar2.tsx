
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
        PropertyDetails: "propertyDetails",
        Specifications: "specifications",
        Analysis: "analysis",
        Amenities: "amenities",
        Zoning: "zoning",
        TaxAssessment: "taxAssessment",
        MapBoundaries: "mapBoundaries",
    }

    return ( 
        <>

            <SidebarNavigation className="sideNav2" id="app_sidebar_holder2">
                <ul>
                  <li><a href={`#${SIDEBAR_TABS.PropertyDetails}`} className={active === SIDEBAR_TABS.PropertyDetails ? "active": ""} onClick={() => setActive(SIDEBAR_TABS.PropertyDetails)}><Icon icon={Icons.CaretRight}></Icon> Property Details</a></li>
                  <li><a href="#specifications" className={active === "specifications" ? "active": ""} onClick={() => setActive("specifications")}><Icon icon={Icons.CaretRight}></Icon> Specifications </a></li>
                  <li><a href="#analysis" className={active === "analysis" ? "active": ""} onClick={() => setActive("analysis")}><Icon icon={Icons.CaretRight}></Icon> Analysis</a></li>
                  <li><a href="#amenities" className={active === "amenities" ? "active": ""} onClick={() => setActive("amenities")}><Icon icon={Icons.CaretRight}></Icon> Amenities </a></li>
                  <li><a href="#zoning" className={active === "zoning" ? "active": ""} onClick={() => setActive("zoning")}><Icon icon={Icons.CaretRight}></Icon> Zoning</a></li>
                  <li><a href="#taxAssessment" className={active === "taxAssessment" ? "active": ""} onClick={() => setActive("taxAssessment")}><Icon icon={Icons.CaretRight}></Icon> Tax Assessment</a></li>
                  <li><a href="#mapBoundaries" className={active === "mapBoundaries" ? "active": ""} onClick={() => setActive("mapBoundaries")}><Icon icon={Icons.CaretRight}></Icon> Map Boundaries</a></li>
                </ul>                                                        
            </SidebarNavigation> 
           
            
        </>
    );
 };
 
 export default SideBar1;
 