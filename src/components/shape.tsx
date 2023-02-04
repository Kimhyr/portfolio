import React from "react";

interface ShapeProps {
	child?: React.ReactElement,
	width: number,
	height: number,
}

function Rectangle(props: ShapeProps): React.ReactElement {
	let style: React.CSSProperties = {
		width: props.width,
		height: props.height,
		borderRadius: 8,
		boxShadow: "2px 2px 8px gray",
		margin: 100,
		padding: 0,
	};
	return <div style={style}>
		{props.child}
	</div>;
}

export default {
	Rectangle,
}
