import React from "react";

function BodyHeader({ title }) {
  return (
    <div className="mt-4">
      <p className="text-primary">
        <strong>{title}</strong>
      </p>
      <hr />
    </div>
  );
}

export default BodyHeader;
