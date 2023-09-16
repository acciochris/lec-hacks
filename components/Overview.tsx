const Overview = () => {
  return (
    <div className="">
        <h2 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">Event Overview</h2>
        <div className="text-left text-gray-400">
        <p>
          <span className="font-display font-bold text-white">Mission Statement:</span> LEC Hacks is a virtual hackathon for
          high-school students worldwide hosted by Lynbrook Engineering Club.
          Through learning and competing about a variety of topics we hope to
          foster an interest in the field of engineering and encourage people to
          explore the various branches of engineering.
        </p>
        <br />
        <p>
          <span>Location:</span> Online via Discord (<a href="https://discord.gg/yEabP55GyJ">Join Here!</a>)
        </p>
        <br />
        <p>
          <span>When:</span> Friday 11/18 @ 9PM PST to Sunday 11/20 @ 9AM PST
        </p>
        <br />
        <p>
          <span>Theme:</span> Wellness
        </p>
        <br />
        <p>
          <span>Competitor Goal:</span> Complete a project in line with this years
          theme and following one of our 5 tracks. The main objective is to push
          yourselves to create a new and unique project while learning new
          skills.
        </p>
        </div>
    </div>
  );
};

export default Overview;
