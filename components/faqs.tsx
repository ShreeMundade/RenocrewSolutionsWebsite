
"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";



const FAQs  = [
  {
    id: 1,
    question: "What services does Renocrew Solutions offer?",
    answer:
      "Renocrew Solutions offers a range of services, including IT Management, Web Marketing, SEO, Cloud Computing, ERPNext and Frappe development, Custom API Integrations, Yardi Technical Consultation, and cloud consulting services for Azure, AWS, and GCP.",
  },
  {
    id: 2,
    question: "What is Renocrew Solutions' approach to IT Management?",
    answer:
      "Renocrew Solutions takes a proactive approach to IT Management, ensuring that your IT infrastructure is optimized, secure, and scalable to meet your business's evolving needs.",
  },
  {
    id: 3,
    question: "How can Renocrew Solutions assist with cloud computing?",
    answer:
      "We offer cloud consulting services for Azure, AWS, and GCP, helping businesses migrate to the cloud, manage their cloud environments, and leverage the benefits of cloud computing for scalability and efficiency.",
  },
  {
    id: 4,
    question: "Does Renocrew Solutions offer SEO services?",
    answer:
      "Yes, Renocrew Solutions provides SEO Booster services to improve your website’s search engine ranking and increase organic traffic, helping your business grow online visibility.",
  },
  {
    id: 5,
    question: "Can Renocrew Solutions help with ERPNext and Frappe development?",
    answer:
      "Absolutely. Renocrew Solutions specializes in ERPNext and Frappe development, offering tailored solutions to streamline your business processes and improve operational efficiency.",
  },
  {
    id: 6,
    question: "What is Yardi Technical Consultation at Renocrew Solutions?",
    answer:
      "Yardi Technical Consultation involves providing specialized services for Yardi, including custom report development, database management, and technical support for real estate and property management companies.",
  },
  {
    id: 7,
    question: "Does Renocrew Solutions provide custom API integrations?",
    answer:
      "Yes, we offer custom API integration services, enabling businesses to seamlessly connect various applications and systems for improved functionality and data flow.",
  },
  {
    id: 8,
    question: "What industries does Renocrew Solutions serve?",
    answer:
      "Renocrew Solutions serves various industries, including real estate, accounting, technology, and finance, offering customized solutions to meet each industry's unique requirements.",
  },
  {
    id: 9,
    question: "How can I get in touch with Renocrew Solutions for support?",
    answer:
      "You can contact us via phone at (+91) 9588625216 or email us at support@renocrewsolutions.com for any inquiries or support needs.",
  },
 
];




export function FrequentlyAskedQuestionsAccordion() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-20 md:grid-cols-2 md:px-8 md:py-40">
      <h2 className="text-center text-4xl font-bold tracking-tight text-neutral-600 dark:text-neutral-50 md:text-left md:text-6xl">
        Frequently asked questions
      </h2>
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="cursor-pointer py-4"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <IconPlus
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-blue-500 transition-all duration-200",
              isOpen && "rotate-90 scale-0",
            )}
          />
          <IconMinus
            className={cn(
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-blue-500 transition-all duration-200",
              isOpen && "rotate-0 scale-100",
            )}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
