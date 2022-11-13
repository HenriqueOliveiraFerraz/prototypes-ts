export interface NumeroExtensoRequest {
  acao: 'escrever_extenso';
  /** Unidade numérica simples ou monetária em real */
  unidade: 'N' | 'R';
  /** Valor do número a procurar o extenso */
  txt_valor: string;
  /** Tipo da letra, como minúscula, maiúscula e primeira maiúscula */
  tipo_letra: 'mi' | 'ma' | 'pr';
}
