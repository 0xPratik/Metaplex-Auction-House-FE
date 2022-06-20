import { Container } from "@chakra-ui/react";
import React from "react";
import Nav from "../../components/Nav";

interface IHome {
  children: React.ReactNode;
}

function HomeLayout({ children }: IHome) {
  return (
    <Container maxW="container.xl" h="100vh">
      <Nav />
      {children}
    </Container>
  );
}

export default HomeLayout;
