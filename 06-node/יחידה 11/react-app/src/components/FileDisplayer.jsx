import { useState } from "react";

import ActionButton from "./ActionButton";

export default function FileDisplayer({ title, text, requestHandler }) {
    
    const [isRenaming, setIsRenaming] = useState(false);
    const [newName, setNewName] = useState('')

    return (
        <div className="span2">
            <div>
                Selected file:
                {!isRenaming
                    ?
                    <>
                        &nbsp;{title}&nbsp;&nbsp;
                        {title &&
                            <>
                                <ActionButton action={() => setIsRenaming(true)}>
                                    ✏️
                                </ActionButton>
                                <ActionButton action={() => requestHandler('copy')}>
                                    📋
                                </ActionButton>
                                <ActionButton action={() => requestHandler('delete')}>
                                    ❌
                                </ActionButton>
                            </>
                        }
                    </>
                    :
                    <span> <input
                        className="input"
                        autoFocus
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)} />
                        <ActionButton action={() => {
                            setIsRenaming(false)
                            setNewName('')
                            requestHandler('rename', { name: newName })
                        }}>
                            💾
                        </ActionButton>
                        <ActionButton action={() => setIsRenaming(false)}>
                            🚫
                        </ActionButton>
                    </span>
                }
            </div>
            <p>Text:</p>
            <pre>{text}</pre>
        </div>
    )
}