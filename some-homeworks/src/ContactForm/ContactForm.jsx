
function ContactForm(props) {
    return (
        <form onSubmit={props.submit}>
            Name:
            <br />
            <input type="text" onChange={props.nameHandler} value={props.nameValue} />
            <br />
            Number:
            <br />
            <input onChange={props.numberHandler} value={props.numberValue} />
            <br />
            <input type="submit" value="Add contact" />
          </form>
    );
  }
  
  export default ContactForm;