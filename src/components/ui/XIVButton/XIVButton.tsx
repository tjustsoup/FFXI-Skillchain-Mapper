import React from "react";
import "./XIVButton.css";

export default function XIVButton(props: {
  url?: string;
  children?: React.ReactNode;
  twcss?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {

  function createRipple(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const circle = document.createElement("span");

    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add("ripple");

    const ripple = btn.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    requestAnimationFrame(() => {
      btn.appendChild(circle);
      circle.style.animation = "none";
      requestAnimationFrame(() => {
        circle.style.animation = "";
      });
    });
  }

  return (
    <button
      className={`${props.twcss ? props.twcss : ""} xiv-btn`}
      style={props.url ? { backgroundImage: `url(${props.url})` } : {}}
      onMouseUp={createRipple}
      {...props}
    >
      {props.children}
    </button>
  )
}