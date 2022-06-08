function ContactList(props) {
  return (
    <div>
      <ul>
        {props.list.map((contact, index) =>
          <li key={index}>
            {contact.name}: {contact.number} {''}
            <button onClick={(e) => props.delete(index, props.list)}>Delete</button>
          </li>)
          }
      </ul>
    </div>
  );
}

export default ContactList;
