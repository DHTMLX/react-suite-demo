import { useEffect, useRef, useState } from "react";
import { Tree } from "@dhx/trial-suite";
import { getData } from "../../data";

export default function TreeComponent () {
  const { treeData } = getData();
  const tree_container = useRef(null);
  let [tree, setTree] = useState(null);

  useEffect(() => {
    const tree = new Tree(tree_container.current, {
      checkbox: true,
      editable: true,
      keyNavigation: true,
      dragMode: "both"
    });

    setTree(tree);

    return () => tree?.destructor();
  }, []);

  useEffect(() => {
    if (!tree) return;
    tree.data.parse(treeData);
  }, [tree]);

  return <div ref={tree_container} className="dhx_widget--bordered" />;
}
