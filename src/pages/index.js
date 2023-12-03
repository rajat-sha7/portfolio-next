import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/Components/Hero/hero";
import Service from "@/Components/Services/services";
import Banner from "@/Components/Banner/banner";
import Skill from "@/Components/Skill/skill";
import Contact from "@/Components/Contact/contact";
import Header from "@/Components/Header";
import Layout from '@/Components/Layout/layout'
import Calendly from "@/Components/Infobox/infobox";
import Infobox from "@/Components/Infobox/infobox";
import Highlights from "@/Components/Highlights/Highlights";
import Projects from "@/Components/live projects/Projects";
import r from "@/public/rajat.png"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  
  return (
    <>
      <Head>
        <title>Rajat || portfolio </title>
        <meta name="description" content="Personel portfolio of rajat sharma where he can showcase is projects " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="https://i.pinimg.com/564x/24/d5/7c/24d57c60c6ca858b442010b3220f94f2.jpg"></link>
        
  
      </Head>
     <Layout>
     <Hero />
      <Skill/>
      <Service />
      <Banner />
      <Highlights/>
      <Projects/>
      <Infobox/>
      <Contact/>
     </Layout>

      
    </>
  );
}
