export interface IProps {
  children?: React.ReactNode | React.ReactNode[];
  message?: string;
}

export interface IPropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export interface IPropsHeader {
  children?: React.ReactNode;
}
