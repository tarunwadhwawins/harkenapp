
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Colors from "../../assets/style/Colors";
import Header from "../elements/header/Header";
import Footer from "../elements/footer/Footer";

const HomeWrapper = styled.div`
`;

const MainWrapper = styled.div`
   //  text-align: center;
   //  width: 100%;
`;

export const ContentWrapper = styled.div`
    min-height: calc(100vh - 150px);

    @media(max-width:991px){
        padding: 0 15px;
    }
    .subHeaderCaption{
        text-align: left;
        p{
            font-family: Montserrat,sans-serif;
            font-size: 13px;
            color: ${Colors.blackShade};
            
        }
        
    }
    .editBtn{
        display: flex;
        align-items: center;
        
        @media(min-width:768px){
            justify-content: flex-end;
        }        
        .addClient{
            background-color: #0da1c7;
            color: #fff;
            display: flex;
            align-items: center;
            white-space: nowrap;
            height: 40px;
            text-transform: uppercase;
            font-family: Montserrat,sans-serif;
            font-size: 13px;
            padding: 0 12px;
            border-radius: 3px;
            margin-left: 16px;
            cursor: pointer;
            i{
                font-size: 20px;
                margin-right: 5px;
            }
        }
    }

    
    
`;

const DashboardLayout = ({ children }: { children: JSX.Element }) => {
   const [isActive, setIsActive] = useState<boolean>(false)

   const handleToggle = () => {
      setIsActive(!isActive)
   };
   // const [isLoading, setIsLoading] = useState(false);
   const listInnerRef = useRef();


   const onScroll = () => {
      const scrollTop = window?.scrollY || 0
      const element = document.getElementById("app_sidebar_holder")
      const hasClass = element?.classList.contains('menuCollapse');

      // Adding the class
      if (!hasClass && scrollTop > 200) {
         console.log("i am true")
         element?.classList.add("menuCollapse");
      }

      // Removing the class
      if (hasClass && scrollTop < 200) {
         console.log("i am false")
         element?.classList.remove("menuCollapse");
      }
   };
   const onScroll2 = () => {
      const scrollTop = window?.scrollY || 0
      const element = document.getElementById("app_sidebar_holder2")
      const hasClass = element?.classList.contains('menuCollapse2');

      // Adding the class
      if (!hasClass && scrollTop > 310) {
         console.log("i am true")
         element?.classList.add("menuCollapse2");
      }

      // Removing the class
      if (hasClass && scrollTop < 310) {
         console.log("i am false")
         element?.classList.remove("menuCollapse2");
      }
   };

   useEffect(() => {
      document.addEventListener('scroll', onScroll);
   }, []);
   useEffect(() => {
      document.addEventListener('scroll', onScroll2);
   }, []);

   return (
      <>
         {/* <HomeWrapper >
            <MainWrapper > */}
         <div className={`App`} id="app_sidebar_holder">
            {/* <div> */}
            <Header onMenuClick={handleToggle} />
            <ContentWrapper className="mainContentWrapper" ref={listInnerRef as any} >
               {children}
            </ContentWrapper>
            <Footer />
         </div>
         {/* </MainWrapper>
         </HomeWrapper> */}
      </>
   );
};

export default DashboardLayout;