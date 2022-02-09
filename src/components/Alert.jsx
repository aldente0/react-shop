import { useEffect } from "react";

export function Alert(props) {
    const {
        name,
        closeAlert
    } = props;

    useEffect(() => {
        const timerID = setTimeout(closeAlert, 1500);

        return () => {
            clearTimeout(timerID);
        }
    }, [name])

    return (
        <div id="toast-container">
            <div className="toast">{name} добавлен в корзину</div>
        </div>
    )
}