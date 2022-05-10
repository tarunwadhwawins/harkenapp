

import styled from "styled-components";
import Colors from "../../../assets/style/Colors";
import CommonButton from "../../elements/button/CommonButton";
import { Icons } from "../../elements/icon/Icons";
import InputLabelfield from "../../elements/input/InputLabelfield";



const ApprochWrapper = styled.div`   
    .evaluation-approach-property{
        .imageWrapper{
            // background-image:url('${Icons.PropertyImages}');   
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
            font-weight: 600;
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
    }
    
    
`;



const SaleComparisonApproch = () => {
    console.log("Startdate",startDate);
    
    

    return (
        
        <>  
 

                      
                <ApprochWrapper>
                    <div className="evaluation-approach-property">
                        <div className="imageWrapper"></div>
                        <div className="buttons"></div>
                        <div className="location label">Location</div>
                        <div className="field label">Date Sold</div>
                        <div className="field label break">Sales Price</div>
                        <div className="field label">Land Size</div>
                        <div className="field label">Land Type</div>
                        <div className="field label">Utilities</div>
                        <div className="field label">Topography</div>
                        <div className="field label">Shape</div>
                        <div className="field label">Zoning</div>
                        <div className="field label">$/SF</div>
                        <div className="field label break">Time</div>
                        <div className="field label">Zoning</div>
                        <div className="field label">Location</div>
                        <div className="field label">Utilities</div>
                        <div className="field label">Topography</div>
                        <div className="field label">Economies of Scale</div>
                        <div className="field label break notes_div">Notes</div>
                        <div className="field label overall-adjustment break">Overall Adjustment</div>
                        <div className="field label">Adjusted Price Per SF</div>
                        <div className="field label">Weighting</div>
                        <div className="field label">Sales Value Per Sq. Ft.</div>
                        <div className="field label uppercase sales-approach-final-value label">Total Sales Value</div>
                    </div>

                </ApprochWrapper>
                    
                
                   
            </>
        );
    };
    
export default SaleComparisonApproch;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

