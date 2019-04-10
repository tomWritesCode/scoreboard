import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ScoreBoard = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: repeat(4, auto);
  font-family: sans-serif;

  .title{
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: center;
  }

  .name{
    font-size: 30px;
    grid-row-start: 1;
    grid-row-end: 2;
  }

	.team1, .team2 {
		grid-column-start: 0;
		width: 100%;
		text-align: center;
    grid-row-start: 2;

    .score{
      font-family: sans-serif;
      font-size: 100px;
      min-height: 150px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

		.scoreButtons {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 19.5%);
      grid-template-rows: repeat(3, 80px);
      grid-gap: 3px;
      margin: 0 auto;

      .scoreButton{
        padding: 0;
        grid-column-start: 2;
        grid-column-end: 5;
      }
		}
	}
`;

const ResetButton = styled.button`
  font-family: sans-serif;
  height: 40px;
  width: 120px;
  display: block;
  margin: 60px auto 0 auto;
`;

let TEAMONESCORE = 0;
let TEAMTWOSCORE = 0;

function teamOne3() {
  TEAMONESCORE = TEAMONESCORE + 3;
  document.getElementById('TeamOneScore').innerHTML = TEAMONESCORE;
}
function teamOne2() {
  TEAMONESCORE = TEAMONESCORE + 2;
  document.getElementById('TeamOneScore').innerHTML = TEAMONESCORE;
}
function teamOne1() {
  TEAMONESCORE = TEAMONESCORE + 1;
  document.getElementById('TeamOneScore').innerHTML = TEAMONESCORE;
}

function teamTwo3() {
  TEAMTWOSCORE = TEAMTWOSCORE + 3;
  document.getElementById('TeamTwoScore').innerHTML = TEAMTWOSCORE;
}
function teamTwo2() {
  TEAMTWOSCORE = TEAMTWOSCORE + 2;
  document.getElementById('TeamTwoScore').innerHTML = TEAMTWOSCORE;
}
function teamTwo1() {
  TEAMTWOSCORE = TEAMTWOSCORE + 1;
  document.getElementById('TeamTwoScore').innerHTML = TEAMTWOSCORE;
}

function scoreReset() {
  TEAMONESCORE = 0;
  document.getElementById('TeamOneScore').innerHTML = TEAMONESCORE;
  TEAMTWOSCORE = 0;
  document.getElementById('TeamTwoScore').innerHTML = TEAMTWOSCORE;
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ScoreBoard>
      <div className="team1">
        <h3 className="name">Player 1</h3>
        <h2 className="score" id="TeamOneScore"> {TEAMONESCORE} </h2>

        <div className="scoreButtons">
          <button className="scoreButton" onClick={teamOne3}>3</button>
          <button className="scoreButton" onClick={teamOne2}>2</button>
          <button className="scoreButton" onClick={teamOne1}>1</button>
        </div>
      </div>

      <div className="team2">
        <h3 className="name">Player 2</h3>
        <h2 className="score" id="TeamTwoScore"> {TEAMTWOSCORE} </h2>

        <div className="scoreButtons">
          <button className="scoreButton" onClick={teamTwo3}>3</button>
          <button className="scoreButton" onClick={teamTwo2}>2</button>
          <button className="scoreButton" onClick={teamTwo1}>1</button>
        </div>
      </div>
    </ScoreBoard>

    <ResetButton onClick={scoreReset}>Reset</ResetButton>
  </Layout>
)

export default IndexPage
