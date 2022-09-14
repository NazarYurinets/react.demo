
import './App.css';
import SimpsonComponent from "./component/SimpsonComponent";


function App() {

  return (
      <div className="simpsons">
          <SimpsonComponent
          itemName={'Bart'}
          pic = "https://i.pinimg.com/originals/7e/56/46/7e564626fd81ea7f0580d59d16609ec5.png"/>
          <SimpsonComponent
              itemName={'Gomer'}
              pic = "data:image/png;base64,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"/>
          <SimpsonComponent
              itemName={'March'}
              pic = "data:image/png;base64,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"/>
          <SimpsonComponent
              itemName={'Lisa'}
              pic = "https://i.pinimg.com/474x/87/5c/fd/875cfd4fdddef41ecb0a6a9b11fab0b7--tv-moms-best-mother.jpg"/>
          <SimpsonComponent
              itemName={'Meggy'}
              pic = "https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png"/>

      </div>
  );
}
export default App