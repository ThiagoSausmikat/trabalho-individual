import { FaUser, FaLock } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import "./Login.css";

const Login = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificacao, setVerificacao] = useState(false);


  function addCount() {
    setCount(count => count + 1);
    console.log(count);
    console.log(email)
    console.log(password);
    console.log(verificacao);
  }

  useEffect(() => {
    if (email == 'thiago@gmail.com' && password == '12345') {
      setVerificacao(true);
    } else {
      setVerificacao(false);
    }
  }, [email, password]);

  return (
    <div className='Login'>
      <div className="container">
        <h1>Acesse o sistema</h1>
        <div className='input-field'>
          <input type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
          <FaUser className='icon' />
        </div>
        <div className='input-field'>
          <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
          <FaLock className='icon' />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de min
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button onClick={addCount}>Entrar</button>

        <div className="signup-link">
          <p>Não tem uma conta? <a href="#">Registrar</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login
