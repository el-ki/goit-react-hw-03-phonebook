import React from "react";

const ContactList = ({ contactArray }) => {
  return (
    <div>
      {contactArray.length !== 0 && (
        <ul>
          {contactArray.map((item) => (
            <li key={item.id}>
              {item.name}: {item.number}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
