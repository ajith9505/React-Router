import React from 'react'
import { Link } from 'react-router-dom';


function CyberSecurity() {

    const data = [
        {
            title: 'What Is Hacking? Types of Hacking & More',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp',
            description: 'Have you ever wondered what hacking is all about? It’s a big deal in today’s',
            link: 'https://www.guvi.in/blog/what-is-hacking/',
            date: '25 September 2023',
            comments: 'No Comments'
        },
        {
            title: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences ',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner.png',
            description: 'Cybersecurity & Ethical hacking and have been key in making sure that your data online',
            link: 'https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/',
            date: '27 December 2022',
            comments: 'No Comments'
        },
        {
            title: 'What is Cybersecurity? Importance and its uses & the growing challenges in 2023! ',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif',
            description: 'Look around today, you will witness that we are more reliant on technology and devices',
            link: 'https://www.guvi.in/blog/what-is-cybersecurity/',
            date: '20 December 2022 ',
            comments: 'No Comments'
        },
        {
            title: '8 Different Types of Cybersecurity and Threats Involved',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1.png',
            description: 'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from',
            link: 'https://www.guvi.in/blog/types-of-cybersecurity/',
            date: '9 November 2022',
            comments: 'No Comments'
        },
        {
            title: 'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif',
            description: 'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,',
            link: 'https://www.guvi.in/blog/coding-for-cybersecurity/',
            date: '22 June 2022',
            comments: 'No Comments'
        },
        {
            title: 'Top 7 Cyber Security Attacks in Real Life ',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact.jpg',
            description: 'Cyber security attacks are the type of actions that are designed to destroy, steal, modify',
            link: 'https://www.guvi.in/blog/cyber-security-attacks-in-real-life/',
            date: '10 June 2022',
            comments: 'No Comments'
        },

    ]

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

export default CyberSecurity