// Basic 3D background stars using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// Add stars
function addStar() {
  const geometry = new THREE.SphereGeometry(0.05, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Lights
const pointLight = new THREE.PointLight(0xffffff, 0.8);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

// Responsive canvas
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
