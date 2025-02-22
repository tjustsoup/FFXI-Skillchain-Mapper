'use client';
import React, { useEffect } from "react";
import { Background, BackgroundVariant, Node, NodeTypes, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";
import '@xyflow/react/dist/style.css';
// Custom
import { Skillchains } from "../data/skillchains";
import { SkillchainNode } from "./libs/components";
import { b_13, b_18, b_19, b_24 } from "./libs/icons";
import { A1, A2, A3 } from "@/data/types";

const nodeTypes: NodeTypes = {
  Skillchain: SkillchainNode
}

export default function Home() {
  const arr = [b_24, b_19, b_18, b_13]
  /* States */
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  /* Handlers */
  function updateNode(id: string, data: any) {
    setNodes((prev) => prev.map((p) => {
      if (p.id === id) {
        return { ...p, data }
      }
      return p
    }))
  }
  function addNode(attribute: "" | A1 | A2 | A3) {
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
      type: "Skillchain",
      data: {
        attribute: attribute
      },
      position: { x: 0, y: 0 },
    }

    console.log(id)
    console.log(newNode)
    setNodes((prev) => [...prev, newNode])
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

  useEffect(() => addNode(""), [])
  // useEffect(() => console.log(nodes), [nodes])

  return (
    <div className="h-screen w-screen bg-slate-700">
      <div className="fixed flex gap-2 z-50 left-1/2 -translate-x-1/2 bottom-4">
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

