import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import { Icons}  from "../elements/icon/Icons"

const LoginWrapper = styled.div`
    background-image:url('${Icons.BgImage}');    
    width: 100%;
    height: 100%;
    background-size: 100%;
    // background-color: ${Colors.extralightblue1};
    position: absolute;
    display: flex;
    overflow-y: auto;
    padding: 25px 0;  
    
    @media(max-width:991px){
        padding: 20px 15px;
    }
`;





const AuthLayout = ({ children }: { children: JSX.Element }) => {
    return (
       <>
        <LoginWrapper>
            {children}            
        </LoginWrapper>
          
       </>
    );
 };
 
 export default AuthLayout;