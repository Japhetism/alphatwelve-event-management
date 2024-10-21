import { IIcon } from "../../interfaces/icon";

export const ChevronRightIcon = ({ color }: IIcon) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.375 4.375L7.125 6L5.375 7.625" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)