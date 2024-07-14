import styles from "./styles.module.css";
//import { NavLink } from "react-router-dom";
import logo from '../../assests/images/logo.png'; // Update the path to your logo image

const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_form_container}>
        <div className={styles.frame}>
          <h1>Welcome to Our QA Tool!</h1>
          
    
        
          <p>Effortlessly enhance code quality with our advanced AI-driven QA tools.</p>
        </div>
        <div className={styles.right}>

          {/* Right side image */}
          <img src={logo} alt="Logo"className={styles.frame_image} />

        </div>
        {/* You can add more content or components here */}
      </div>
    </div>
  );
};

export default Home;
<img src={logo} alt="Logo" width="150" height="90" />