import Head from "next/head";
import { useState } from "react";

import styles from "../styles/components/Login.module.css";

interface LoginProps {
  token: String;
}

export default function Login(props: LoginProps) {
  const [username, setUsername] = useState("");

  function login() {
    const ID_CLIENT = process.env.NEXT_PUBLIC_GIT_HUB_ID_CLIENT;
    const URL_REDIRECT = process.env.NEXT_PUBLIC_GIT_HUB_REDIRECT_URL
    
    console.log(URL_REDIRECT);

    if (username) {
      window.location.href = `https://github.com/login/oauth/authorize?login=${username}&client_id=${ID_CLIENT}&redirect_uri=${URL_REDIRECT}&scope=read:user`;
    } else {
      alert("Insira seu username do Github");
    }
  }

  return (
    <div>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <div className={styles.containerLogin}>
        <div className={styles.containerBox}>
          <img className={styles.imgMoveIt} src="/logo-full.svg" />
          <p className={styles.logtinInitial}>Bem-vinde</p>
          <img
            className={styles.iconGithub}
            src="/icons/github.svg"
            alt="Icone Github"
          />
          <p className={styles.loginText}>
            Faça login com seu Github para começar{" "}
          </p>
          <input
            id="inputID"
            placeholder="Digite seu username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <div className={styles.enterLogin} onClick={login}>
            <img src="/icons/arrow.svg" alt="Icone seta para entrar" />
          </div>
        </div>
      </div>
    </div>
  );
}
