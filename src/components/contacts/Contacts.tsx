import './contacts.css'
import contactsImg from '../../img/images/contactsImg.svg'
import { SubmitHandler, useForm } from 'react-hook-form';
import React from 'react';

interface ContactsForm{
    name: string;
    lastName: string;
    email: string;
    textarea: string;
}

function Contacts(){
    const {register, handleSubmit} =  useForm<ContactsForm>({
        defaultValues: {}
    });

    const submit: SubmitHandler<ContactsForm> = data => {
        alert(JSON.stringify(data));
    }
    return(
        <section id='Contacts' className='contacts__section'>
            <h2 className='contacts__heading'>CONTACT US</h2>
            <div className='contacts__container'>
                <>
                    <img className='contactsImg' src={contactsImg} alt="ContactUsImg"/>
                </>
                <div className="contacts__content">
                    <form onSubmit={handleSubmit(submit)} className='content__form'>
                        <input 
                            {...register('name', { required: true})}
                            type="text"
                            className='form__firstName-input'
                            placeholder="Имя"
                        />
                        <input 
                            {...register('lastName', { required: true})}
                            type="text"
                            className='form__lastName-input'
                            placeholder="Фамилия"
                        />
                        <input 
                            {...register('email', { required: true})}
                            type="Email"
                            className='form__email-input'
                            placeholder="Email"
                        />
                        <textarea
                            {...register('textarea', { required: true})}
                            className="form__message-input"
                            placeholder="Сообщение"
                        ></textarea>
                        <button className="form__btn-submit">Send Messsage</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacts;