export async function buscarEnderecoPorCep(cep) {
  const cepLimpo = String(cep).replace(/\D/g, '');
  if (!cepLimpo || cepLimpo.length !== 8) {
    return { success: false, error: 'CEP inválido' };
  }

  const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;

  try {
    const resp = await fetch(url, { method: 'GET' });
    if (!resp.ok) {
      return { success: false, error: `Erro na requisição: ${resp.status}` };
    }
    const data = await resp.json();
    if (data.erro) {
      return { success: false, error: 'CEP não encontrado' };
    }
    const endereco = {
      logradouro: data.logradouro || '',
      bairro: data.bairro || '',
      cidade: data.localidade || '',
      uf: data.uf || '',
      complemento: data.complemento || '',
      cep: cepLimpo,
      texto: `${data.logradouro || ''}${data.complemento ? ' ' + data.complemento : ''}, ${data.bairro || ''} - ${data.localidade || ''}/${data.uf || ''}`
    };

    return { success: true, endereco };
  } catch (error) {
    return { success: false, error: error.message || 'Erro desconhecido' };
  }
}