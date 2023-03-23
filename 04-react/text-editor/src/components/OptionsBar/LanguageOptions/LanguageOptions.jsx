function LanguageButton(props) {
    return (
        <>
            <buttons></buttons>
        </>
    )
}

function LanguageOptions(props) {
    const {changeSetting} = props
    return (
        <div className="optionsSection">
            <span>Language:</span>
            <button>en</button>
            <button>he</button>
        </div>
    )
}

export default LanguageOptions;