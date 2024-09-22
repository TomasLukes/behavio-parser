/* TODO: Insert all possible tree node types */
export type TTreeNodeType = "all" | "label" | "has" | "except" | "lt" | "gt";

export interface ITreeNode {
  nodeId: string;
  type: TTreeNodeType;
  values: "string" | string[];
  children?: ITreeNode[];
}
