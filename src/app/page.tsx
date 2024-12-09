
import Header from "@/app/components/header";
export default function Page() {
  return (
    <div><Header/>
    <div className="containers">
      <div className="info-section">
        <h1>Hi, I'm <b>Shiza Tariq</b></h1>
        <p>
          I am a web developer with a passion for creating beautiful and functional websites. To visit different pages of this website please click the above buttons in the header.
        </p>
        <p>
          Feel free to contact me for collaborations or if you want to learn more about my projects.
        </p>
      </div>
      <div className="image-section">
        <img src="/shizpic.png" alt="Profile" className="profile-image" />
      </div>
    </div>
    </div>
  );
}
