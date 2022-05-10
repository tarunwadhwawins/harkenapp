import DashboardLayout from "../components/layouts/DashboardLayout";

 const DashboardRoute = ({children}: {children: JSX.Element}) => {
     return(
        <>
            <DashboardLayout>{children}</DashboardLayout>
        </>
    );
 };
 export default DashboardRoute;
