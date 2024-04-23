import { Notification } from "./Notification.styled";

const NotificationMessage = ({ message }) => {
    return (
        <Notification>{message}</Notification>
    )
};

export default NotificationMessage;