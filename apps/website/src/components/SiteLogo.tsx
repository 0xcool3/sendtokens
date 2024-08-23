import type { IconSvgProps } from "../types";

import React from "react";

export const SiteLogo: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <img
    className="ilter brightness-0 dark:invert "
    width={size || width}
    height={size || height}
    src="/logo.png"
  ></img>
);
