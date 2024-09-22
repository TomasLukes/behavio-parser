import { getTreeNodes } from "@/app/lib/utils";
import { ITreeNode } from "@/app/types";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import clsx from "clsx";
import TreeViewerError from "@/app/components/TreeViewer/TreeViewerError";

const TreeViewer = ({
  inputValue,
  className,
}: {
  inputValue: string;
  className: string;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const parse = require("s-expression");
  const parsedExpressions = parse(`(${inputValue})`);

  const treeNodes = getTreeNodes(parsedExpressions);
  const isError = !Array.isArray(parsedExpressions) && parsedExpressions;

  return (
    <section className={clsx(className)}>
      {Boolean(treeNodes?.length) ? (
        <SimpleTreeView>{treeNodes?.map(renderTree)}</SimpleTreeView>
      ) : (
        !isError && <p>Nothing to show yet...</p>
      )}
      {isError && (
        <TreeViewerError errorMessage={parsedExpressions.toString()} />
      )}
    </section>
  );
};

export default TreeViewer;

const renderTree = (node: ITreeNode) => {
  if (!node) {
    return null;
  }

  const getTreeItemLabel = (node: ITreeNode): string => {
    const label: string = node.type;

    if (!node.values.length) {
      return label;
    }

    if (Array.isArray(node.values)) {
      return node.values.length === 1
        ? `${label} - ${node.values[0]}`
        : `${label} - ${node.values[0]}: ${node.values.slice(1).join(", ")}`;
    }

    return `${label} - ${node.values}`;
  };

  return (
    <TreeItem
      key={node.values.toString()}
      itemId={node.nodeId}
      label={getTreeItemLabel(node)}
    >
      {Array.isArray(node.children)
        ? node.children.map((child) => renderTree(child))
        : null}
    </TreeItem>
  );
};
