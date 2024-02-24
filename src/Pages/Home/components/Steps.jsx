import React from "react"
import "./Styles/Steps.scss"

export default function Steps() {
    const faqs = [
        [{title:"Request a design",description:"contact us via our website or at 050 719 3694. Share your project details and design requirements, and let's craft something exceptional together!",},
        {question:"What design options does Bushrat Hussain Advertising Signage offer?",answer:"We provide a wide array of design options, ranging from modern and minimalist to bold and vibrant, catering to diverse client preferences."},
        {question:"Can I request a custom design for my signage needs?",answer:"Absolutely! We specialize in creating tailor-made designs that align with your brand identity, ensuring a unique and personalized touch to your signage."},
        {question:"What file types are accepted for submitting design ideas or materials?",answer:"We accept various file formats, including but not limited to .AI, .EPS, .PDF, .JPEG, and .PNG, ensuring flexibility and ease in design submissions."},
        {question:"How involved can I be in the design process for my signage?",answer:"We highly encourage client involvement. You can collaborate closely with our design team, sharing ideas, feedback, and revisions throughout the design process to ensure satisfaction."},],
        [{title:" Project timeline",description:"We prioritize working within set timeframes to ensure efficiency and meet deadlines consistently.",},
        {question:"What is the typical turnaround time for a signage design project?",answer:"Turnaround times may vary depending on the complexity of the project. However, we strive to provide an estimated timeline during the initial consultation and adhere to agreed-upon deadlines."},
        {question:"Does Bushrat Hussain Advertising Signage offer rush or expedited services for urgent projects?",answer:"Yes, we do offer rush services based on project requirements. Please discuss your urgent needs with our team, and we'll do our best to accommodate your timeline."},
        {question:"What quality assurance measures are in place for the final work produced?",answer:"We have stringent quality checks at various stages of production to ensure the highest standards are met. Our team is committed to delivering top-notch work that exceeds expectations."},
        {question:"Can I make revisions or alterations to the work after the initial design phase?",answer:"Yes, we provide a revision process, allowing modifications or adjustments post the initial design phase to ensure your complete satisfaction with the final product."},],
        [{title:"Installation",description:"We offer comprehensive services for both completion and installation, ensuring a seamless process from design to the final placement of your signage.",},
        {question:"Does Bushrat Hussain Advertising Signage handle the installation process?",answer:"Yes, we offer comprehensive services that include the design, production, and professional installation of the signage at your desired location."},
        {question:"What factors affect the completion and installation timeline?",answer:"Several factors, such as weather conditions, site accessibility, and the size and complexity of the signage, can influence the completion and installation timeline."},
        {question:"Are there specific site requirements necessary for the installation of the signage?",answer:"Our team will conduct a site survey to assess and discuss any specific requirements or preparations needed to ensure a smooth and successful installation process."},
        {question:"What kind of maintenance or support is available after the signage installation?",answer:"We offer maintenance guidance and support post-installation, ensuring the longevity and optimal performance of your signage. Additionally, we provide support for any unexpected issues that may arise."},],
    ]

    return (
        <section id="steps">
        <h1>HOW IT WORKS</h1>
        <dl>
            {faqs.map((section,index1)=>{
                return <section key={index1} className="step">
                    {section.map((faq,index2)=>{
                        if (!index2) {
                            return (
                                <React.Fragment key={index2}>
                                <dt key={index2} className="gold-color">{faq.title}<span>{index1+1}</span></dt>
                                <dd key={index2+1}>{faq.description}</dd>
                                </React.Fragment>
                            )
                        }
                        return <details key={index2+2}>
                            <summary>{faq.question}</summary>
                            {faq.answer}
                        </details>
                    })}
                </section>
            })}
        </dl>
        </section>
    )
}