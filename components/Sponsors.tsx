import Image from "next/image";

const Sponsors = () => (
  <div className="bg-zinc-800 w-full p-8 md:p-16">
    <h2 className="mx-auto max-w-4xl mb-4 font-display text-4xl font-bold tracking-normal sm:text-5xl text-gray-170">
      Sponsors
    </h2>
    <div className="grid sm:grid-cols-3 grid-cols-1 justify-items-center mt-12">
      <Image src="/lec-hacks/image_3.jpg" width={170} height={170} alt="logo" className="mask mask-squircle my-6" />
      <Image src="/lec-hacks/IMG_0777.jpg" width={170} height={170} alt="logo" className="mask mask-squircle my-6" />
      <Image src="/lec-hacks/Untitled_Artwork 3.jpg" width={170} height={170} alt="logo" className="mask mask-squircle my-6" />
    </div>
  </div>
);

export default Sponsors;
