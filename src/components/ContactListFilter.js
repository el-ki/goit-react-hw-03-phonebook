import React from "react";

const ContactListFilter = ({ filterContacts, value }) => {
  return (
    <div>
      {value !== "" && (
        <ul>
          {filterContacts.map((item) => (
            <li key={item.id}>
              {item.name}: {item.number}
              <button>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactListFilter;
