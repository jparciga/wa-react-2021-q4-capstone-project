import './Button.css';

function Button({text}) {
  return <button class="genericButton">{text}</button>;
}
function EventButton({text, event}) {
    return <button class="genericButton" onClick={event()}>{text}</button>;
  }
  export {EventButton};
  export default Button;
