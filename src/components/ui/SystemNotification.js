import React from "react";

export const SystemNotification = (props) => {
  return (
    <>
      <div className="bg-lock"></div>
      <div className="notification-wrapper-system">
        <h3 className="h3">{props.message}</h3>
      </div>
    </>
  );
};
