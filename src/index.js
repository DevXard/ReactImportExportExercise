import ReactDOM from 'react-dom';
import fruits from './foods'
import {choice, remove} from './helpers'

const App = () => {
  let randFruit = choice(fruits)
  return (
    <>
      <p>I would like a {randFruit} please</p>
      <p>here you go {randFruit}</p>
      <p>Delecios! May i have another?</p>
      <p>i'm sorry we're all out. {remove(fruits, randFruit)}</p> 
      <p>We have {fruits.length} left</p>
      <p>these are awer fruits {fruits.map((f, i) => <span key={i}>{f}</span>)}</p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root')
);

