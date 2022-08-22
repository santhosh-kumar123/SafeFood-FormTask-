import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import Styles from "./sidebar.module.css";

function Home() {


    const navigate = useNavigate()

    return (
      <section className={Styles.sidebarSection}>
        <h2
          style={{
            color: "rgb(28,108,89)",
            textAlign: "center",
            marginTop: "18px",
          }}
        >
          Dashboard
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "120px",
          }}
          className={Styles.sidediv1}
        >
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: "120px",
            }}
          >
            <li>
              <Link style={{ color: "green" }} to="/">
                LogOut
              </Link>
            </li>
          </ul>
        </div>
      </section>
    );
}

export default Home