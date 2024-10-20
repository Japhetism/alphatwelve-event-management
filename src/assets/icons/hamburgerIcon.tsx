import { IIcon } from "../../interfaces/icon";

export const HamburgerIcon = ({ color }: IIcon) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7H7M20 7H11M20 17H17M4 17H13M4 12H20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
)