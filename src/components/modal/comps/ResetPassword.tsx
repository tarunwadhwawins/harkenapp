

import { Col, Row } from "react-materialize";
import styled from "styled-components";
import Colors from "../../../assets/style/Colors";
import { FormGroup } from "../../../pages/CreateAccount";
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
export const MainCaptions = styled.h1`
    font-family: 'roboto_slabregular';
    text-transform: uppercase;
    font-weight: 700;
    color: ${Colors.darkblue};;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;  
    width: 100%;
    margin: 10px 0 0;
    letter-spacing: 1px;
`;
export const SubCaption = styled.p`
    // background-color: ${Colors.darkgrey};
    border-radius: 4px;
    padding:  10px 15px 0;
    color: ${Colors.darkgrey}; 
    font-size: 15px;
    font-family: 'montserratregular';
    text-align: center;
    line-height: 18px;
`;

const TaskDetails = () => {
    console.log("Startdate",startDate);
    
    
    return (
        
        <>  
 

                      
                <FormWrapper>

                    <Row>
                        <Col s={12} m={12} l={12}>
                            <SubCaption className="mb-2">Hello Super Admin, please enter your new password</SubCaption>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormGroup className="mb-2">
                                <InputLabelfield label="Password"></InputLabelfield>              
                            </FormGroup>
                        </Col>
                        <Col s={12} m={6} l={6}>
                            <FormGroup className="mb-2">
                                <InputLabelfield label="Confirm Password"></InputLabelfield>              
                            </FormGroup>
                        </Col>
                    </Row>
                    

                    <PopUpactionBtn>
                        <CommonButton buttonText="Reset Password"/>
                    </PopUpactionBtn>


                </FormWrapper>
                    
                
                   
            </>
        );
    };
    
export default TaskDetails;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

