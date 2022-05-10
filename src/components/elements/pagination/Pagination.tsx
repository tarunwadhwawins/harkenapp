import { Col, Icon, Row , Pagination} from "react-materialize";
import styled from "styled-components";
import Colors from "../../../assets/style/Colors";

const PaginationCol = styled.div`
    padding: 0 15px;
    margin-top: 20px;
    .row{
        margin-bottom: 0;
        .col{
            width:100%; 
            text-align: center;           
        }
    }
`;




const Paginations = (prop: any) => {  


    return ( 
        <>
            <PaginationCol>
                <Row>
                    <Col className="pagination" s={12} m={12}>
                        <Pagination activePage={1} items={5} leftBtn="Previous"  rightBtn="Next" />                        
                    </Col>
                </Row>
            </PaginationCol>
            
            
        </>
    );
 };
 
 export default Paginations;
 