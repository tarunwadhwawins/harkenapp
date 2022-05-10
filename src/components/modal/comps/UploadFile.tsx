

import { UploadFile } from "@mui/icons-material";
import { Col, Row, TextInput } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../../assets/style/Colors";
import RoutePath from "../../../config/RoutePath";
import CommonButton from "../../elements/button/CommonButton";
import ChooseColor from "../../elements/chooseColor/ChooseColor";
import { Icons } from "../../elements/icon/Icons";
import InputLabelfield from "../../elements/input/InputLabelfield";
import UploadFileButton from "../../elements/input/UploadFileButton";
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
    .row {
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
                            <InputLabelfield label="Title" />
                        </Col>
                        <Col s={12} m={12} l={12}>
                            <Textarea label="Description" />
                        </Col>
                        <Col s={12} m={12} l={12}>
                            <UploadFileButton placeholder="Upload file"/>
                        </Col>
                    </Row>                   

                    <PopUpactionBtn className="mb-1"> 
                        <CommonButton buttonText="Upload" />  
                    </PopUpactionBtn>


                </FormWrapper>
                    
                
                   
            </>
        );
    };
    
export default TaskDetails;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

