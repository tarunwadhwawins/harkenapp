

import { Col, Row } from "react-materialize";
import styled from "styled-components";
import CommonButton from "../../elements/button/CommonButton";
import { Icons } from "../../elements/icon/Icons";
import InputLabelfield from "../../elements/input/InputLabelfield";



const FormWrapper = styled.div`
    padding: 15px 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    max-height: 80%;
    .input-field {
        max-width: 100%;
        margin: 14px auto;
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
    
    

    return (
        
        <>  
 

                      
                <FormWrapper>

                    <Row>
                        <Col s={12} m={6} l={6}>
                            <InputLabelfield label="Promo Code" />
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <InputLabelfield label="Valid Thru Date" />
                        </Col>
                        <Col s={12} m={12} l={12}>
                            <InputLabelfield label="Number of Months Free" />
                        </Col>
                    </Row>
                    

                    <PopUpactionBtn>
                        <CommonButton buttonText="Submit"/>
                    </PopUpactionBtn>


                </FormWrapper>
                    
                
                   
            </>
        );
    };
    
export default TaskDetails;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

