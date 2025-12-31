export default {
	buscarConcursos: async (cpfToConsult) => {
		try {
			// checa se o cpf está no formato certo
			if(cpfToConsult.charAt(3)!="."&&cpfToConsult.charAt(6)!="."&&cpfToConsult.charAt(9)!="-"&&cpfToConsult.leght!=14){
				showAlert("Cpf em formato inválido, use formato 123.456.789-00", "error");
				await PROFISSAO_POR_CPF.run();
				await CONCURSOS_POR_PROFISSAO.run();
				return;
			}
			// trim só para garantir
			const cpf = cpfToConsult.trim();




			// Executa a API (o parâmetro "cpf" será injetado na URL)
			await PROFISSAO_POR_CPF.run();
			// Teste de error
			if (!PROFISSAO_POR_CPF.data?.length) {
				showAlert("Nenhum candidato encontrado", "error");
				await CONCURSOS_POR_PROFISSAO.run();
				return;
			}

			// Se chegou aqui, a consulta funcionou!
			showAlert("Dados carregados ! ", "success");
			// chama requisição (parametros preenchido automaticamente com base na requisição anterior)
			await CONCURSOS_POR_PROFISSAO.run();
			if (!CONCURSOS_POR_PROFISSAO.data?.length) {
				showAlert("Nenhum concurso para este candidato", "error");
				return;
			}

		} catch (error) {
			showAlert("Erro na API: " + error.message, "error");
			console.error(error);
		}
	}
}