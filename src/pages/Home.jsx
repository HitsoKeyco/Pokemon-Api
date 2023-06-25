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
            <img className='rayquaza' src="rayquaza.png" alt="" />
            <img className='img_top' src="image 11.svg" alt="" />            
            
            <form onSubmit={handleSubmit} className='form'>
                <div className="elements_form">
                <input ref={trainerNameRef} type="text" placeholder='Your name'/>
                <button>Catch them all!</button>
                </div>
            </form>
            
        </div>
    );
};

export default Home;
