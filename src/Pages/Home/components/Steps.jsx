import React from "react";
import "./Styles/Steps.scss";

export default function Steps() {
  const faqs = [
    [
      {
        title: "Inquire about custom designs",
        description:
          "Connect with us via our website or call us at +971553677009. Share your project details and design preferences, and let's create something exceptional together!",
      },
      {
        question: "What file formats are acceptable for design submissions?",
        answer:
          "We accept a variety of file formats, including .AI, .EPS, .PDF, .JPEG, and .PNG, ensuring flexibility and ease in submitting your design concepts.",
      },
      {
        question: "Can I request a personalized design for my signage?",
        answer:
          "Absolutely! We specialize in crafting bespoke designs tailored to your brand identity, ensuring a distinctive and memorable touch to your signage.",
      },
      {
        question: "How much involvement can I have in the design process?",
        answer:
          "We highly encourage client collaboration. Work closely with our design team, sharing your ideas and feedback throughout the process to ensure your satisfaction.",
      },
      {
        question:
          "What design choices does Taer Al-Nawras provide for signage?",
        answer:
          "Our design options range from contemporary and sleek to bold and vibrant, catering to diverse client tastes and preferences.",
      },
    ],
    [
      {
        title: "Understanding project timelines",
        description:
          "We prioritize efficiency and timely delivery to meet project deadlines consistently.",
      },
      {
        question: "Can revisions be made after the initial design phase?",
        answer:
          "Certainly! We provide a revision process, allowing modifications post the initial design phase to ensure your complete satisfaction with the final product.",
      },
      {
        question:
          "What is the typical turnaround time for a signage design project?",
        answer:
          "Turnaround times may vary depending on project complexity. However, we strive to provide an estimated timeline during the initial consultation and adhere to agreed-upon deadlines.",
      },
      {
        question: "What quality assurance measures are implemented?",
        answer:
          "We implement rigorous quality checks at various stages of production to ensure the highest standards are met, ensuring the final work exceeds expectations.",
      },
      {
        question:
          "Does Taer Al-Nawras offer expedited services for urgent projects?",
        answer:
          "Yes, we offer rush services based on project requirements. Reach out to our team to discuss your urgent needs, and we'll do our best to accommodate your timeline.",
      },
    ],
    [
      {
        title: "Streamlining the installation process",
        description:
          "We offer end-to-end services for completion and installation, ensuring a seamless transition from design to final placement.",
      },
      {
        question:
          "What factors influence completion and installation timelines?",
        answer:
          "Several factors, such as weather conditions and site accessibility, may impact the timeline. However, our team ensures efficient completion despite these variables.",
      },
      {
        question:
          "What post-installation maintenance and support are available?",
        answer:
          "We offer comprehensive maintenance guidance and support post-installation, ensuring the longevity and optimal performance of your signage, along with assistance for any unforeseen issues.",
      },
      {
        question:
          "Are there specific site requirements necessary for installation?",
        answer:
          "Our team conducts a thorough site survey to assess and address any specific requirements or preparations needed for a smooth and successful installation process.",
      },
      {
        question: "Does Taer Al-Nawras oversee the installation process?",
        answer:
          "Yes, we provide comprehensive services, including design, production, and professional installation of signage at your chosen location.",
      },
    ],
  ];

  return (
    <section id="steps">
      <h1>HOW IT WORKS</h1>
      <dl>
        {faqs.map((section, index1) => {
          return (
            <div key={index1} className="step">
              {section.map((faq, index2) => {
                if (!index2) {
                  return (
                    <React.Fragment key={index2}>
                      <dt key={index2} className="gold-color">
                        {faq.title}
                        <span>{index1 + 1}</span>
                      </dt>
                      <dd key={index2 + 1}>{faq.description}</dd>
                    </React.Fragment>
                  );
                }
                return (
                  <details key={index2 + 2}>
                    <summary>{faq.question}</summary>
                    {faq.answer}
                  </details>
                );
              })}
            </div>
          );
        })}
      </dl>
    </section>
  );
}
