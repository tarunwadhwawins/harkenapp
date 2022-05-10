

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
    max-height: 80%;
    overflow: auto;
    .input-field {
        max-width: 550px;
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
    
    

    return (
        
        <>  
 

                      
                <FormWrapper>
                
                    <Row>
                        <Col s={12} m={12} l={12}>
                            <h6 className="alignCenter mb-3">1 UTAMA SHOPPING CENTRE</h6>
                        </Col>
                        <Col s={12} m={12} l={12}>
                            <InputLabelfield label="Enter an email address and press enter" />
                        </Col>
                    </Row>
                    

                    <PopUpactionBtn>
                        <CommonButton buttonText="Send" icon={Icons.SendIcon}/>
                    </PopUpactionBtn>


                </FormWrapper>
                    
                
                   
            </>
        );
    };
    
export default TaskDetails;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

