import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";

import AllNews from "@/components/UI/AllNews";
import { useGetAllNewsQuery } from "@/redux/api/api";
import dynamic from "next/dynamic";
const HomePage = ({ allNews }) => {
  // const { data, error, isLoading } = useGetAllNewsQuery();
  console.log("Dataaa", allNews);
  const DynamicHeader = dynamic(() => import("@/components/UI/Banner"), {
    loading: () => <p>Loading...</p>,
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicHeader />
      <AllNews allNews={allNews.data}></AllNews>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/news");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allNews: data,
    },
    revalidate: 10,
  };
};
