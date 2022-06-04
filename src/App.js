// import logo from './logo.svg';
import './App.css';
import { Route, Link} from 'react-router-dom'
import Home from './views/Home';
import Review from './views/Review';
import Test1 from './views/Test1';
import GitSearch from './views/GitSearch';
import TicTacToe from './views/TicTacToe';

function App() {
  return (
      <div className="App">
          <Link to='/'>首页</Link>|
          <Link to='/review'>复习</Link>|
          <Link to='/test1'>测试1</Link>|
          <Link to='/github-search'>GitHub搜索案例</Link>|
          <Link to='/tic-tac-toe'>井字棋</Link>
          {/* 如果不写exact，那么/review这些也包含了/，依旧会显示/的内容 */}
          <Route path='/' exact component={Home}></Route>
          <Route path='/review' component={Review}></Route>
          <Route path='/test1' component={Test1}></Route>
          <Route path='/github-search' component={GitSearch}></Route>
          <Route path='/tic-tac-toe' component={TicTacToe}></Route>
      </div>
  );
}

export default App;
