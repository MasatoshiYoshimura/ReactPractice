import React from 'react';

// Alert Component
const AlertA = (props) => (
  <div className={'alert ' + props.alertColor} role="alert">
    {props.alertMessage}
  </div>
);

// Button Components
const ButtonA = (props) => (
  <a href="" className={'btn ' + props.btnColor} onClick={props.onClick}>{props.text}</a>
);

// Card Components
const CardA = (props) => (
  <div className="col-4">
    <div className="card mx-1">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
        <p className="card-text">{props.content}</p>
        <ButtonA
          text="Go somewhere"
          btnColor="btn-primary"
          onClick={props.onClick}
        />
      </div>
    </div>
  </div>
);

const CardB = (props) => (
  <div className={'card mb-3 ' + props.bgColor}>
    <div className="card-header">{props.header}</div>
    <div className='card-body text-white'>
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
    </div>
  </div>
);

// 4.Components and Props
// TODO: サーバーからプロパティーを取得する
// TODO: 6.Handling Events
class SectionA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowA: false,
      isShowB: false,
      isShowC: false
    };
    this.showAlertA = this.showAlertA.bind(this);
    this.showAlertB = this.showAlertB.bind(this);
    this.showAlertC = this.showAlertC.bind(this);
  }

  showAlertA(e) {
    e.preventDefault();
    this.setState(state => ({
      isShowA: !state.isShowA
    }));
  }

  showAlertB(e) {
    e.preventDefault();
    this.setState(state => ({
      isShowB: !state.isShowB
    }));
  }

  showAlertC(e) {
    e.preventDefault();
    this.setState(state => ({
      isShowC: !state.isShowC
    }));
  }

  render() {
    return (
      <div className="my-5">
        {this.state.isShowA &&
          <AlertA
            alertMessage="A simple primary alert—check it out!"
            alertColor="alert-primary"
          />
        }
        {this.state.isShowB &&
          <AlertA
            alertMessage="A simple primary alert—check it out!"
            alertColor="alert-secondary"
          />
        }
        {this.state.isShowC &&
          <AlertA
            alertMessage="A simple success alert—check it out!"
            alertColor="alert-success"
          />
        }
        <div className="row">
          <CardA
            title="Card title 1"
            subtitle="Card subtitle 1"
            content="Some quick example text to build on the card title and make up the bulk of the card's content 1."
            onClick={this.showAlertA}
          />
          <CardA
            title="Card title 2"
            subtitle="Card subtitle 2"
            content="Some quick example text to build on the card title and make up the bulk of the card's content 2."
            onClick={this.showAlertB}
          />
          <CardA
            title="Card title 3"
            subtitle="Card subtitle 3"
            content="Some quick example text to build on the card title and make up the bulk of the card's content 2."
            onClick={this.showAlertC}
          />
        </div>
      </div>
    );
  }
};

class ListA extends React.Component {
  constructor(props) {
    super(props);
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    const value = e.target.id;
    return this.props.onClick(value);
  };
  render() {
    const listA = this.props.items.map((item) =>
      <li
        className="list-group-item"
        key={item.id}
        id={item.id}
        onClick={this.clickEvent}
      >
        {item.content}
      </li>
    );
    return (
      <ul className="list-group list-group-flush">{listA}</ul>
    );
  };
};

// 08.List&keys
// TODO: サーバーから非同期で取得する -> サーバーのDBから非同期で取得
class SectionB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowCardB: false,
      itemsId: ''
    };
    this.items = [
      { id: 1, content: 'Cras justo odio' },
      { id: 2, content: 'Dapibus ac facilisis in' },
      { id: 3, content: 'Morbi leo risus' },
      { id: 4, content: 'Vestibulum at eros' }
    ];
    this.showCard = this.showCard.bind(this);
  }
  showCard(value) {
    this.setState((state) => ({
      isShowCardB: true,
      itemsId: value
    }));
  };

  render() {
    // renderingする時の定数はrender()の中で定義する
    let cardB;
    if (this.state.itemsId === '1') {
      cardB =
        <CardB
          header="Header"
          title="Primary card title"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          bgColor="bg-primary"
        />;
    } else if (this.state.itemsId === '2') {
      cardB =
        <CardB
          header="Header"
          title="Primary card title"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          bgColor="bg-secondary"
        />;
    } else if (this.state.itemsId === '3') {
      cardB =
        <CardB
          header="Header"
          title="Primary card title"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          bgColor="bg-success"
        />;
    } else if (this.state.itemsId === '4') {
      cardB =
        <CardB
          header="Header"
          title="Primary card title"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          bgColor="bg-danger"
        />;
    };

    return (
      <div className="row">
        <div className="col-6">
          <ListA
            items={this.items}
            onClick={this.showCard}
          />
        </div>
        {this.state.isShowCardB &&
          <div className="col-6">
            {cardB}
          </div>
        }
      </div>
    );
  }
};

const myapp = () => (
  <div>
    <SectionA />
    <SectionB />
  </div>
);

// TODO: 5.State and Lifecycle

export default myapp;
