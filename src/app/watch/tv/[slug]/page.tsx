import React from 'react';
import EmbedPlayer from '@/components/watch/embed-player';

export const revalidate = 3600;

export default function Page({ params }: { params: { slug: string } }) {
  const id = params.slug.split('-').pop();
  return <EmbedPlayer url={`https://embed.cineflow.us/api/v5/tv/${id}/${imdb_id}`} />;
}
