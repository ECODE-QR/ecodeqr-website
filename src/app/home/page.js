import "./home.css";
import Navbar from "../components/navbar/navbar";




export default function Home() {
  return (
    <div className="mainContainer">
      <div className="header">
        <h1>ecode qr story hub</h1>
      </div>
      <div className="navbar">
        <Navbar/>
        </div>
        <div>
          <img src='/ecode-logo.gif' className="EcodeGif"/>
        </div>
        
    </div>
  );
}
