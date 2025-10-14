import clsx from "clsx";
import React, {
  useMemo,
  type ButtonHTMLAttributes,
  type FC,
  type JSX,
} from "react";
import useBreakpoint from "~/hooks/useBreakpoint";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconBtn?: boolean;
  icon?: JSX.Element;
  label?: string;
  className?: string;
}

const GeneralDefinedClasses =
  "text-black font-rebond border border-solid border-black cursor-pointer";

const ContainerPaddingMappedOnSizeForIcon: Record<ButtonSize, string> = {
  sm: "px-2 py-1 rounded-sm",
  md: "px-5 py-4 rounded-xl",
  lg: "px-5 py-6 rounded-xl",
};

const ContainerPaddingMappedOnSize: Record<ButtonSize, string> = {
  sm: "px-2 py-1.5 rounded-sm",
  md: "px-5 py-3.5 rounded-xl",
  lg: "px-5 py-4 rounded-xl",
};

const TextClassesMappedOnSize: Record<ButtonSize, string> = {
  sm: "text-xs leading-1 font-semibold",
  md: "text-3xl leading-1 font-semibold",
  lg: "text-3xl leading-1 font-semibold",
};

const Button: FC<ButtonProps> = ({
  className = "",
  label = "label",
  iconBtn = false,
  icon,
  ...props
}) => {
  const breakpoint = useBreakpoint();
  const _size: ButtonSize = useMemo(() => {
    if (breakpoint?.isAndAbove("xl", true)) return "lg";
    if (breakpoint?.isAndAbove("md", true)) return "md";
    if (breakpoint?.isAndBelow("xs", true)) return "sm";

    return "md";
  }, [breakpoint]);

  return (
    <button
      className={clsx(
        GeneralDefinedClasses,
        getContainerPaddingMappedOnSizeAndIcon(_size, iconBtn),
        className,
      )}
      {...props}
    >
      <p className={TextClassesMappedOnSize[_size]}>{iconBtn ? icon : label}</p>
    </button>
  );
};

export default Button;

function getContainerPaddingMappedOnSizeAndIcon(
  size: ButtonSize,
  iconBtn: boolean,
) {
  return iconBtn
    ? ContainerPaddingMappedOnSizeForIcon[size]
    : ContainerPaddingMappedOnSize[size];
}
