import { Col, Icon, Row } from "react-materialize";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Colors from "../../../assets/style/Colors";


const FooterWraper = styled.div`
    text-align: left;
    display: flex;
    margin-top: 25px;
    position: relative;
    z-index: 9999;
    .row{
        margin: 0 auto;
    }
    img{
        max-width: 220px;
    }
    .copyRight{
        p{
            display: block;
            padding: 0;
            vertical-align: bottom;
            text-align: center;
            color: ${Colors.lightblue};
            font-size: 12px;
            font-family: Montserrat,sans-serif;
        }
    }
`;

const Footer = () => {  

    const navigate = useNavigate();

    return ( 
        <>
            <FooterWraper>
                <Row>
                    <Col className="copyRight" s={12} m={12} l={12}>
                       <p>© 2022, Harken CRE, LLC</p>
                    </Col>
                </Row>
            </FooterWraper>
            
            
        </>
    );
 };
 
 export default Footer;
 