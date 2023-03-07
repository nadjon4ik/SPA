import React from "react";
import { Stack } from "react-bootstrap";
import "./message.css";

const Message = (props) => {
  const { photo } = props.dataClient ?? {};
  const messages = props.messages;
  return (
    <>
      <div>
        {messages &&
          messages.map((message, i) => {
            return (
              <div
                key={i}
                className={
                  message.who === "me" ? "me-position" : "other-position"
                }
              >
                <Stack className="position-relative">
                  {message.who !== "me" ? (
                    <Stack
                      direction="horizontal"
                      className="align-items-center mb-1"
                    >
                      <div>
                        {" "}
                        <img
                          className="fit-content pe-2"
                          src={photo}
                          width="35"
                          height="35"
                        />
                      </div>
                      <p className="m-0 other">{message.message}</p>
                    </Stack>
                  ) : (
                    <Stack className="me">
                      <p className="m-0 text-end">{message.message}</p>
                    </Stack>
                  )}
                </Stack>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Message;
