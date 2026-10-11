"use client";

import { useEffect, useRef } from "react";

export function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let disposed = false;
    let raf = 0;
    let cleanupListeners: (() => void) | undefined;
    let renderer: import("three").WebGLRenderer | undefined;

    async function init() {
      let THREE: typeof import("three");
      try {
        THREE = await import("three");
      } catch {
        return; // Three.js failed to load — fall back to the flat background silently.
      }
      if (disposed || !container) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;

      let scene: import("three").Scene;
      let camera: import("three").PerspectiveCamera;

      try {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 6;

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
      } catch {
        return; // No WebGL support — bail out cleanly, existing background stays visible.
      }

      // A pair of nested, offset polyhedra rendered as clean line art only
      // (no point cloud) — reads as a technical/CAD schematic rather than a
      // node network, and the second shell gives the piece real depth.
      const outerGeometry = new THREE.IcosahedronGeometry(2.4, 1);
      const outer = new THREE.LineSegments(
        new THREE.WireframeGeometry(outerGeometry),
        new THREE.LineBasicMaterial({
          color: 0x2fd18f,
          transparent: true,
          opacity: 0.32,
        })
      );

      const innerGeometry = new THREE.OctahedronGeometry(1.35, 0);
      const inner = new THREE.LineSegments(
        new THREE.WireframeGeometry(innerGeometry),
        new THREE.LineBasicMaterial({
          color: 0x5cf2b8,
          transparent: true,
          opacity: 0.5,
        })
      );

      const group = new THREE.Group();
      const innerGroup = new THREE.Group();
      innerGroup.add(inner);
      group.add(outer, innerGroup);
      scene.add(group);

      let targetX = 0;
      let targetY = 0;

      function onMouseMove(e: MouseEvent) {
        if (!container) return;
        const rect = container.getBoundingClientRect();
        targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.7;
        targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.7;
      }

      function onResize() {
        if (!container || !renderer) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w === 0 || h === 0) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", onResize);
      cleanupListeners = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
      };

      function renderFrame() {
        if (disposed || !renderer) return;
        camera.position.x += (targetX - camera.position.x) * 0.04;
        camera.position.y += (-targetY - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);

        if (!prefersReducedMotion) {
          group.rotation.y += 0.0022;
          group.rotation.x += 0.0006;
          innerGroup.rotation.y -= 0.0045;
          innerGroup.rotation.x += 0.0018;
        }

        renderer.render(scene, camera);
        raf = requestAnimationFrame(renderFrame);
      }
      renderFrame();
    }

    init();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      cleanupListeners?.();
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_50%,transparent_100%)]"
    />
  );
}
