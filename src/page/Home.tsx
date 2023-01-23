import { IoLogoSteam, IoLogoWhatsapp, IoLogoYoutube, IoLogoDiscord } from "react-icons/io5";

import './Home.css'

export function Home() {

  function toggleMode() {
    const html = document.documentElement;

    html.classList.toggle("light");
  }

  return (
    <div className='container'>
      <div id="profile">
        <img src="https://github.com/heitor3.png" alt="foto de perfil do usuário" />
        <p>@heitor_fer</p>
      </div>
      <div id="switch">
        <button onClick={toggleMode} />
        <span></span>
      </div>

      <ul>
        <li>
          <a target='_blank' href='https://github.com/heitor3'>GitHub</a>
        </li>

        <li>
          <a target='_blank' href='https://www.linkedin.com/in/heitor-fernandes-0b7406198/'>LinkedIn</a>
        </li>

        <li>
          <a target='_blank' href='https://www.instagram.com/heitor_fer/'>Instagram</a>
        </li>

        <li>
          <a target='_blank' href='#'>Twitter</a>
        </li>
      </ul>
      <div id="social-links">
        <a href="#" target='_blank' >
          <IoLogoWhatsapp />
        </a>

        <a href="#" target='_blank' >
          <IoLogoYoutube />
        </a>

        <a href="#" target='_blank' >
          <IoLogoDiscord />
        </a>

        <a href="#" target='_blank' >
          <IoLogoSteam />
        </a>

      </div>

      <footer>
        Feito com ♥ por <a href="https://github.com/heitor3">Heitor Pires</a>
      </footer>
    </div>

  )
}