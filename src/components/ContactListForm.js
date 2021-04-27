import React from "react";
import styles from "./styles.module.scss";

const ContactListForm = ({ contactArray }) => {
  return (
    <div>
      {contactArray.length !== 0 && (
        <ul>
          {contactArray.map((item) => (
            <li className={styles.list} key={item.id}>
              {item.name}: {item.number}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactListForm;
