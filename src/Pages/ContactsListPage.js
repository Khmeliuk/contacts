import { ContactsList } from "../Component/ContactsList/ContactsList";

import { useGetContactsQuery } from "../redux/rtkQuery";
const ContactsListPage = () => {
  const { data, error, isLoading } = useGetContactsQuery();

  return <ContactsList renderData={data} title="Contacts List" />;
};
export default ContactsListPage;
