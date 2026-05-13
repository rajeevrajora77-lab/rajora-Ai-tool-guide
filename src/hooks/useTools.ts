import { useMemo } from 'react';
import { tools, layerInfo, type Tool } from '../data/tools';

export const useTools = () => {
  const allTools = useMemo(() => tools, []);
  const layers = useMemo(() => layerInfo, []);

  const getToolById = (id: string) => {
    return allTools.find((t) => t.id === id);
  };

  const getToolsByLayer = (layer: string) => {
    return allTools.filter((t) => t.layer === layer);
  };

  return {
    tools: allTools,
    layers,
    getToolById,
    getToolsByLayer,
  };
};
