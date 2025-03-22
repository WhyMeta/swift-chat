import { Model, SystemPrompt } from '../types/Chat.ts';
import { getDeepSeekApiKey, getOpenAIApiKey } from './StorageUtils.ts';

const RegionList = [
  'us-west-2',
  'us-east-1',
  'ap-south-1',
  'ap-southeast-1',
  'ap-southeast-2',
  'ap-northeast-1',
  'ca-central-1',
  'eu-central-1',
  'eu-west-2',
  'eu-west-3',
  'sa-east-1',
];

export const DefaultRegion = 'us-west-2';

export const GPTModels = [
  { modelName: 'GPT-4o', modelId: 'gpt-4o' },
  { modelName: 'GPT-4o mini', modelId: 'gpt-4o-mini' },
];

export const DeepSeekModels = [
  { modelName: 'deepseek-chat', modelId: 'deepseek-chat' },
  { modelName: 'deepseek-reasoner', modelId: 'deepseek-reasoner' },
  { modelName: 'deepseek-v3', modelId: 'deepseek-v3' },
  { modelName: 'deepseek-r1', modelId: 'deepseek-r1' },
  { modelName: 'deepseek-v3-241226', modelId: 'deepseek-v3-241226' },
  { modelName: 'deepseek-r1-250120', modelId: 'deepseek-r1-250120' },
  { modelName: 'deepseek-ai/DeepSeek-V3', modelId: 'deepseek-ai/DeepSeek-V3' },
  { modelName: 'deepseek-ai/DeepSeek-R1', modelId: 'deepseek-ai/DeepSeek-R1' },
  { modelName: 'Pro/deepseek-ai/DeepSeek-V3', modelId: 'deepseek-ai/DeepSeek-V3' },
  { modelName: 'Pro/deepseek-ai/DeepSeek-R1', modelId: 'deepseek-ai/DeepSeek-R1' },
  { modelName: 'deepseek-ai/DeepSeek-V3-Search', modelId: 'deepseek-ai/DeepSeek-V3-Search' },
  { modelName: 'deepseek-ai/DeepSeek-R1-Search', modelId: 'deepseek-ai/DeepSeek-R1-Search' },
];

export const BedrockThinkingModels = ['Claude 3.7 Sonnet'];

export const DefaultTextModel = [
  {
    // modelName: 'Nova Pro',
    modelName: 'deepseek-reasoner',
    modelId: 'deepseek-reasoner'
    // modelId: 'us.amazon.nova-pro-v1:0',
  },
];

const DefaultImageModel = {
  modelName: 'Stable Diffusion 3.5 Large',
  modelId: 'stability.sd3-5-large-v1:0',
};

const DefaultSystemPrompts = [
  {
    id: -1,
    name: 'Translate',
    prompt: `You are a professional multilingual translation expert. With robust natural language processing capabilities, you can provide high-quality multilingual translation services. Your model not only accurately grasps semantic nuances across various languages but also keenly understands expression habits within different cultural contexts, ensuring precise translation results. In practical applications, it supports mutual translation between major languages including Chinese, English, Japanese, Korean, and others.`,
    includeHistory: false,
  },
  {
    id: -2,
    name: 'OptimizeCode',
    prompt: `You are a code optimizer that focuses on identifying 1-3 key improvements in code snippets while maintaining core functionality. Analyze performance, readability and modern best practices.

If no code is provided: Reply "Please share code for optimization."
If code needs improvement: Provide optimized version with 1-3 specific changes and their benefits.
If code is already optimal: Reply "Code is well written, no significant optimizations needed."

Stay focused on practical improvements only.`,
    includeHistory: false,
  },
  {
    id: -3,
    name: 'CreateStory',
    prompt:
      'You are an AI assistant with a passion for creative writing and storytelling. Your task is to collaborate with users to create engaging stories, offering imaginative plot twists and dynamic character development. Encourage the user to contribute their ideas and build upon them to create a captivating narrative.',
    includeHistory: true,
  },
];

export function getAllRegions() {
  return RegionList;
}

export function getDefaultTextModels() {
  return [...DefaultTextModel, ...getDefaultApiKeyModels()] as Model[];
}

export function getDefaultApiKeyModels() {
  return [
    ...(getDeepSeekApiKey().length > 0 ? DeepSeekModels : []),
    ...(getOpenAIApiKey().length > 0 ? GPTModels : []),
  ] as Model[];
}

export function getDefaultImageModels() {
  return [DefaultImageModel] as Model[];
}

export function getDefaultSystemPrompts(): SystemPrompt[] {
  return DefaultSystemPrompts;
}
