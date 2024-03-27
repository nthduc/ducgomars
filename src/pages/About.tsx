import React from 'react';
import { FaJava, FaJs, FaReact, FaWindows, FaLinux, FaApple } from 'react-icons/fa';
import { SiTypescript, SiCsharp, SiKotlin } from 'react-icons/si';
import { FaGolang } from "react-icons/fa6";

const portfolioData = [
    // existing data...
    { category: 'Summary', items: [
        { name: 'I am a passionate and enthusiastic recent graduate with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my skills.' },
    ]},
    { category: 'Technical Skills', items: [
        { name: 'Programing Languages: Java, JavaScript & TypeScript, C#, Kotlin' },
        { name: 'Frameworks/Platforms: Frontend: Reactjs, WebPack/Babel, Vite, Bootstrap; Backend: J2EE JSP/Servlet, Spring Boot, Hibernate, ASP.NET MVC, Ktor' },
        { name: 'Database Management Systems: MS SQL Server, MySQL, MongoDB(No SQL)' },
        { name: 'Project Management & Agile Tools: Jira, Trello, Git' },
        { name: 'Others: Good understanding of OOP methodologies, Design Pattern, Exprerience using Docker, Linux' },
    ]},
    { category: 'Projects', items: [
        { name: '<strong>Ai Hoshino Bot:</strong> This Discord bot is inspired by the character Ai Hoshino from the anime Oshi no Ko. It is written in Kotlin using the Kord library and Ktor library. <a href="https://github.com/nthduc/ai-hoshino">Link</a>' },
        { name: '<strong>Modifying Payment System of Fruit Ninja:</strong> Ran custom FruitNinja Reverse Engineered obfuscated Java using a decompiler and reflection. <br />Technologies: Java, Android SDK, Linux Ubuntu, Smali. <a href="https://github.com/nthduc/project-link">Link</a>' },
        { name: '<strong>Building Book Store Website:</strong> Developing a online bookstore using ASP .NET Core MVC. RESTful API for managing book features include user authentication, session management, routing, and used Stripe for payment. <br/>Technologies: ASP .NET Core MVC, Entity Framework, Repository Pattern, Stripe, SQL Server. <a href="https://github.com/nthduc/project-link">Link</a>' },
        { name: '<strong>Shoe Store Website:</strong> Developed an online shoe store using Reactjs Spring Boot. <br />Technologies: Reactjs TypeScript, Bootstrap, Spring Boot REST API, JPA, MySQL. <a href="https://github.com/nthduc/project-link">Link</a>' },
        { name: '<strong>Building a Movie Ticket Booking Website:</strong> A user-friendly website that allows customers to book movie tickets online. The site features a responsive design implemented with Bootstrap and secure user authentication provided by Spring Security. The back-end was developed using Java and Spring Boot. <br/>Technologies: Java, Bootstrap, JSP/Servlet View, Spring Boot, Spring Security, MySQL. <a href="https://github.com/nthduc/project-link">Link</a>' },
    ]},
];

const About = () => {
    return (
        <div className="p-10">
            <h1 className="text-4xl mb-5">About</h1>
            <p>Nguyen Thai Duc – Full Stack Software Engineer</p>
            <p>Linked: <a href="https://linkedin.com/in/nthduc">linkedin.com/in/nthduc</a> - Github: <a href="https://github.com/nthduc">github.com/nthduc</a></p>
            <p>Address: District 7, HCMC - Phone: +84 399405012 - Email: nguyenthaiduc0212@gmail.com</p>
            {portfolioData.map((data, index) => (
                <div key={index} className="mb-5">
                    <h2 className="text-2xl mb-2">{data.category}</h2>
                    <ul className="list-disc ml-5">
                        {data.items.map((item, i) => (
                            <li key={i} className="mb-1 flex items-center">
                               
                               <span className="ml-2" dangerouslySetInnerHTML={{ __html: item.name }}></span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default About;