import React from "react";

interface ImageProps {
	source: string,
}

function Image(props: ImageProps): React.ReactElement {
	return <div>
		<img src={props.source}/>
	</div>;
}

export default Image;
