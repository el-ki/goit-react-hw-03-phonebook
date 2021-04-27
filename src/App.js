import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import ContactListFilter from "./components/ContactListFilter";
console.log(uuidv4());

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = (data) => {
    console.log(data);
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const filterContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    console.log(filterContacts);
    return (
      <div className="App">
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ContactList contactArray={this.state.contacts} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactListFilter
          filterContacts={filterContacts}
          value={this.state.filter}
        />
      </div>
    );
  }
}

export default App;
