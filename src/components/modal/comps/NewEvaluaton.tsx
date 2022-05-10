

import { useState } from "react";
import { Col, Row } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../../assets/style/Colors";
import RoutePath from "../../../config/RoutePath";
import { FormControll } from "../../../pages/UserProfile";
import CommonButton from "../../elements/button/CommonButton";
import { Icons } from "../../elements/icon/Icons";
import InputLabelfield from "../../elements/input/InputLabelfield";
import SelectField from "../../elements/input/SelectField";



const FormWrapper = styled.div`
    padding: 15px 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 80%;
    overflow: auto;
    .input-field {
        max-width: 550px;
        margin: 20px auto 0;
        padding: 0;
        width: 100%;
        float: none;
    }
    .row{
        width:100%;
    }
    
`;
const PopUpactionBtn = styled.div`    
    display: flex;
    justify-content: flex-start;
    grid-gap: 15px;
    button{
        
    }
`;
const DividedLine = styled.div`
    h3 {
        background-color:  ${Colors.blue};
        border: 1px solid ${Colors.white};
        color: ${Colors.white};;
        font-size: 12px;
        border-radius: 100%;
        min-height: 30px;
        min-width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 30px;
        margin: 15px auto; 
        position: relative;
        z-index: 9;
    }    
    &:before {
        position: absolute;
        content: "";
        width: 100%;
        left: 0;
        height: 1px;
        background-color: ${Colors.grey};
        z-index: 1;
        top: 50%;

    }
`;
const AccountOption = styled.div`
    text-align: center;
    max-width: 300px;
    margin: 0 auto;
    position: relative;
    width: 100%;
    
`;
const TaskDetails = () => {
    console.log("Startdate",startDate);
    const navigate = useNavigate ();
    const [stateOptions, setStateOptions] = useState([
        
        {
            label: "Maria Lopez (First Interstate Bank)",
            value: "Maria Lopez (First Interstate Bank)",
        },
        {
            label: "Jon Sherner (CC Insulation & Urethane)",
            value: "Jon Sherner (CC Insulation & Urethane)",
        },
        {
            label: "Larry Smith (US Bank)",
            value: "Larry Smith (US Bank)",
        },        

    ])

    return (
        
        <>  
 

                      
                <FormWrapper>
                    <Row>
                        <Col s={12} m={12} l={12}>
                            <FormControll className="searchField">
                                <SelectField label="Select a client" option={stateOptions}></SelectField>            
                            </FormControll>
                        </Col>
                    </Row>
                    
                    <AccountOption>
                        <DividedLine><h3>OR</h3></DividedLine>
                    </AccountOption>

                    <PopUpactionBtn>
                        <CommonButton onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)} buttonText="Create a New Client" />
                        <CommonButton onClick={()=> navigate(RoutePath.EVALUATIONOVERVIEW)} buttonText="next" />
                    </PopUpactionBtn>


                </FormWrapper>
                    
                
                   
            </>
        );
    };
    
export default TaskDetails;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

