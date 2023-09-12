import { useState } from "react";
import { FormStyled } from "./FormStyled";
import { FaAddressBook } from "react-icons/fa";
import { useAddContactMutation } from "../../redux/rtkQuery";

export default function Form() {
  const [forma, setforma] = useState({ name: "", number: "" });
  const [addContact, { isLoading, data }] = useAddContactMutation();

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setforma((pref) => ({ ...pref, [name]: value }));
  };

  function onClick(e) {
    e.preventDefault();
    console.log(forma);
    addContact(forma);
    setforma({ name: "", number: "" });
  }

  return (
    <FormStyled>
      {" "}
      <h2>Add contact</h2>
      <form action="" onSubmit={onClick}>
        <label>
          Name
          <input
            onChange={onChange}
            type="text"
            name="name"
            value={forma.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Phone number
          <input
            onChange={onChange}
            type="tel"
            name="number"
            value={forma.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button disabled={isLoading} type="submit">
          Add &nbsp;
          <FaAddressBook size={20} color="#DAA520" />
        </button>
      </form>
      {data && (
        <ul>
          <li>
            <span>Name: {data.name}</span>
          </li>
          <li>
            <span>Number:{data.number}</span>
          </li>
        </ul>
      )}
    </FormStyled>
  );
}
