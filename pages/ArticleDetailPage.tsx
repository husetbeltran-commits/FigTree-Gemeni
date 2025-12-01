import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '../data/mockData';
import { ChevronLeft, Share2, Calendar } from 'lucide-react';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams();
  const article = ARTICLES.find(a => a.id === id);

  if (!article) return <div className="p-8 text-center text-primary">Artikeln hittades inte.</div>;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Länk kopierad!');
  };

  // Basic paragraph formatting
  const formattedBody = article.body.split('\n').map((line, idx) => {
    if (line.startsWith('###')) return <h3 key={idx} className="text-xl font-bold mt-6 mb-2 text-primary">{line.replace('###', '')}</h3>;
    if (line.trim() === '') return <br key={idx} />;
    return <p key={idx} className="mb-4 text-primary/80 leading-relaxed">{line}</p>;
  });

  return (
    <div className="min-h-screen bg-background animate-fade-in pb-20">
       <div className="sticky top-0 z-30 flex items-center justify-between p-4 bg-background/80 backdrop-blur border-b border-border transition-colors">
         <Link to="/articles" className="bg-surface/50 p-2 rounded-full text-primary hover:bg-surface border border-transparent hover:border-border transition-all">
           <ChevronLeft size={24} />
         </Link>
         <button onClick={handleCopyLink} className="bg-surface/50 p-2 rounded-full text-primary hover:bg-surface border border-transparent hover:border-border transition-all">
           <Share2 size={20} />
         </button>
       </div>

       {article.mainImageUrl && (
         <div className="-mt-[72px] h-[300px] w-full relative">
           <img src={article.mainImageUrl} alt="" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
         </div>
       )}

       <div className={`px-5 ${article.mainImageUrl ? '-mt-20 relative' : 'mt-4'}`}>
          <div className="flex items-center gap-2 mb-3">
             {article.categories.map(c => (
               <span key={c} className="bg-accent/20 text-accent px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                 {c}
               </span>
             ))}
          </div>

          <h1 className="text-3xl font-bold mb-4 leading-tight text-primary shadow-black drop-shadow-md lg:drop-shadow-none">{article.title}</h1>
          
          <div className="flex items-center gap-2 text-secondary text-xs mb-8">
            <Calendar size={12} />
            <span>{article.createdAt}</span>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {formattedBody}
          </div>
       </div>
    </div>
  );
};

export default ArticleDetailPage;