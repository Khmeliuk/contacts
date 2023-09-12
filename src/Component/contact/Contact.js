import { useSelector } from "react-redux";
import { useHref, useParams } from "react-router-dom";
import {
  useEditContactMutation,
  useGetContactByIdQuery,
  useGetContactsQuery,
} from "../../redux/rtkQuery";
import { useState } from "react";

export default function Contact() {
  const [edit, setedit] = useState(true);
  const Href = useHref();
  const params = useParams();
  const { data, error, isLoading, refetch } = useGetContactsQuery();

  const [editContact] = useEditContactMutation();

  const editHandler = (e) => {
    setedit(!edit);
  };

  const contact = data.find((e) => {
    return e.id === params.idContact;
  });
  console.log(contact);
  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    console.log(name, number);
    editContact({ id: params.idContact, name, number });
    refetch();
    setedit(true);
  };

  return contact ? (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          readOnly={edit}
          defaultValue={contact.name}
        />
        <input name="number" readOnly={edit} defaultValue={contact.number} />
        {/* <input type="email" value={contact?.email} /> */}
        <button type="button" onClick={editHandler}>
          edit
        </button>

        {!edit && <button type="submit">save changes</button>}
      </form>
      {contact && (
        <ul>
          <li>
            <span>Name: {contact.name}</span>
          </li>
          <li>
            <span>Number:{contact.number}</span>
          </li>
        </ul>
      )}
    </>
  ) : (
    <div>loading</div>
  );
}
