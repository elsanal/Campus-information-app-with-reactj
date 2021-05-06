import React, { useState, useEffect } from 'react'
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
    const [comment, setComment] = useState(null);
    const { t, i18n } = useTranslation();

    const enterName =(name)=>{setName(name)}
    const enterEmail =(email)=>{setEmail(email)}
    const enterComment =(comment)=>{setComment(comment)}

    const saveComment = ()=>{
        console.log(name)
        console.log(email)
        console.log(comment)
        const timestamp = Date.now().toString()
          if((name!==null)&&(email!==null)&&(comment!==null)){
              dataBase.collection('scholarship').doc(props.id)
              .collection('comments').add({
                  name: name,
                  email: email,
                  comment: comment,
                  time:timestamp
              });
          }
          setName(null)
          setEmail(null)
          setComment(null)
          reload(props.id)

    }
const reload = (id) =>{
    return(<Link to={{pathname:'/scholar/detail/'+id,}}/>)
}


    return (
        <div className='detail_comment'>
            <p className="detail_title2">{t('detail.comment')}</p>
            <input  onChange={(e)=>enterName(e.target.value)} 
            type="text" placeholder={t('detail.enter_name')} 
            className="input" required/>
            <input onChange={(e)=>enterEmail(e.target.value)} type="email" 
            placeholder={t('detail.enter_email')} className="input" required/>
            <textarea onChange={(e)=>enterComment(e.target.value)} 
            name="comment" id="" className="comment" placeholder={t('detail.enter_message')} 
            required></textarea>
            <button onClick={()=>saveComment()} type="submit" 
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
                time:doc.data().time,
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
                                <h5 className='name'>{item.name}</h5>
                            </div>
                            <h5 className='comment'>{item.comment}</h5>
                        </div>
                    )
                })
            } 
        </div>
    )

}



