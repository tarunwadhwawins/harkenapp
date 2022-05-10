
// import { useNavigate } from "react-router-dom";
import { Col, Row, Table, Icon as MaterializeIcon } from "react-materialize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import { ContentWrapper, TableWrapper } from "../client/Clients";
import Icon from "../../components/elements/icon/Icon";
import { Icons } from "../../components/elements/icon/Icons";
import CommonButton from "../../components/elements/button/CommonButton";
import BaseModal, { ModalList } from "../../components/modal/BaseModal";
import { useState } from "react";
import EvaluationTab from "../../components/elements/sidebar/EvaluationTab";
import { DividerLine } from "../client/CreateClients";
import { FormControll } from "../setting/Setting";
import InputLabelfield from "../../components/elements/input/InputLabelfield";
import SelectField from "../../components/elements/input/SelectField";



const MainCaption = styled.h1`
    color: ${Colors.black};
    font-family: 'roboto_slabbold';
    text-align: left;
    font-size: 24px;
    line-height: 32px;
    margin: 22px 20px 0 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    white-space: nowrap;
    svg{
        margin-left: 20px;
        color: ${Colors.blue};
        cursor: pointer;
        font-size: 22px !important;
    }
`;
export const Link = styled.a`
    cursor: pointer;
    text-transform: capitalize;
`;
export const DataTablesInfo = styled.div`
    width: 100%;
    p{
        color: ${Colors.blackShade};
        font-size: 12px;
        font-family: Montserrat,sans-serif;
        margin: 1rem 0rem 0;
        text-align: left;
        padding: 0 15px;
    }
`;
const SearchCol = styled.div`
    padding: 0 20px;
    .row{
        margin-bottom:10px;
    }
    .navigationWraper{
        .col{
            width:100%;
        }
    }
    .textRight{
        text-align: right;
    }
    .tabContentWrapper{
        
    }
    Table {
        tbody {
            tr {
                td {
                    font-size: 13px;
                }
            }
        }
    }
`;
const ButtonWrapper = styled.div`
    border-left: 1px solid #ccc;
    text-align: center;
    Padding: 0 20px;
    display: flex;
    align-items: center;
    button{
        margin: 0 !important;
    }
`;
const ReviewWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
const MainCaptionWrap = styled.div``;

const BillingTitle = styled.div`
    font-family: 'Roboto Slab',sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #0da1c7;
    text-transform: uppercase;
    margin-bottom: 10px;
` ;
const BillingSubTitle = styled.div`
    font-family: Montserrat,sans-serif;
    font-size: 18px;
    color: #687f8b;
    line-height: 18px;
    margin-bottom: 20px;
` ;
const FormWrapper = styled.div`
    .input-field {
        margin: 0 !important;
        padding: 0 !important;
        input{
            margin: 0;
            height: 2.5rem;
            width: 50%;
            color: #687f8b;
        }
    }
` ;
const FinalReview = styled.div`
    color: #0da1c7;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    font-family: Montserrat,sans-serif;
` ;
const FinalRevieWrapper = styled.div`

    .input-field{
        margin: 0 !important;
    }
    .priseValue{
        background-color: #f1f3f4;
        border-redius: 5px;
        margin: 0;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 9px;
    }
    p{
        height: 100%;
        line-height: 45px;
    }
` ;




const Review = () => {

    const navigate = useNavigate();
    const [CompleteReviewIsVisible, setCompleteReviewIsVisible] = useState(false);

    const [rounding, setrounding] = useState([
        {
            label: "No Rounding",
            value: "No Rounding",
        },
        {
            label: "Round to 1,000",
            value: "Round to 1,000",
        },
        {
            label: "Round to 10,000",
            value: "Round to 10,000",
        },
        {
            label: "Round to 100,000",
            value: "Round to 100,000",
        },
        {
            label: "Round to 1MM",
            value: "Round to 1MM",
        },

    ])


    return (
        <>

            <BaseModal
                open={CompleteReviewIsVisible}
                modalType={ModalList.CompleteReview}
                subTitle={"Linkbynet"}
                onClose={setCompleteReviewIsVisible}
                isConfirmationModal={true}
            /> 

            <EvaluationTab />

            <SearchCol>
                <Row>
                    <Col s={12} m={12} l={12} >                       

                        <div className="tabContentWrapper">
                            <Row>
                                <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                    <ReviewWrapper>
                                        <MainCaptionWrap>
                                            <MainCaption>FINAL VALUE REVIEW</MainCaption>
                                            <p className="subTitle"><MaterializeIcon>info_outline</MaterializeIcon>You're all done! View your proof, download the PDF, and save your document.</p>
                                        </MainCaptionWrap>
                                        <ButtonWrapper>
                                            <CommonButton onClick={()=>setCompleteReviewIsVisible(true)} buttonText="Complete" />
                                        </ButtonWrapper>
                                    </ReviewWrapper>
                                </Col>
                                <Col className="subHeaderCaption" s={12} m={12} l={12} >
                                    <DividerLine className="mb-3"></DividerLine>
                                </Col>

                                <Col s={12} m={12} l={12} className="mb-3">
                                    <BillingTitle>
                                        4.26.22 EJK Super Admin Test - Lease Comps | Billings
                                    </BillingTitle>
                                    <BillingSubTitle>
                                        3312 4th Avenue North | Billings, Montana 59101
                                    </BillingSubTitle>
                                </Col>

                                <Col s={12} m={12} l={12}>
                                    <TableWrapper>
                                        <Row>
                                            <Col s={12} m={12} l={12}>
                                                <Table responsive>
                                                    <thead>
                                                        <tr>
                                                            <th data-field="Approach to Value">Approach to Value <Icon icon={Icons.Sort}></Icon></th>
                                                            <th data-field="Value Indicated">Value Indicated</th>
                                                            <th data-field="Weighting">Weighting</th>
                                                            <th data-field="Incremental Value">Incremental Value</th>
                                                            <th data-field="$/SF"> $/SF </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td data-label="Income Approach">Income Approach</td>
                                                            <td data-label="$0.00">
                                                                $0.00
                                                            </td>
                                                            <td data-label="$0.00">
                                                                <FormWrapper>
                                                                    <FormControll>
                                                                        <InputLabelfield label="" placeholder="100%"></InputLabelfield>
                                                                    </FormControll>
                                                                </FormWrapper>
                                                            </td>
                                                            <td data-label="$0.00">
                                                                $0.00
                                                            </td>
                                                            <td data-label="$0.00">
                                                                $0.00
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td data-label="Sales Approach">Sales Approach</td>
                                                            <td data-label="$0.00">
                                                                $0.00
                                                            </td>
                                                            <td data-label="Page">
                                                                <FormWrapper>
                                                                    <FormControll>
                                                                        <InputLabelfield label="" placeholder="0%"></InputLabelfield>
                                                                    </FormControll>
                                                                </FormWrapper>
                                                            </td>
                                                            <td data-label=" $0.00">
                                                                $0.00
                                                            </td>
                                                            <td data-label=" $0.00">
                                                                $0.00
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="textRight" data-label="Page" colSpan={3}>
                                                                <p>Market Value based upon proportionate weighting</p>
                                                            </td>
                                                            <td data-label=" $0.00">
                                                                <FormWrapper>
                                                                    <FormControll>
                                                                        <InputLabelfield label=""></InputLabelfield>
                                                                    </FormControll>
                                                                </FormWrapper>
                                                            </td>
                                                            <td data-label="Page">
                                                                <FormWrapper>
                                                                    <FormControll>
                                                                        <InputLabelfield label=""></InputLabelfield>
                                                                    </FormControll>
                                                                </FormWrapper>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </TableWrapper>
                                </Col>

                                <Col className="subHeaderCaption" s={12} m={12} l={12}>
                                    <DividerLine className="mb-2"></DividerLine>
                                </Col>

                                <Col s={12} m={12} l={12} className = "mb-1">
                                    <Col s={8} m={8} l={8} >
                                        <FinalRevieWrapper>
                                            <FinalReview>Market Value Breakdown</FinalReview>
                                        </FinalRevieWrapper>
                                    </Col>

                                    <Col s={2} m={2} l={2}>
                                        <FinalRevieWrapper>
                                            <strong>Low</strong>
                                        </FinalRevieWrapper>
                                    </Col>

                                    <Col s={2} m={2} l={2}>
                                        <FinalRevieWrapper>
                                            <strong>High</strong>
                                        </FinalRevieWrapper>
                                    </Col>
                                </Col>
                                <Col s={12} m={12} l={12} className = "mb-1">

                                    <Col s={8} m={8} l={8}>
                                        <FinalRevieWrapper>
                                            <p className="textRight m-0">Overall Price Range</p>
                                        </FinalRevieWrapper>
                                    </Col>

                                    <Col s={2} m={2} l={2}>
                                        <FinalRevieWrapper>
                                            <p className=" textRight priseValue">$0.00</p>
                                        </FinalRevieWrapper>
                                    </Col>


                                    <Col s={2} m={2} l={2}>
                                        <FinalRevieWrapper>
                                            <p className=" textRight priseValue">$0.00</p>
                                        </FinalRevieWrapper>
                                    </Col>
                                </Col>

                                <Col s={12} m={12} l={12} className = "mb-2">
                                    <Col s={10} m={10} l={10}>
                                        <FinalRevieWrapper>
                                            <p className="textRight m-0">Rounding</p>
                                        </FinalRevieWrapper>
                                    </Col>

                                    <Col s={2} m={2} l={2}>
                                        <FinalRevieWrapper>

                                            <FormControll className="searchField">
                                                <SelectField label="" option={rounding}></SelectField>
                                            </FormControll>

                                        </FinalRevieWrapper>
                                    </Col>
                                </Col>
                                <Col s={12} m={12} l={12} className = "mb-2">
                                    <Col s={10} m={10} l={10}>
                                        <FinalRevieWrapper>
                                            <p className="textRight m-0">Final Market Value</p>
                                        </FinalRevieWrapper>
                                    </Col>
                                    <Col s={2} m={2} l={2}>
                                        <FinalRevieWrapper>
                                            <p className=" textRight priseValue"><strong>$0.00</strong></p>
                                        </FinalRevieWrapper>
                                    </Col>
                                </Col>

                            </Row>
                        </div>

                    </Col>

                </Row>



            </SearchCol>




        </>
    );
};

export default Review;
