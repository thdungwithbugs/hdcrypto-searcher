import { Container } from "@material-ui/core";
import React from "react";

const News = () => {
  return (
    <Container
      className="exhibition"
      style={{ height: "auto", padding: "4rem 0" }}
    >
      <div className="container fluid">
        <h1
          style={{
            color: "#EEBC1D",
            marginBottom: "1rem",
            marginLeft: "1rem",
          }}
        >
          TIN TỨC MỚI
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://coin68.com/luna-ust-da-vo-phuong-cuu-chua/"
          target="_blank"
          rel="noreferrer noopener"
          className="exhibition_card"
          style={{ position: "relative", cursor: "pointer" }}
        >
          <img
            src="https://coin68.com/wp-content/uploads/2022/05/LUNA-Supply-History.jpg"
            alt=""
            style={{
              width: "40vw",
              height: "50vh",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              color: "white",
              fontWeight: "bold",
              letterSpacing: "1px",
              background: "rgba(0,0,0,0.7)",
              padding: "5px",
            }}
          >
            <p>ANALYSIS</p>
            <h2>
              Lượng cung tăng lên 6,9 nghìn tỷ, LUNA – UST đã “vô phương cứu
              chữa”
            </h2>
            <h3>13/05/2022</h3>
          </div>
        </a>
        <a
          href="https://coin68.com/tai-san-ty-phu-giau-nhat-nganh-crypto-terra-ust/"
          target="_blank"
          rel="noreferrer noopenner"
          className="exhibition_card"
          style={{ position: "relative", cursor: "pointer" }}
        >
          <img
            src="https://coin68.com/wp-content/uploads/2022/05/1_CFW38qhiW0sh9qowChL_CA.png"
            alt=""
            style={{
              width: "40vw",
              height: "50vh",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              color: "white",
              fontWeight: "bold",
              letterSpacing: "1px",
              background: "rgba(0,0,0,0.7)",
              padding: "5px",
            }}
          >
            <p>NEWS</p>
            <h2>
              Tài sản của top tỷ phú giàu nhất ngành crypto đã “bốc hơi” ra sao?
            </h2>
            <h3>12/05/2022</h3>
          </div>
        </a>

        <a
          href="https://coin68.com/bitcoin-giam-ve-muc-thap-nhat-17-thang/"
          target="_blank"
          rel="noreferrer noopener"
          className="exhibition_card"
          style={{ position: "relative", cursor: "pointer" }}
        >
          <img
            src="https://coin68.com/wp-content/uploads/2022/05/Market-12.5.22.jpg"
            alt=""
            style={{
              width: "40vw",
              height: "50vh",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              color: "white",
              fontWeight: "bold",
              letterSpacing: "1px",
              background: "rgba(0,0,0,0.7)",
              padding: "5px",
            }}
          >
            <p>HOT NEWS</p>
            <h2>
              Bitcoin giảm về mức thấp nhất 17 tháng, thị trường ngập tràn “màu
              đỏ”
            </h2>
            <h3>12/05/2022</h3>
          </div>
        </a>
        <a
          href="https://coin68.com/mot-so-cap-nhat-ve-tham-hoa-luna-ust/"
          target="_blank"
          rel="noreferrer noopener"
          className="exhibition_card"
          style={{ position: "relative", cursor: "pointer" }}
        >
          <img
            src="https://coin68.com/wp-content/uploads/2022/05/LUNA-12.5.22-1.jpg"
            alt=""
            style={{
              width: "40vw",
              height: "50vh",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              color: "white",
              fontWeight: "bold",
              letterSpacing: "1px",
              background: "rgba(0,0,0,0.7)",
              padding: "5px",
            }}
          >
            <p>UPDATE</p>
            <h2>Một số cập nhật về “thảm họa” LUNA – UST mới nhất</h2>
            <h3>12/05/2022</h3>
          </div>
        </a>
      </div>
    </Container>
  );
};

export default News;
