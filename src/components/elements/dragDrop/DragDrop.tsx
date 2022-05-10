
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Sortable from "sortablejs";
import { useEffect } from "react";
import { Col, Row } from "react-materialize";
import Colors from "../../../assets/style/Colors";

export const DragDropNenuWrapper = styled.div`
    width: 100%;
    .row{
        width: 100%;
    }   
`;

export const DragDropNenuList = styled.div`
    border: 1px solid ${Colors.lightgrey};
    border-radius: 5px;
    overflow: hidden;
    ul{
        padding: 15px;
        margin: 0;
        li{
            list-style-type: none;
            padding: 10px 10px;
            background-color: ${Colors.extralightblue1};
            margin-bottom: 5px;
            border-radius: 5px;
            &:hover{
                background-color: ${Colors.lightblue};
                color: ${Colors.white};
                cursor: pointer;
                font-weight: 600;
            }
        }
    }
`;
const MainCaption = styled.h1`
    color: ${Colors.white};
    font-family: 'roboto_slabbold';
    text-align: left;
    font-size: 16px;
    line-height: 32px;
    margin: 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    background-color: ${Colors.blue};
    padding: 5px 15px;
    i{
        margin-left: 20px;
        color: ${Colors.blue};
        cursor: pointer;
    }
`;


const DragDrop = () => {  

    const navigate = useNavigate();
    const initSortElements = () => {
        const el: any = document.getElementById("example2-left");
        const er: any = document.getElementById("example2-right");
        new Sortable(el, {
            group: "shared", // set both lists to same group
            animation: 150,
            // Element is dropped into the list from another list
            onAdd: function (/**Event*/ evt) {
              // same properties as onEnd
            },
      
            // Changed sorting within list
            onUpdate: function (/**Event*/ evt) {
              // same properties as onEnd
            },
      
            // Called by any change to the list (add / update / remove)
            onSort: function (/**Event*/ evt) {
              // same properties as onEnd
            }
          });
      
          new Sortable(er, {
            group: "shared",
            animation: 150,
            // Element is dropped into the list from another list
            onAdd: function (/**Event*/ evt) {
              // same properties as onEnd
            },
      
            // Changed sorting within list
            onUpdate: function (/**Event*/ evt) {
              // same properties as onEnd
            },
      
            // Called by any change to the list (add / update / remove)
            onSort: function (/**Event*/ evt) {
              // same properties as onEnd
            }
          });
      };
      useEffect(() => {
        initSortElements();
      }, []);
    
    return ( 
        <>

            <DragDropNenuWrapper className="mt-3">
                <Row>
                    <Col s={12} m={6} l={4}>
                        <DragDropNenuList>
                            <MainCaption>UNPUBLISHED </MainCaption>
                            <ul id="example2-left">
                                <li>Buyers</li>
                                <li>Owners</li>
                                <li>Brokers</li>
                            </ul>
                        </DragDropNenuList>
                    </Col>
                    <Col s={12} m={6} l={4}>
                        <DragDropNenuList>
                            <MainCaption>PUBLISHED </MainCaption>
                            <ul id="example2-right">
                                <li>Sitemap</li>
                                <li>What's Next</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Contact</li>
                            </ul>
                        </DragDropNenuList>
                    </Col>
                </Row>                                                 
            </DragDropNenuWrapper>
           
            
        </>
    );
 };
 
 export default DragDrop;
 