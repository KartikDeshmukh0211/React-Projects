import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

export default function Button({ text, icon, is_outlined }) {
  return (
    <button className={is_outlined ? styles.outlined_btn : styles.primary_btn}>
      {icon}
      <span>{text}</span>
    </button>
  );
}
