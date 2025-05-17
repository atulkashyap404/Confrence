import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Speaker } from '@/lib/type';

interface SpeakerCardProps {
  speaker: Speaker;
  className?: string;
}

export function SpeakerCard({ speaker, className }: SpeakerCardProps) {
  return (
    <Card className={cn(
      'overflow-hidden group transition-all duration-300 hover:shadow-md',
      className
    )}>
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={speaker.photo}
          alt={speaker.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg leading-tight mt-2 mb-1">{speaker.name}</h3>
        <p className="text-muted-foreground text-sm">{speaker.designation}</p>
        {speaker.company && (
          <p className="text-sm text-foreground/70 mt-1">{speaker.company}</p>
        )}
      </CardContent>
    </Card>
  );
}