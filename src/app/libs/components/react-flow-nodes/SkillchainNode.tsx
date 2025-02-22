import React, { memo, useMemo } from 'react';
import { Handle, Node, NodeProps, useReactFlow } from '@xyflow/react';
import { BsCircleFill } from "react-icons/bs";
// Custom
import { Elements, getHsl, SkillchainOptions, Skillchains } from '@/data/skillchains';
import { Combobox } from '@/components/ui/combobox';
import { A1, A2, A3 } from '@/data/types';
import XIVButton from '@/components/ui/XIVButton/XIVButton';

type SkillchainNodeType = Node<{ attribute: "" | A1 | A2 | A3 }, 'Skillchain'>

function SkillchainNode(props: NodeProps<SkillchainNodeType>) {
  /* Store State */
  const { data } = props;
  const store = useReactFlow()

  function addNode(attribute: "" | A1 | A2 | A3) {
    // Get id
    const nodes = store.getNodes()
    console.log(nodes)
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
      data: {
        id: id.toString(),
        attribute: attribute
      },
      position: { x: 0, y: 0 },
    }

    // store.setState()
    // store.setState((prev) => [...prev, newNode])
  }

  /* Local State */
  function handleAttribute(e: any) {
    store.updateNodeData(props.id, { attribute: e })
  }

  const attribute = useMemo(() => {
    return (data.attribute !== "")
      ? Skillchains[data.attribute]
      : undefined
  }, [data])

  const colors = useMemo(() => {
    if (data.attribute === "") {
      return {
        borderColor: "rgb(144,161,185)",
        background: "#F1F5F9",
      }
    }

    const el = Elements[Skillchains[data.attribute].elements[0]].color
    return {
      borderColor: `hsla(${el.h}, ${(el.s / 2)}%, 30%, 1)`,
      background: `radial-gradient(circle, hsla(${el.h}, ${el.s - 40}%, ${el.l + 30}%, 1) 0%, hsla(${el.h}, ${el.s - 50}%, ${el.l}%, 1) 100%)`
    }
  }, [data])

  return (
    <div
      className="px-4 py-4 shadow-md rounded-lg bg-white border-3 border-stone-400"
      style={{
        borderColor: colors.borderColor,
        background: colors.background,
      }}
    >
      <div className="flex flex-col gap-2">
        {/* Attribute Select */}
        <Combobox
          value={data.attribute}
          setValue={handleAttribute}
          options={SkillchainOptions}
          renderOptions={(o) => {
            return (
              <div
                style={{
                  color: getHsl(o.elements[0].color),
                  fontWeight: 500
                }}
                className="flex gap-2 items-center"
              >
                <BsCircleFill color={getHsl(o.elements[0].color)} />
                <div>{o.label}</div>
              </div>
            )
          }}
        />

        {/* Buttons */}
        <div className="flex flex-row gap-2 justify-between">
          {attribute && Object.entries(attribute.chains).map(([k, v], i) => (
            <XIVButton key={i} onClick={() => console.log()}>
              {k}
            </XIVButton>
          ))}
        </div>
      </div>

      {/* <Handle
        type="target"
        position={Position.Top}
        className="w-16 bg-teal-500!"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 bg-teal-500!"
      /> */}
    </div>
  );
}

export default memo(SkillchainNode);