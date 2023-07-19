import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "../styled";

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <Container>Main</Container>
    </>
  );
};

export default HomePage;
