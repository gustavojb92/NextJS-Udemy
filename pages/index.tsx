import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Header from "@components/header";
import Navigation from "@components/navigation";
import { getPostList } from "@shared/util";
import Link from "next/link";

type PostList = string[];

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <main>
        <Navigation />
        <Header />
        {posts.length > 0 && (
          <ul>
            {posts.map((slug) => (
              <li key={slug}>
                <Link href={`posts/${slug}`}>
                {slug.replace(/-/g,' ')}
                </Link>
                </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const posts:PostList = getPostList()
  return {
    props: {
      posts
    },
  };
};
