// Hooks
import { useState } from "react";

// Importando o CSS
import "./App.css";

// Importando o componente formulário
import Formulario from "./Formulario";

// Importando o componente tabela
import Tabela from "./Tabela";

// Componente
function App() {
	// useState
	const [indiceVetor, setIndiceVetor] = useState("");
	const [btnCadastrar, setBtnCadastrar] = useState(true);
	const [nome, setNome] = useState("");
	const [telefone, setTelefone] = useState("");
	const [endereco, setEndereco] = useState("");
	const [numero, setNumero] = useState("");
	const [cidade, setCidade] = useState("");
	const [estado, setEstado] = useState("");
	const [pais, setPais] = useState("");
	const [cep, setCEP] = useState("");
	const [vetor, setVetor] = useState([]);

	// Função para cadastrar
	function cadastrar() {
		let obj = { nome: nome, telefone: telefone, endereco: endereco, numero: numero, cidade: cidade, estado: estado, pais: pais, cep: cep };
		setVetor([...vetor, obj]);

		setNome("");
		setTelefone("");
		setEndereco("");
		setNumero("");
		setCidade("");
		setEstado("");
		setPais("");
		setCEP("");
	}

	// Função para selecionar o usuário
	function selecionar(indice) {
		setIndiceVetor(indice);
		setNome(vetor[indice].nome);
		setTelefone(vetor[indice].telefone);
		setEndereco(vetor[indice].endereco);
		setNumero(vetor[indice].numero);
		setCidade(vetor[indice].cidade);
		setEstado(vetor[indice].estado);
		setPais(vetor[indice].pais);
		setCEP(vetor[indice].cep);
		setBtnCadastrar(false);
	}

	// Função para alterar os dados
	function alterar(indice) {
		let obj = { nome: nome, telefone: telefone, endereco: endereco, numero: numero, cidade: cidade, estado: estado, pais: pais, cep: cep };

		let copiaVetor = [...vetor];
		copiaVetor[indiceVetor] = obj;
		setVetor(copiaVetor);
		setNome("");
		setTelefone("");
		setEndereco("");
		setNumero("");
		setCidade("");
		setEstado("");
		setPais("");
		setCEP("");
		setBtnCadastrar(true);
	}

	// Função para remover
	function remover() {
		let copiaVetor = [...vetor];
		copiaVetor.splice(indiceVetor, 1);
		setVetor(copiaVetor);
		setNome("");
		setTelefone("");
		setEndereco("");
		setNumero("");
		setCidade("");
		setEstado("");
		setPais("");
		setCEP("");
		setBtnCadastrar(true);
	}

	// Função para cancelar
	function cancelar() {
		setNome("");
		setTelefone("");
		setEndereco("");
		setNumero("");
		setCidade("");
		setEstado("");
		setPais("");
		setCEP("");
		setBtnCadastrar(true);
	}

	// Retorno
	return (
		<div>
			<Formulario
				btnCadastrar={btnCadastrar}
				setNome={setNome}
				setTelefone={setTelefone}
				setEndereco={setEndereco}
				setNumero={setNumero}
				setCidade={setCidade}
				setEstado={setEstado}
				setPais={setPais}
				setCEP={setCEP}
				setVetor={setVetor}
				cadastrar={cadastrar}
				nome={nome}
				telefone={telefone}
				endereco={endereco}
				numero={numero}
				cidade={cidade}
				estado={estado}
				pais={pais}
				cep={cep}
				alterar={alterar}
				remover={remover}
				cancelar={cancelar}
			/>
			<Tabela vetor={vetor} selecionar={selecionar} />
		</div>
	);
}

// Exportar
export default App;
