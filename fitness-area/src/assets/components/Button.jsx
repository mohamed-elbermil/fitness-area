import '../style/Button.css'

function Button({variant, children}) {
    let className = 'btn';

    if (variant) {
        className += ` btn-${variant}`;
    }
    return (
        <button className={className}>
            {children}
        </button>
    )
}

export default Button;