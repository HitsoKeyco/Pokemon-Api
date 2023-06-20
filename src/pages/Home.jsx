import { useRef } from 'react';
import { setTrainerNameG } from '../store/slices/trainerName.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';

const Home = () => {
    const trainerNameRef = useRef();
    const navigate = useNavigate();
    
    const { trainerName } = useSelector(states => states.trainerName)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();        
        dispatch(setTrainerNameG(trainerNameRef.current.value.trim()));
        navigate('/pokedex');
    };
    

    
    return (
        <div className='home_container'>
            <img className='img_top' src="image 11.svg" alt="" />            
            <p className='welcome'><span className='hello_trainer'>¡Hello trainer!</span><br></br>To start in this application, please give me your trainer name.</p>
            <form onSubmit={handleSubmit} className='form'>
                <div className="elements_form">
                <input ref={trainerNameRef} type="text" placeholder='Your name'/>
                <button>Catch them all!</button>
                </div>
            </form>
            <img className='img_bottom' src="Group 216.svg" alt="" />
        </div>
    );
};

export default Home;
