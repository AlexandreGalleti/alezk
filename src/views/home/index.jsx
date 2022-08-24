import "./style.css";

import Code from "../../components/code";

const Home = () => {
  let code = [
    "import pyautogui, time",
    " ",
    "time.sleep(5) ",
    "texto = open('texto.txt',encoding='utf_8') ",
    "for frase in texto:",
    "  pyautogui.typewrite(frase)",
    "  pyautogui.press ('enter')",
  ];

  return (
    <div className="home">
      <h1 className="center"> Anotações de Alexandre </h1>
      <h2 className="center">
        Aqui voce pode encontar algumas das minhas anotações de programação
      </h2>

      <div className="content">
        <h3 className="center">BOT de mensagens do WatsApp</h3>
        <Code code={code} />
      </div>

      <div className="center">
        <a className="btn-white" href="/about">
          Sobre mim
        </a>
      </div>
    </div>
  );
};

export default Home;
