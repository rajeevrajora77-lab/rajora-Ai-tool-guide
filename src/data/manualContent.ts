// Complete Free Tools Setup Manual 2026 - Full Content
// Author: Rajeev Rajora

export interface ToolGuide {
  id: string;
  name: string;
  description: string;
  officialUrl: string;
  sections: {
    title: string;
    content?: string;
    steps?: string[];
    code?: { language: string; code: string }[];
    notes?: string[];
    warnings?: string[];
    table?: { headers: string[]; rows: string[][] };
  }[];
  troubleshooting?: {
    problem: string;
    solution: string;
  }[];
  freeTier?: string;
  tags: string[];
}

export interface LayerContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  intro: string;
  prerequisites?: string[];
  tools: ToolGuide[];
}

// Import all layer content
import { layer0Content } from './layers/layer0';
import { layer1Content } from './layers/layer1';
import { layer2Content } from './layers/layer2';
import { layer3Content } from './layers/layer3';
import { layer4Content } from './layers/layer4';
import { layer5Content } from './layers/layer5';

export {
  layer0Content,
  layer1Content,
  layer2Content,
  layer3Content,
  layer4Content,
  layer5Content
};

export const allLayers = [
  layer0Content,
  layer1Content,
  layer2Content,
  layer3Content,
  layer4Content,
  layer5Content
];

export const getLayerById = (id: string): LayerContent | undefined => {
  return allLayers.find(layer => layer.id === id);
};

export const getToolById = (id: string): ToolGuide | undefined => {
  for (const layer of allLayers) {
    const tool = layer.tools.find(t => t.id === id);
    if (tool) return tool;
  }
  return undefined;
};

// Total tools count
export const totalToolsCount = allLayers.reduce((acc, layer) => acc + layer.tools.length, 0);
