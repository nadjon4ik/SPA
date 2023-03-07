import React, { useState, useEffect } from "react";
import { Container, Stack } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { CONTACTS, getContactById } from "../../shared/data";

import male_avatar from "./../../assets/images/male-avatar.png";
import female_avatar from "./../../assets/images/female-avatar.png";
import anonymous from "./../../assets/images/anonymous-avatar.png";
import "./single.css";
import Message from "../../components/Message/Message";

const SingleContact = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [contact, setContact] = useState({});
  const [correspondence, setCorrespondence] = useState([]);
  useEffect(() => {
    getContactById(userId).then((contactData) => {
      if (contactData) {
        setContact(contactData);
        setCorrespondence(contactData.correspondence);
      } else {
        navigate(CONTACTS);
      }
    });
  }, [userId]);

  const genderValue =
    contact.gender === "male"
      ? "male"
      : contact.gender === "female"
      ? "female"
      : "unknown";

  const srcGenderAvatar =
    genderValue === "male"
      ? male_avatar
      : genderValue === "female"
      ? female_avatar
      : anonymous;

  return (
    <Container>
      <Stack className="details">
        <img
          className="AvatarImage"
          src={srcGenderAvatar}
          alt={`${genderValue} avatar`}
        />
        <div>
          <span className="me-2">ПІП:</span>
          <span className="info-contact">
            {contact.firstName} {contact.lastName}
          </span>
        </div>
        <div>
          <span className="me-2">Стать:</span>
          <span className="info-contact">
            {contact.gender === "male"
              ? "чоловік"
              : contact.gender === "female"
              ? "жінка"
              : "невідомий"}
          </span>
        </div>
        <div>
          <span className="me-2">Номер телефону:</span>
          <span className="info-contact">{contact.phone}</span>
        </div>
        <div>
          <span className="me-2">Опис:</span>
          <span className="info-contact">{contact.description}</span>
        </div>
      </Stack>
      <div className="messages-container">
        <Message dataClient={correspondence[0]} messages={correspondence[1]} />
      </div>
    </Container>
  );
};

export default SingleContact;
