
import React, { useState } from "react";
import { TextInput } from "react-materialize";

import styled from "styled-components";
import Colors from "../../../assets/style/Colors";
import CommonButton from "../../elements/button/CommonButton";
import { Icons } from "../../elements/icon/Icons";
import ChooseFile from "../../../components/elements/chooseFile/ChooseFile";



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
    button{
        
    }
`;


const TaskDetails = () => {
    console.log("Startdate",startDate);
    
    

    return (
        
        <>  
 

                      
                <FormWrapper>

                    <ChooseFile />

                    <PopUpactionBtn>
                        <CommonButton buttonText="Verify & Upload" icon={Icons.UploadIcon} />
                        <CommonButton buttonText="Sample File" icon={Icons.File}/>
                    </PopUpactionBtn>


                </FormWrapper>
                    
                
                   
            </>
        );
    };
    
export default TaskDetails;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

