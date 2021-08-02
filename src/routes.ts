import Category from "./pages/CategoryPage/Categoury";
import Home from "./pages/Home/Home";
import Single from "./pages/SinglePage/Single";

interface IRoutes{
    path:string;
    exact:boolean;
    component:any;
}

export const routes:IRoutes[] = [
    {path:"/" , exact:true , component:Home},
    {path:"/category" , exact:true , component:Category},
    {path:"/single" , exact:true , component:Single},
]