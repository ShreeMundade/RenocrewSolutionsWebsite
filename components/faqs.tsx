"use client";
import React, { useState } from "react";
import Accordion from "./accordion";
import { Heading } from "./heading";

const questions = [
  {
    id: 1,
    title: "What services does Renocrew Solutions offer?",
    description:
      "Renocrew Solutions offers a range of services, including IT Management, Web Marketing, SEO, Cloud Computing, ERPNext and Frappe development, Custom API Integrations, Yardi Technical Consultation, and cloud consulting services for Azure, AWS, and GCP.",
  },
  {
    id: 2,
    title: "What is Renocrew Solutions' approach to IT Management?",
    description:
      "Renocrew Solutions takes a proactive approach to IT Management, ensuring that your IT infrastructure is optimized, secure, and scalable to meet your business's evolving needs.",
  },
  {
    id: 3,
    title: "How can Renocrew Solutions assist with cloud computing?",
    description:
      "We offer cloud consulting services for Azure, AWS, and GCP, helping businesses migrate to the cloud, manage their cloud environments, and leverage the benefits of cloud computing for scalability and efficiency.",
  },
  {
    id: 4,
    title: "Does Renocrew Solutions offer SEO services?",
    description:
      "Yes, Renocrew Solutions provides SEO Booster services to improve your website’s search engine ranking and increase organic traffic, helping your business grow online visibility.",
  },
  {
    id: 5,
    title: "Can Renocrew Solutions help with ERPNext and Frappe development?",
    description:
      "Absolutely. Renocrew Solutions specializes in ERPNext and Frappe development, offering tailored solutions to streamline your business processes and improve operational efficiency.",
  },
  {
    id: 6,
    title: "What is Yardi Technical Consultation at Renocrew Solutions?",
    description:
      "Yardi Technical Consultation involves providing specialized services for Yardi, including custom report development, database management, and technical support for real estate and property management companies.",
  },
  {
    id: 7,
    title: "Does Renocrew Solutions provide custom API integrations?",
    description:
      "Yes, we offer custom API integration services, enabling businesses to seamlessly connect various applications and systems for improved functionality and data flow.",
  },
  {
    id: 8,
    title: "What industries does Renocrew Solutions serve?",
    description:
      "Renocrew Solutions serves various industries, including real estate, accounting, technology, and finance, offering customized solutions to meet each industry's unique requirements.",
  },
  {
    id: 9,
    title: "How can I get in touch with Renocrew Solutions for support?",
    description:
      "You can contact us via phone at (+91) 9588625216 or email us at support@renocrewsolutions.com for any inquiries or support needs.",
  },
 
];


export const FAQs = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-3xl mx-auto py-20 px-8">
      <Heading className="pt-4">Frequently asked questions</Heading>
      <div className="grid  gap-10 pt-20">
        {questions.map((item, i) => (
          <Accordion
            key={i}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
