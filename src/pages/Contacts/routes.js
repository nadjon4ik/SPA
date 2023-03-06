import { CONTACTS } from "../../shared/data";
import ContactsLayout from "./ContactsLayout";
import { Contacts } from "./Contacts";
import SingleContact from "../Contact/SingleContact";

export const CONTACTS_ROUTES = {
  path: CONTACTS,
  element: <ContactsLayout />,
  children: [
    {
      index: true,
      element: <Contacts />,
    },
    {
      path: ":userId",
      element: <SingleContact />,
    },
  ],
};
