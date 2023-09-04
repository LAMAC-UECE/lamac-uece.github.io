import { createProgram, createShader, drawRectangle } from "./webglAPI";
import webglUtils from "./webgl-utils";

const vertexShaderSource = `
  attribute vec2 a_position;
  uniform vec2 u_resolution;
  uniform vec2 u_translation;
  uniform vec2 u_rotation;
  uniform vec2 u_scale;

  void main() {
    // Scale the position
    vec2 scaledPosition = a_position * u_scale;

    // Rotate the position
    vec2 rotatedPosition = vec2(
      scaledPosition.x * u_rotation.y + scaledPosition.y * u_rotation.x,
      scaledPosition.y * u_rotation.y - scaledPosition.x * u_rotation.x
    );

    // Add in the translation
    vec2 position = rotatedPosition + u_translation;

    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = position / u_resolution;

    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;

    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;

    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  uniform vec4 u_color;

  void main() {
    gl_FragColor = u_color;
  }
`;

export function helloWorldGL(canvas) {
  /** @type {WebGLRenderingContext} */
  var gl = canvas.getContext("webgl");
  if (!gl) {
    return;
  }

  try {
    // Get the strings for our GLSL shaders and create GLSL shaders,
    // upload the GLSL source, compile the shaders
    var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    // Link the two shaders into a program
    var program = createProgram(gl, vertexShader, fragmentShader);
  } catch (error) {
    console.error(error);
    return;
  }

  // look up where the vertex data needs to go.
  var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
  var resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
  var colorUniformLocation = gl.getUniformLocation(program, "u_color");
  var translationUniformLocation = gl.getUniformLocation(program, "u_translation");
  var rotationUniformLocation = gl.getUniformLocation(program, "u_rotation");
  var scaleUniformLocation = gl.getUniformLocation(program, "u_scale");

  // Create a buffer and bind it to ARRAY_BUFFER
  var positionBuffer = gl.createBuffer();

  // code above this line is initialization code.
  // code below this line is rendering code.

  drawScene();

  function drawScene() {
    var translation = [100, 100];
    var scale = [1.5, 2];
    var rotation = getRotationVector(30.0);
    var color = [Math.random(), Math.random(), Math.random(), 1];

    webglUtils.resizeCanvasToDisplaySize(gl.canvas);

    // Tell WebGL how to convert from clip space to pixels
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // Clear the canvas.
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Tell it to use our program (pair of shaders)
    gl.useProgram(program);

    // set the resolution
    gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);

    // set the color
    gl.uniform4fv(colorUniformLocation, color);

    // Turn on the attribute
    gl.enableVertexAttribArray(positionAttributeLocation);

    // Bind the position buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    var size = 2;          // 2 components per iteration
    var type = gl.FLOAT;   // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

    setGeometry(gl);

    // Set the translation
    gl.uniform2fv(translationUniformLocation, translation);

    // Set the rotation
    gl.uniform2fv(rotationUniformLocation, rotation);

    // Set the scale
    gl.uniform2fv(scaleUniformLocation, scale);

    // draw
    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    var count = 18;
    gl.drawArrays(primitiveType, offset, count);
  }

  function setGeometry(gl) {
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        // left column
        0, 0,
        30, 0,
        0, 150,
        0, 150,
        30, 0,
        30, 150,

        // top rung
        30, 0,
        100, 0,
        30, 30,
        30, 30,
        100, 0,
        100, 30,

        // middle rung
        30, 60,
        67, 60,
        30, 90,
        30, 90,
        67, 60,
        67, 90,
      ]),
      gl.STATIC_DRAW);
  }
}

function getRotationVector(angle) {
  var angleInRadians = angle * Math.PI / 180.0;
  return [Math.sin(angleInRadians), Math.cos(angleInRadians)];
}
