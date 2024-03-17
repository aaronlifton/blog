import { render } from "react-dom";
import React from "react";
const A11yDialogExample = () => {
  const openDialog = () => {
    document.getElementById("a11y-dialog").style.display = "block";
    document.getElementById("dialog-backdrop").style.display = "block";
    // Set focus on the dialog or its first focusable element
    document.getElementById("a11y-dialog").focus();
  };
  const closeDialog = () => {
    document.getElementById("a11y-dialog").style.display = "none";
    document.getElementById("dialog-backdrop").style.display = "none";
    // Return focus to the element that opened the dialog
    document.getElementById("open-dialog-btn").focus();
  };
  return (
    <main className="p-4">
      <button
        id="open-dialog-btn"
        onClick={openDialog}
        className="py-2 px-4 border rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Open Dialog
      </button>

      <div
        id="dialog-backdrop"
        className="fixed inset-0 bg-black bg-opacity-50 hidden"
        aria-hidden="true"
      ></div>

      <div
        id="a11y-dialog"
        className="hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg"
        role="dialog"
        aria-labelledby="dialog-title"
        aria-modal="true"
        tabIndex="-1"
      >
        <h2 id="dialog-title" className="text-lg font-bold mb-4">
          Accessibility Dialog
        </h2>
        <p className="mb-4">
          This dialog is designed to be accessible for all users, including
          those using screen readers or keyboard navigation.
        </p>
        <button
          onClick={closeDialog}
          className="py-2 px-4 border rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Close Dialog
        </button>
      </div>
    </main>
  );
};
export default A11yDialogExample;
render(<A11yDialogExample />, document.getElementById("root"));
