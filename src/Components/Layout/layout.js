import React from "react";
import Header from "@/Components/Header/index";
import Footer from "@/Components/Footer/footer";

export default function layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
