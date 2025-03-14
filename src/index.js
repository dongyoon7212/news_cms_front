import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Reset } from "styled-reset";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<RecoilRoot>
		<BrowserRouter>
			<Reset />
			<App />
		</BrowserRouter>
	</RecoilRoot>
);
