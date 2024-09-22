"use client";

import { useState } from "react";
import ExpressionInput from "@/app/components/ExpressionTextArea";
import Icons from "@/app/components/ui/Icons";
import { MOCK_SEXPRESSION_DATA } from "@/app/lib/utils/mockData";
import TreeViewer from "@/app/components/TreeViewer";

const ParserWrapper = ({ className }: { className?: string }) => {
  const [inputValue, setInputValue] = useState<string>(MOCK_SEXPRESSION_DATA);

  return (
    <section className={className}>
      <ExpressionInput
        className={styles.parserBoxes}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Icons.Arrow className="size-32 fill-blue-300" />
      <TreeViewer className={styles.parserBoxes} inputValue={inputValue} />
    </section>
  );
};

export default ParserWrapper;

const styles = {
  parserBoxes:
    "min-h-[500px] max-h-[500px] w-full py-4 px-8 bg-white border-2 border-blue-300 rounded-xl overflow-auto w-full py-4 px-8",
};
