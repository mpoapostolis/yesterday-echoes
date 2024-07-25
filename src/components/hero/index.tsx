/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
  nodes: {
    BaseHuman_1: THREE.SkinnedMesh
    BaseHuman_2: THREE.SkinnedMesh
    BaseHuman_3: THREE.SkinnedMesh
    BaseHuman_4: THREE.SkinnedMesh
    BaseHuman_5: THREE.SkinnedMesh
    BaseHuman_6: THREE.SkinnedMesh
    Bone: THREE.Bone
  }
  materials: {
    Shirt: THREE.MeshStandardMaterial
    Skin: THREE.MeshStandardMaterial
    Pants: THREE.MeshStandardMaterial
    Eyes: THREE.MeshStandardMaterial
    Socks: THREE.MeshStandardMaterial
    Hair: THREE.MeshStandardMaterial
  }
}

/**
 * Keyboard control preset
 */
export const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] },
  { name: "action1", keys: ["1"] },
  { name: "action2", keys: ["2"] },
  { name: "action3", keys: ["3"] },
  { name: "action4", keys: ["KeyF"] },
]

/**
 * Character url preset
 */
export const characterURL = "/glb/hero.glb"

type ActionName =
  | "HumanArmature|Man_Clapping"
  | "HumanArmature|Man_Death"
  | "HumanArmature|Man_Idle"
  | "HumanArmature|Man_Jump"
  | "HumanArmature|Man_Punch"
  | "HumanArmature|Man_Run"
  | "HumanArmature|Man_RunningJump"
  | "HumanArmature|Man_Sitting"
  | "HumanArmature|Man_Standing"
  | "HumanArmature|Man_SwordSlash"
  | "HumanArmature|Man_Walk"

/**
 * Character animation set preset
 */
export const animationSet: Record<string, ActionName> = {
  idle: "HumanArmature|Man_Idle",
  walk: "HumanArmature|Man_Walk",
  run: "HumanArmature|Man_Run",
  jump: "HumanArmature|Man_Jump",
  jumpIdle: "HumanArmature|Man_Jump", // Assuming jump idle is the same as idle
  jumpLand: "HumanArmature|Man_Idle", // Assuming jump land is the same as idle
  // fall: "HumanArmature|Man_Death", // Assuming fall is the same as death
  action1: "HumanArmature|Man_Clapping",
  action2: "HumanArmature|Man_Death",
  action3: "HumanArmature|Man_Idle", // Assuming hit react is the same as idle
  action4: "HumanArmature|Man_Punch",
}

export function Hero(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF("/glb/hero.glb") as GLTFResult
  return (
    <group ref={group} position={[0, -0.6, 0]} scale={[0.3, 0.3, 0.3]} dispose={null}>
      <pointLight
        intensity={1}
        castShadow
        shadow-bias={-0.0004}
        position={[2, 5, 0]}
        shadow-camera-top={20}
        shadow-camera-right={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
      />

      <group name="Root_Scene">
        <group name="RootNode">
          <group name="HumanArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Bone} />
          </group>
          <group name="BaseHuman" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="BaseHuman_1"
              geometry={nodes.BaseHuman_1.geometry}
              material={materials.Shirt}
              skeleton={nodes.BaseHuman_1.skeleton}
            />
            <skinnedMesh
              name="BaseHuman_2"
              geometry={nodes.BaseHuman_2.geometry}
              material={materials.Skin}
              skeleton={nodes.BaseHuman_2.skeleton}
            />
            <skinnedMesh
              name="BaseHuman_3"
              geometry={nodes.BaseHuman_3.geometry}
              material={materials.Pants}
              skeleton={nodes.BaseHuman_3.skeleton}
            />
            <skinnedMesh
              name="BaseHuman_4"
              geometry={nodes.BaseHuman_4.geometry}
              material={materials.Eyes}
              skeleton={nodes.BaseHuman_4.skeleton}
            />
            <skinnedMesh
              name="BaseHuman_5"
              geometry={nodes.BaseHuman_5.geometry}
              material={materials.Socks}
              skeleton={nodes.BaseHuman_5.skeleton}
            />
            <skinnedMesh
              name="BaseHuman_6"
              geometry={nodes.BaseHuman_6.geometry}
              material={materials.Hair}
              skeleton={nodes.BaseHuman_6.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/characters/hero.glb")
