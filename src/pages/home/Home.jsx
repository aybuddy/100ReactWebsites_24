import React from "react";
import Layout from "../../components/layout/Layout";
import "./Home.css";
import image from "../../assets/images/saahil-khatkhate-kfDsMDyX1K0-unsplash.jpg";

const Home = ({ data }) => {
  return (
    <>
      <div className="full-container">
        <h1 className="text">Giorno</h1>
      </div>

      <Layout>
        <div className="con-v">
          <div className="con382-vert">
            <h1>Welcome to Giorno</h1>
          </div>
          <div className="con618-vert">
            <img src={image} alt="" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
