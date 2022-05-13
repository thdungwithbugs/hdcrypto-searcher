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
            GAME NFT NỔI BẬT
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
          href="https://coin68.com/klaycity-mo-cong-whitelist-nft-cho-600-vi-duy-nhat/"
          rel="noreferrer noopener"
          target="_blank"
          style={{
            background:
              "url(https://coin68.com/wp-content/uploads/2022/05/klaycity.jpg) ",
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
            <p>GAME NFT</p>
            <h3>
            KlayCity (ORB) mở cổng whitelist NFT cho 600 ví duy nhất
            </h3>
            <span>09/05/2022</span>
          </div>
        </a>
        <a
          className="new_card"
          href="https://coin68.com/apeiron-nft/"
          rel="noreferrer noopener"
          target="_blank"
          style={{
            background:
              "url(https://coin68.com/wp-content/uploads/2022/03/apeiron.jpeg) ",
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
            <p>THƯ VIỆN GAME</p>
            <h3>
            Thông tin và update mới nhất về game NFT của Foonie Magus
            </h3>
            <span>13/05/2022</span>
          </div>
        </a>
        <a
          className="new_card"
          href="https://coin68.com/doi-net-ve-tua-game-p2e-dau-tien-cua-zodium-land-of-battle/"
          rel="noreferrer noopener"
          target="_blank"
          style={{
            background:
              "url(https://coin68.com/wp-content/uploads/2022/05/zodium.jpg) ",
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
            <p>GAME NFT</p>
            <h3>
              Đôi nét về tựa game P2E đầu tiên của Zodium “Land of Battle”
            </h3>
            <span>11/05/2022</span>
          </div>
        </a>
        <a
          className="new_card"
          href="https://coin68.com/epic-war-ewar-se-tien-hanh-ido-tren-red-kite/"
          rel="noreferrer noopener"
          target="_blank"
          style={{
            background:
              "url(https://coin68.com/wp-content/uploads/2022/05/cover-1.jpg) ",
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
            <p>GAME NFT</p>
            <h3>Epic War (EWAR) sẽ tiến hành IDO trên Red Kite</h3>
            <span>09/05/2022</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Event;
