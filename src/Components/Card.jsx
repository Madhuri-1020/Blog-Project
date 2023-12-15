import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card() {
  const toastButton = () => {
    toast('rendered');
  }

  return (
    <div>
      <ToastContainer />
      <button onClick={toastButton}>click</button>
    </div>
  );
}

export default Card;
