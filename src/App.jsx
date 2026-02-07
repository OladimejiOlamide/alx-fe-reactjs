import React, { useState, useEffect } from 'react';
import { Search, Github, ExternalLink, Loader2, AlertCircle, Users, Code, Book } from 'lucide-react';

/**
 * Single-file GitHub User Search Application
 * Features:
 * - Search by username
 * - Loading states & Error handling
 * - Responsive Tailwind UI
 * - API Rate limit handling
 */

const App = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async (searchTerm) => {
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(searchTerm)}`);
      
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error("Rate limit exceeded. Please try again later.");
        }
        throw new Error("Failed to fetch users.");
      }
      
      const data = await response.json();
      setUsers(data.items || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUsers(query);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans selection:bg-blue-500/30">
      {/* Navbar Decoration */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-block p-4 bg-[#161b22] border border-[#30363d] rounded-full mb-6 shadow-2xl">
            <Github className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-3">
            Search GitHub Developers
          </h1>
          <p className="text-[#8b949e] text-lg max-w-lg mx-auto leading-relaxed">
            Find developers, explore profiles, and discover repositories across the globe.
          </p>
        </div>

        {/* Search Interface */}
        <section className="relative z-10 mb-10">
          <form onSubmit={handleSubmit} className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#8b949e] group-focus-within:text-blue-400 transition-colors" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a username..."
              className="block w-full pl-14 pr-36 py-5 bg-[#0d1117] border-2 border-[#30363d] rounded-2xl text-white text-lg placeholder-[#484f58] focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none shadow-xl"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-3 top-3 bottom-3 px-8 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:opacity-50 text-white font-bold rounded-xl transition-all flex items-center shadow-lg active:scale-95"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Search'}
            </button>
          </form>
        </section>

        {/* Error State */}
        {error && (
          <div className="mb-8 p-4 bg-red-900/20 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-400 animate-in zoom-in-95">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="font-medium">{error}</span>
          </div>
        )}

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {users.map((user, index) => (
            <div
              key={user.id}
              className="group bg-[#161b22] border border-[#30363d] p-5 rounded-2xl hover:border-[#8b949e] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-5">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-2xl border border-[#30363d] group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white truncate mb-1">
                    {user.login}
                  </h3>
                  <div className="flex gap-3 text-[#8b949e] text-xs">
                    <span className="flex items-center gap-1">
                      <Code className="w-3 h-3" /> User
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> Public
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-[#30363d] flex justify-between items-center">
                <span className="text-xs font-mono text-[#484f58]">ID: {user.id}</span>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Profile
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!loading && users.length === 0 && query && !error && (
          <div className="text-center py-20 bg-[#161b22] rounded-3xl border-2 border-dashed border-[#30363d]">
            <Book className="w-12 h-12 text-[#30363d] mx-auto mb-4" />
            <p className="text-[#8b949e] text-lg">No users found for "{query}"</p>
          </div>
        )}

        {/* Welcome State */}
        {!query && !loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 opacity-50">
            {[
              { label: 'Search Users', icon: Search },
              { label: 'View Profiles', icon: ExternalLink },
              { label: 'Open Source', icon: Github },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;