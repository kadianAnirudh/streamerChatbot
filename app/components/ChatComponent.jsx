"use client";

import React, { useEffect } from "react";

const ChatComponent = () => {
  useEffect(() => {
    // Define your chatbaseConfig object
    const chatbaseConfig = {
      chatbotId: "n6HeWaOCGXsG-8o7_XTFl",
    };

    // Create a script element for the Chatbase embed script
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "n6HeWaOCGXsG-8o7_XTFl";
    script.defer = true;

    // Append the script element to the document's head
    document.head.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div>{/* Your chat component JSX */}</div>;
};

export default ChatComponent;
