import React from 'react'
import { Link } from 'react-router-dom';

function DataScience() {

    const data = [
        {
            title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2023 ',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
            description: 'Are you someone who’s not interested in coding, but wants to get placed in tech',
            link: 'https://www.guvi.in/blog/top-non-coding-jobs-in-data-science/',
            date: '28 November 2023',
            comments: 'No Comments'
        },
        {
            title: 'Impact of Certification Programs on Hiring Data Scientists',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1.webp',
            description: 'Data scientists are the creators behind transforming the raw data into edible data insights. These',
            link: 'https://www.guvi.in/blog/certification-impact-on-hiring-data-scientists/',
            date: '15 November 2023',
            comments: 'No Comments'
        },
        {
            title: 'Top Product-Based Companies for Data Science Freshers ',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp',
            description: 'In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing',
            link: 'https://www.guvi.in/blog/product-based-companies-for-data-science-freshers/',
            date: '10 November 2023',
            comments: 'No Comments'
        },
        {
            title: 'What is the Difference between Data Science and Data Engineering? ',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp',
            description: 'India has been making some serious waves in the world of data. Just like the',
            link: 'https://www.guvi.in/blog/difference-between-data-science-and-data-engineering/',
            date: '8 November 2023',
            comments: 'No Comments'
        },
        {
            title: 'Top 10 Data Science Tools in 2023 ',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1.png',
            description: 'Data Science is an in-demand profession and will continue growing in the coming years. From',
            link: 'https://www.guvi.in/blog/data-science-tools/',
            date: '1 November 2023',
            comments: 'No Comments'
        },
        {
            title: 'Best Data Science Books to Learn 2023 ',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp',
            description: 'Today, we’re going to talk about something really cool: data science. It’s all about using',
            link: 'https://www.guvi.in/blog/data-science-books-to-learn/',
            date: '26 October 2023',
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

export default DataScience