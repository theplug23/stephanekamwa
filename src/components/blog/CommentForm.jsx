import React, { useEffect, useState } from 'react';
import {dsnCN} from "../../hooks/helper";
import './style.scss'
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { dateParserTime } from '../../utils';


function CommentForm({className, idPost }) {
    const [form, setForm] = useState({})
    const {t} = useTranslation("common")
    const [comments, setComments] = useState([])

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setForm({...form, [name]: value})
    }

    useEffect(() => {
        getComments()
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        toast.success('Commentaire envoyé !')
        form.post_id = parseInt(idPost)
        axios.post('https://api.comtheplug.com/api/add-comment', form)
        .then((res) => {
            setForm({
                name: '',
                email: '',
                content: ''
            })
            toast.success(res.data.message)
            getComments()
        })
    }
    
    function getComments() {
        axios.get('https://api.comtheplug.com/api/comments/' + idPost)
        .then((res) => setComments(res.data))
    }

    return (
        <div className={dsnCN('form-box', className)}>
            <ToastContainer />

            <div className="comments">
                <h4 className="mb-30">{t("Commentaires")}</h4>
                <div className="input__wrap controls">
                    {comments &&
                        comments.map((comment, index) => (
                            <div className="form-group" key={index}>
                                <label>{comment.name}</label>
                                <p>{comment.content}</p>
                                <label>{dateParserTime(comment.created_at)}</label>
                                <p>{comment.email !== '' && comment.email}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <h4 className="mb-30">{t("Ajouter un commentaire")}</h4>
            <form onSubmit={handleSubmit}>
                <div className="input__wrap controls">
                    <div className="form-group">
                        <label>{t("Quel est votre nom ?")}</label>
                        <input 
                            id="form_name" 
                            type="text" 
                            name="name" 
                            value={form.name}
                            placeholder={t("Entrer votre nom")}
                            onChange={handleChange} 
                            required="required"
                        />
                    </div>

                    <div className="form-group">
                        <label>{t("Quelle est votre adresse email ?")}</label>
                        <input 
                            id="form_email" 
                            type="email" 
                            name="email" 
                            value={form.email}
                            placeholder="Type your Email Address"
                            onChange={handleChange} 
                        />
                    </div>

                    <div className="form-group">
                        <label>{t("Votre commentaire")}</label>
                        <textarea 
                            id="form_message" 
                            className="form-control" 
                            name="content"
                            value={form.content}
                            placeholder={t("Dites-nous ce que vous en pensez")}
                            required="required"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="image-zoom">
                        <button type="submit">{t("Commenter")}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CommentForm;