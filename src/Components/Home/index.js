import React from "react";
import { connect } from "react-redux";
import Cards from "../Cards";

const Home = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {props.getUsersData.length &&
          props.getUsersData.map((item) => <Cards item={item} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  getUsersData: store.userData,
});
export default connect(mapStateToProps, null)(Home);
