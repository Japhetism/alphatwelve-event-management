import { FC } from "react";

export interface ISideMenuItem {
    id: number;
    name: string;
    link: string;
    showNotification?: boolean;
    icon: FC<React.SVGProps<SVGSVGElement>>;
}