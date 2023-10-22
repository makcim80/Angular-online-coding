export interface Response {
  language: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number
  };
  items: ResponseItem[]
}

export interface ResponseItem {
  id: number;
  name: string;
  gender: string;
  age: number;
  img: string
}
