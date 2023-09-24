const Schedule = () => {
  return (
    <div className="w-full p-12 md:p-16" id="schedule">
      <h2 className="mx-auto max-w-4xl mb-4 font-display text-4xl font-bold tracking-normal sm:text-5xl text-gray-200">
        Schedule
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 text-gray-300 justify-items-stretch">
        <div className="card bg-zinc-800 my-6 md:mx-6">
          <div className="card-body items-center text-center">
            <h3 className="card-title text-2xl text-gray-100">Nov 18th</h3>
            <p>9:00PM - Opening Ceremony</p>
            <p>10:00PM - Game Time</p>
            <p>11:00PM - Hacking Begins</p>
          </div>
        </div>
        <div className="card bg-zinc-800 my-6 md:mx-6">
          <div className="card-body items-center text-center">
            <h3 className="card-title text-2xl text-gray-100">Nov 19th</h3>
            <p>10:00AM - Workshop #1</p>
            <p>12:00PM - Team Check-in</p>
            <p>2:00PM - Workshop #2</p>
            <p>4:00PM - Workshop #3</p>
            <p>6:00PM - Workshop #4</p>
            <p>7:00PM - Workshop #5</p>
          </div>
        </div>
        <div className="card bg-zinc-800 my-6 md:mx-6">
          <div className="card-body items-center text-center">
            <h3 className="card-title text-2xl text-gray-100">Nov 20th</h3>
            <p>8:00AM - Final Hour Reminder</p>
            <p>9:00AM - Submissions Due</p>
            <p>5:00pm - Results Released</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
