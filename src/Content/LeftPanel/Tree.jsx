import { useEffect, useRef, useState } from "react";
import { Tree } from "@dhx/trial-suite";
import store from "../../store";

export default function TreeComponent() {
  const node = useRef(null);
  let [tree, setTree] = useState(null);

  useEffect(() => {
    const tree = new Tree(node.current, {
      checkbox: true,
      editable: true,
      keyNavigation: true,
      dragMode: "both",
    });

    setTree(tree);

    // Cleanup
    return () => tree.destructor();
  }, []);

  useEffect(() => {
    if (!tree) return;
    tree.data.parse(store.treeData);
  }, [tree]);

  return <div ref={node} className="bordered" />;
}
