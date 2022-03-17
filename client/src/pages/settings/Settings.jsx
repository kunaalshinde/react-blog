import React, { useState } from 'react'
import '../../index.scss'
import profile from '../../images/admin2.png'
import { useSelector } from 'react-redux';
import store from '../../store/store';
import axios from 'axios'; 

export default function Settings() {
    const user = useSelector(state => state.login.user);
    const [username, setUsername] = useState(user.username);
    const [fullname, setFullname] = useState(user.fullname);
    const [profileURL, setProfileURL] = useState(user.profilePic);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.email);

    const handleUpdate = async (event) => {
        event.preventDefault();
        const newUser = {
            userId: user._id,
            username, fullname, email, password, profilePic: profileURL,
        }
        try {
            const res = await axios.put(`/user/${user._id}`, newUser);
            console.log(res);
        }
        catch(err) {
            console.log(err);
        }
    }

    console.log(user)
    console.log(store.getState().login.user)

    return (
    <div className='settings'>
        <div className="settings-wrapper">
            <div className="settings-title">
                <span className="settings-update-title"><b>Update Your Account</b></span>
            </div>
            <i 
                className="settings-delete-title fa-solid fa-trash-can" 
                // onClick={handleDelete}
            ></i>
            <form className="settings-form" onSubmit={handleUpdate}>
                <div className="settings-inn">
                    <div className="settingsPP">
                        <img src={user.profilePic ? user.profilePic : profile} alt="" />
                    </div>
                    <input 
                        type="email"
                        className='settings-input'
                        placeholder={user.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                        type="text" 
                        className="settings-input" 
                        placeholder={user.fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />

                    <input 
                        type="text" 
                        className="settings-input" 
                        placeholder='Profile Image URL'
                        onChange={(e) => setProfileURL(e.target.value)}
                    />

                    <input 
                        type="text" 
                        className='settings-input'
                        placeholder={user.username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input 
                        type="password" 
                        className='settings-input'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit' className='settings-submit'>Update</button>
                </div>
            </form>
        </div>  
    </div>
  )
}
