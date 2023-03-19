import React from 'react';
import story1 from "../../StoryScripts/Story1.txt";

const storyURL = "../../StoryScripts/Story1.txt";

export default function GameWindow() {
    return <div id='game-window'>Story:{getStory()}</div>
}

function getStory() {
    const story = fetch(story1)
        .then(x => x.text())
        .then(text => console.log(text));
    return null;
}
