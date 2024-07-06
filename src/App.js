import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={() => {
        let a = 50
        while (a < 100) {

          console.log(`${a} is smaller than 100`);
          a++
        }
      }}>while loop</button>

      <button onClick={() => {
        let a = 100;
        do {
          console.log(`${a} is smaller than 200`);
          a++
        }
        while (a < 200);

      }}>dowhile loop</button>

      <button onClick={() => {
        for (let i =501; i<=1000; i++) {
          console.log(i);
          if(i==700){break};
        }
      }}>for loop</button>

      <button onClick={() => {
        for (let i = 1; i <= 1000; i++) {
          //console.log(`i--->${i}`);
          if (i == 97 ||i==158 ||i==321 ||i==594 ||i==673 ||i==767 ||i==893) {
            continue
          }
          // if (i == 158) {
          //   continue
          // }
          // if (i == 321) {
          //   continue
          // }
          // if (i == 594) {
          //   continue
          // }
          // if (i == 673) {
          //   continue
          // }
          // if (i == 767) {
          //   continue
          // }
          // if (i == 893) {
          //   continue
          // }
          for (let j=1; j<=20; j++) {
            console.log(`${i}*${j} = ${i * j}`);
          }
        }
      }}>Nested loop</button>

      <button onClick={()=>{
        for (let i=1; i<=100; i++){

          if (i ==55 ||i ==56 ||i ==57 ||i ==58 ||i ==74 ||i ==13
             ||i ==21 ||i ==93 ||i ==89 ) {
            continue
          }
          // if (i == 56) {
          //   continue
          // }
          // if (i == 57) {
          //   continue
          // }
          // if (i == 58) {
          //   continue
          // }
          // if (i == 74) {
          //   continue
          // }
          // if (i == 13) {
          //   continue
          // }
          // if (i == 21) {
          //   continue
          // }
          // if (i == 93) {
          //   continue
          // }
          // if (i == 89) {
          //   continue
          // }
          for(let j=1; j<=100; j++){
            console.log(`${i}*${j} = ${i * j}`);
          }
        }
      }}>multiple</button>

    </div>
  );
}

export default App;
