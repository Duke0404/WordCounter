//Styles
import './TopBar.css'

//Images

//Components
import CountResult from '../CountResult/CountResult'

//Interfaces
interface TopBarProps {
    count: number
}

const TopBar = (props: TopBarProps) =>
    <nav id="top-bar">
        {/*Image*/}
        <CountResult
            count={props.count}
        />
    </nav>

export default TopBar