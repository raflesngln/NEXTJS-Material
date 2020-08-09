

const MyInput = props => (
    <input
      disabled={props.disabled}
      type="text"
      className={props.className}
      placeholder={props.inputPlaceholder}
      value={props.inputValue}
      onChange={props.inputOnChange}
    />
  );
  export default MyInput