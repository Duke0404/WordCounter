//Styles
import './TopBar.css'

//Images
import logoSvg from '../../Assets/Images/Logo.svg';

//Components
import CountResult from '../CountResult/CountResult'

//Interfaces
interface TopBarProps {
    count: number
}

const TopBar = (props: TopBarProps) =>
    <nav id="top-bar">
        <img
            src={logoSvg}
            alt="Logo"
        />

        <h1 id="title">
            Word Counter
        </h1>

        <CountResult
            count={props.count}
        />
    </nav>

export default TopBar