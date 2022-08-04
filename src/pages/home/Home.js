import React, { useState } from "react";
import AndroidIcon from '@material-ui/icons/Android';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import './home.css';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(name, code, population = 1, size = 1) {
  const density = population / size;
  return { name, code, population, size, density };
}

var conhecimentos = [
  {
    conhecimento: "JavaScript",
    estrelas: 5
  },
  {
    conhecimento: "ReactJS",
    estrelas: 5
  },
  {
    conhecimento: "HTML5/CSS3",
    estrelas: 5
  },
  {
    conhecimento: "Java para android",
    estrelas: 3
  },
  {
    conhecimento: "C/C++",
    estrelas: 3
  },
  {
    conhecimento: "Git",
    estrelas: 4
  },
  {
    conhecimento: "Python",
    estrelas: 2
  },
  {
    conhecimento: "MySQL, Postgres",
    estrelas: 4
  },
  {
    conhecimento: "Linux",
    estrelas: 3
  },
  {
    conhecimento: "Testes automatizados",
    estrelas: 2
  },
  {
    conhecimento: "Análise de sistemas",
    estrelas: 3
  },
  {
    conhecimento: "Documentação de Software",
    estrelas: 5
  }
]

var rows = [];

for (var i = 0; i < conhecimentos.length; i++) {
  rows.push(createData(conhecimentos[i].conhecimento, conhecimentos[i].estrelas))
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

function Home() {

  const classes = useStyles();
  const [selectedMenu, setSelectedMenu] = useState("sobre");

  function countStars(stars) {
    var arr = []
    for (var i = 0; i < stars; i++) {
      arr.push(i);
    }

    return (
      <div>{arr.map((item) => (<StarOutlineIcon className="stars" style={{ color: "yellow" }} />))}</div>
    )
  }

  return (
    <div className="root">
      <div className='justify'>
        <div className="cabecalho">
          <div className='logo'>
            <div className="titulo">
              <div className="iconAndroid">
                <AndroidIcon />
              </div>
              <div>
                {"Felipe Santos"}
              </div>
              <div className="iconDesktop">
                <DesktopMacIcon />
              </div>
            </div>
            <div className="subTitulo">Engenheiro de Software</div>
          </div>
          <div className='botoes' >
            {selectedMenu === "sobre"
              ?
              <div className='botaoCabecalhoSelected' onClick={() => setSelectedMenu("sobre")}>Sobre Mim</div>
              :
              <div className='botaoCabecalhoUnSelected' onClick={() => setSelectedMenu("sobre")}>Sobre Mim</div>
            }
            {selectedMenu === "projetos"
              ?
              <div className='botaoCabecalhoSelected' onClick={() => setSelectedMenu("projetos")}>Projetos</div>
              :
              <div className='botaoCabecalhoUnSelected' onClick={() => setSelectedMenu("projetos")}>Projetos</div>
            }
            {selectedMenu === "carreira"
              ?
              <div className='botaoCabecalhoSelected' onClick={() => setSelectedMenu("carreira")}>Carreira</div>
              :
              <div className='botaoCabecalhoUnSelected' onClick={() => setSelectedMenu("carreira")}>Carreira</div>
            }
            {selectedMenu === "contato"
              ?
              <div className='botaoCabecalhoSelected' onClick={() => setSelectedMenu("contato")}>Contato</div>
              :
              <div className='botaoCabecalhoUnSelected' onClick={() => setSelectedMenu("contato")}>Contato</div>
            }
          </div>
        </div>
      </div>
      {selectedMenu === "sobre"
        ?
        <div className="justify">
          <div>
            <div className="sobreDiv">
              <div className="leftDiv1">
                Sou aluno graduando em Engenharia de Software pela Universidade Federal do Ceará - UFC. Sempre tive interesse e curiosidade por tecnologia, isso me motivou a seguir nessa área e ganhar a vida com isso. Com um gosto especial por desenvolvimento web.
              </div>
              <div className="rightDiv1">
                Um pouco sobre mim...
              </div>
            </div>
            <div className="sobreDiv2">
              <div className="leftDiv2">
                Habilidades
              </div>
              <div className="rightDiv2">
                
              </div>
            </div>
          </div>
        </div>
        :
        ""
      }
      <div style={{ height: "100vw", backgroundColor: "gray" }}></div>
    </div >
  );
}

export default Home;
