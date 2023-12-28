import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';


export function LamacLogoCG(canvas, onModelLoad) {
    const scene = new THREE.Scene();
    var model;

    const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    camera.position.set(0, 0, 3);
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

    const directionalLight6 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight6.position.set(0, 0, 1);
    scene.add(directionalLight6);

    const loader = new GLTFLoader();
    loader.load('/models/lamac.glb', function (gltf) {
        model = gltf.scene;

        const pmremGenerator = new THREE.PMREMGenerator(renderer);
        const rgbeLoader = new RGBELoader();
        rgbeLoader.setDataType(THREE.HalfFloatType);

        rgbeLoader.load('/models/forest.hdr', function (texture) {
            const envMap = pmremGenerator.fromEquirectangular(texture).texture;
            model.traverse((child) => {
                if (child.isMesh) {
                    child.material.envMap = envMap;
                    child.material.envMapIntensity = 1;
                }
            });

            pmremGenerator.dispose();
            scene.add(model);
        });

        if (onModelLoad) {
            onModelLoad();
        }
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
