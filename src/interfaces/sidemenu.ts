import { FC } from "react";

export interface ISideMenuItem {
    id: number;
    name: string;
    link: string;
    icon: FC<React.SVGProps<SVGSVGElement>>;
}