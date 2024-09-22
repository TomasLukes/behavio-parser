import { ITreeNode } from "@/app/types";

export const getTreeNodes = (
  parsedExpressions: string | string[]
): ITreeNode[] | null => {
  if (!Array.isArray(parsedExpressions)) {
    return null;
  }

  return parsedExpressions
    .map((expression): ITreeNode | null => {
      if (!Array.isArray(expression) || expression.length === 0) {
        return null;
      }

      const [type, ...rest] = expression;

      const values = rest.filter(
        (expression) => typeof expression === ("string" as string)
      );

      const children = rest
        .filter((item) => Array.isArray(item))
        .map((child) => getTreeNodes([child] as unknown as string))
        .flat()
        .filter((child) => child !== null);

      const treeNode: ITreeNode = {
        nodeId: crypto.randomUUID(),
        type: type,
        values: values.length === 1 ? values[0] : values,
        children: children.length > 0 ? children : [],
      };

      return treeNode;
    })
    .filter((node) => node !== null);
};
