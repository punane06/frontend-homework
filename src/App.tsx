import './stylesheets/index.scss'

import DropdownLink from './DropdownLink'
import { closeMenuAction } from './actions';
import { useDispatch } from 'react-redux';


const App = () => {
  const dispatch = useDispatch();
  return(
  <nav className="nav" onClick={() => dispatch(closeMenuAction())}>
    <DropdownLink />
  </nav>)
}

export default App
