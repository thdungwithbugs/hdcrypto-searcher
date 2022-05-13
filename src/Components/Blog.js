import { Container } from "@material-ui/core";
import React from "react";

const Event = () => {
  return (
    <section
      className="events"
      style={{ height: "auto", padding: "0 0 5rem 0" }}
    >
      <Container className="container fluid">
        <div className="container fluid">
          <h1
            style={{
              color: "#EEBC1D",
              marginBottom: "1rem",
              fontSize: "32px",
            }}
          >
            BLOG NỔI BẬT - COIN68
          </h1>
        </div>
      </Container>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gap: "1rem",
          padding: "0 2.4rem",
        }}
      >
        <a
          className="new_card"
          href="https://coin68.com/airdrop-retroactive-va-goc-nhin-tu-ly-thuyet-tro-choi/"
          rel="noreferrer noopener"
          target="_blank"
          style={{
            background:
              "url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) ",
            height: "50vh",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              position: "absolute",
              color: "white",
              fontSize: "1rem",
              top: "1rem",
              left: "1rem",
              background: "rgba(0,0,0,0.7)",
              padding: 5,
            }}
          >
            <p>BLOG</p>
            <h3>
            Coin68 Blog: Airdrop – Retroactive và góc nhìn từ Lý thuyết Trò chơi
            </h3>
            <span>28/04/2022</span>
          </div>
        </a>
        <a
          className="new_card"
          href="https://coin68.com/su-troi-day-va-suy-tan-cua-van-hoa-crypto/"
          rel="noreferrer noopener"
          target="_blank"
          style={{
            background:
              "url(https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) ",
            height: "50vh",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              position: "absolute",
              color: "white",
              fontSize: "1rem",
              top: "1rem",
              left: "1rem",
              background: "rgba(0,0,0,0.7)",
              padding: 5,
            }}
          >
            <p>BLOG</p>
            <h3>
            Sự trỗi dậy và suy tàn của văn hóa crypto diễn ra ra sao?
            </h3>
            <span>19/04/2022</span>
          </div>
        </a>
        <a
          className="new_card"
          href="https://coin68.com/coin68-blog-luoc-su-defi/"
          rel="noreferrer noopener"
          target="_blank"
          style={{
            background:
              "url(https://wiki.tino.org/wp-content/uploads/2021/08/word-image-1172.png) ",
            height: "50vh",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              position: "absolute",
              color: "white",
              fontSize: "1rem",
              top: "1rem",
              left: "1rem",
              background: "rgba(0,0,0,0.7)",
              padding: 5,
            }}
          >
            <p>BLOG</p>
            <h3>
            Coin68 Blog: Lược sử DeFi - Tài chính Phi tập trung
            </h3>
            <span>18/02/2022</span>
          </div>
        </a>
        <a
          className="new_card"
          href="https://coin68.com/defi-discussion-ep-38-thuat-nguyen-coin68-founder-bo-cai-toi-be-de-co-nhung-be-phong-that-lon/"
          rel="noreferrer noopener"
          target="_blank"
          style={{
            background:
              "url(https://images.unsplash.com/photo-1642466121955-1f7ae4ee60f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) ",
            height: "50vh",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              position: "absolute",
              color: "white",
              fontSize: "1rem",
              top: "1rem",
              left: "1rem",
              background: "rgba(0,0,0,0.7)",
              padding: 5,
            }}
          >
            <p>BLOG</p>
            <h3>DeFi Discussion ep.38: Bỏ “cái tôi bé” cho bệ phóng thật lớn</h3>
            <span>28/03/2022</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Event;
