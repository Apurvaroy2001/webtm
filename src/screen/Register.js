import { useState } from 'react';
import axios from 'axios';
import './register.css'

const Register = () => {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    // const [age, setAge] = useState('');
    // const [occupation, setOccupation] = useState('');
    const [userId, setUserId] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const name = fname + ' ' + lname;
            const apiUrl = 'https://smartappsplanet.com/test-api/api/register';
            const response = await axios.post(apiUrl, {
                name,
                email,
                age:'22',
                designation:'designation'
                // age,
                // designation: occupation
            });
            
            console.log(response.data);
            if (response.data.message === "Successfully Registered") {
                setUserId(response.data.data.user_id); // Set the user_id in state
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            {userId ? (
                <div style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <h2 style={{ color: 'green', textAlign: 'center' }}>You have successfully created an account</h2>
                    <h3 style={{ textAlign: 'center' }}>Your User Pin is: {userId}</h3>
                </div>
            ) : (
                <form className="form" onSubmit={handleSubmit}>
                    <h1 style={{ textAlign: 'center', fontSize: 26, marginBottom: 30 }}>Create New Account</h1>
                    <div className="input-group">
                        <label>First Name:</label>
                        <input type="text" value={fname} onChange={(e) => setFName(e.target.value)} />
                    </div>

                    <div className="input-group">
                        <label>Last Name:</label>
                        <input type="text" value={lname} onChange={(e) => setLName(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {/* <div className="input-group">
                        <label>Age:</label>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                    </div> */}
                    {/* <div className="input-group">
                        <label>Occupation:</label>
                        <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
                    </div> */}
                    <button className="button" type="submit">Sign Up</button>
                </form>
            )}
        </div>
    );
};

export default Register;
