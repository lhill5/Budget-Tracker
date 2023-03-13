import styles from "../styles/ColorPicker.module.css";

const ColorPicker = (props) => {
  return (
    <button
      style={props.style}
      className={[styles["color-box"], props.color].join(" ")}
      onClick={props.setColor}
    ></button>
  );
};

export default ColorPicker;
