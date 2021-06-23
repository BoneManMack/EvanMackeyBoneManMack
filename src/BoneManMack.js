import './BoneManMack.css';

import BMMheader from './components/header/bmmheader';
import BMMmaindisplay from './components/maindisplay/bmmmaindisplay';

function BoneManMack() {
  return (
    <div className="App">
      <BMMheader />
      <BMMmaindisplay />
    </div>
  );
}

export default BoneManMack;
