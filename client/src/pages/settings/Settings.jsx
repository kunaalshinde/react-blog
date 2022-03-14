import React from 'react'
import '../../index.scss'
import profile from '../../images/admin.png'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settings-wrapper">
            <div className="settings-title">
                <span className="settings-update-title">Update Your Account</span>
                <span className="settings-delete-title">Delete Your Account</span>
            </div>
            <form className="settings-form">
                <label htmlFor="profile">Profile Picture</label>
                <div className="settingsPP">
                    <img src={profile} alt="" />
                    <label htmlFor="file-input">
                        <i className="settings-icon fa-solid fa-user-large"></i>
                    </label>
                    <input type="file" id='file-input' style={{display: "none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='Alex' />
                <label>Email</label>
                <input type="email" placeholder='alex@gmail.com' />
                <label>Password</label>
                <input type="password" placeholder='********' />
                <button className='settings-submit'>Update</button>
            </form>
        </div>  
    </div>
  )
}
