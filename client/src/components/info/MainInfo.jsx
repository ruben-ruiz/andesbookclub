import React from 'react';

const MainInfo = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data } = props;
  return (
    <div className="info-outer-container">

      <div className="main-info">
        <div className="main-info-vert">
          <h2>{data[1] ? `${data[0]}: ${data[1]}` : `${data[0]}`}</h2>
          <div>{`by ${data[2]}`}</div>
        </div>
        <img width="40%" src={data[3]} alt="Book cover image" />
      </div>

    </div>
  );
};

export default MainInfo;
