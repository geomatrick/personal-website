'use client';

import { useEffect, useRef, useId } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({ startOnLoad: false, theme: 'default' });

export default function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, '');

  useEffect(() => {
    if (!ref.current) return;
    mermaid.render(`mermaid-${id}`, chart).then(({ svg }) => {
      if (ref.current) ref.current.innerHTML = svg;
    });
  }, [chart, id]);

  return <div ref={ref} className="my-6 flex justify-center" />;
}
