import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "./Homepage.css"
import { userActions } from '../_actions';
import CustomButton from '../components/custom-button/custom-button.component';

function HomePage() {
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    return (
        <div className="homepage">
             <h1>Welcome {user?.firstName}!</h1>
            <br/>
            <h3>Hey there, Jayanth Kumar Here</h3>
            <br/>
            {
                !{user} ? <Link to="/login"><CustomButton>Logout</CustomButton></Link> : <Link to="/login"><CustomButton>Login</CustomButton></Link>
            }
            
        </div>
    );
}

export { HomePage };