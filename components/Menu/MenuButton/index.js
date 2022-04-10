import { useContext } from "react";
import { MenuContext } from '../MenuManager';
import cn from "classnames"
import './style.scss';

export default function MenuButton() {
    const { setOpen, open } = useContext(MenuContext);

    return (
        <label htmlFor="toggle" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
        </label>
    );
}
