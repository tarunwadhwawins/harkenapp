

import { Col, Row } from "react-materialize";
import styled from "styled-components";
import Colors from "../../../assets/style/Colors";

import CommonButton from "../../elements/button/CommonButton";
import InputLabelfield from "../../elements/input/InputLabelfield";



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
        .textField{
            display: flex;
        }
    }
    .input-field {
        max-width: 550px;
        margin: 20px auto;
        padding: 0;
        width: 100%;
    }
    h5{
        font-family: 'roboto_slabbold';
    }
    
`;
const PopUpactionBtn = styled.div`    
    display: flex;
    justify-content: flex-start;
    grid-gap: 15px;
    button{
        
    }
`;


const SalesApproach = () => {
    console.log("Startdate",startDate);
    
    

    return (
        
        <>  
 

                      
                <FormWrapper>                
                    <Row>
                        <Col s={12} m={12} l={12}>
                            <InputLabelfield placeholder="100"></InputLabelfield>            
                        </Col>
                    </Row>
                    

                    <PopUpactionBtn>
                        <CommonButton buttonText="Save" />
                    </PopUpactionBtn>


                </FormWrapper>
                    
                
                   
            </>
        );
    };
    
export default SalesApproach;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

