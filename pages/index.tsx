import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { Box, Heading } from "@chakra-ui/react";
import HomeLayout from "../layouts/Home";
import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Heading>This is the Main Page</Heading>
    </HomeLayout>
  );
};

export default Home;
