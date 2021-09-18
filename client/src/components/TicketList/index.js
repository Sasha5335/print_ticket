import React, { Component } from 'react';
import PrintBtn from './PrintBtn';

class TicketList extends Component {
  state = {
    ticket_80: '80',
    ticket_100: '100',
    ticket_140: '140',
    ticket_170: '170',
    ticket_270: '270',
    ticket_500: '500',
    ticket_540: '540',
    ticket_600: '600',
    ticket_650: '650',
  };
  selectBtn = () => {
    // this.forEach((selectTicket) => {
    //   selectTicket.addEventListener('click', () => {
    //     const divToPrint = selectTicket.childNodes[1];
    //     const date = new Date().toLocaleString();
    //     let htmlToPrint = `<style>
    //     body{
    //       font-size: 25px;
    //        font-family: 'Open Sans', sans-serif;
    //       //  text-align:center;
    //       padding: 3px;
    //       }
    //       .price{
    //           font-size: 50px;
    //           font-weight: bold;
    //           padding-left: 90px;
    //         }
    //       </style>`;
    //     htmlToPrint = htmlToPrint + divToPrint.outerHTML + date;
    //     htmlToPrint += '<br>';
    //     htmlToPrint += '<br>';
    //     htmlToPrint += '<br>';
    //     htmlToPrint += '<br>';
    //     // newWin = window.open('');
    //     // newWin.document.write(htmlToPrint);
    //     // newWin.print();
    //     // newWin.close();
    //   });
    // });
  };

  render() {
    const {
      ticket_80,
      ticket_100,
      ticket_140,
      ticket_170,
      ticket_270,
      ticket_500,
      ticket_540,
      ticket_600,
      ticket_650,
    } = this.state;

    return (
      <div className="container">
        <div className="ticket">
          <div className="ticket-left">
            <h1>Номера</h1>
            <div className="tuesday-thursday">
              <h3>Вторник, Четверг</h3>

              <PrintBtn ticket={ticket_270} />
              <PrintBtn ticket={ticket_500} />
              <PrintBtn ticket={ticket_600} />
            </div>

            <hr />

            <div className="friday-sunday">
              <h3>Пятница - Воскресенье</h3>

              <PrintBtn ticket={ticket_270} />
              <PrintBtn ticket={ticket_540} />
              <PrintBtn ticket={ticket_650} />
            </div>

            <hr />

            <div className="surcharge">
              <PrintBtn ticket={ticket_100} />
            </div>
          </div>

          <div className="ticket-right">
            <h1>Общая</h1>

            <div className="ticket-men-women">
              <div className="men">
                <h3>Мужской день</h3>

                <div className="men-tuesday-thursday">
                  <h3>Ворник, Четверг</h3>

                  <PrintBtn ticket={ticket_140} />
                </div>

                <hr />

                <div className="men-saturday-sunday">
                  <h3>Субота, Воскресенье</h3>

                  <PrintBtn ticket={ticket_170} />
                </div>

                <hr />
              </div>

              <div className="women">
                <h3>Женский день</h3>

                <div className="women-friday">
                  <h3>Пятница</h3>

                  <PrintBtn ticket={ticket_140} />
                </div>

                <hr />
              </div>
            </div>

            <div className="shower">
              <PrintBtn ticket={ticket_80} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TicketList;
