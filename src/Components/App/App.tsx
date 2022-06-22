//React Stuff
import { useState, useEffect } from 'react'

//Styles
import './App.css';

//Components
import TopBar from '../TopBar/TopBar'
import Page from '../Page/Page';

const App =  () => {
	//States
	const [content, setContent] = useState("")
	const [count, setCount] = useState(0)

	//Effects
	useEffect(
		() => {
			setCount(countWords(content))
		},
		[content]
	)

	//Functions
	const countWords = (text: string): number => {
		let textArray: string[] = text.split(" ").filter(
			word =>
				!(word in [".", ",", "!", "?", ":", ";", "..."]
				)
		)

		return textArray.length
	}

	return (
		<div id="App">
			<TopBar
				count={count}
			/>

			<Page
				content={content}
				setContent={setContent}
			/>
		</div>
	)
}

export default App