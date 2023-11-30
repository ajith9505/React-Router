import React from 'react'
import { Link } from 'react-router-dom';

function Career() {

    const data = [
        {
            title: 'Top 5 Product-Based Companies That Don’t Require Coding ',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp',
            description: 'Every one of us wants to work in top product-based companies, Right? But, Not everyone',
            link: 'https://www.guvi.in/blog/product-based-companies-that-dont-require-coding/',
            date: '24 November 2023',
            comments: 'No Comments'
        },
        {
            title: 'Machine Learning Engineer Resume Guide: 11 Important Things To Include! ',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Machine-Learning-Engineer-Resume-Guide.webp',
            description: 'The current technological era is full of competition and those who have profound skillset are',
            link: 'https://www.guvi.in/blog/machine-learning-engineer-resume-tips/',
            date: '23 November 2023',
            comments: 'No Comments'
        },
        {
            title: 'Mechanical Engineering Resume: 9 Important Things To Look Out For ',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Mechanical-Engineering-Resume-Important-Things-To-Look-Out-For.webp',
            description: 'With the development of technology, most of us started forgetting about mechanical engineering which pioneered',
            link: 'https://www.guvi.in/blog/mechanical-engineering-resume-tips/',
            date: '22 November 2023',
            comments: 'No Comments'
        },
        {
            title: 'Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional ',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2.webp',
            description: 'What if I say that blockchain is going to be the next big thing? And',
            link: 'https://www.guvi.in/blog/blockchain-developer-resume-tips/',
            date: '22 November 2023',
            comments: 'No Comments'
        },
        {
            title: 'A Compelling Ethical Hacker Resume: 10 Tips and Tricks to Follow ',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/1-scaled.webp',
            description: 'With the growing concerns of digital security increasing day by day, organizations turn to ethical',
            link: 'https://www.guvi.in/blog/ethical-hacker-resume-tips/',
            date: '22 November 2023',
            comments: 'No Comments'
        },
        {
            title: 'Best 11 Product-Based Companies for Product Managers in India',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp',
            description: 'Who is a product manager? What are the best product-based companies for product managers in',
            link: 'https://www.guvi.in/blog/product-based-companies-for-product-managers/',
            date: '14 November 2023',
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

export default Career