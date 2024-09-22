import Icons from "@/app/components/ui/Icons";

const TreeViewerError = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <p className="text-red-500 flex items-center gap-2">
      {<Icons.CircleX />}
      {errorMessage}
    </p>
  );
};

export default TreeViewerError;
