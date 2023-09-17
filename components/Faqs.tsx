const Faq = ({ question, answer }: { question: string, answer: string }) => (
  <div className="collapse collapse-plus bg-base-200">
    <input type="radio" name="faqs"/>
    <div className="collapse-title text-xl font-medium">
      {question}
    </div>
    <div className="collapse-content">
      <p>{answer}</p>
    </div>
  </div>
);

const Faqs = () => (
  <div className="bg-neutral-800 w-full p-12">
    <h2 className="mx-auto max-w-4xl mb-4 font-display text-4xl font-bold tracking-normal text-gray-100 sm:text-5xl">
      FAQs
    </h2>
    <Faq
      question="Do we need prior coding experience?"
      answer="No! This event is open to all students, from experienced to complete rookie. The main objective is to learn."
    />
    <Faq
      question="Will we be able to learn anything from this event?"
      answer="Yes, LEC has Faqaborated with several clubs on campus to offer hackathon participants several workshops relating to the tracks."
      
    />
    <Faq
      question="Are there prizes?"
      answer="Yes, our sponsors have graciously agreed to offer a variety of licenses and other rewards as prizes for our hackathon."
    />
  </div>
);

export default Faqs;
