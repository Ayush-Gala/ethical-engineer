import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPaperById, getAllPaperIds } from '@/lib/papers';
import PdfViewer from '@/components/PdfViewer';

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

export async function generateMetadata({ params }: PaperPageProps) {
  const resolvedParams = await params;
  const paperId = parseInt(resolvedParams.id, 10);
  const paper = getPaperById(paperId);

  if (!paper) {
    return {
      title: 'Paper Not Found',
    };
  }

  return {
    title: `${paper.title} | ethical-engineering`,
  };
}

export default async function PaperPage({ params }: PaperPageProps) {
  const resolvedParams = await params;
  const paperId = parseInt(resolvedParams.id, 10);
  const paper = getPaperById(paperId);

  if (!paper || isNaN(paperId)) {
    notFound();
  }

  const pdfUrl = `/papers/${paper.filename}`;

  return (
    <div className="flex flex-col h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Link
          href="/"
          className="inline-flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 group"
          aria-label="Back to home"
        >
          <svg
            className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Home</span>
        </Link>

        <a
          href={pdfUrl}
          download={paper.filename}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </a>
      </div>

      {/* Paper Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
        {paper.title}
      </h1>

      {/* PDF Viewer */}
      <PdfViewer pdfUrl={pdfUrl} title={paper.title} />
    </div>
  );
}

