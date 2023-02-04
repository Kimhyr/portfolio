import React from "react";

import Heading from "./heading";
import Image from "./image";

interface CardProps {
	heading: string,
	description: string,
	image?: string,
}

// Image left half; title right half up; description under title.
function Card(props: CardProps): React.ReactElement {
		return <div>
			<Image source={props.image == undefined ? "" : props.image}/>
			<div>
				<Heading.Minititle text={props.heading}/>
				<Heading.Bigitopic text={props.description}/>
			</div>
		</div>;
}

export default Card;
