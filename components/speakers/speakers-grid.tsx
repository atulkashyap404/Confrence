'use client';

import { useState } from 'react';
import { SpeakerCard } from '@/components/speakers/speaker-card';
import { Input } from '@/components/ui/input';
import { speakers } from '@/lib/data/speakers';
import { Speaker } from '@/lib/type';
import { Search } from 'lucide-react';

export function SpeakersGrid() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSpeakers = speakers.filter((speaker) => {
    const query = searchQuery.toLowerCase();
    return (
      speaker.name.toLowerCase().includes(query) ||
      speaker.designation.toLowerCase().includes(query) ||
      (speaker.company && speaker.company.toLowerCase().includes(query)) ||
      (speaker.topics && speaker.topics.some(topic => topic.toLowerCase().includes(query)))
    );
  });

  return (
    <div className="w-full">
      <div className="mb-8 relative max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/60 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search speakers by name, role, or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-6"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredSpeakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
      
      {filteredSpeakers.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">
            No speakers found matching &quot;{searchQuery}&quot;
          </p>
          <p className="mt-2">
            Try adjusting your search terms or clear the search.
          </p>
        </div>
      )}
    </div>
  );
}