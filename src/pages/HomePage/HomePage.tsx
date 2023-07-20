import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "../styled";
import { PageWrapper } from "../../App.styled";

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <PageWrapper>
        <Container>Main</Container>
      </PageWrapper>
    </>
  );
};

export default HomePage;
