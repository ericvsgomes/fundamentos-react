import React from "react";
import "./App.css";

import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import Card from "./components/basicos/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import Mega from "./components/mega/Mega";

const app = _ => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#13 - Mega" color="#B9006E">
                <Mega quantidade={7} />
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10} />
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                <Input />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#DAA520">
                <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#1E90FF">
                <DiretaPai />
            </Card>
            
            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={15} />
                <UsuarioInfo usuario={{ nome: 'João' }} />
                <UsuarioInfo usuario={{ email: 'teste@bc.com' }} />
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#FF432E">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 - Repetição" color="#CFCCF8">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componentes com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={100} max={1000} />
            </Card>
        
            <Card titulo="#03 - Fragmentos" color="#E94C6F">
                <Fragmento />    
            </Card>
            
            <Card titulo="#02 - Com Parametro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    subtitulo="Pedro" nota={9.3} />
                <ComParametro
                    titulo="Situação do Aluno"
                    subtitulo="Maria" nota={9.9} />
            </Card>
            
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>        
    </div>
)

export default app;