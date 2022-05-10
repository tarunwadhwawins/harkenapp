
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



export const SidebarNavigation = styled.div`
    margin-top: 30px;
    // background-color: ${Colors.extralightblue1};
    border-radius: 5px;
    // width: 100%;
    // max-width: 240px;
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
                color: ${Colors.darkblue}; 
                font-weight: 600;
            }
        }
    }
    
`;



const SideBar = (props : any) => {  

    const navigate = useNavigate();
    const location = useLocation()
    const pathName = location?.pathname
    
    return ( 
        <>

            <SidebarNavigation className="sideNav">
              <CommonButton onClick={() => props?.tabChanged(TABS.Evaluation)} buttonText="Setting"  icon={Icons.Back}/>
                <ul>
                  <li className={pathName === RoutePath.SETTING ? "active" : ""} onClick={()=> navigate(RoutePath.SETTING)}><Icon icon={Icons.CaretRight}></Icon> Welcome</li>
                  <li className={pathName === RoutePath.PAGELIST ? "active" : ""} onClick={()=> navigate(RoutePath.PAGELIST)}><Icon icon={Icons.CaretRight}></Icon> Pages</li>
                  <li className={pathName === RoutePath.MENULIST ? "active" : ""} onClick={()=> navigate(RoutePath.MENULIST)}><Icon icon={Icons.CaretRight}></Icon> Menus</li>
                </ul>                                                        
            </SidebarNavigation> 
           
            
        </>
    );
 };
 
 export default SideBar;
 