import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import image from '../../assets/images/consultant.jpg';

const SingleConsultant = () => {
    return (
        <div className="flex gap-10 items-start">
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="mb-4 relative">
                <div>
                    <img src={image} alt="Consultant" width={'auto'} className=" rounded-lg" /></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-4">
                        <h2 className="text-xl font-semibold text-white">Consultant Name</h2>
                        <div className="flex items-center text-gray-300">
                            <p className="mr-4">Profession</p>
                            <div className="flex">
                                <a href="#" className="mr-2">
                                    <FaFacebookSquare className="text-xl" />
                                </a>
                                <a href="#" className="mr-2">
                                    <FaTwitterSquare className="text-xl" />
                                </a>
                                <a href="#" className="mr-2">
                                    <FaLinkedin className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second div takes 100% width on small screens and 100% - 30% = 70% width on medium and larger screens */}
            <div className="w-full md:w-1/2 lg:w-2/3 p-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Consultant Details</h2>
                    <div className="mb-2">
                        <p>Email: example@example.com</p>
                    </div>
                    <div className="mb-2">
                        <p>Phone: +123456789</p>
                    </div>
                    <div className="mb-2">
                        <p className='text-xl'>Title: Navigating Career Paths: The Role of a Career Consultant

                            In today's dynamic job market, where career trajectories are increasingly diverse and fluid, the need for professional guidance in navigating one's career journey has become paramount. This is where career consultants step in, offering invaluable expertise and support to individuals seeking to make informed decisions about their professional lives.

                            **Understanding the Role**

                            Career consultants are seasoned professionals equipped with the knowledge and tools to assist individuals at various stages of their careers. Whether you're a recent graduate exploring entry-level opportunities, a mid-career professional contemplating a career change, or a seasoned executive strategizing for advancement, a career consultant can provide tailored guidance to help you achieve your goals.

                            **Services Offered**

                            Career consultants offer a wide range of services designed to empower individuals in their career endeavors:

                            1. **Career Assessment:** Through aptitude tests, personality assessments, and in-depth interviews, career consultants help clients gain clarity about their strengths, interests, values, and goals. This self-awareness forms the foundation for making informed career decisions.

                            2. **Goal Setting and Planning:** Based on the insights gained from assessments, career consultants collaborate with clients to set realistic career goals and develop strategic action plans to achieve them. Whether it's pursuing further education, transitioning to a new industry, or climbing the corporate ladder, a well-defined roadmap is essential for success.

                            3. **Resume and Cover Letter Review:** Crafting a compelling resume and cover letter is essential for standing out in today's competitive job market. Career consultants provide expert feedback and assistance in optimizing these documents to effectively showcase clients' skills and experiences.

                            4. **Interview Preparation:** From mock interviews to personalized coaching, career consultants help clients hone their interview skills and build confidence to ace job interviews. They provide valuable insights into common interview questions, behavioral assessments, and effective communication techniques.

                            5. **Networking Strategies:** Networking is a powerful tool for career advancement. Career consultants guide clients in developing strategic networking plans, leveraging online platforms, attending industry events, and building meaningful professional connections.

                            6. **Career Transition Support:** Whether due to layoffs, mergers, or personal choice, career transitions can be daunting. Career consultants offer support and guidance to navigate these transitions smoothly, explore new opportunities, and effectively manage change.

                            **The Impact of Career Consulting**

                            The benefits of working with a career consultant extend far beyond securing a job. By partnering with a career consultant, individuals gain:

                            - **Clarity and Direction:** A deeper understanding of their strengths, interests, and values, enabling them to make informed career decisions aligned with their aspirations.
                            - **Confidence:** Enhanced self-confidence and self-assurance in pursuing career goals, overcoming obstacles, and seizing opportunities.
                            - **Professional Development:** Access to valuable resources, tools, and strategies for continuous learning, skill development, and career advancement.
                            - **Support System:** A supportive ally who provides objective feedback, encouragement, and accountability throughout their career journey.

                            **Conclusion**

                            In an era of rapid technological advancements, evolving industries, and shifting job market dynamics, the guidance and expertise of a career consultant are invaluable assets for individuals navigating their professional paths. By investing in professional development and leveraging the services of a career consultant, individuals can empower themselves to achieve their career aspirations and thrive in today's competitive landscape.</p>
                    </div>
                    <div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleConsultant;
