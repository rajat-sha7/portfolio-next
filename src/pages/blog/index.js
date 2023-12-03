import Blogs from "@/Components/Blogs/Blog";
import React from "react";
import Head from "next/head";
import BlogList from '@/Content/blog/index.json';
import Layout from '@/Components/Layout/layout'

export default function index() {
  return (
    <>
   <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Blogs data={BlogList} />
    </Layout>
    </>
  );
}
