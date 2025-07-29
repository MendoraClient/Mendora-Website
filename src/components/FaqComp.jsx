"use client";

import React, { useState, useRef, useEffect } from "react";

const AnimatedCollapse = ({ isOpen, children }) => {
  const ref = useRef();
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      style={{ height }}
      className="overflow-hidden transition-[height] duration-300 ease-in-out"
      aria-hidden={!isOpen}
    >
      <div ref={ref} className="pt-3 text-zinc-300">
        {children}
      </div>
    </div>
  );
};

const FaqComp = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <div
      className="border border-zinc-700 rounded-md p-4 cursor-pointer bg-zinc-800 hover:bg-zinc-700 transition transform hover:scale-[1.02]"
      onClick={() => onToggle(index)}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${index}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onToggle(index)}
    >
      <h2 className="flex justify-between items-center text-xl font-semibold select-none">
        {question}
        <span
          className={`ml-4 text-2xl transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </h2>

      <AnimatedCollapse isOpen={isOpen}>
        <p id={`faq-answer-${index}`} className="text-base leading-relaxed">
          {answer}
        </p>
      </AnimatedCollapse>
    </div>
  );
};

export default FaqComp;
