import React from "react";
import { use100vh } from "react-div-100vh";
import Main from "./components/Main";
import Frame from "./components/layout/Frame";
import Header from "./components/layout/Header";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const height = use100vh();

	return (
		<div>
			<Frame />
			<Header />
			<div className="screen">
				<div
					className="center"
					style={{ minHeight: height ?? "100vh" }}
				>
					<div className="landing">
						<Main />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
