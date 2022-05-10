

import { Col, Row } from "react-materialize";
import styled from "styled-components";
import CommonButton from "../../elements/button/CommonButton";



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


const DeleteConfirm = () => {
    console.log("Startdate",startDate);
    
    

    return (
        
        <>  
 

                      
                <FormWrapper>                
                    <Row>
                        <Col s={12} m={12} l={12}>
                            <h5 className="alignCenter">CONFIRM</h5>
                            <p>Are you sure you want to continue?</p>
                        </Col>
                    </Row>
                    

                    <PopUpactionBtn>
                        <CommonButton buttonText="Ok" />
                    </PopUpactionBtn>


                </FormWrapper>
                    
                
                   
            </>
        );
    };
    
export default DeleteConfirm;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

