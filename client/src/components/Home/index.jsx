import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./styles.module.css"; // Update the path to your CSS module file

function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isWorker, setIsWorker] = useState(false); // Assuming default value is false
  const [isAdmin, setIsAdmin] = useState(false); // Assuming default value is false

  useEffect(() => {
    const userEmail = localStorage.getItem('email');
    fetchUser(userEmail);
  }, []);

  async function fetchUser(userEmail) {
    const urlEncodedEmail = encodeURIComponent(userEmail);
    try {
      const response = await axios.get("http://localhost:3000/api/user/email/${urlEncodedEmail}");
      const userData = response.data;
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setEmail(userData.email);
      setIsWorker(userData.isWorker);
      setIsAdmin(userData.isAdmin);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  return (
    <div className={styles.home_container}>
      <div className={styles.home_form_container}>
        <div className="card_container">
          <div className="_card">
            <h2>פרופיל</h2>
            <div className="form-group">
              <p>שם פרטי: {firstName}</p>
              <p>שם משפחה: {lastName}</p>
              <p>אימייל : {email}</p>
            </div>
          </div>

          {isWorker && (
            <div className="worker-specific-content">
              <h1>עובד</h1>
            </div>
          )}

          {isAdmin && (
            <div className="admin-specific-content">
              <h1>מנהל</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
