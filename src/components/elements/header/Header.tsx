import { Col, Icon, Row } from "react-materialize";
import styled from "styled-components";
import Colors from "../../../assets/style/Colors";
import { Icons } from "../icon/Icons";
import { useState } from "react";
import RoutePath from "../../../config/RoutePath";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";

const HeaderWrap = styled.div`
    background-image: url('${Icons.HeaderBg}');
    background-position: top left;
    background-size: contain;
    &.darkBlue{
        background-color: ${Colors.darkblue};
        
        .row{
            margin: 0;
            align-items: center;
            display: flex;
            .navigationWraper{
                ul{
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    margin: 0;
                    li{
                        display: inline-flex;
                        vertical-align: top;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        position: relative;
                        height: 100%;
                        a{
                            white-space: normal;
                            line-height: 84px;
                            font-size: 15px;
                            font-weight: 500;
                            color: #fff;
                            padding: 0 1em;
                            text-transform: uppercase;
                            display: inline-flex;
                            align-items: center;
                            font-family: Montserrat,sans-serif;
                            @media(max-width:1024px){
                                font-size: 12px;
                                line-height: 70px;
                            }
                        }
                        i{
                            font-size: 13px;
                            margin-left: 5px;
                        }
                        &.active, &:hover{
                            &:after {
                                content: '';
                                display: block;
                                position: absolute;
                                bottom: 0;
                                background: 0 0;
                                width: 0;
                                height: 0;
                                border-left: 10px solid transparent;
                                border-right: 10px solid transparent;
                                border-bottom: 10px solid #fff;
                                left: calc(50% - 10px);
                            }
                        }
                        span{
                            &.userImage {
                                min-width: 30px; 
                                min-height: 30px;  
                                object-fit: contain;  
                                overflow: hidden;  
                                position: relative;  
                                display: flex; 
                                align-items: center; 
                                border-radius: 50%;  
                                margin-right: 10px; 
                            
                                img{
                                    position: absolute;
                                    left: 0;
                                    top: 0;
                                    max-width: 100%;
                                    min-height: 30px; 
                                }
                            }
                            &.adminName{
                                width: 100%;
                                display: inline;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                max-width: 170px;
                            }
                        }
                        .dropdownMwnu{
                            display: block;
                            position: absolute;
                            height: auto;
                            text-align: left;
                            top: 85%;
                            transform: none;
                            right: 15px;
                            left: auto;
                            width: 300px;
                            box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 20%);
                            background:  ${Colors.white};
                            z-index: 99;
                            display: none;
                            li{
                                display: inline-flex;
                                vertical-align: top;
                                -webkit-box-align: center;
                                -ms-flex-align: center;
                                align-items: center;
                                position: relative;                                
                                border-right: 1px solid rgba(255,255,255,.1);
                                height: auto;
                                width: 100%;                                
                                a{
                                    color: ${Colors.darkblue};
                                    height: 48px;
                                    line-height: 48px;
                                    padding: 0 32px;
                                    font-size: 14px;
                                    display: block;
                                    width: 100%;
                                    align-items: center;
                                    font-weight: 500;
                                    text-transform: uppercase;
                                    font-family: Montserrat,sans-serif;
                                }
                                &:hover{
                                    background:  ${Colors.lightblue};
                                    color: ${Colors.white};
                                    a{
                                        color: ${Colors.white};
                                    }
                                    &:after{
                                        display:none;
                                    }
                                }
                            }
                        }
                        &:hover{
                            .dropdownMwnu{
                                display:block;
                            } 
                        }
                    }
                }
            }
        }           
    }    
`;
const LogoWrapper = styled.div`
    text-align: left;
    display: flex;
    cursor: pointer;
    img{
        max-width: 220px;
        @media(max-width:1024px){
            max-width: 150px;
        }
    }
`;

const Header = (props: any) => {  

    const navigate = useNavigate();
    const location = useLocation()
    const pathName = location?.pathname
    
    return ( 
        <>
            <HeaderWrap className="darkBlue">
                <Row>
                    <Col className="logoWrapper white-text" s={12} m={4} l={4}>
                        <LogoWrapper onClick={()=> navigate(RoutePath.LOGIN)}><img src={Icons.LogoImage1} alt="Image"></img></LogoWrapper>
                    </Col>
                    <Col className="navigationWraper white-text" s={12} m={8} l={8}> 
                        <ul>
                            <li className={pathName === RoutePath.CLIENTS ? "active" : ""} onClick={()=> navigate(RoutePath.CLIENTS)}><a href="javascript:void(0)">Clients</a></li>
                            <li className={pathName === RoutePath.LISTINGS ? "active" : ""} onClick={()=> navigate(RoutePath.LISTINGS)}><a href="javascript:void(0)">Listings</a></li>
                            <li className={pathName === RoutePath.COMPS ? "active" : ""} onClick={()=> navigate(RoutePath.COMPS)}><a href="javascript:void(0)">Comps</a></li>
                            <li className={pathName === RoutePath.EVALUATION ? "active" : ""} onClick={()=> navigate(RoutePath.EVALUATION)}><a href="javascript:void(0)">Evaluation</a></li>
                            <li><a href="javascript:void(0)"><span className="userImage"><img src={Icons.UserImage} alt="Image"></img></span><span className="adminName">Super Admin test</span> <Icon>keyboard_arrow_down</Icon></a>
                            
                                <ul className="dropdownMwnu">
                                    <li className={pathName === RoutePath.USERPROFILE ? "active" : ""} onClick={()=> navigate(RoutePath.USERPROFILE)}><a href="javascript:void(0)">My Profile</a></li>
                                    <li className={pathName === RoutePath.ACCOUNTS ? "active" : ""} onClick={()=> navigate(RoutePath.ACCOUNTS)}><a href="javascript:void(0)">Accounts</a></li>                       
                                    <li className={pathName === RoutePath.USERLIST ? "active" : ""} onClick={()=> navigate(RoutePath.USERLIST)}><a href="javascript:void(0)">Users</a></li>
                                    <li className={pathName === RoutePath.BILLING ? "active" : ""} onClick={()=> navigate(RoutePath.BILLING)}><a href="javascript:void(0)">Billing</a></li>
                                    <li className={pathName === RoutePath.SETTING ? "active" : ""} onClick={()=> navigate(RoutePath.SETTING)}><a href="javascript:void(0)">Settings</a></li>                      
                                    <li onClick={()=> navigate(RoutePath.LOGIN)}><a href="javascript:void(0)">Logout</a></li>               
                                    
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </HeaderWrap>
            
            
        </>
    );
 };
 
 export default Header;
 