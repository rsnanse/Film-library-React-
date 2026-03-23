import './Button.css';
import InputComponent from '../InputComponent/InputComponent';
function Button({ text, onClick }) {
    return (
        <button className="button-search" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
