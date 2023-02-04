import React from "react"; 

import Card from "../components/card";
import Shape from "../components/shape"

import obama from "../assets/images/brack_obama.png";

interface HomeProps {

}

interface HomeState {

}

class Home extends React.Component<HomeProps, HomeState> {
	constructor(props: HomeProps) {
		super(props);
	}

	render(): React.ReactElement {
		let imageStyle: React.CSSProperties = {
			width: "100%",
			height: "100%",
		};
		return <div>
			<Shape.Rectangle width={420} height={420} child={
			<img src={obama} alt="Formal President, Barack Obama." style={imageStyle}/>
			}/>
		</div>;
	}
}

export default Home;
