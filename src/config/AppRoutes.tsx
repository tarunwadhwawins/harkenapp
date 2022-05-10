import { lazy } from "react";
import RoutePath from "./RoutePath";

export const AppRoutes = [
    {
        path: `${RoutePath.LOGIN}`,
        exact: false,
        private:false,
        element: lazy(() => import("../pages/Login"))  
    },
    {
        path: `${RoutePath.TOOLLOGIN}`,
        exact: false,
        private:false,
        element: lazy(() => import("../pages/ToolLogin"))  
    },
    {
        path: `${RoutePath.FORGOT}`,
        exact: false,
        private:false,
        element: lazy(() => import("../pages/Forgot"))  
    },
    {
        path: `${RoutePath.SIGNUP}`,
        exact: false,
        private:false,
        element: lazy(() => import("../pages/CreateAccount"))  
    },
    {
        path: `${RoutePath.CLIENTS}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/client/Clients"))  
    },
    {
        path: `${RoutePath.CLIENTSEDIT}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/client/ClientsEdit"))  
    },
    {
        path: `${RoutePath.CREATECLIENTS}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/client/CreateClients"))  
    },
    {
        path: `${RoutePath.LISTINGS}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/listings/Listings"))  
    },
    {
        path: `${RoutePath.OVERVIEW}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/listings/Overview"))  
    },
    {
        path: `${RoutePath.COMPS}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/comps/Comps"))  
    },
    {
        path: `${RoutePath.MASTERPROPERTY}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/comps/MasterProperties"))  
    },
    {
        path: `${RoutePath.PROPERTYDETAILS}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/comps/PropertiesDetails"))  
    },
    {
        path: `${RoutePath.USERPROFILE}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/UserProfile"))  
    },
    {
        path: `${RoutePath.ACCOUNTS}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/accounts/Accounts"))  
    },
    {
        path: `${RoutePath.CREATEACCOUNTS}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/accounts/CreateAccount"))  
    },
    {
        path: `${RoutePath.EDITACCOUNTS}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/accounts/EditAccount"))  
    },
    {
        path: `${RoutePath.USERLIST}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/userList/UserList"))  
    },
    {
        path: `${RoutePath.CREATEUSERLIST}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/userList/CreateUserList"))  
    },
    {
        path: `${RoutePath.EDITUSERLIST}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/userList/EditUserList"))  
    },
    {
        path: `${RoutePath.BROKERLIST}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/userList/BrokerList"))  
    },
    {
        path: `${RoutePath.USEREDITACCOUNT}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/userList/UserEditAccount"))  
    },
    {
        path: `${RoutePath.SETTING}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/setting/Setting"))  
    },
    {
        path: `${RoutePath.PAGELIST}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/setting/PageList"))  
    },
    {
        path: `${RoutePath.CREATEPAGE}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/setting/CreatePage"))  
    },
    {
        path: `${RoutePath.EDITPAGE}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/setting/EditPage"))  
    },
    {
        path: `${RoutePath.MENULIST}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/setting/MenuList"))  
    },
    {
        path: `${RoutePath.EDITMENULIST}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/setting/EditMenuList"))  
    },
    {
        path: `${RoutePath.LISTINGSMASTERPROPERTY}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/listings/ListingsMasterProperties"))  
    },
    {
        path: `${RoutePath.LISTINGSPROPERTYDETAILS}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/listings/ListingsPropertiesDetails"))  
    },
    {
        path: `${RoutePath.ATTACHMENTS}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/listings/Attachments"))  
    },
    {
        path: `${RoutePath.PROPERTYBOUNDARIES}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/listings/PropertyBoundaries"))  
    },
    {
        path: `${RoutePath.EVALUATION}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/evaluation/Evaluation"))  
    },
    {
        path: `${RoutePath.EVALUATIONOVERVIEW}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/evaluation/EvaluationOverview"))  
    },
    {
        path: `${RoutePath.IMAGEPAGE}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/evaluation/ImagePage"))  
    },
    {
        path: `${RoutePath.EVALUATIONPROPERTYBOUNDARIES}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/evaluation/EvaluationPropertyBoundaries"))  
    },
    {
        path: `${RoutePath.EVALUATIONAERIALMAP}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/evaluation/EvaluationAerialMap"))  
    },
    {
        path: `${RoutePath.EVALUATIONAREAINFO}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/evaluation/EvaluationAreaInfo"))  
    },
    {
        path: `${RoutePath.EXHIBITS}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/evaluation/Exhibits"))  
    },
    {
        path: `${RoutePath.REVIEW}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/evaluation/Review"))  
    },
    {
        path: `${RoutePath.SALESCOMPS}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/evaluation/SalesComps"))  
    },
    {
        path: `${RoutePath.COMPAREAMAP}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/evaluation/CompAreaMap"))  
    },
    {
        path: `${RoutePath.BILLING}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/Billing"))  
    },
    {
        path: `${RoutePath.PAYMENTMETHOD}`,
        exact: false,
        private:true,
        element: lazy(() => import("../pages/PaymentMethod"))  
    },
] 