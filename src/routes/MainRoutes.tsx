import { Suspense } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { AppRoutes } from "../config/AppRoutes";
import AuthRoute from "./AuthRoute";
import DashboardRoute from "./DashboardRoute";

const MainRoutes = () => {
   return (
      <Suspense fallback={"loding..."}>
         <Router>
               <Routes>
                  {AppRoutes.map((route, index) => {
                     return (<Route
                        key={index}
                        path={`${route.path}`}
                        element={   
                           route.private ?
                              <DashboardRoute>
                                 <Suspense fallback={<>...</>}>
                                    <route.element />
                                 </Suspense>
                              </DashboardRoute> :
                              <AuthRoute>
                                 <Suspense fallback={<>...</>}>
                                    <route.element />
                                 </Suspense>
                              </AuthRoute>
                        }
                     />)
                  })}
               </Routes>
            </Router>
      </Suspense>
   )
}
export default MainRoutes;