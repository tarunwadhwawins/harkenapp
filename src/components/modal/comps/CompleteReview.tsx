
import React, { useState } from "react";
import { TextInput } from "react-materialize";

import styled from "styled-components";
import Colors from "../../../assets/style/Colors";
import CommonButton from "../../elements/button/CommonButton";
import { Icons } from "../../elements/icon/Icons";
import ChooseFile from "../../../components/elements/chooseFile/ChooseFile";
import { Icon as MaterializeIcon } from "react-materialize";



const FormWrapper = styled.div`
    padding: 15px 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 80%;
    overflow: auto;

     
    
`;
const PopUpactionBtn = styled.div`    
    display: flex;
    justify-content: flex-start;
    grid-gap: 15px;
    i{
        font-size: 16px;
        margin-top: 5px; 
    }
`;

const ButtonWrapper = styled.div`    
    position: relative;
    .pdfIcon {
        position: absolute;
        top: 8px;
        left: 12px;
        color: #ffffff;
        z-index: 9;
    }
    button{
        padding-left: 25px;
    }
`;


const CompleteReview = () => {
    console.log("Startdate",startDate);
    
    

    return (
        
        <>  
 

                      
                <FormWrapper>

                    <PopUpactionBtn className="mt-3 mb-3">
                        <ButtonWrapper><MaterializeIcon className="pdfIcon">picture_as_pdf</MaterializeIcon><CommonButton buttonText="View Proof"/></ButtonWrapper>
                        <CommonButton buttonText="Save & Exit" icon={Icons.File}/>
                    </PopUpactionBtn>


                </FormWrapper>
                    
                
                   
            </>
        );
    };
    
export default CompleteReview;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

