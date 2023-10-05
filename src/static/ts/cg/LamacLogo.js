import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


export function LamacLogoCG(canvas) {
    const scene = new THREE.Scene();
    var model;

    const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    // camera.position.z = 5;
    camera.position.set(0, 0, 2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    canvas.appendChild(renderer.domElement);

    var light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0.8, 0.5, 1);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight2.position.set(-0.8, 0.5, 1);
    scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight3.position.set(0, -0.5, 1);
    scene.add(directionalLight3);

    const directionalLight4 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight4.position.set(0.8, -0.5, 1);
    scene.add(directionalLight4);

    const directionalLight5 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight5.position.set(-0.8, -0.5, 1);
    scene.add(directionalLight5);

    const loader = new GLTFLoader();
    loader.load('/models/lamac.glb', function (gltf) {
        model = gltf.scene
        model.translateY(-0.3)
        scene.add(model);
    }, undefined, function (error) {
        console.log(error);
    });

    let rotationSpeedX = 0.005;
    let rotationSpeedY = 0.000;
    let mouseX = 0;
    let mouseY = 0;

    canvas.addEventListener('mousemove', (event) => {
        const deltaX = event.clientX - mouseX;
        const deltaY = event.clientY - mouseY;
        rotationSpeedX = deltaX * 0.0008;
        rotationSpeedY = deltaY * 0.0008;
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    animate();

    function animate() {
        requestAnimationFrame(animate);

        if (model) {
            model.rotation.y += rotationSpeedX;
            model.rotation.x += rotationSpeedY;
        }

        renderer.render(scene, camera);
    }
}
