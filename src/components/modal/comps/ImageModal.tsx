

import { Col, Row } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../../assets/style/Colors";
import CommonButton from "../../elements/button/CommonButton";
import ChooseFile from "../../elements/chooseFile/ChooseFile";
import UploadFileButton from "../../elements/input/UploadFileButton";



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
        max-width: 650px;
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


const ImageModal = () => {
    console.log("Startdate",startDate);
    const navigate = useNavigate ();
    

    return (
        
        <>  
 

                      
                <FormWrapper>
                    <Row>
                        <Col s={12} m={12} l={12}>
                            <ChooseFile />
                        </Col>
                    </Row>                   

                    <PopUpactionBtn className="mb-1"> 
                        <CommonButton buttonText="Save" />
                    </PopUpactionBtn>


                </FormWrapper>
                    
                
                   
            </>
        );
    };
    
export default ImageModal;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

