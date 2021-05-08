import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import './style.css'
import dataBase from '../../database'
import { useTranslation } from 'react-i18next';
import parse from "html-react-parser";
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Link } from 'react-router-dom';




export  function MakeComment(props) {

    console.log(props.id)
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [submit, setSubmit] = useState(false);
    const [comment, setComment] = useState(null);
    const { t, i18n } = useTranslation();

    const enterName =(name)=>{setName(name)}
    const enterEmail =(email)=>{setEmail(email)}
    const enterComment =(comment)=>{setComment(comment)}

    const saveComment = ()=>{
        const timestamp = Date.now().toString()
          if((name!==null)&&(email!==null)&&(comment!==null)){
            dataBase.collection('scholarship').doc(props.id)
            .collection('comments').add({
                name: name,
                email: email,
                comment: comment,
                time:timestamp
            });
            document.getElementById('textarea').value = '';
            document.getElementById('email').value = '';
            document.getElementById('name').value = '';

        }
    }
    
    return (
        <div className='detail_comment'>
            <p className="detail_title2">{t('detail.comment')}</p>
            <input  onChange={(e)=>enterName(e.target.value)} id='name'
            type="text" placeholder={t('detail.enter_name')} 
            className="input" required/>
            <input onChange={(e)=>enterEmail(e.target.value)} name="email" type="email" id='email'
            placeholder={t('detail.enter_email')} className="input" required/>
            <textarea onChange={(e)=>enterComment(e.target.value)} id="textarea"
            name="comment" className="comment" placeholder={t('detail.enter_message')} 
            required></textarea>
            <button onClick={()=>{saveComment()}} type="submit" 
            className="button">{t('detail.submit')}</button>
        </div>
    )
}





export  function ReadComment(props){
    const [comments, setComments] = useState([]);

    useEffect(() => {
        dataBase.collection("scholarship").doc(props.id)
          .collection('comments')
          .orderBy('time','asc')
          .onSnapshot((snapshot) =>
            setComments(
              snapshot.docs.map((doc) => ({
                name:doc.data().name,
                comment:doc.data().comment,
                date: new Date(doc.data().time*1).toLocaleDateString("fr-France"),
                time: new Date(doc.data().time*1).toLocaleTimeString("fr-France"),
              }))
            )
          );
      }, []);

    return(
        <div className='detail_comment'>
            {
                comments.map(function(item){
                    console.log(item.name)
                    return(
                        <div className='comment_section'>
                            <div className='comment_author'>
                                <AccountCircleIcon className='icon'/>
                                <div className='date_name'>
                                    <h5 className='username'>{item.name}</h5>
                                    <div className='date_time'>
                                        <span className='time'>{item.time}</span>
                                        <span className='date'> {item.date}</span>
                                    </div>
                                </div>
                                
                            </div>
                            <h5 className='comment'>{item.comment}</h5>
                        </div>
                    )
                })
            } 
        </div>
    )

}



