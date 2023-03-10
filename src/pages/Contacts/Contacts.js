import { getContactsData } from "./../../shared/data";
import "./Contacts.css";

import { useEffect, useState } from "react";
import { Contact } from "./../../components/Contact/Contact";
import {
  ALL_GENDERS,
  FEMALE,
  MALE,
  ANONYMOUS,
} from "./../../shared/gender-flags";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState(ALL_GENDERS);

  useEffect(() => {
    getContactsData(search, gender)
      .then((data) => {
        setContacts(data);
      })
      .catch(console.error);
  }, [search, gender]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleGenderChange = (e) => {
    const flag = {
      female: FEMALE,
      male: MALE,
      anonymous: ANONYMOUS,
    };
    const checkbox = flag[e.target.value];
    setGender(checkbox ^ gender);
  };

  return (
    <Container className="contacts">
      <div className="search-box">
        <input
          type="text"
          className="input-search"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
          autoFocus
        />

        <div className="checkboxes">
          <div className="elCheck">
            <input
              type={"checkbox"}
              value={"female"}
              id={"female"}
              onChange={handleGenderChange}
              defaultChecked
            />
            <label htmlFor={"female"}>Female</label>
          </div>
          <div className="elCheck">
            <input
              type={"checkbox"}
              value={"male"}
              id={"male"}
              onChange={handleGenderChange}
              defaultChecked
            />
            <label htmlFor={"male"}>Male</label>
          </div>
          <div className="elCheck">
            <input
              type={"checkbox"}
              value={"anonymous"}
              id={"anonymous"}
              onChange={handleGenderChange}
              defaultChecked
            />
            <label htmlFor={"anonymous"}>Anon</label>
          </div>
        </div>
      </div>
      <div className="contact-container">
        {contacts.map((contact, i) => {
          return (
            <Link key={contact.username} to={`${contact.username}`}>
              <Contact key={i} data={contact} />
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
