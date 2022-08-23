import React from "react";

export function BirdButton({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
