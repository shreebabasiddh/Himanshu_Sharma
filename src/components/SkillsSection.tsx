import React, { useState, useMemo } from 'react';
import { technicalSkillGroups, personalInfo } from '../data/resumeData';
import { Search, Layers, Network, Server, LifeBuoy, HeartHandshake, Sparkles, Filter } from 'lucide-react';

const categoryIconMap: Record<string, React.ReactNode> = {
  "Application Support": <Layers className="w-5 h-5 text-sky-600" />,
  "Networking & Infrastructure": <Network className="w-5 h-5 text-indigo-600" />,
  "Hardware & Operating Systems": <Server className="w-5 h-5 text-emerald-600" />,
  "Support Tools & Operations": <LifeBuoy className="w-5 h-5 text-amber-600" />
};

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    return ['All', ...technicalSkillGroups.map(g => g.category)];
  }, []);

  const filteredGroups = useMemo(() => {
    return technicalSkillGroups
      .filter(group => activeCategory === 'All' || group.category === activeCategory)
      .map(group => {
        if (!searchQuery.trim()) return group;
        const query = searchQuery.toLowerCase();
        const matchedSkills = group.skills.filter(s => s.name.toLowerCase().includes(query));
        return {
          ...group,
          skills: matchedSkills
        };
      })
      .filter(group => group.skills.length > 0);
  }, [searchQuery, activeCategory]);

  return (
    <section id="skills" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 mb-2">
              Capabilities Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Technical Skills & Proficiencies
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Organized by functional domains across business applications, enterprise networking protocols, hardware engineering, and client operations.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill, tool or protocol..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:bg-white text-slate-900 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGroups.length > 0 ? (
            filteredGroups.map((group) => (
              <div 
                key={group.category}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
                      {categoryIconMap[group.category] || <Layers className="w-5 h-5 text-sky-600" />}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {group.category}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 mb-5">
                    {group.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                          skill.featured 
                            ? 'bg-white border-slate-200/90 shadow-xs' 
                            : 'bg-white/70 border-slate-200/60'
                        }`}
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          {skill.featured && (
                            <Sparkles className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                          )}
                          <span className="text-sm font-semibold text-slate-800 truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded uppercase shrink-0 ${
                          skill.level === 'Expert' 
                            ? 'bg-sky-100 text-sky-800' 
                            : skill.level === 'Advanced' 
                              ? 'bg-indigo-50 text-indigo-700' 
                              : 'bg-slate-100 text-slate-600'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>{group.skills.length} competencies listed</span>
                  <span className="text-sky-600 font-medium">Enterprise Ready</span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 py-12 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              <Filter className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-slate-700 font-medium">No skills matching "{searchQuery}"</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-3 text-xs text-sky-600 font-semibold hover:underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>

        {/* Professional Strengths Strip */}
        <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-1">
                <HeartHandshake className="w-4 h-4" />
                <span>Interpersonal & Operational Strengths</span>
              </div>
              <h4 className="text-xl font-bold">
                Professional Work Ethic & Soft Skills
              </h4>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">
                Cultivated through 6+ years of frontline interaction with business executives, sales reps, internal developers, and enterprise end-users.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 max-w-xl">
              {personalInfo.strengths.map((str) => (
                <div 
                  key={str}
                  className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-xs sm:text-sm font-semibold text-slate-100 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>{str}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
