export interface ChartDataInterface {
  labels: (string | undefined)[];
  datasets: {
    data: (string | number)[];
    backgroundColor: string[];
    borderColor: string;
    borderWidth: number;
  }[];
}
