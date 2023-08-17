import { Text } from '@react-three/drei'

interface KeyProps {
  character: string
}

function Key({ character }: KeyProps) {
  return <Text
    fontSize={1}
    font="helvetiker_regular.typeface.json"
    key={undefined}
    attach={undefined}
    args={undefined}
    onUpdate={undefined}
    visible={undefined}
    type={undefined}
    id={undefined}
    uuid={undefined}
    name={undefined}
    parent={undefined}
    modelViewMatrix={undefined}
    normalMatrix={undefined}
    matrixWorld={undefined}
    matrixAutoUpdate={undefined}
    matrixWorldAutoUpdate={undefined}
    matrixWorldNeedsUpdate={undefined}
    castShadow={undefined}
    receiveShadow={undefined}
    frustumCulled={undefined}
    renderOrder={undefined}
    animations={undefined}
    userData={undefined}
    customDepthMaterial={undefined}
    customDistanceMaterial={undefined}
    isObject3D={undefined}
    onBeforeRender={undefined}
    onAfterRender={undefined}
    applyMatrix4={undefined}
    applyQuaternion={undefined}
    setRotationFromAxisAngle={undefined}
    setRotationFromEuler={undefined}
    setRotationFromMatrix={undefined}
    setRotationFromQuaternion={undefined}
    rotateOnAxis={undefined}
    rotateOnWorldAxis={undefined}
    rotateX={undefined}
    rotateY={undefined}
    rotateZ={undefined}
    translateOnAxis={undefined}
    translateX={undefined}
    translateY={undefined}
    translateZ={undefined}
    localToWorld={undefined}
    worldToLocal={undefined}
    lookAt={undefined}
    add={undefined}
    remove={undefined}
    removeFromParent={undefined}
    clear={undefined}
    getObjectById={undefined}
    getObjectByName={undefined}
    getObjectByProperty={undefined}
    getObjectsByProperty={undefined}
    getWorldPosition={undefined}
    getWorldQuaternion={undefined}
    getWorldScale={undefined}
    getWorldDirection={undefined}
    raycast={undefined}
    traverse={undefined}
    traverseVisible={undefined}
    traverseAncestors={undefined}
    updateMatrix={undefined}
    updateMatrixWorld={undefined}
    updateWorldMatrix={undefined}
    toJSON={undefined}
    clone={undefined}
    copy={undefined}
    addEventListener={undefined}
    hasEventListener={undefined}
    removeEventListener={undefined}
    dispatchEvent={undefined}
    material={undefined}
    geometry={undefined}
    morphTargetInfluences={undefined}
    morphTargetDictionary={undefined}
    isMesh={undefined}
    updateMorphTargets={undefined}
    getVertexPosition={undefined}
  >
    {character}
  </Text>
}

export default Key
