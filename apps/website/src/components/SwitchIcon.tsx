import React from "react";
export const SwitchIcon = ({
  fill = "currentColor",
  size,
  height,
  width,
  label,
  ...props
}: any) => {
  return (
    <svg
      width={size || width || 16}
      height={size || height || 16}
      viewBox="0 0 16 16"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_264_1088)">
        <path
          d="M11.3333 0.666748L14 3.33341M14 3.33341L11.3333 6.00008M14 3.33341L4.66667 3.33341C3.95942 3.33341 3.28115 3.61437 2.78105 4.11446C2.28095 4.61456 2 5.29284 2 6.00008V7.33341M4.66667 15.3334L2 12.6667M2 12.6667L4.66667 10.0001M2 12.6667L11.3333 12.6667C12.0406 12.6667 12.7189 12.3858 13.219 11.8857C13.719 11.3856 14 10.7073 14 10.0001V8.66675"
          stroke={fill}
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_264_1088">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
