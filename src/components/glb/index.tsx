/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 -t ghost.glb
*/

import { GLBType } from "@/lib/game-store"
import { useStore } from "@/lib/store"
import { useAnimations, useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useEffect, useMemo, useRef } from "react"
import * as THREE from "three"
import { SkeletonUtils } from "three/examples/jsm/Addons.js"

function useGltfMemo(url: string) {
  const gltf = useGLTF(url)
  const scene = useMemo(() => SkeletonUtils.clone(gltf.scene), [gltf.scene])
  return { ...gltf, animations: [...gltf.animations], scene: scene }
}

export function Glb(
  props: JSX.IntrinsicElements["group"] &
    GLBType & {
      isEdit?: boolean
    },
) {
  const group = useRef<THREE.Group>()
  const { scene, animations } = useGltfMemo(props.url)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const [_, first] = Object.keys(actions)
    actions[first]?.play()
  }, [actions])

  const commonProps = props.isEdit ? {} : props
  const currentAnimation = props?.currentAnimation
  const animationsKeys = Object.keys(props?.animationSet ?? {})
  const store = useStore()
  useEffect(() => {
    Object.keys(actions).forEach((key) => {
      actions[key]?.stop()
    })
    if (currentAnimation) actions[currentAnimation]?.play()
  }, [currentAnimation, animationsKeys])

  const onClick = () => {
    const currentChoice = store.choices.filter((choice) => choice.parent === props.uuid)
    store.setDialog({
      content: props?.dialogue?.content,
      divider: "select",
      choices: currentChoice?.map((choice) => ({
        label: choice.label,
        onSelect: () => {
          if (props.isEdit) return null
          if (+choice.requiredMoney > +store.money) {
            store.setDialog({
              content: "You don't have enough money to buy this item.",
            })
          } else {
            store.addMoney(-choice.requiredMoney)
            store.setTime(store.time + 1)
            store.setDialog({
              content: `You have spent ${choice.requiredMoney} coins.`,
            })
          }

          if (choice.reward.type === "money") {
            store.setTime(store.time + 1)
            store.setDialog({
              content: "Thanks! here is your (" + choice.reward.amount + ") coins!",
            })

            store.addMoney(choice.reward.amount)
          }
          if (choice.reward.type === "item") {
            store.setTime(store.time + 1)
            store.setDialog({
              content: "Thanks! here is your Reward (" + choice.reward.item + ")!",
            })
            store.addItemToInventory(choice.reward.item)
          }
          if (choice.reward.type === "energy") {
            store.setTime(store.time + 1)
            store.setDialog({
              content: "Thanks! here is your Reward (" + choice.reward.amount + ") energy!",
            })
            store.addEnergy(choice.reward.amount)
          }
        },
      })),
    })
  }

  return (
    <group onClick={onClick} uuid={props.uuid} ref={group} {...commonProps} dispose={null}>
      <primitive object={scene} dispose={null} />
    </group>
  )
}

export function GameGlb(
  props: JSX.IntrinsicElements["group"] &
    GLBType & {
      isEdit?: boolean
    },
) {
  return (
    <RigidBody name={props.type === "misc" ? props.uuid : undefined} type="fixed" colliders="trimesh">
      <Glb {...props} />
    </RigidBody>
  )
}

export const allGlbTypes = [
  { name: "hoodie_guy", type: "npc" },
  { name: "farmer", type: "npc" },
  { name: "woman_1", type: "npc" },
  { name: "woman_2", type: "npc" },
  { name: "me", type: "npc" },
  { name: "coin", type: "misc", collectable: true },
] as const
export type AllGLBType = (typeof allGlbTypes)[number]
