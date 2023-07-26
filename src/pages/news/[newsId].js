import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Row } from "antd";
import Image from "next/image";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const NewsDetailsPage = ({ news }) => {
  return (
    <div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <Image alt="example" src={news?.image_url} width={500} height={300} />
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            {" "}
            <h1>{news.title}</h1>
            <div
              className="line"
              style={{
                height: "5px",
                margin: "20px 0",
                background: "#000",
                width: "95%",
              }}
            ></div>
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                color: "gray",
                margin: "10px 0px",
              }}
            >
              <span>
                <CalendarOutlined /> {news.release_date}
              </span>
              <span>
                <CommentOutlined /> {news.comment_count} COMMENTS
              </span>
              <span>
                <ProfileOutlined /> {news.category}
              </span>
            </p>
            <p style={{ fontSize: "15px" }}>{news.description}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewsDetailsPage;

NewsDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const newses = await res.json();
//   console.log("News", newses);
//   const paths = newses.map((news) => ({
//     params: { newsId: news.id },
//   }));
//   return { paths, fallback: true };
// };

// export const getStaticProps = async (context) => {
//   const { params } = context;
//   const res = await fetch(`http://localhost:5000/news/${params.newsId}`);

//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       news: data,
//     },
//   };
// };
export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/news/${params.newsId}`);

  const data = await res.json();
  console.log(data);
  return {
    props: {
      news: data,
    },
  };
};
