import { IIcon } from "../../interfaces/icon";

export const ChevronDownIcon = ({ color }: IIcon) => (
    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.25 0.75L4 4.25L0.75 0.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)