/* istanbul ignore file */
import axios from 'axios';
import { NumeroExtensoRequest } from './interfaces/numero.extenso';

const baseUrl = 'https://www.4devs.com.br';
const ferramentasEndpoint = `${baseUrl}/ferramentas_online.php`;

export function getNumberInFull(request: NumeroExtensoRequest) {
  const params = new URLSearchParams();

  params.append('acao', request.acao);
  params.append('unidade', request.unidade);
  params.append('txt_valor', request.txt_valor);
  params.append('tipo_letra', request.tipo_letra);

  return axios.post<string>(ferramentasEndpoint, params, {
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    responseType: 'text'
  });
}

export function getArrayNumbersInFull(requests: NumeroExtensoRequest[]) {
  const axiosRequests = requests.map((request) => {
    const params = new URLSearchParams();

    params.append('acao', request.acao);
    params.append('unidade', request.unidade);
    params.append('txt_valor', request.txt_valor);
    params.append('tipo_letra', request.tipo_letra);

    return axios.post<string>(ferramentasEndpoint, params, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      responseType: 'text'
    });
  });

  return axios.all(axiosRequests);
}
