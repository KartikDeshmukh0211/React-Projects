import { MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";

export default function ContactForm() {
  const [info, setInfo] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const text = event.target[2].value;

    setInfo((prev) => {
      return { ...prev, name: name, email: email, text: text };
    });
  };

  return (
    <div className={styles.ContactForm}>
      <div className={styles.contact_section}>
        <div className={styles.btns}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage color="white" fontSize="19px" />}
          />
          <Button
            text="VIA CALL"
            icon={<MdCall color="white" fontSize="19px" />}
          />
        </div>
        <Button
          text="VIA EMAIL FORM"
          icon={<IoMdMail fontSize="19px" />}
          is_outlined={true}
        />
        <form onSubmit={handleSubmit}>
          <div className={styles.form_element}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className={styles.form_element}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className={styles.form_element}>
            <label htmlFor="text    ">Text</label>
            <textarea name="text" id="text"></textarea>
          </div>

          <Button text="Submit" />
        </form>
        <div>
          <span>VALUES</span>
          <br />
          <span>{info.name}</span>
          <br />
          <span>{info.email}</span>
          <br />
          <span>{info.text}</span>
          <br />
        </div>
      </div>
      <div className={styles.contact_image}>
        <img src="images/service-girl.png" alt="" />
      </div>
    </div>
  );
}
