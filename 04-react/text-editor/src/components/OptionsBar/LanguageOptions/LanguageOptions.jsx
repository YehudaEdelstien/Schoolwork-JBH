function LanguageButton(props) {
    const {language, localLanguage} = props;

    const styleObj = {
        border: localLanguage === language ? "2px solid green" : "revert",
    };

    return (
        <>
            <button onClick={() => props.changeSetting("language", localLanguage)} style={styleObj}>{localLanguage}</button>
        </>
    )
}

function LanguageOptions(props) {
    return (
        <div className="optionsSection">
            <span>Language:</span>
            <LanguageButton {...props} localLanguage={"en"}></LanguageButton>
            <LanguageButton {...props} localLanguage={"he"}></LanguageButton>
        </div>
    )
}

export default LanguageOptions;