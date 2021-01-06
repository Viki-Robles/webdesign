import React from 'react';
import nina from './nina.jpeg';
import './testimonials.css';
import adamas from './adamas.jpeg';

const BOXES_DATA = [
    { icon: nina, text: 'I have been working with Vicky for the last 4 months..Is been great experience working together with her positive energy and passion for what she does.', name: 'Nina Tumanishvili', title: 'CEO', company: 'HelloHub'},
    { icon: adamas, text: 'Professional and met my needs for my small business. Vicky understands the needs of the customer and gives you a comfortable customer experience.', name: 'Adam Vasilopoulos', title: 'CEO', company: 'Countify' },
]

export default function Testimonial() {
    return (
        <>
            {
                BOXES_DATA.map(({ title, icon, text, name, company }) => (
                    <section class="card-list">
                        <article class="card">
                            <header class="card-header">
                                <h3>{text}</h3>
                            </header>
                            <div className="card-author">
                                <a class="author-avatar" href="#">
                                    <img src={icon} alt='' />
                                </a>
                               
                                <div className="author-name">
                                    <div className="author-name-prefix">{title}</div>
                                    {name}
                                </div>
                            </div>
                            <div className="tags">
                                <a href="#">{company}</a>
                            </div>
                        </article>
                    </section>
                ))
            }

        </>
    )
}