import React from 'react';

const CityAddress = ({ ico, street, city, phone }) => {
  return (
    <div className="box-city">
      <div className="city-img">
        <span className={`ico ${ico}`}  />
      </div>
      <div className="address">
        <p>{street}</p>
        <p>{city}</p>
        <p>tel.: {phone}</p>
      </div>
    </div>
  );
}

export default CityAddress;
