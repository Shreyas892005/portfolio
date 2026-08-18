import { useState, useRef, useEffect } from "react";
import { MdChatBubbleOutline, MdClose, MdSend, MdAdd } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import "./styles/Chatbot.css";

interface Message {
  role: "user" | "model";
  content: string;
}

const QUICK_PROMPTS = [
  "Tell me about Shreyas",
  "Show me his projects",
  "What are his skills?",
  "Where has he worked?",
  "How can I contact him?",
  "Ask me anything",
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", content: "Hi! I'm Shreyas's Portfolio Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    
    const userMsg: Message = { role: "user", content: text.trim() };
    const updatedMessages = [...messages, userMsg];
    
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch response");
      }

      setMessages((prev) => [...prev, { role: "model", content: data.text }]);
    } catch (err: any) {
      console.error("Chat error:", err);
      setError("Sorry, I couldn't process that right now. Please try again.");
      // Keep the user message so they can see what failed, 
      // or optionally remove it. We'll leave it in the history for now.
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  const handleNewChat = () => {
    setMessages([
      { role: "model", content: "Chat cleared. What else would you like to know?" }
    ]);
    setError(null);
  };

  return (
    <div className="chatbot-wrapper">
      <div className={`chatbot-panel ${isOpen ? "open" : ""}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-title">
              Portfolio Assistant <span className="status-dot"></span>
            </div>
            <div className="chatbot-subtitle">Ask me anything</div>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button className="chatbot-close" onClick={handleNewChat} title="New Chat">
              <MdAdd size={20} />
            </button>
            <button className="chatbot-close" onClick={() => setIsOpen(false)} title="Close Chat">
              <MdClose size={20} />
            </button>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`message-wrapper ${msg.role}`}>
              <div className="message-bubble">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message-wrapper ai">
              <div className="message-bubble">
                <div className="loading-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {error && <div className="error-message">{error}</div>}

        {messages.length === 1 && (
          <div className="chatbot-quick-prompts">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                className="quick-prompt-btn"
                onClick={() => handleSend(prompt === "Ask me anything" ? "Hello!" : prompt)}
                disabled={isLoading}
              >
                {prompt}
              </button>
            ))}
          </div>
        )}

        <div className="chatbot-input-area">
          <textarea
            className="chatbot-textarea"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            rows={1}
          />
          <button 
            className="chatbot-send-btn" 
            onClick={() => handleSend(input)}
            disabled={!input.trim() || isLoading}
          >
            <MdSend size={20} />
          </button>
        </div>
      </div>

      <button 
        className="chatbot-fab" 
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ opacity: isOpen ? 0 : 1, pointerEvents: isOpen ? 'none' : 'auto' }}
      >
        <span className="chatbot-fab-tooltip">Chat with me</span>
        <MdChatBubbleOutline size={28} />
      </button>
    </div>
  );
};

export default Chatbot;
