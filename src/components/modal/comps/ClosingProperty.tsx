

import { Col, Row } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../../assets/style/Colors";
import RoutePath from "../../../config/RoutePath";
import CommonButton from "../../elements/button/CommonButton";
import { Icons } from "../../elements/icon/Icons";
import InputLabelfield from "../../elements/input/InputLabelfield";
import Textarea from "../../elements/textarea/Textarea";



const FormWrapper = styled.div`
    padding: 15px 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 80%;
    overflow: auto;
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
    const navigate = useNavigate ();
    

    return (
        
        <>  
 

                      
                <FormWrapper>

                    <Row>
                        <Col s={12} m={12} l={12}>
                            <SubCaption className="mb-2">Fill out the information below</SubCaption>
                        </Col>
                        <Col s={12} m={6} l={4}>
                            <InputLabelfield label="Lease Rate" />
                        </Col>
                        <Col s={12} m={6} l={4}>
                            <InputLabelfield label="$ / SF" />
                        </Col>
                        <Col s={12} m={12} l={4}>
                            <InputLabelfield label="Term" />
                        </Col>
                        <Col s={12} m={12} l={12}>
                            {/* <InputLabelfield label="Concessions" /> */}
                            <Textarea label="Concessions" />
                        </Col>
                    </Row>
                    

                    <PopUpactionBtn>
                        <CommonButton onClick={()=> navigate(RoutePath.ATTACHMENTS)} buttonText="Submit & Next Step"/>
                    </PopUpactionBtn>


                </FormWrapper>
                    
                
                   
            </>
        );
    };
    
export default TaskDetails;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

