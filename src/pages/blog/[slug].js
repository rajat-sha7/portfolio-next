import Head from "next/head";
import Blog from "@/Components/Blog/Blog";
import Layout from "@/Components/Layout/layout";


export default function blog({ blogPost }) {
  return (
    <div>
      <Head>
        <title>{`${blogPost?.meta?.title || blogPost?.title}`}</title>
        <meta
          name="description"
          content={`${blogPost?.meta?.description || blogPost?.description}`}
        />
      </Head>
      <Layout>
        <div className="single-page">
          <Blog data={blogPost} />
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  const BlogList = await import(`../../Content/blog/index.json`);

  const paths = BlogList?.blog?.map((blog) => ({
    params: { slug: blog.slug.toString() },
  }));
  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const res = await import(`../../Content/blog/${slug}.json`);
  const blogPost = JSON.parse(JSON.stringify(res));

  return { props: { blogPost } };
};
