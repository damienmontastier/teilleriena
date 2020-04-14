import * as THREE from "three";
import Raf from "../js/utils/raf";
import Camera from "../js/objects/camera";
import Viewport from "../js/utils/viewport";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
const map = require("../svg/ITX.svg");

// TODO - FACTORISER LE CODE

export default class Main {
	constructor() {
		// this.scene = new THREE.Scene();

		// this.canvas = document.getElementById("canvas");

		// this.renderer = new THREE.WebGLRenderer({
		// 	canvas: this.canvas,
		// 	scene: this.scene,
		// 	antialias: true,
		// 	alpha: true,
		// });

		// this.raycaster = new THREE.Raycaster();
		// this.mouse = new THREE.Vector2(-1000, -1000);

		// this.renderer.setSize(Viewport.width, Viewport.height);

		// this.renderer.setPixelRatio(Viewport.ratio);

		// var axesHelper = new THREE.AxesHelper(100);
		// this.scene.add(axesHelper);

		// this.load().then(this.initSvg.bind(this));

		// this.initPlane();

		// window.addEventListener("mousemove", this.onMouseMove.bind(this), false);

		// window.addEventListener("resize", () => {
		// 	this.renderer.setSize(Viewport.width, Viewport.height);
		// });

		Raf.add("renderer", { callback: this.render.bind(this) });
	}

	initPlane() {
		const map = document.querySelector(".map");
		const { width, height, x, y } = map.getBoundingClientRect();
		const geometry = new THREE.PlaneBufferGeometry(width, height, 32);
		const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
		this.plane = new THREE.Mesh(geometry, material);
		this.plane.position.set(Viewport.width / -2 + (width / 2 + x), 0, 0);
		this.plane.rotation.set(0, 0, THREE.Math.degToRad(2));
		this.scene.add(this.plane);
	}

	initSvg(data) {
		let mesh;
		this.paths = data.paths;

		this.hoverables = new THREE.Group();
		const svgs = new THREE.Group();
		svgs.name = "svgs";

		for (var i = 0; i < this.paths.length; i++) {
			const path = this.paths[i];

			if (Array.isArray(path)) {
				const g = new THREE.Group();
				g.name = "hoverable";

				path.forEach((p) => {
					mesh = this.createMesh(p);
					g.add(mesh);
				});

				this.hoverables.add(g);
			} else {
				mesh = this.createMesh(path);
				svgs.add(mesh);
			}
		}

		svgs.add(this.hoverables);
		svgs.scale.multiplyScalar(0.8);
		svgs.position.set(973 / -2, 855 / -2, 0);
		this.plane.add(svgs);

		console.log(this.scene);
	}

	createMesh(path) {
		const material = new THREE.MeshBasicMaterial({
			color: new THREE.Color(path.color),
			side: THREE.DoubleSide,
			depthWrite: false,
		});
		const shape = path.toShapes(true)[0];
		const geometry = new THREE.ShapeBufferGeometry(shape);
		const mesh = new THREE.Mesh(geometry, material);

		return mesh;
	}

	load() {
		const loader = new SVGLoader();

		return new Promise((resolve, reject) => {
			loader.load(
				map,
				(data) => {
					resolve(data);
				},
				(xhr) => {
					console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
				},
				(error) => {
					reject(error);
					console.log("An error happened", error);
				}
			);
		});
	}

	onMouseMove(event) {
		this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
		this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	}

	render() {
		this.raycaster.setFromCamera(this.mouse, Camera);

		if (this.test) {
			this.test.children.forEach((c) => {
				// console.log(c);
				var intersects = this.raycaster.intersectObjects(c.children, true);
				// console.log(intersects);
				for (var i = 0; i < intersects.length; i++) {
					intersects[i].object.material.color.set(0x0000ff);
				}
			});

			// const svg = svgs.getObjectByName("hoverable");
			// console.log(svg);
			// svg.forEach((s) => {
			// 	var intersects = this.raycaster.intersectObjects(s.children, true);
			// 	console.log(intersects);
			// 	// for (var i = 0; i < intersects.length; i++) {
			// 	// }
			// });
		}

		this.renderer.render(this.scene, Camera);
	}
}
