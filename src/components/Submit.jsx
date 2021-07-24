import React from 'react'
import Container from "@material-ui/core/Container";
import axios from "axios";

export const Submit = ({data}) => {
    console.log(data);
    axios.post("http://localhost:3001/posts", data);
    return (
      <Container
        style={{ marginTop: 100 }}
        maxWidth="xs"
      >
        <p>
          Thank you for registering with us, We will be shortly in touch with
          you
        </p>
        <img
          style={{ width: "100%", borderRadius: 5, marginTop: 30 }}
          src="https://cdn.dribbble.com/users/1606913/screenshots/5323554/thanks.gif"
          alt=""
        />
      </Container>
    );
}
