import { Box } from "../../App/Box";

import { useDispatch, useSelector } from "react-redux";
import { filterAction, getFilter } from "../../redux/filter/filtterSlice";
import { ContactsList } from "../ContactsList/ContactsList";
import { useGetContactsQuery } from "../../redux/rtkQuery";
import { useState } from "react";

export default function Filter() {
  const { data, error, isLoading, isSuccess } = useGetContactsQuery();
  const search = useSelector(getFilter);
  const [searchValue, setsearchValue] = useState("");

  const dispatch = useDispatch();

  const onChange = (e) => {
    setsearchValue(e.target.value);
    dispatch(filterAction(e.target.value));
  };

  function filterContact(searchValue) {
    if (isSuccess) {
      const filerContact = data.filter((contact) => {
        return contact.name.toLowerCase().includes(searchValue.toLowerCase());
      });

      return filerContact;
    }
  }

  const filterdata = filterContact(search);

  return (
    <Box
      pt={4}
      display="flex"
      flexDirection="column "
      alignItems="center"
      justifyContent=""
    >
      <input
        onChange={onChange}
        value={searchValue}
        type="text"
        name="filter"
      />

      <ContactsList
        title="Filter contacts"
        renderData={filterdata}
        isLoadingProps={isLoading}
      />
    </Box>
  );
}
