import React, { useState } from 'react'

export default function TextContainer(props) {
    return (
        <TextHider
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. A arcu cursus vitae congue mauris rhoncus aenean. Semper feugiat nibh sed pulvinar proin gravida. Sagittis id consectetur purus ut faucibus. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Pharetra sit amet aliquam id diam maecenas. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Et netus et malesuada fames ac."
            maxLength={100}
        />
    )
}

function TextHider(props) {
    const [hidden, setHidden] = useState(true)

    let { text, maxLength } = props;
    if (hidden) {
        text = text.substr(0, maxLength)
        text += "..."
    }
    text += " "

    const toggleHidden = () => {
        setHidden(prev => !prev)
    }

    return (
        <p>
            {text}
            <span onClick={toggleHidden} style={{ color: "blue", cursor: "pointer" }}>
                {hidden ? "read more" : "show less"}
            </span>
        </p>
    );
}