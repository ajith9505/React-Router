import React from 'react'
import { Link } from "react-router-dom";

//data used for cards
const data = [
    {
        title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2023",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
        description: "Are you someone who’s not interested in coding, but wants to get placed in tech",
        link: "https://www.guvi.in/blog/top-non-coding-jobs-in-data-science//",
        date: "28 November 2023",
        comments: "No Comments"
    },
    {
        title: "6 Interviewing Techniques for Technical Skill Assessment ",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Interviewing-Techniques-for-Technical-Skill-Assessment-feature-image.webp",
        description: "As organizations increasingly rely on technology to stay competitive, the demand for hiring candidates with",
        link: "https://www.guvi.in/blog/interviewing-techniques-for-technical-skill-assessment/",
        date: "28 November 2023 ",
        comments: "No Comments"
    },
    {
        title: "Top 10 High Paying Cloud-Computing Jobs without Coding in 2023 ",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Cloud-Computing-Jobs-without-Coding-1.png",
        description: "Cloud computing has become an integral part of our technological landscape. Its versatility and scalability",
        link: "https://www.guvi.in/blog/top-non-coding-jobs-in-cloud-computing/",
        date: "27 November 2023",
        comments: "No Comments"
    },
    {
        title: "Top High-Paying Non-Coding Jobs in DevOps [2023] ",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Non-Coding-Jobs-in-DevOps.png",
        description: "DevOps (Development and Operations) is a field that focuses on improving collaboration and automation between",
        link: "https://www.guvi.in/blog/top-non-coding-jobs-in-devops/",
        date: "27 November 2023",
        comments: "No Comments"
    },
    {
        title: "Best 15 Product-based Companies for IoT Solutions Architects in India ",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Product-based-Companies-for-IoT-Solutions-Architects-in-India-01.jpg",
        description: "The domain of the Internet of Things (IoT) has become a pivotal element in driving",
        link: "https://www.guvi.in/blog/best-ethical-hacking-books/",
        date: "21 November 2022",
        comments: "No Comments"
    },
    {
        title: "Best Books to Learn Blockchain ",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Best-Books-to-Learn-Blockchain.webp",
        description: "Think of blockchain as a special way of keeping records, like a digital notebook. But",
        link: "https://www.guvi.in/blog/best-books-to-learn-blockchain/",
        date: "14 November 2023 ",
        comments: "No Comments"
    },
    {
        title: "12 Key Elements For A Professional UI/UX Designer Resume Guide ",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-1-1.webp",
        description: "The field of UI/UX designing is all about innovation and creativity. People should understand the",
        link: "https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/",
        date: "27 December 2022",
        comments: "No Comments"
    },
    {
        title: "Top 5 Product-Based Companies That Don’t Require Coding ",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp",
        link: "https://www.guvi.in/blog/product-based-companies-that-dont-require-coding/",
        description: "Every one of us wants to work in top product-based companies, Right? But, Not everyone",
        date: "24 November 2023",
        comments: "No Comments"
    },
    {
        title: "Kanban vs. Scrum: Choosing the Right Agile Framework for Your Project ",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Kanban-vs.-Scrum-Choosing-the-Right-Agile-Framework-1.webp",
        description: "Imagine you’re building a house. If you use the wrong tools, it’s going to take",
        link: "https://www.guvi.in/blog/product-based-companies-that-dont-require-coding/",
        date: "23 November 2023 ",
        comments: "No Comments"
    }
];

function All() {
    return (
        //grid for cards
        <div>
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

export default All;