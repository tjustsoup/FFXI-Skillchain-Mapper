import React, { memo, useEffect, useMemo, useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { BsCircleFill } from "react-icons/bs";
// Custom
import { Elements, getHsl, SkillchainOptions, Skillchains } from '@/data/skillchains';
import { Combobox } from '@/components/ui/combobox';
import { A1, A2, A3 } from '@/data/types';

function SkillchainNode({ data }: { data: any }) {
  const [att, setAtt] = useState<string>("")
  const colors = useMemo(() => {
    if (att === "") {
      return {
        borderColor: "rgb(144,161,185)",
        background: "#F1F5F9",
      }
    }

    const el = Elements[Skillchains[att as A1 | A2 | A3].elements[0]].color
    return {
      borderColor: `hsla(${el.h}, 40%, 40%, 1)`,
      background: `radial-gradient(circle, hsla(${el.h}, 30%, 90%, 1) 0%, hsla(${el.h}, 40%, 70%, 1) 100%)`
    }
  }, [att])

  return (
    <div
      className="px-4 py-4 shadow-md rounded-lg bg-white border-3 border-stone-400"
      style={{
        borderColor: colors.borderColor,
        background: colors.background
      }}
    >
      <div className="flex gap-2">
        <Combobox
          value={att}
          setValue={(e) => setAtt(e)}
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
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-16 bg-teal-500!"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 bg-teal-500!"
      />
    </div>
  );
}

export default memo(SkillchainNode);