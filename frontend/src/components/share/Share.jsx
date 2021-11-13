import React from 'react'
import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

export default function Share() {
    const { user } = useContext(AuthContext)
    const description = useRef()
    const [file, setFile] = useState()

    const uploadFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const post = {
                userId: user._id,
                description: description
            }
            await axios.post('http://localhost:8800/api/posts')
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture} alt="" className="shareProfileImg" />
                    <input placeholder={`Say Something ${user.username}`} ref={description} className="shareInput" />
                </div>
                <hr className="shareHr" />
                <form className="shareBottom" onSubmit={handleSubmit}>
                    <div className="shareOptions">
                        <label htmlFor='file' className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon' />
                            <span className='ShareOptionText'>Media</span>
                            <input style={{ display: 'none' }} type='file' id='file' accept='.png,.jpeg,.jpg' onChange={uploadFile} />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor='green' className='shareIcon' />
                            <span className='ShareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='blue' className='shareIcon' />
                            <span className='ShareOptionText'>Room</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='orange' className='shareIcon' />
                            <span className='ShareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </form>
            </div>
        </div>
    )
}
