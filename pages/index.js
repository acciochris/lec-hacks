import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <div className="horizontal">
        <div>
          <h1 className="title">LEC hacks</h1>
          <h2 className="subtitle">
            LEC Hacks is a high-school-student-run hackathon where participants
            can explore the many different parts of engineering, computer
            science, and coding.
          </h2>
        </div>
        <div className="space">
          <img
            classname="image"
            src="https://media.discordapp.net/attachments/921990668853858324/1029952742543859722/Untitled_Artwork.png?width=1422&height=1066"
            width={(480 * 3) / 2 - 128}
          />
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="horizontal-reverse">
        <div>
          <h1 className="title-sub">About Us</h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
            risus feugiat in ante. Duis at consectetur lorem donec massa sapien.
            Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Amet
            nisl purus in mollis nunc sed id semper. Cursus vitae congue mauris
            rhoncus aenean. Congue eu consequat ac felis donec. Eu scelerisque
            felis imperdiet proin fermentum leo vel. Vulputate eu scelerisque
            felis imperdiet proin. Sit amet consectetur adipiscing elit
            pellentesque habitant morbi. Gravida dictum fusce ut placerat orci
            nulla pellentesque dignissim enim.
          </p>
        </div>
        <div className="space">
          <img
            classname="image"
            src="https://media.discordapp.net/attachments/921990668853858324/1029952742543859722/Untitled_Artwork.png?width=1422&height=1066"
            width={(480 * 3) / 2 - 128}
          />
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="horizontal">
        <div>
          <h1 className="title-sub">LEC hacks</h1>
          <p className="subtitle">
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 2. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. 3.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="space">
          <img
            classname="image"
            src="https://media.discordapp.net/attachments/921990668853858324/1029952742543859722/Untitled_Artwork.png?width=1422&height=1066"
            width={(480 * 3) / 2 - 128}
          />
        </div>
      </div>
    </div>
  );
}
