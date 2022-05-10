

import { useState } from "react";
import { Col, Row } from "react-materialize";
import styled from "styled-components";
import CommonButton from "../../elements/button/CommonButton";
import { Icons } from "../../elements/icon/Icons";
import InputLabelfield from "../../elements/input/InputLabelfield";
import SelectField from "../../elements/input/SelectField";
import { FormControll } from "./AddNewComp";



const FormWrapper = styled.div`
    padding: 15px 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 80%;
    overflow: auto;
    .row{
        width: 100%; 
    }
    .input-field {
        margin: 20px auto;
        padding: 0;
        width: 100%;
    }
    
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
    
    const [accountOptions, setAccountOptions] = useState([
        {
            label: "-- Select Account --",
            value: "-- select account --",
        },
        {
            label: "1 Utama Shopping Centre (Created at 4/5/2021)",
            value: "1 Utama Shopping Centre (Created at 4/5/2021)",
        },
        {
            label: "20199 N. 78th Pl Parking (Created at 7/26/2021)",
            value: "20199 N. 78th Pl Parking (Created at 7/26/2021)",
        },
        {
            label: "5M Real Estate, Inc. (Created at 11/19/2018)",
            value: "5M Real Estate, Inc. (Created at 11/19/2018)",
        },
        {
            label: "801 West Bay Center (Created at 7/14/2020)",
            value: "801 West Bay Center (Created at 7/14/2020)",
        },
        {
            label: "A Haus of Realty Inc (Created at 12/14/2018)",
            value: "A Haus of Realty Inc (Created at 12/14/2018)",
        },
        {
            label: "AaronBlemn (Created at 4/30/2020)",
            value: "AaronBlemn (Created at 4/30/2020)",
        },
        {
            label: "Aarongep (Created at 2/16/2020)",
            value: "Aarongep (Created at 2/16/2020)",
        },
        {
            label: "Aaronnut (Created at 1/7/2020)",
            value: "Aaronnut (Created at 1/7/2020)",
        },
        {
            label: "abc (Created at 3/28/2022)",
            value: "abc (Created at 3/28/2022)",
        },
        {
            label: "ABC Brickworks (Created at 3/30/2021)",
            value: "ABC Brickworks (Created at 3/30/2021)",
        },
        {
            label: "Aberlagsdek (Created at 1/1/2020)",
            value: "Aberlagsdek (Created at 1/1/2020)",
        },
        {
            label: "Aberlagsdek (Created at 1/11/2020)",
            value: "Aberlagsdek (Created at 1/11/2020)",
        },

    ])

    return (
        
        <>  
 

                      
                <FormWrapper>

                    <Row>
                        <Col s={12} m={6} l={6}>
                            <FormControll className="asteriskSign">
                                <InputLabelfield label="First Name" />
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll className="asteriskSign">
                                <InputLabelfield label="Last Name" />
                            </FormControll>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <InputLabelfield label="Email Address" />
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormControll className="searchField">
                                <SelectField label="Account" option={accountOptions}></SelectField>            
                            </FormControll>
                        </Col>
                    </Row>
                    

                    <PopUpactionBtn>
                        <CommonButton buttonText="Sample File" icon={Icons.SaveIcon}/>
                    </PopUpactionBtn>


                </FormWrapper>
                    
                
                   
            </>
        );
    };
    
export default TaskDetails;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

