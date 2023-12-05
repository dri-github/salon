import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./main";
import CreateOrder from "./create_order";
import RegisterMaster from "./register_master";
import LogOnto from "./log_onto";
import WorkPage from "./work_page";

export default class App extends React.Component {
    render() {
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main className="main-"/>} />
                <Route path="/create_order" element={<CreateOrder className="create-order-" />} />
                <Route path="/register_master" element={<RegisterMaster />} />
                <Route path="/log_onto" element={<LogOnto />} />
                <Route path="/work_page/:id" element={<WorkPage />} />
            </Routes>
        </BrowserRouter>;
    }
}