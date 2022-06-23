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
        <img
            src={'../../Assets/Images/logo.svg'}
            alt="Logo"
        />

        <CountResult
            count={props.count}
        />
    </nav>

export default TopBar