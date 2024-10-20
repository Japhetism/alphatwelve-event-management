import { IIcon } from "../../interfaces/icon";

export const ChevronLeftIcon = ({ color }: IIcon) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.625 4.375L4.875 6L6.625 7.625" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)