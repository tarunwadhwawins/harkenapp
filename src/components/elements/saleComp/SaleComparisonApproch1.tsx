

import styled from "styled-components";
import Colors from "../../../assets/style/Colors";
import CommonButton from "../../elements/button/CommonButton";
import { Icons } from "../../elements/icon/Icons";
import InputLabelfield from "../../elements/input/InputLabelfield";



const ApprochWrapper = styled.div`     
    .evaluation-approach-property{
        background-color: ${Colors.extralightblue1};         
    }
    .imageWrapper{
        background-image:url('${Icons.PropertyImages}');   
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        min-height: 150px;
        
        
    } 
    .buttons{
        margin: 0;
        height: 24px;
        padding: 0.5em 5px;
        font-size: 12px;
    }
    .label{
        font-size: 12px;
        font-family: 'montserrat_lightregular',sans-serif;
        color: ${Colors.darkblue};
        font-weight: 400;
        margin: 5px 0;
        display: flex;
        align-items: center;
        min-height: 24px;
        padding: 2px 5px;
        &.break{
            border-top: 1px solid #d5d5d5;
            height: calc(0.5em + 24px);
        }
        &.overall-adjustment {
            font-style: italic;
            color: ${Colors.lightblue};
        }
         &.location {
            color: ${Colors.lightblue};
            height: 40px;
            align-items: flex-start;
            font-weight: 600;
        }
        &.uppercase {
            &.sales-approach-final-value{
                text-transform: uppercase;
                font-weight: 600;
                font-size: 14px;
                margin-top: 15px;
            }
        }
    }
    
    
`;



const SaleComparisonApproch1 = () => {
    console.log("Startdate",startDate);
    
    

    return (
        
        <>  
 

                      
                <ApprochWrapper>
                    <div className="evaluation-approach-property">
                        <div className="imageWrapper"></div>
                        <div className="buttons"></div>
                        <div className="location label">Texas 12 Loop Dallas, TX 12321</div>
                        <div className="field label"></div>
                        <div className="field label break"></div>
                        <div className="field label">43,560 SF</div>
                        <div className="field label">Retail</div>
                        <div className="field label"></div>
                        <div className="field label">Sloped</div>
                        <div className="field label">N/A</div>
                        <div className="field label"></div>
                        <div className="field label"></div>
                        <div className="field label break"></div>
                        <div className="field label"></div>
                        <div className="field label"></div>
                        <div className="field label"></div>
                        <div className="field label"></div>
                        <div className="field label"></div>
                        <div className="field label break notes_div"></div>
                        <div className="field label overall-adjustment break"></div>
                        <div className="field label"></div>
                        <div className="field labe"></div>
                        <div className="field label">100.00%</div>
                        <div className="field label">$281.40 /SF</div>
                        
                    </div>
                    <div className="field label uppercase sales-approach-final-value label">$12,257,784.00</div>

                </ApprochWrapper>
                    
                
                   
            </>
        );
    };
    
export default SaleComparisonApproch1;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

