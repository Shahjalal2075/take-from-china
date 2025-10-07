import { Outlet } from "react-router-dom";
import Header from "../Pages/SharedSection/Header/Header";

const Root = () => {

    return (
        <div className="bg-gradient-to-r from-[#fff] to-[#fff] min-h-[100vh]">
            <div className="container mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;