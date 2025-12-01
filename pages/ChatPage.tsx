import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { ChevronLeft, Send, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Hej! Jag är din guide här på FigTree. Ställ gärna en fråga om Bibeln, Jesus eller kristen tro. Kom ihåg att jag är en AI och inte ersätter en präst eller själavårdare.',
      createdAt: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // STUB: This function simulates the backend call to OpenAI
  const askFaithAI = async (question: string) => {
    setIsLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      const response: ChatMessage = {
        id: Date.now().toString(),
        sender: 'ai',
        text: 'Tack för din fråga. Det här är ett platshållarsvar. I den riktiga appen skulle detta anropa OpenAI med en systeminstruktion som säkerställer att svaren är grundade i klassisk kristen tro och Bibeln. Gud välsigne dig!',
        createdAt: new Date().toISOString()
      };
      setMessages(prev => [...prev, response]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      createdAt: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    askFaithAI(userMsg.text);
  };

  return (
    <div className="flex flex-col h-screen bg-background animate-fade-in">
      <Header 
        title="Fråga om tro" 
        backButton={<Link to="/tools" className="text-secondary hover:text-primary"><ChevronLeft /></Link>}
      />

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
              msg.sender === 'user' 
                ? 'bg-accent text-white rounded-br-none' 
                : 'bg-surface border border-border text-primary rounded-bl-none'
            }`}>
              {msg.sender === 'ai' && (
                <div className="flex items-center gap-1 mb-2 text-accent text-xs font-bold uppercase tracking-wider">
                  <Sparkles size={12} />
                  <span>FigTree Guide</span>
                </div>
              )}
              <p className="text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-surface border border-border p-4 rounded-2xl rounded-bl-none">
               <div className="flex gap-1">
                 <div className="w-2 h-2 bg-secondary/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                 <div className="w-2 h-2 bg-secondary/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                 <div className="w-2 h-2 bg-secondary/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
               </div>
             </div>
          </div>
        )}
        <div ref={bottomRef} className="h-20" /> {/* Spacer for input area + bottom nav */}
      </div>

      {/* Input Area */}
      <div className="fixed bottom-[64px] left-0 right-0 bg-background border-t border-border p-3 transition-colors">
        <div className="flex items-center gap-2 max-w-3xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Skriv din fråga här..."
            className="flex-1 bg-surface text-primary placeholder-secondary/50 border border-border rounded-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-accent disabled:bg-surface disabled:text-secondary text-white p-3 rounded-full hover:bg-accent-hover transition-colors shadow-md"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;