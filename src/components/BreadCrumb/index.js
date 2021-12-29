import React from "react";
import { Like, Link } from "react-router-dom";
// Styles
import { Wrapper, Content } from "./BreadCrumb.styles";

const BreadCrumb = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <sapn>{movieTitle}</sapn>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
