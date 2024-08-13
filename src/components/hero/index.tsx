/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGame } from "@/hooks/useGame"
import { GLBType } from "@/lib/game-store"
import { usePlayerStore } from "@/lib/player-store"
import { Html, OrbitControls, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { RapierRigidBody, RigidBody, vec3 } from "@react-three/rapier"
import { useMemo, useRef } from "react"
import { Quaternion, Vector3 } from "three"
import { SkeletonUtils } from "three/examples/jsm/Addons.js"

function useGltfMemo(url: string) {
  const gltf = useGLTF(url)
  const scene = useMemo(() => SkeletonUtils.clone(gltf.scene), [gltf.scene])
  return { ...gltf, animations: [...gltf.animations], scene: scene }
}

export function Glb(props: JSX.IntrinsicElements["group"] & GLBType) {
  const { scene } = useGltfMemo(props.url)
  const { goTo, setGoTo } = usePlayerStore()
  // const ref = useRef<Mesh>(null)

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const rotation = useMemo(() => new Euler(...(props.rotation?.map((r) => (r * Math.PI) / 180) ?? [0, 0, 0])), [])
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const position = useMemo(() => new Vector3(...(props.position ?? [0, 0, 0])), [])
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const scale = useMemo(() => new Vector3(...(props.scale ?? [0, 0, 0])), [])

  const rigidBody = useRef<RapierRigidBody>(null)

  const rb = rigidBody?.current

  const pos = vec3(rb?.translation())

  useFrame((t) => {
    const pos = vec3(rb?.translation())
    if (!pos || !goTo) return

    const angle = Math.atan2(goTo.x - pos.x, goTo.z - pos.z)
    const q = new Quaternion()
    const quat = q.setFromAxisAngle(new Vector3(0, 1, 0), angle)

    rb.setRotation(quat, true)

    const distX = goTo?.x - pos?.x
    const distZ = goTo?.z - pos?.z
    // Calculate the distance
    const dist = Math.sqrt(distX * distX + distZ * distZ)
    // Calculate the normalized direction vector
    const dirX = distX / dist
    const dirZ = distZ / dist
    const speed = 25
    rb.setLinvel({ x: dirX * speed, y: 0, z: dirZ * speed }, true)

    const newPos = new Vector3(pos?.x, pos?.y + 2, pos?.z)
    const distance = pos.distanceTo(goTo)

    if (!goTo || distance < 3) {
      setGoTo(undefined)
      return
    }
    // console.log("pos", distance)
    if (distance < 3) {
      rb.setLinvel({ x: 0, y: 0, z: 0 }, true)
      setGoTo(undefined)
      return
    }
    // @ts-ignore
    t?.controls?.target?.copy(newPos)
  })

  // useEffect(() => {
  //   if (!rb) return
  //   if (!goTo) {
  //     rb.setLinvel({ x: 0, y: 0, z: 0 }, true)
  //     return
  //   }
  //   const angle = Math.atan2(goTo.x - pos.x, goTo.z - pos.z)
  //   const q = new Quaternion()
  //   const quat = q.setFromAxisAngle(new Vector3(0, 1, 0), angle)
  //
  //   rb.setRotation(quat, true)
  //
  //   const distX = goTo?.x - pos?.x
  //   const distZ = goTo?.z - pos?.z
  //   // Calculate the distance
  //   const dist = Math.sqrt(distX * distX + distZ * distZ)
  //
  //   // Calculate the normalized direction vector
  //   const dirX = distX / dist
  //   const dirZ = distZ / dist
  //   const speed = 10
  //   rb.setLinvel({ x: dirX * speed, y: 0, z: dirZ * speed }, true)
  // }, [goTo, rb, pos])

  return (
    <RigidBody
      ref={rigidBody}
      friction={0}
      mass={0}
      type="dynamic"
      colliders="ball"
      scale={props.scale}
      position={props.position}
      rotation={props.rotation}
    >
      <OrbitControls target={props.position} makeDefault />
      <group uuid={props.uuid} scale={props.scale} position={[0, -props.scale[1] / 2, 0]} dispose={null}>
        <primitive object={scene} dispose={null} />
      </group>
    </RigidBody>
  )
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

export function Hero() {
  const { data } = useGame()
  const hero = data?.gameConf?.glbs?.find((c) => c?.type === "hero")
  const playerStore = usePlayerStore()
  const goTo = playerStore.goTo

  return (
    <>
      {goTo?.x && (
        <Html position={goTo}>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-black rounded-full text-2xl p-1">👇</div>
          </div>
        </Html>
      )}
      <Glb {...hero} />
    </>
  )
}
