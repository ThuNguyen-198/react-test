import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  showAlert: boolean;
  onSelect: () => void;
}
const Alert = ({ children, showAlert, onSelect }: Props) => {
  return (
    <div
      className={
        showAlert
          ? "alert alert-warning alert-dismissible show"
          : "alert alert-warning alert-dismissible fade"
      }
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onSelect}
      ></button>
    </div>
  );
};

export default Alert;
