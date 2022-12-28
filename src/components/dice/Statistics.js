import React, { useState } from "react";

const Statistics = (props) => {
  return (
    <>
      <table>
        <tr>
          <th></th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
        </tr>
        <tr>
          <td>#</td>
          <td>{props.one}</td>
          <td>{props.two}</td>
          <td>{props.three}</td>
          <td>{props.four}</td>
          <td>{props.five}</td>
          <td>{props.six}</td>
        </tr>
        <tr>
          <td>%</td>
          <td>{props.oneP}</td>
          <td>{props.twoP}</td>
          <td>{props.threeP}</td>
          <td>{props.fourP}</td>
          <td>{props.fiveP}</td>
          <td>{props.sixP}</td>
        </tr>
      </table>
    </>
  );
};

export default Statistics;
