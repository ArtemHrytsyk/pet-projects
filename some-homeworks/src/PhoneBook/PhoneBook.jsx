import React from 'react';
// import ContactForm from '../ContactForm/ContactForm'
// import Filter from '../Filter/Filter'
// import ContactList from '../ContactList/ContactList'
import { v4 as uuidv4 } from 'uuid';
import styles from './PhoneBook.module.css'


class PhoneBook extends React.Component {
    state = {
        contacts: [
            { name: 'Anton', number: '123456789', id: uuidv4(), },
            { name: 'Dimon', number: '123456789', id: uuidv4(), },
            { name: 'Andron', number: '123456789', id: uuidv4(), },
            { name: 'Pokemon', number: '123456789', id: uuidv4(), },
        ],
        name: '',
        number: '',
        filter: ''
    }

    componentDidMount() {
        console.log('component Phonebook mounted');
        const contactsFromLS = localStorage.getItem('contacts');
        if (contactsFromLS) {
            this.setState({
                contacts: JSON.parse(contactsFromLS)
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component Phonebook updated');
        if (prevState.contacts !== this.state.contacts) {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
        }
    }

    changeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    addContact = (e) => {
        e.preventDefault();
        const isAlreadyInContacts = this.state.contacts.some(i => i.name === this.state.name);
        if (isAlreadyInContacts) {
            alert(`${this.state.name} is already in contacts`)
        } else {
            let newContact = { name: this.state.name, number: this.state.number, id: uuidv4(), };
            this.setState(prevState => {
                return {
                    contacts: [...prevState.contacts, newContact]
                }
            })
        }
    }

    deleteContact = contactId => {
        (window.confirm("Are you sure you want to delete this contact?")) &&
            this.setState(prevState => {
                return {
                    contacts: prevState.contacts.filter(contact => contact.id !== contactId)
                }
            })
    }

    toFilterContacts = (contacts) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    }

    render() {
        const { name, number, contacts, filter } = this.state;
        return (
            <div className={styles.phoneBook}>
                <h1>Phonebook (via Local Storage)</h1>
                <form onSubmit={this.addContact}>
                    Name:
                    <br />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        value={name}
                        name='name' />
                    <br />
                    Number:
                    <br />
                    <input
                        onChange={this.changeHandler}
                        value={number}
                        name='number' />
                    <br />
                    <input
                        type="submit"
                        value="Add contact" />
                </form>

                <div>
                    <h1>Contacts</h1>
                    <div>
                        <h4>Find contacts by name</h4>
                        <input
                            type='text'
                            onChange={this.changeHandler}
                            value={filter}
                            name='filter' />
                    </div>
                    <ul>
                        {this.toFilterContacts(contacts).map(contact =>
                            <li key={contact.id}>
                                {contact.name}: {contact.number} {''}
                                <button onClick={() => this.deleteContact(contact.id)}>Delete</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default PhoneBook;