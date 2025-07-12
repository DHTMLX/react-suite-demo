import { useEffect, useRef } from "react";
import { Tree } from "@dhx/trial-suite";
import { getData } from "../../data";

export default function TreeComponent() {
  const { treeData } = getData();
  const tree_container = useRef(null);

  useEffect(() => {
    const tree = new Tree(tree_container.current, {
      data: JSON.parse(JSON.stringify(treeData)),
      checkbox: true,
      editable: true,
      keyNavigation: true,
      dragMode: "both"
    });

    return () => tree?.destructor();
  }, [treeData]);

  return <div ref={tree_container} className="tree_widget" />;
}
