export default function ActionButton({action, children}) {
    return (
        <button 
        className="button"
        onClick={() => action()}
        >
            {children}
        </button>
    )
}