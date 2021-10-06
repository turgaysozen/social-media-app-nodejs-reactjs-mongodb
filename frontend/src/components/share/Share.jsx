import React from 'react'
import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'

export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                    <input placeholder='Say Something..' className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon' />
                            <span className='ShareOptionText'>Media</span>
                        </div>
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
                </div>
            </div>
        </div>
    )
}
