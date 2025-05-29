// Load a .glb model (GLTF format)
// Adds basic lightning
// Applies environment reflections for realism
// Wraps the model in a floating animation
// Optionally tweaks the material 
// Disable zoom using OrbitControls

import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import React, { Children, Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber';
import { ThreeMFLoader } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three'

const TechIcon = ({ model }) => {
    const scene = useGLTF(model.modelPath);
    
    useEffect(() => {
        if(model.name == 'Interactive Developer'){
            scene.scene.traverse((child) =>{
                if(child.isMesh && child.name == 'Object_5'){
                    child.material = new THREE.MeshStandardMaterial({color: 'white'})
                }
            })
        }

    },[scene])

    return (<>
        <Canvas>
            <Suspense fallback={null}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5,5,5]} intensity={1}/>
                <Environment preset='city' />
                <OrbitControls enableZoom = {false}/>

                <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.5}>
                    <group scale={model.scale} rotation = {model.rotation}>
                        <primitive object={scene.scene} />
                    </group>
                </Float>
            </Suspense>
        </Canvas>
    </>
    )
}
export default TechIcon