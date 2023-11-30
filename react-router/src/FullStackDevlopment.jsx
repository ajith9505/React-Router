import React from "react";
import { Link } from "react-router-dom";

const data = [
    {
        title: 'Top Ways to Assess Soft Skills in Full Stack Developers in 2023 ',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp',
        description: 'When you’re hiring a full-stack developer, what are the most important things you look for?',
        link: 'https://www.guvi.in/blog/assessing-soft-skills-in-full-stack-developers/',
        date: '15 November 2023',
        comments: 'No Comments'
    },
    {
        title: 'Top Differences: Full Stack Developer vs Software Engineer 2023 ',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp',
        description: 'A Full Stack Developer is a tech all-rounder. They work on both the front and',
        link: 'https://www.guvi.in/blog/full-stack-developer-vs-software-engineer/',
        date: '15 November 2023',
        comments: 'No Comments'
    },
    {
        title: 'Horizontal vs Vertical Scaling for Efficient System Design ',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp',
        description: 'In the world of system design, envision a digital skyscraper – a multifaceted structure built',
        link: 'https://www.guvi.in/blog/horizontal-vs-vertical-scaling/',
        date: '10 November 2023',
        comments: 'No Comments'
    },
    {
        title: 'Best Books to Learn Full-Stack Development ',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp',
        description: 'Are you interested in becoming a full-stack developer but not sure where to start? In',
        link: 'https://www.guvi.in/blog/best-books-to-learn-full-stack-development/',
        date: '9 November 2023',
        comments: 'No Comments'
    },
    {
        title: 'Top 10 Product-Based Companies for Full-Stack Developers [2023] ',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp',
        description: 'In the dynamic landscape of technology, full-stack developers are the architects of the digital world,',
        link: 'https://www.guvi.in/blog/product-based-companies-for-full-stack-developers/',
        date: '8 November 2023 ',
        comments: 'No Comments'
    },
    {
        title: '7 Best Full-Stack Development Online Courses [2023] ',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp',
        description: 'Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand',
        link: 'https://www.guvi.in/blog/best-full-stack-development-online-courses/',
        date: '31 August 2023',
        comments: 'No Comments'
    }
];

function FullStack() {
    return (
        <div className="container">
            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
                {data.map((card, index) => (
                    <div className="col-lg col-md-6" key={index}>
                        <div className="card h-100">
                            <div>
                                <Link className="nav-link" to={card.link}>
                                    <img src={card.img} className="card-img-top" alt="..." />
                                </Link>
                            </div>
                            <div className="card-body mt-2">
                                <h5 className="card-title">
                                    <Link className="nav-link" to={card.link}>{card.title}</Link>
                                </h5>
                                <p className="card-text text-secondary">{card.description}</p>
                                <p className='fs-10 fw-bold text-success'>
                                    <Link className="nav-link read " target="_blank" to={card.link}>READ MORE »</Link>
                                </p>
                            </div>
                            <div className="card-footer bg-body">
                                <small className="text-body-secondary d-inline-flex w-100 text-align-left">
                                    {card.date}{" "}
                                    <ul>
                                        <li>{card.comments}</li>
                                    </ul>
                                </small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FullStack;