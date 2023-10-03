import * as THREE from 'three';


export function LamacLogoCG(canvas: HTMLElement) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    camera.position.z = 5;

    canvas.appendChild(renderer.domElement);
    scene.add(cube);

    animate();

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }
}
