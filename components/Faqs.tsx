const Faq = ({ question, answer }: { question: string, answer: string }) => (
  <div className="collapse collapse-plus bg-zinc-900">
    <input type="radio" name="faqs"/>
    <div className="collapse-title text-xl font-medium text-gray-300">
      {question}
    </div>
    <div className="collapse-content text-gray-400">
      <p>{answer}</p>
    </div>
  </div>
);

const Faqs = () => (
  <div className="bg-zinc-800 w-full py-16 px-24" id="faqs">
    <h2 className="mx-auto max-w-4xl mb-4 font-display text-4xl font-bold tracking-normal sm:text-5xl text-gray-100">
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
