import React from "react";

interface HeadingProps {
	text: string,
}

function Title(props: HeadingProps): React.ReactElement {
	let style: React.CSSProperties = {
		fontFamily: "Helvetica, Times, Serif"
	};
	return <h1 style={style}>
		{props.text}
	</h1>
}

function Minititle(props: HeadingProps): React.ReactElement {
	let style: React.CSSProperties = {
		fontFamily: "Times New Roman, Times, Serif",
		fontSize: "16pt",
		fontWeight: "lighter",
	};
	return <h4 style={style}>
		{props.text}
	</h4>;
}

function Topic(props: HeadingProps): React.ReactElement {
	let style: React.CSSProperties = {
		fontFamily: "Poppins, Times, Serif"
	};
	return <h2 style={style}>
		{props.text}
	</h2>
}

function Bigitopic(props: HeadingProps): React.ReactElement {
	let style: React.CSSProperties = {
		fontFamily: "Arial, Times, Serif",
		fontSize: "20pt",
		fontWeight: "600",
	};
	return <h4 style={style}>
		{props.text}
	</h4>;
}

function Subtopic(props: HeadingProps): React.ReactElement {
	let style: React.CSSProperties = {
		fontFamily: "Helvetica, Times, Serif"
	};
	return <h3 style={style}>
		{props.text}
	</h3>
}

export default {
	Title, Minititle, Topic, Bigitopic, Subtopic
};
