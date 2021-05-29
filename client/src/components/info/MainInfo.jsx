import React from 'react';

const MainInfo = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data } = props;
  return (
    <div>
      <div>{data[1] ? `${data[0]}: ${data[1]}` : `${data[0]}`}</div>
      <div>{`by ${data[2]}`}</div>
      <img width="10%" src={data[3]} alt="Book cover image" />
    </div>
  );
};

export default MainInfo;
