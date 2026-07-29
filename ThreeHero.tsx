import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// A restrained 3D scene: a handful of low-poly "code block" shapes drifting
// in depth, reacting gently to the mouse. Not a particle-storm — a few
// deliberate shapes, styled to the brand palette.
export default function ThreeHero() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const width = mount.clientWidth
    const height = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 9)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const colors = [0x6c4ff5, 0x38e1ff, 0x8b6ff8, 0xffb020]
    const shapes: THREE.Mesh[] = []

    const geometries = [
      new THREE.IcosahedronGeometry(0.9, 0),
      new THREE.OctahedronGeometry(0.8, 0),
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.TetrahedronGeometry(0.9, 0),
    ]

    geometries.forEach((geo, i) => {
      const mat = new THREE.MeshStandardMaterial({
        color: colors[i % colors.length],
        roughness: 0.35,
        metalness: 0.15,
        transparent: true,
        opacity: 0.85,
        wireframe: i % 2 === 0,
      })
      const mesh = new THREE.Mesh(geo, mat)
      const angle = (i / geometries.length) * Math.PI * 2
      mesh.position.set(
        Math.cos(angle) * 3.4,
        Math.sin(angle) * 1.8,
        (i - 1.5) * 0.6
      )
      mesh.userData.speed = 0.15 + i * 0.05
      mesh.userData.baseY = mesh.position.y
      scene.add(mesh)
      shapes.push(mesh)
    })

    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    const point = new THREE.PointLight(0x38e1ff, 1.2, 20)
    point.position.set(4, 4, 6)
    scene.add(ambient, point)

    let mouseX = 0
    let mouseY = 0
    const handleMouse = (e: MouseEvent) => {
      const r = mount.getBoundingClientRect()
      mouseX = (e.clientX - r.left) / r.width - 0.5
      mouseY = (e.clientY - r.top) / r.height - 0.5
    }
    mount.addEventListener('mousemove', handleMouse)

    let raf = 0
    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime()
      shapes.forEach((mesh, i) => {
        mesh.rotation.x = t * 0.15 * (i % 2 === 0 ? 1 : -1)
        mesh.rotation.y = t * 0.2
        if (!prefersReducedMotion) {
          mesh.position.y =
            mesh.userData.baseY + Math.sin(t * mesh.userData.speed + i) * 0.25
        }
      })
      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.04
      camera.position.y += (-mouseY * 1.5 - camera.position.y) * 0.04
      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
      mount.removeEventListener('mousemove', handleMouse)
      geometries.forEach((g) => g.dispose())
      shapes.forEach((m) => (m.material as THREE.Material).dispose())
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="hero-canvas" ref={mountRef} />
}
