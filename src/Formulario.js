// Componente
function Formulario({
	btnCadastrar,
	setNome,
	setTelefone,
	setCidade,
	setEndereco,
	setNumero,
	setEstado,
	setPais,
	setCEP,
	cadastrar,
	nome,
	telefone,
	endereco,
	numero,
	cidade,
	estado,
	pais,
	cep,
	alterar,
	remover,
	cancelar,
}) {
	// Retorno
	return (
		<form>
			<input
				type='text'
				placeholder='nome'
				className='form-control'
				value={nome}
				onChange={(e) => setNome(e.target.value)}
			/>
			<input
				type='text'
				placeholder='telefone'
				className='form-control'
				value={telefone}
				onChange={(e) => setTelefone(e.target.value)}
			/>
			<input
				type='text'
				placeholder='endereco'
				className='form-control'
				value={endereco}
				onChange={(e) => setEndereco(e.target.value)}
			/>
			<input
				type='text'
				placeholder='numero'
				className='form-control'
				value={numero}
				onChange={(e) => setNumero(e.target.value)}
			/>
			<input
				type='text'
				placeholder='cidade'
				className='form-control'
				value={cidade}
				onChange={(e) => setCidade(e.target.value)}
			/>
			<input
				type='text'
				placeholder='estado'
				className='form-control'
				value={estado}
				onChange={(e) => setEstado(e.target.value)}
			/>
			<input
				type='text'
				placeholder='pais'
				className='form-control'
				value={pais}
				onChange={(e) => setPais(e.target.value)}
			/>
			<input
				type='text'
				placeholder='cep'
				className='form-control'
				value={cep}
				onChange={(e) => setCEP(e.target.value)}
			/>

			{btnCadastrar ? (
				<input type='button' value='Cadastrar' className='btn btn-primary' onClick={cadastrar} />
			) : (
				<>
					<input type='button' value='Alterar' className='btn btn-secondary' onClick={alterar} />
					<input type='button' value='Excluir' className='btn btn-danger' onClick={remover} />
					<input type='button' value='Cancelar' className='btn btn-success' onClick={cancelar} />
				</>
			)}
		</form>
	);
}

// Exportar
export default Formulario;
