export default {
  buscarCandidatos: async () => {
    try {
      // 1. Buscar o concurso pelo código
      await CONCURSO_POR_CODIGO.run();
      // envia notificação ao front
      if (!CONCURSO_POR_CODIGO.data || CONCURSO_POR_CODIGO.data.length === 0) {
        showAlert("Nenhum concurso encontrado com esse código.", "warning");
        return;
      }

      // 2. Buscar os candidatos compatíveis com a lista de vagas do concurso
			// parâmetros preenchidos conforme resposta da requisição anterior
      await CANDIDATOS_POR_TIPO_DE_VAGA.run();
			// envia notificação ao front
      if (!CANDIDATOS_POR_TIPO_DE_VAGA.data || CANDIDATOS_POR_TIPO_DE_VAGA.data.length === 0) {
        showAlert("Nenhum candidato encontrado com as profissões compatíveis.", "info");
      }

    } catch (error) {
      showAlert("Erro ao buscar candidatos: " + error.message, "error");
      console.error("Erro em buscarCandidatos:", error);
    }
  }
};
