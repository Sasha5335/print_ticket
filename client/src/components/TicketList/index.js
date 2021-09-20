import React, { Component } from 'react';
import axios from 'axios';

class TicketList extends Component {
  state = {
    price: '555',
    count: '',
  };

  changeHandler = (data) => {
    const ticket = data.target.value;
    this.setState({
      price: ticket,
    });
    setTimeout(() => {
      this.addTicket();
      this.printData(data);
    }, 100);
  };

  addTicket = () => {
    console.log(this.state.price);
    axios
      .post('http://localhost:5000/api/ticket', this.state)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  printData = (data) => {
    const content = data.target.firstChild;
    const date = new Date().toLocaleString();

    let htmlToPrint = `<style>
        body{font-size:25px; font-family:'Open Sans', sans-serif; //text-align:center; padding:3px;}
        .price{font-size:50px; font-weight:bold; padding-left:90px;}
      </style>`;

    htmlToPrint = htmlToPrint + content.outerHTML + date;
    htmlToPrint += '<br>';
    htmlToPrint += '<br>';
    htmlToPrint += '<br>';
    htmlToPrint += '<br>';
    const newWin = window.open('');
    newWin.document.write(htmlToPrint);
    newWin.print();
    newWin.close();
  };

  render() {
    return (
      <div className="container">
        <div className="ticket">
          <div className="ticket-left">
            <h1>Номера</h1>
            <div className="tuesday-thursday">
              <h3>Вторник, Четверг</h3>

              <button className="btn" value="270" onClick={this.changeHandler}>
                <div className="printarea">
                  <p># БАНИ на Литейной</p>
                  <p>Индивидуальная Баня</p>
                  <p className="price">270</p>
                  <p>т.0975831815</p>
                  <p>т.0992157776</p>
                  <p>ул.Первая Литейная 17</p>
                </div>
                270 грн
              </button>

              <button className="btn" value="500" onClick={this.changeHandler}>
                <div className="printarea">
                  <p># БАНИ на Литейной</p>
                  <p>Индивидуальная Баня</p>
                  <p className="price">500</p>
                  <p>т.0975831815</p>
                  <p>т.0992157776</p>
                  <p>ул.Первая Литейная 17</p>
                </div>
                500 грн
              </button>

              <button className="btn" value="600" onClick={this.changeHandler}>
                <div className="printarea">
                  <p># БАНИ на Литейной</p>
                  <p>Индивидуальная Баня</p>
                  <p className="price">600</p>
                  <p>т.0975831815</p>
                  <p>т.0992157776</p>
                  <p>ул.Первая Литейная 17</p>
                </div>
                600 грн
              </button>
            </div>
            <hr />
            <div className="friday-sunday">
              <h3>Пятница - Воскресенье</h3>

              <button className="btn" value="270" onClick={this.changeHandler}>
                <div className="printarea">
                  <p># БАНИ на Литейной</p>
                  <p>Индивидуальная Баня</p>
                  <p className="price">270</p>
                  <p>т.0975831815</p>
                  <p>т.0992157776</p>
                  <p>ул.Первая Литейная 17</p>
                </div>
                270 грн
              </button>

              <button className="btn" value="540" onClick={this.changeHandler}>
                <div className="printarea">
                  <p># БАНИ на Литейной</p>
                  <p>Индивидуальная Баня</p>
                  <p className="price">540</p>
                  <p>т.0975831815</p>
                  <p>т.0992157776</p>
                  <p>ул.Первая Литейная 17</p>
                </div>
                540 грн
              </button>

              <button className="btn" value="650" onClick={this.changeHandler}>
                <div className="printarea">
                  <p># БАНИ на Литейной</p>
                  <p>Индивидуальная Баня</p>
                  <p className="price">650</p>
                  <p>т.0975831815</p>
                  <p>т.0992157776</p>
                  <p>ул.Первая Литейная 17</p>
                </div>
                650 грн
              </button>
            </div>
            <hr />
            <div className="surcharge">
              <button className="btn" value="100" onClick={this.changeHandler}>
                <div className="printarea">
                  <p># БАНИ на Литейной</p>
                  <p>Индивидуальная Баня(доплата)</p>
                  <p className="price">100</p>
                  <p>т.0975831815</p>
                  <p>т.0992157776</p>
                  <p>ул.Первая Литейная 17</p>
                </div>
                Доплата 100 грн
              </button>
            </div>
          </div>

          <div className="ticket-right">
            <h1>Общая</h1>

            <div className="ticket-men-women">
              <div className="men">
                <h3>Мужской день</h3>

                <div className="men-tuesday-thursday">
                  <h3>Ворник, Четверг</h3>
                  <button
                    className="btn"
                    value="140"
                    onClick={this.changeHandler}
                  >
                    <div className="printarea">
                      <p># БАНИ на Литейной</p>
                      <p>Общее отделение</p>
                      <p className="price">140</p>
                      <p>т.0975831815</p>
                      <p>т.0992157776</p>
                      <p>ул.Первая Литейная 17</p>
                    </div>
                    140 грн
                  </button>
                </div>

                <hr />

                <div className="men-saturday-sunday">
                  <h3>Субота, Воскресенье</h3>
                  <button
                    className="btn"
                    value="170"
                    onClick={this.changeHandler}
                  >
                    <div className="printarea">
                      <p># БАНИ на Литейной</p>
                      <p>Общее отделение</p>
                      <p className="price">170</p>
                      <p>т.0975831815</p>
                      <p>т.0992157776</p>
                      <p>ул.Первая Литейная 17</p>
                    </div>
                    170 грн
                  </button>
                </div>
                <hr />
              </div>

              <div className="women">
                <h3>Женский день</h3>

                <div className="women-friday">
                  <h3>Пятница</h3>
                  <button
                    className="btn"
                    value="140"
                    onClick={this.changeHandler}
                  >
                    <div className="printarea">
                      <p># БАНИ на Литейной</p>
                      <p>Общее отделение</p>
                      <p className="price">140</p>
                      <p>т.0975831815</p>
                      <p>т.0992157776</p>
                      <p>ул.Первая Литейная 17</p>
                    </div>
                    140 грн
                  </button>
                </div>
                <hr />
              </div>
            </div>

            <div className="shower">
              <button className="btn" value="80" onClick={this.changeHandler}>
                <div className="printarea">
                  <p># БАНИ на Литейной</p>
                  <p>Душ</p>
                  <p className="price">80</p>
                  <p>т.0975831815</p>
                  <p>т.0992157776</p>
                  <p>ул.Первая Литейная 17</p>
                </div>
                Душ 80 грн
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TicketList;
