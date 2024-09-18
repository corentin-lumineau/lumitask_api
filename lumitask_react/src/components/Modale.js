import { useStore } from 'react-redux';
import { toggle } from '../features/modale';
import { modaleSlice } from '../features/modale';
import '../styles/components/Modale.css';

export default function Modale() {

    const store = useStore();

    const hideOverlay = () => {
        const overlay = document.getElementById('overlay');
        overlay.classList.add('overlay-hidden');
    }
    
    return(
        <div className='overlay' id="overlay" onClick={() =>{
            store.dispatch(modaleSlice.actions.toggle());
            hideOverlay();
        }}>
            <div className="modale">
                <p>coucou</p>
            </div>
        </div>

    )
}