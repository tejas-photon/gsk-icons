import * as React from "react";
import type { SVGProps, FC } from "react";
interface Props extends SVGProps<SVGSVGElement> {
    color?: string;
    size?: number;
}
export const Mic: FC<Props> = ({ size = 24, color = "currentColor", ...props }) => (
    <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
    >
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4" />
    </svg>
);
Mic.displayName = "Mic";
