function SizeOptions(props) {
    return (
        <div className="optionsSection">
            <div style={{width: "100%"}}>Size:</div>
            <button>12</button>
            <button>18</button>
            <button>24</button>
            <button>30</button>
        </div>
    )
}

function ColorOptions(props) {
    return (
        <div className="optionsSection">
            <span>Colors:</span>
            <button>Black</button>
            <button>Red</button>
            <button>Blue</button>
            <button>Green</button>
        </div>
    )
}

function LanguageOptions(props){ 
    return (
        <div className="optionsSection">
            <span>Language:</span>
            <button>en</button>
            <button>he</button>
        </div>
    )
}

function MetaOptions(props) {
    return (
        <div className="optionsSection">
            <button>CLEAR ALL</button>
        </div>
    )
}

function OptionsBar(props) {
    return (
    <div id="optionsBar">
        <SizeOptions />
        <ColorOptions />
        <LanguageOptions />
        <MetaOptions />
    </div>
    )
}

export default OptionsBar;