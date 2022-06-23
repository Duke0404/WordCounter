//Styles
import './Page.css'

//Interfaces
interface PageProps {
    content: string
    setContent: (content: string) => void
}

const Page = (props: PageProps): JSX.Element => {
    //Functions
    const inputTextHandler = (event: any/*: React.ChangeEvent<HTMLTextAreaElement>*/): void => {
        props.setContent(event.target.value)
    }
    
    return (
        <textarea
            id="content"
            placeholder="Enter text to count words from..."
            value={props.content}
            onChange={inputTextHandler}
        />
    )
}

export default Page;