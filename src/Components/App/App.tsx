//React Stuff
import React, { useState, useEffect } from 'react'

//Components
import TopBar from '../TopBar/TopBar'
import Page from '../Page/Page'

//App Component
const App = (): JSX.Element => {
	//States
	//Holds text content to count words from
	const [content, setContent]: [string, React.Dispatch<React.SetStateAction<string>>] = useState("")
	//Holds the number of words in the content
	const [count, setCount]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0)

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

		const removableCharacters: RegExp = new RegExp(/(\n|\s|\(|\)|\[|\]|\{|\}|<|>|\||\/|\\|'|"|\*|=|\+|!|\?|\.{2}|,{2}|;{2}|:{2}|-{2})/g)

		// const removableWords: RegExp = new RegExp(/(.{0}|\.|,|;|:|-)/)

		let textArray: string[] = text.trim().replace(removableCharacters, " ").split(" ").filter(
			(word: string) =>
				word !== "" &&
				word !== "." &&
				word !== "," &&
				word !== ";" &&
				word !== ":" &&
				word !== "-"
				// word.match(removableWords)
		)

		console.log(textArray)

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