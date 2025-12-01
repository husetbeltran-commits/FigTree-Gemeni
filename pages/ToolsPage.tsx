import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Music, BookOpen, FileText, MessageCircle, RefreshCw, ChevronLeft } from 'lucide-react';

const ToolsPage: React.FC = () => {
  const tools = [
    { 
      title: 'Sångbank', 
      desc: 'Hitta sånger för andakt och gudstjänst.', 
      icon: Music, 
      path: '/songs' 
    },
    { 
      title: 'Bön och meditation', 
      desc: 'Utforska böner och kristna meditationer.', 
      icon: BookOpen, 
      path: '/prayers' 
    },
    { 
      title: 'Artiklar', 
      desc: 'Läs texter om tro och livet med Kristus.', 
      icon: FileText, 
      path: '/articles' 
    },
    { 
      title: 'Ställ en fråga om tro', 
      desc: 'Ställ frågor om Bibeln och kristen tro.', 
      icon: MessageCircle, 
      path: '/chat' 
    },
    { 
      title: 'Slumpa en vers', 
      desc: 'Få en slumpad bibelvers med kort reflektion.', 
      icon: RefreshCw, 
      path: '/verses' 
    },
  ];

  return (
    <div className="animate-fade-in min-h-screen">
      <Header 
        title="Verktyg" 
        backButton={
          <Link to="/" className="text-secondary hover:text-primary transition-colors">
            <ChevronLeft />
          </Link>
        }
      />
      <div className="p-4 grid gap-4">
        {tools.map((tool) => (
          <Link 
            key={tool.path}
            to={tool.path}
            className="flex items-start gap-4 p-4 bg-surface rounded-xl border border-white/5 hover:border-accent/50 active:scale-[0.98] transition-all"
          >
            <div className="bg-white/5 p-3 rounded-full text-accent shrink-0">
              <tool.icon size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary mb-1">{tool.title}</h3>
              <p className="text-sm text-secondary leading-snug">{tool.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;