import React from 'react';

const PrintBtn = (props) => {
  const { ticket } = props;
  return (
    <button className="btn" value={ticket} button>
      <div className="printarea">
        <p># БАНИ на Литейной</p>
        <p>Индивидуальная Баня</p>
        <p className="price">{ticket}</p>
        <p>т.0975831815</p>
        <p>т.0992157776</p>
        <p>ул.Первая Литейная 17</p>
      </div>
      {ticket} грн
    </button>
  );
};

export default PrintBtn;
