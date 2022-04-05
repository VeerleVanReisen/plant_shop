import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/header/header";
import ProductsProvider from "../store/products-provider";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <ProductsProvider>
      <Header>
        <h1> Dit is de homepage </h1>
      </Header>
    </ProductsProvider>
  );
};

export default Home;
