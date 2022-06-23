//Styles
import './CountResult.css'

//Interfaces
interface CountResultProps {
    count: number
}

const CountResult = (props: CountResultProps) =>
    <div id="count-result">
        {props.count}
    </div>

export default CountResult