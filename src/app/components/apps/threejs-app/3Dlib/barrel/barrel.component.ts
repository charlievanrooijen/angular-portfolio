import { Component, ElementRef, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-barrel',
  templateUrl: './barrel.component.html',
  styleUrls: ['./barrel.component.scss']
})

export class BarrelComponent implements AfterViewInit {

  private model!: THREE.Object3D;
  @Input() rotationSpeed: number = 0.01;
  @Input() cubeSize: number = 1;
  @Output() cubeClicked: EventEmitter<void> = new EventEmitter<void>();


  private scene: THREE.Scene = new THREE.Scene();
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private composer!: EffectComposer;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const container = this.el.nativeElement.querySelector('.model-wrapper'); // Ensure you target the right container
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    this.camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(containerWidth, containerHeight);
    this.renderer.setClearColor(0xabcdef);
    container.appendChild(this.renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040, 8);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);

    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    this.loadBlenderModel();
    this.animate();

    this.updateOnResize();
    window.addEventListener('resize', this.updateOnResize.bind(this));
  }



  loadBlenderModel() {
      const loader = new GLTFLoader();
      loader.load('assets/3D/Models/barrel.glb', (gltf) => {
          this.model = gltf.scene;
          this.scene.add(this.model);
      });
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    if (this.model) {
        this.model.rotation.y += this.rotationSpeed;
    }

    this.composer.render();
  }

  onClick() {
    this.cubeClicked.emit();
    console.log('Cube clicked!');
  }

  private updateOnResize() {
    const container = this.el.nativeElement.querySelector('.model-wrapper');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    this.renderer.setSize(containerWidth, containerHeight);
    this.camera.aspect = containerWidth / containerHeight;
    this.camera.updateProjectionMatrix();

    this.composer.setSize(containerWidth, containerHeight);
  }
}
