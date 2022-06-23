//React Stuff
import { useState, useEffect } from 'react'

//Styles
import './App.css';

//Components
import TopBar from '../TopBar/TopBar'
import Page from '../Page/Page'

//App Component
const App = (): JSX.Element => {
	//States
	//Holds text content to count words from
	const [content, setContent] = useState("")
	//Holds the number of words in the content
	const [count, setCount] = useState(0)

	//Effects
	//Sets count state to new count value when content changes
	useEffect(
		() => {
			setCount(countWords(content))
		},
		[content]
	)

	//Functions
	//Counts the number of words in the content and excludes punctuation
	const countWords = (text: string): number => {
		if(text === "")
			return 0

		let textArray: string[] = text.trim().split(" ").filter(
			(word: string) =>
				word !== "" &&
				word !== " " &&
				word !== "." &&
				word !== "," &&
				word !== ";" &&
				word !== ":" &&
				word !== "!" &&
				word !== "?" &&
				word !== "-" &&
				word !== "'" &&
				word !== "\"" &&
				word !== "(" &&
				word !== ")" &&
				word !== "{" &&
				word !== "}" &&
				word !== "[" &&
				word !== "]" &&
				word !== "*" &&
				word !== "=" &&
				word !== "+" &&
				word !== "-" &&
				word !== "/" &&
				word !== "\\" &&
				word !== "|" &&
				word !== ">" &&
				word !== "<" &&
				word !== ".." &&
				word !== "..." &&
				word !== "...." &&
				word !== "....." &&
				word !== "......"
		)

		return textArray.length
	}

	return (
		<>
			<TopBar
				count={count}
			/>

			<Page
				content={content}
				setContent={setContent}
			/>
		</>
	)
}

export default App