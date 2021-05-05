import React, { Component } from "react";
import Form from "./components/Form";
import ContactListForm from "./components/ContactListForm";
import Filter from "./components/Filter";
import ContactListFilter from "./components/ContactListFilter";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = (data) => {
    console.log(data);
    const isContactAdded = this.state.contacts.find(
      ({ name }) => name === data.name
    );
    if (isContactAdded) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
    this.setState({ filter: "" });
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

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
        <ContactListForm contactArray={this.state.contacts} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactListFilter
          filterContacts={filterContacts}
          value={this.state.filter}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
