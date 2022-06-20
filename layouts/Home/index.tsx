import { Container } from "@chakra-ui/react";
import React from "react";
import Nav from "../../components/Nav";
import TabBar from "../../components/TabBar";
import Card from "../../components/Card";

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
