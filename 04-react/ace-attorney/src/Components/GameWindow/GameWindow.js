import React from 'react';
import story1 from "../../StoryScripts/Story1.txt";

let storyText;
getStory();

export default function GameWindow() {
    return <div id='game-window'>Story:{storyText}</div>
}

function getStory() {
    const story = fetch(story1)
        .then(x => x.text())
        .then(text => storyText = text);
}
