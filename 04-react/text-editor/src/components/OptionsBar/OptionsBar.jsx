import SizeOptions from "./SizeOptions/SizeOptions"
import ColorOptions from "./ColorOptions/ColorOptions"
import LanguageOptions from "./LanguageOptions/LanguageOptions"
import MiscOptions from "./MiscOptions/MiscOptions"

function OptionsBar(props) {
    const {changeSetting, language, textSize, color, changeCase, clearAll} = props
    return (
    <div id="optionsBar">
        <SizeOptions changeSetting={changeSetting} textSize={textSize}/>
        <ColorOptions changeSetting={changeSetting} color={color}/>
        <LanguageOptions changeSetting={changeSetting} language={language}/>
        <MiscOptions changeCase={changeCase} clearAll={clearAll}/>
    </div>
    )
}

export default OptionsBar;