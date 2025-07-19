interface IBaseApiResponse<Data> {
  statusCode: number;
  message: Data;
}

interface ISvgProps extends React.ComponentProps<"svg"> {
  size?: number;
}
