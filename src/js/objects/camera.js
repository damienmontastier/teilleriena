import * as THREE from "three";
import Viewport from "../utils/viewport";

const camera = new THREE.OrthographicCamera(Viewport.width / -2, Viewport.width / 2, Viewport.height / 2, Viewport.height / -2, -1000, 1000);

window.addEventListener("resize", () => {
	camera.aspect = Viewport.ratio;
	camera.updateProjectionMatrix();
});

export default camera;
