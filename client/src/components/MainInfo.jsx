import React, { useState } from 'react';
import {
  Card, CardBody, CardLink,
  CardTitle, CardSubtitle,
} from 'reactstrap';

const MainInfo = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data } = props;
  console.log('this is props in maininfo: ', props);
  return (
    <div>
      <div>{data[1] ? `${data[0]}: ${data[1]}` : `${data[0]}`}</div>
      <div>{`by ${data[2]}`}</div>
      <img width="10%" src={data[3]} alt="Book cover image" />
    </div>
  );
};

export default MainInfo;
