import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

export function Alert() {

    const {alertName, closeAlert} = useContext(ShopContext);

    useEffect(() => {
        const timerID = setTimeout(closeAlert, 1500);

        return () => {
            clearTimeout(timerID);
        }
        // eslint-disable-next-line
    }, [alertName])

    return (
        <div id="toast-container">
            <div className="toast">{alertName} добавлен в корзину</div>
        </div>
    )
}