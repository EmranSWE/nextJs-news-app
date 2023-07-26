import { Card, Col, Row } from "antd";
import Image from "next/image";

import React from "react";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
const AllNews = ({ allNews }) => {
  const { Meta } = Card;

  return (
    <>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>
        #TODAYS HIGHLIGHT
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allNews.map((news) => (
          <Col key={news.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  alt="example"
                  src={news?.image_url}
                  width={500}
                  height={200}
                />
              }
            >
              <Meta title={news.title} />
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

              <p style={{ fontSize: "15px" }}>
                A spread opened patient and compulsively one placed seagull
                goodness python owing snapped yikes equitable when much the much
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi, tenetur!...
              </p>
              <Link href={`/news/${news?.id}`}>
                <p
                  style={{
                    fontSize: "20px",
                    margin: "20px 0px",
                    backgroundColor: "black",
                    color: "white",
                    width: "168px",
                    padding: "2px 5px ",
                    fontWeight: "300",
                    letterSpacing: "3px",
                  }}
                >
                  Keep Reading <ArrowRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllNews;
