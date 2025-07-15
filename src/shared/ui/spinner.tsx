import { BeatLoader } from "react-spinners";

import type { LoaderSizeMarginProps } from "react-spinners/helpers/props";

import { cn } from "@shared/lib";

interface ISpinnerProps extends LoaderSizeMarginProps {}

export const Spinner = ({ className, color, ...props }: ISpinnerProps) => (
  <BeatLoader
    className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", className)}
    color={color ?? "yellow"}
    {...props}
  />
);
