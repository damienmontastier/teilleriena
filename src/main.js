import * as THREE from "three";
import Raf from "./js/utils/raf";
import Camera from "/src/js/objects/camera";
import Viewport from "./js/utils/viewport";

export default class Main {
	constructor() {
		this.scene = new THREE.Scene();

		this.canvas = document.getElementById("canvas");

		this.renderer = new THREE.WebGLRenderer({
			canvas: this.canvas,
			scene: this.scene,
			antialias: true,
			alpha: true,
		});

		this.renderer.setSize(Viewport.width, Viewport.height);

		this.renderer.setPixelRatio(Viewport.ratio);

		var geometry = new THREE.BoxGeometry(100, 50, 50);
		var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		var cube = new THREE.Mesh(geometry, material);
		cube.position.z = 2;
		this.scene.add(cube);

		Raf.add("renderer", { callback: this.render.bind(this) });
	}
	render() {
		this.renderer.render(this.scene, Camera);
	}
}
