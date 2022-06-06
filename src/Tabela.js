// Importar useState
import { useState } from "react";

// Componente
function Tabela({ vetor, selecionar }) {
	// useState
	const [termo, setTermo] = useState("");

	// Retorno
	return (
		<div>
			<input
				type='text'
				placeholder='informe o nome'
				className='form-control pesquisa'
				onChange={(evt) => setTermo(evt.target.value)}
			/>

			<table className='table'>
				<thead>
					<tr>
						<th>#</th>
						<th>Nome</th>
						<th>Telefone</th>
						<th>Endereço</th>
						<th>Número</th>
						<th>Cidade</th>
						<th>Estado</th>
						<th>País</th>
						<th>CEP</th>
						<th>Selecionar</th>
					</tr>
				</thead>

				<tbody>
					{vetor
						.filter((obj) => obj.nome.includes(termo))
						.map((item, index) => {
							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{item.nome}</td>
									<td>{item.telefone}</td>
									<td>{item.endereco}</td>
									<td>{item.numero}</td>
									<td>{item.cidade}</td>
									<td>{item.estado}</td>
									<td>{item.pais}</td>
									<td>{item.cep}</td>
									<td>
										<button className='btn btn-success' onClick={() => selecionar(index)}>
											Selecionar
										</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
}

export default Tabela;
