const Overview = () => {
  return (
    <div className="bg-zinc-800 w-full p-12 md:p-16" id="overview">
        <h2 className="mx-auto max-w-4xl mb-4 font-display text-4xl font-bold tracking-normal sm:text-5xl text-gray-100">Event Overview</h2>
        <div className="text-left mt-4 text-gray-300">
        <p>
          <span className="font-display font-bold text-gray-100">Mission Statement:</span> LEC Hacks is a virtual hackathon for
          high-school students worldwide hosted by Lynbrook Engineering Club.
          Through learning and competing about a variety of topics we hope to
          foster an interest in the field of engineering and encourage people to
          explore the various branches of engineering.
        </p>
        <br />
        <p>
          <span className="font-display font-bold text-gray-100">Location:</span> Online via Discord (<a href="https://discord.gg/yEabP55GyJ">Join Here!</a>)
        </p>
        <br />
        <p>
          <span className="font-display font-bold text-gray-100">When:</span> Friday 11/18 @ 9PM PST to Sunday 11/20 @ 9AM PST
        </p>
        <br />
        <p>
          <span className="font-display font-bold text-gray-100">Theme:</span> Wellness
        </p>
        <br />
        <p>
          <span className="font-display font-bold text-gray-100">Competitor Goal:</span> Complete a project in line with this years
          theme and following one of our 5 tracks. The main objective is to push
          yourselves to create a new and unique project while learning new
          skills.
        </p>
        </div>
    </div>
  );
};

export default Overview;
