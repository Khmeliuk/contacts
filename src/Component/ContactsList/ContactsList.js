import { Box } from "../../App/Box";
import { AiFillDelete } from "react-icons/ai";
import { ContactsListStyled } from "./ContactsListStyled";
import { Link, useLocation } from "react-router-dom";
import { useDeleteContactMutation } from "../../redux/rtkQuery";
export function ContactsList({ renderData, title, isLoadingProps }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const location = useLocation();

  return (
    <Box
      display="flex"
      flexDirection="column "
      alignItems="center"
      p={3}
      width="100%"
    >
      <h2>{title}</h2>
      <ContactsListStyled>
        {renderData ? (
          renderData.map((contact) => {
            return (
              <li key={contact.id}>
                <Link state={location.pathname} to={`/phonebook/${contact.id}`}>
                  {contact.name}: {contact.number}
                </Link>
                <button
                  disabled={isLoading}
                  onClick={(e) => deleteContact(e.currentTarget.dataset.id)}
                  data-id={contact.id}
                  type="button"
                >
                  <AiFillDelete />
                </button>
              </li>
            );
          })
        ) : (
          <div>loading</div>
        )}
      </ContactsListStyled>
    </Box>
  );
}
