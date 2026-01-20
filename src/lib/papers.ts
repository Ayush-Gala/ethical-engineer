// Paper mapping configuration
// To add a new paper:
// 1. Add the PDF file to /public/papers/
// 2. Add the next number with the filename to this mapping

export interface Paper {
  id: number;
  filename: string;
  title: string;
}

// Map paper IDs to their filenames and titles
// Add new papers by incrementing the ID and adding the entry
export const papers: Paper[] = [
  {
    id: 1,
    filename: 'Automating_her_own_job.pdf',
    title: 'Automating Her Own Job',
  },
  {
    id: 2,
    filename: 'CUDA_kernel_optimization_cellular_automata.pdf',
    title: 'CUDA Kernel Optimization for Cellular Automata',
  },
  {
    id: 3,
    filename: 'Exploring_Speech_enhancement_for_IndicLangs.pdf',
    title: 'Exploring Speech Enhancement for Indic Languages',
  },
  {
    id: 4,
    filename: 'Survey_paper_on_DNST.pdf',
    title: 'Survey Paper on DNST',
  },
];

export function getPaperById(id: number): Paper | undefined {
  return papers.find((paper) => paper.id === id);
}

export function getAllPaperIds(): number[] {
  return papers.map((paper) => paper.id);
}

