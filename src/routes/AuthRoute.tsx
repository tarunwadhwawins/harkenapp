import AuthLayout from "../components/layouts/AuthLayout";
import styled from "styled-components";

const AuthRoute = ({children}: {children: JSX.Element}) => {
    return(
       <>
           <AuthLayout>{children}</AuthLayout>
       </>
   );
};
export default AuthRoute;