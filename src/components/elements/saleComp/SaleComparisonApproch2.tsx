

import styled from "styled-components";
import Colors from "../../../assets/style/Colors";
import CommonButton from "../../elements/button/CommonButton";
import { Icons } from "../../elements/icon/Icons";
import InputLabelfield from "../../elements/input/InputLabelfield";
import BaseModal, { ModalList } from "../../modal/BaseModal";
import { useState } from "react";
import Icon from "../icon/Icon";

const ApprochWrapper = styled.div`   
    .evaluation-approach-property{
        .imageWrapper{
            background-image:url('${Icons.DefaultPlaceholder}');   
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
            display: flex;
            grid-gap: 10px;
            svg{
                font-size: 14px !important;
            }
            .blueColor{
                svg{
                    color: ${Colors.blue} ;
                }
            }
            .dangerColor{
                svg{
                  color: ${Colors.red} ;
                }
            }
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
            .priceWrapper{
                display: flex;
                align-items: center;
                justify-content: space-between;
                grid-gap: 15px;
                margin: 0;
                input{
                    &.priceTxet{
                        margin: 0;
                        height: auto;
                    }        
                }
                .priceInfo{
                   &.redColor{
                       color: ${Colors.red};
                   }
                }
            }
        }
    }
    
    
`;



const SaleComparisonApproch = () => {
    console.log("Startdate",startDate);
    
    const [DeleteConfirmIsVisible, setDeleteConfirmIsVisible] = useState(false);

    return (
        
        <>  
 
    <BaseModal
            open={DeleteConfirmIsVisible}
            modalType={ModalList.DeleteConfirm}
            subTitle={"Linkbynet"}
            onClose={setDeleteConfirmIsVisible}
            isConfirmationModal={true}
            />  
                      
                <ApprochWrapper>
                    <div className="evaluation-approach-property">
                        <div className="imageWrapper"></div>
                        <div className="buttons">
                            <span className="blueColor"><Icon icon={Icons.EyeImage}></Icon></span>
                            <span className="dangerColor"><Icon icon={Icons.Deleteicons} onClick={()=>setDeleteConfirmIsVisible(true)}></Icon></span>
                            
                        </div>
                        <div className="location label">12566 Street Number 6 Ludhiana, AK 14100</div>
                        <div className="field label">03/30/2022</div>
                        <div className="field label break">$585,000.00</div>
                        <div className="field label">43,560 SF</div>
                        <div className="field label">Retail</div>
                        <div className="field label">No City Services</div>
                        <div className="field label">Sloped</div>
                        <div className="field label">Square</div>
                        <div className="field label"></div>
                        <div className="field label">$13.43 PSF</div>
                        <div className="field label break">
                            <p className="priceWrapper">
                                <input className="priceTxet" placeholder="$100.00"></input>
                                <span className="priceInfo redColor">Inferior</span>                                
                            </p>
                        </div>
                        <div className="field label break1">
                            <p className="priceWrapper">
                                <input className="priceTxet" placeholder="$100.00"></input>
                                <span className="priceInfo redColor">Inferior</span>                                
                            </p>
                        </div>
                        <div className="field label">
                            <p className="priceWrapper">
                                <input className="priceTxet" placeholder="$100.00"></input>
                                <span className="priceInfo redColor">Inferior</span>                                
                            </p>
                        </div>
                        <div className="field label">
                            <p className="priceWrapper">
                                <input className="priceTxet" placeholder="$00.00"></input>
                                <span className="priceInfo">Equal</span>                                
                            </p>
                        </div>
                        <div className="field label">
                            <p className="priceWrapper">
                                <input className="priceTxet" placeholder="$00.00"></input>
                                <span className="priceInfo">Equal</span>                                
                            </p>
                        </div>
                        <div className="field label">
                            <p className="priceWrapper">
                                <input className="priceTxet" placeholder="$00.00"></input>
                                <span className="priceInfo">Equal</span>                                
                            </p>
                        </div>
                        <div className="field label break notes_div">Click to add adjustment notes</div>
                        <div className="field label overall-adjustment break">$300.00</div>
                        <div className="field label">$313.43</div>
                        <div className="field label">33.33%</div>
                        <div className=" field label"></div>
                        <div className="field label uppercase sales-approach-final-value label"></div>
                    </div>

                </ApprochWrapper>
                    
                
                   
            </>
        );
    };
    
export default SaleComparisonApproch;


function startDate(arg0: string, startDate: any) {
    throw new Error("Function not implemented.");
}

