import React from 'react';

export default ({ onDelete, children }) => (
  <button
    className="inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150"
    tabIndex="-1"
    type="button"
    onClick={onDelete}
  >
    {children}
  </button>
);