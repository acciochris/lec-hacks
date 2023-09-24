'use client';

import { useState } from "react";

function Track({ title, content, fullspan }: { title: string, content: string, fullspan?: boolean }) {
  const [collapsed, setCollapsed] = useState(true);
  const collapsedClassName = collapsed ? "collapse-close" : "collapse-open";
  const fullspanClassName = (fullspan || false) ? " col-span-full" : "";
  return (
    <div
      className={`collapse bg-zinc-800 h-min my-6 w-full md:w-2/3 ${collapsedClassName}` + fullspanClassName}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium px-10 text-gray-100">
        {title}
      </div>
      <div className="collapse-content text-gray-300">
        <p>{content}</p>
      </div>
    </div>
  );
}

const Tracks = () => (
  <div className="w-full p-12 md:p-16 justify-items-center" id="tracks">
    <h2 className="mx-auto max-w-4xl mb-4 font-display text-4xl font-bold tracking-normal sm:text-5xl text-gray-200">
      Competitive Tracks
    </h2>
    <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center">
      <Track
        title="Machine Learning"
        content="Projects submitted to this track must have at least one machine
        learning or artificial intelligence component or application in
        the final product. Be prepared to explain your machine learning
        components and how you implemented the to our judges in your
        demo video."
      />
      <Track
        title="Web Development"
        content="Projects submitted to this track must be based on the web. Feel
        free to host your own web apps and be prepared to submit a demo
        of your projects to our judges!"
      />
      <Track
        title="Mobile App Development"
        content="Projects submitted to this track must be based on a mobile
        operating system. Be prepared to show the judges a demo of your
        projects project in action."
      />
      <Track
        title="Game Development"
        content="Develop a game in any game engine of your choosing. Be sure to
        create a demo video of your game in action and/or submit a
        playable version of your game."
      />
      <Track
        title="Overall"
        content="No restrictions! Submit any project you create, you have full
      creative freedom to develop anything of your choosing. Besides being
      school appropriate, the only requirement is to be related to the
      theme."
        fullspan
      />
    </div>
  </div>
);

export default Tracks;
