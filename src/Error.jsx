import React from 'react';
export function Error({}) {
  return (
    <div className="error">
      <span>⛔</span>
      <span>404 Error</span>
      <button type="button" onClick={() => location.reload()} className="dice">
        Refresh🔃
      </button>
    </div>
  );
}
