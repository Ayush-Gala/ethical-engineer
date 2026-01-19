import { notFound, permanentRedirect } from 'next/navigation';
import { getPaperById, getAllPaperIds } from '@/lib/papers';

interface PaperPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const ids = getAllPaperIds();
  return ids.map((id) => ({
    id: id.toString(),
  }));
}

export default async function PaperPage({ params }: PaperPageProps) {
  const resolvedParams = await params;
  const paperId = parseInt(resolvedParams.id, 10);
  const paper = getPaperById(paperId);

  if (!paper || isNaN(paperId)) {
    notFound();
  }

  permanentRedirect(`/papers/${paper.filename}`);
}

