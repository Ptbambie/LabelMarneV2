import React, {useState, useContext} from "react";
import axios from "axios";;
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../Context";
import { AdminContext } from "../../../Context";
import './LoginAdmin.css'
import { FiArrowRight } from "react-icons/fi";

const LoginAdmin = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  
  const url = import.meta.env.VITE_BACKEND_URL;

  const {displayLogin} = useContext(LoginContext);
  const {storeAdmin} = useContext(AdminContext)
  const navigate = useNavigate();


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Merci de remplir le nom d'utilisateur et le mot de passe");
    } else {
      axios
        .post(
          `${url}/api/admin-login`,
          { username: username, password: password },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 200) {
            displayLogin();
            storeAdmin(res.data);
            navigate("/admin");
          }
        })
        .catch((err) => {
          console.log(err);
          console.log(err.request); // Affiche les détails de la requête
          console.log(err.message); // Affiche le message d'erreur
          console.log(err.config); // Affiche la configuration de la requête Axios
         
          alert("Nom d'utilisateur ou mot de passe incorrect");
        });
    }
  };

  return (
    <div className="loginAdmin-form-container">
      <form className="loginAdmin-form">
        <h2>Accès à votre espace administrateur</h2>
        <h3>Saisissez votre nom d'utilisateur:</h3>
        <label htmlFor="username">
          <input
            type="username"
            name="username"
            id="username"
            placeholder="admin"
            value={username}
            onChange={handleUsernameChange}
          ></input>
        </label>
        <label htmlFor="password-admin" required>
          <h3>Saisissez votre mot de passe:</h3>
          <input
            type="password"
            name="password-admin"
            id="password-admin"
            placeholder="********"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button
          type="submit"
          className="login-submit-btn-admin"
          onClick={handleSubmit}
        >
          ENTREZ <FiArrowRight className="login-arrow-right" />
        </button>
      </form>
    </div>
  );
};

export default LoginAdmin;
