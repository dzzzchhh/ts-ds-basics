interface INthParameters {
  list: any[];
  th: number;
}
export const nth = (params: INthParameters): any[] =>
  params.list.filter((item, index) => (index + 1) % params.th === 0);
