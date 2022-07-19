import React from "react";

//import components
import styled from "styled-components";
import Arrow from "../img/Arrow.svg";
import Arrow2 from "../img/Arrow2.svg";
import Arrow3 from "../img/Arrow-right.svg";
import Image1 from "../img/Rectangle-45.png";
import Image2 from "../img/Rectangle-46.png";
import Image3 from "../img/Rectangle-47.png";

const PrinciplesContainer = styled.section`
  padding: 70px;
  @media Screen and (max-width: 1200px) {
    padding: 20px;
  }
`;
const PrincipleContent = styled.div`
  padding: 20px 70px;
  @media Screen and (max-width: 480px) {
    padding: 20px 40px;
  }
  .Principle {
    display: flex;
    padding-bottom: 20px;
  }
  .prince {
    color: #ff9f0d;
    font-family: Share Tech;
    font-size: 1rem;
  }
  h1 {
    color: #143a5a;
    font-family: Inter, sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
  }
`;
const PrincipleContent1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 20px 70px;
  @media Screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    padding: 20px 100px;
  }
  @media Screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    padding: 20px 70px;
  }
  @media Screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    padding: 20px 40px;
  }
`;
const PrinciplePage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .page {
    font-family: Laila, sans-serif;
    font-size: 1.8rem;
  }
  div {
    display: flex;
    justify-content: right;
  }
  button {
    background-color: #143a5a;
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 30px;
    width: 30px;
    color: #fff;
  }
  .btn {
    background-color: transparent;
    border: 1px solid #143a5a;
    border-radius: 0px 10px 8px 10px;
    height: 30px;
    width: 30px;
    color: #fff;
  }
`;
const PrincipleImg = styled.img`
  width: 100%;
  height: 30vh;
  @media Screen and (max-width: 1200px) {
    height: 50vh;
    width: 50%;
    display: flex;
    justify-content: center;
  }
  @media Screen and (max-width: 768px) {
    height: 30vh;
    width: 100%;
  }
  @media Screen and (max-width: 480px) {
    height: 30vh;
    width: 100%;
  }
`;
const PrincipleH = styled.div`
  color: #143a5a;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.46rem;
  padding: 20px 0px;
  @media Screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Principleh2 = styled.div`
  color: #143a5a;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 200%;
  p {
    color: orange;
  }
  @media Screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Principles = () => {
  return (
    <PrinciplesContainer>
      <PrincipleContent>
        <div className="Principle">
          <h1 className="prince">Principles</h1>
          <img src={Arrow} alt="" />
        </div>
        <PrinciplePage>
          <h1 className="page">Guiding Principles</h1>
          <div>
            <button>
              <img src={Arrow2} alt="" />
            </button>
            <button className="btn">
              <img src={Arrow3} alt="" />
            </button>
          </div>
        </PrinciplePage>
      </PrincipleContent>
      <PrincipleContent1>
        <div>
          <PrincipleImg src={Image1} alt="" />
          <PrincipleH>Principle 1 – Building Community Capacity </PrincipleH>
          <Principleh2>
            By working in partnership with local organizations throughout the
            communities where Rescue for Christ Foundation serves and beyond,
            the Foundation will seek to actively <p>Learn more...</p>
          </Principleh2>
        </div>
        <div>
          <PrincipleImg src={Image2} alt="" />
          <PrincipleH>
            Principle 2 – Understanding the Changing Nature of our Communities
          </PrincipleH>
          <Principleh2>
            To be strategic in all our activities, we need to know our
            communities well. This involves spending time in community
            consultation <p>Learn more...</p>
          </Principleh2>
        </div>
        <div>
          <PrincipleImg src={Image3} alt="" />
          <PrincipleH>
            Principle 3 – Creating Opportunities for Dialogue
          </PrincipleH>
          <Principleh2>
            Because of our broad mandate to nurture a vital community, we may
            engage people with different ideas and points of view
            <p>Learn more...</p>
          </Principleh2>
        </div>
      </PrincipleContent1>
    </PrinciplesContainer>
  );
};

export default Principles;
