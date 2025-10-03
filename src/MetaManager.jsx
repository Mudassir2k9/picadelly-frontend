// src/MetaManager.jsx
import { useEffect } from "react";

const MetaManager = ({ title, meta = [] }) => {
  useEffect(() => {
    // Set <title>
    if (title) {
      document.title = title;
    }

    // Loop through all meta tags
    meta.forEach(({ name, property, content }) => {
      if (!content) return;

      // Decide selector
      let selector = name
        ? `meta[name="${name}"]`
        : property
        ? `meta[property="${property}"]`
        : null;

      if (!selector) return;

      // Check if tag exists
      let element = document.querySelector(selector);

      // If not exists, create new
      if (!element) {
        element = document.createElement("meta");
        if (name) element.setAttribute("name", name);
        if (property) element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      // Update content
      element.setAttribute("content", content);
    });
  }, [title, meta]);

  return null; // doesn't render anything
};

export default MetaManager;
