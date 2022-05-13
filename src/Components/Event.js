import { Container } from "@material-ui/core";
import React from "react";

const Event = () => {
  return (
    <section
      className="events"
      style={{ height: "auto", padding: "2rem 0 5rem 0" }}
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
            KIẾN THỨC
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
          href="https://coin68.com/ceo-coinex-chia-se-ve-tuong-lai-va-chien-luoc-phat-trien-du-an/"
          rel="noreferrer noopener"
          target="_blank"
          style={{
            background:
              "url(https://coin68.com/wp-content/uploads/2022/05/123-4.jpg) ",
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
            <p>DỰ ÁN</p>
            <h3>
              CEO CoinEx chia sẻ về tương lai và chiến lược phát triển dự án
            </h3>
            <span>12/05/2022</span>
          </div>
        </a>
        <a
          className="new_card"
          href="https://coin68.com/bo-tui-mot-so-tu-long-thong-dung-cong-dong-crypto-hay-dung/"
          rel="noreferrer noopener"
          target="_blank"
          style={{
            background:
              "url(https://coin68.com/wp-content/uploads/2022/05/FSRPyfQXIAERB5E.jpg) ",
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
            <p>KIẾN THỨC</p>
            <h3>
              “Bỏ túi” một số từ lóng thông dụng cộng đồng crypto hay dùng
            </h3>
            <span>09/05/2022</span>
          </div>
        </a>
        <a
          className="new_card"
          href="https://coin68.com/su-co-tren-ethereum-solana-va-tam-quan-trong-cua-blockspace/"
          rel="noreferrer noopener"
          target="_blank"
          style={{
            background:
              "url(https://coin68.com/wp-content/uploads/2022/05/Ethereum-Solana-Blockspace.jpg) ",
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
            <p>KIẾN THỨC</p>
            <h3>
            Sự cố trên Ethereum, Solana. Tầm quan trọng của Blockspace
            </h3>
            <span>05/05/2022</span>
          </div>
        </a>
        <a
          className="new_card"
          href="https://coin68.com/gate-io-chinh-thuc-niem-yet-freshcut-diamond-fcd/"
          rel="noreferrer noopener"
          target="_blank"
          style={{
            background:
              "url(https://coin68.com/wp-content/uploads/2022/05/1234.jpg) ",
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
            <p>DỰ ÁN</p>
            <h3>Gate.io chính thức niêm yết FreshCut Diamond (FCD) </h3>
            <span>12/05/2022</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Event;
