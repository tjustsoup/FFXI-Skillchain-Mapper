'use client';
import React, { useEffect } from "react";
import { Background, BackgroundVariant, Node, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";
import '@xyflow/react/dist/style.css';
// Custom
import { Skillchains } from "../data/skillchains";
import { SkillchainNode, XIVButton } from "./libs/components";
import { b_13, b_18, b_19, b_24 } from "./libs/icons";

const nodeTypes = {
  custom: SkillchainNode
}

export default function Home() {
  const arr = [b_24, b_19, b_18, b_13]
  /* States */
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  /* Handlers */
  function addNode() {
    // Get id
    let id = nodes.length
    nodes.sort((a, b) => {
      if (a.id < b.id) return -1;
      if (b.id > a.id) return 1;
      return 0;
    })
      .forEach((n, i) => {
        if (n.id !== i.toString()) {
          id = i;
        }
      })

    let newNode = {
      id: id.toString(),
      type: "custom",
      data: {},
      position: { x: 0, y: 0 },
    }
    setNodes([...nodes, newNode])
  }
  // function onNodesChange(e: any) {
  //   console.log(e)
  // }
  // function onEdgesChange(e: any) {
  //   console.log(e)
  // }
  function onConnect(e: any) {
    console.log(e)
  }

  // useEffect(() => console.log(nodes), [nodes])

  return (
    <div className="h-screen w-screen bg-slate-700">
      <div className="fixed flex gap-2 z-50 left-1/2 -translate-x-1/2 bottom-4">
        {arr.map((v, i) => (
          <XIVButton
            key={i}
            twcss={`h-24 w-24 rounded-md`}
            // url={b_19.default.src}
            url={v.default.src}
            onClick={() => addNode()}
          />
        ))}
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        preventScrolling={false}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={12}
          size={1}
        />
      </ReactFlow>
    </div>
  );
}

