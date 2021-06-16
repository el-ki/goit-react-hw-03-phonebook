import React from "react";
import styles from "./styles.module.scss";

const ContactListForm = ({ contactArray, onDeleteContact }) => {
  return (
    <div>
      {contactArray.length !== 0 && (
        <ul>
          {contactArray.map((item) => (
            <li className={styles.list} key={item.id}>
              {item.name}: {item.number}
              <button
                className={styles.input}
                className={styles.btn}
                onClick={() => onDeleteContact(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactListForm;
