
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
                a{
                    color: ${Colors.darkblue}; 
                    font-weight: 600;  
                }                
            }
            a{
                color: ${Colors.darkgrey}; 
            }
            
        }
    }
    
`;



const EvaluationTab = (props : any) => {  

    const navigate = useNavigate();
    const location = useLocation()
    const pathName = location?.pathname
    const overViewItems = [RoutePath.EVALUATIONOVERVIEW, RoutePath.IMAGEPAGE, RoutePath.EVALUATIONPROPERTYBOUNDARIES,RoutePath.EVALUATIONAERIALMAP, RoutePath.EVALUATIONAREAINFO ]
    const isOverview = overViewItems.includes(pathName)
    
    const isApproach = (pathName === RoutePath.SALESCOMPS || pathName === RoutePath.COMPAREAMAP )

    console.log("isOverview ", isOverview)
    return ( 
        <>

                        <div className="tabNavigation">
                            <ul className="m-0">
                                <li className={isOverview ? "active" : ""}><span>Overview <MaterializeIcon>expand_more</MaterializeIcon></span>
                                    <div className="tabHoverMenu">
                                        <ul>
                                            <li className={pathName === RoutePath.EVALUATIONOVERVIEW ? "active" : ""} onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)}>Overview Page</li>
                                            <li className={pathName === RoutePath.IMAGEPAGE ? "active" : ""} onClick={()=> navigate(RoutePath.IMAGEPAGE)}>Images Page</li>
                                            <li className={pathName === RoutePath.EVALUATIONPROPERTYBOUNDARIES ? "active" : ""} onClick={()=> navigate(RoutePath.EVALUATIONPROPERTYBOUNDARIES)}>Map Boundary Page</li>
                                            <li className={pathName === RoutePath.EVALUATIONAERIALMAP ? "active" : ""} onClick={()=> navigate(RoutePath.EVALUATIONAERIALMAP)}>Aerial Map</li>
                                            <li className={pathName === RoutePath.EVALUATIONAREAINFO ? "active" : ""} onClick={()=> navigate(RoutePath.EVALUATIONAREAINFO)}>Area Info</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={isApproach ? "active" : ""}><span>Send Approach <MaterializeIcon>expand_more</MaterializeIcon></span>
                                    <div className="tabHoverMenu">
                                        <ul>
                                            <li className={pathName === RoutePath.SALESCOMPS ? "active" : ""} onClick={()=> navigate(RoutePath.SALESCOMPS)}>Sales Comps</li>
                                            <li className={pathName === RoutePath.COMPAREAMAP ? "active" : ""} onClick={()=> navigate(RoutePath.COMPAREAMAP)}>Comp Area Map</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={pathName === RoutePath.EXHIBITS ? "active" : ""} onClick={()=> navigate(RoutePath.EXHIBITS)}><span>Exhibits</span></li>
                                <li className={pathName === RoutePath.REVIEW ? "active" : ""} onClick={()=> navigate(RoutePath.REVIEW)}><span>Review</span></li>
                            </ul>
                        </div>            
           
            
        </>
    );
 };
 
 export default EvaluationTab;
 