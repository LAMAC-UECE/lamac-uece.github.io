import { createProgram, createShader, drawRectangle, m3 } from "./webglAPI";
import webglUtils from "./webgl-utils";

const vertexShaderSource = `
  attribute vec2 a_position;
  uniform mat3 u_matrix;

  void main() {
    gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);
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
  var colorUniformLocation = gl.getUniformLocation(program, "u_color");
  var matrixUniformLocation = gl.getUniformLocation(program, "u_matrix");

  // Create a buffer and bind it to ARRAY_BUFFER
  var positionBuffer = gl.createBuffer();

  // code above this line is initialization code.
  // code below this line is rendering code.

  var scale = [1.5, 2];
  var rotationAngle = Math.PI / 6; // In radians
  var translation = [100, 100];
  var color = [Math.random(), Math.random(), Math.random(), 1];

  drawScene();

  function drawScene() {
    webglUtils.resizeCanvasToDisplaySize(gl.canvas);

    // Tell WebGL how to convert from clip space to pixels
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // Clear the canvas.
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Tell it to use our program (pair of shaders)
    gl.useProgram(program);

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

    // Compute the operation matrix
    var matrix = m3.projectionMatrix(gl.canvas.clientWidth, gl.canvas.clientHeight);
    matrix = m3.translate(matrix, translation[0], translation[1]);
    matrix = m3.rotate(matrix, rotationAngle);
    matrix = m3.scale(matrix, scale[0], scale[1]);

    gl.uniformMatrix3fv(matrixUniformLocation, false, matrix);

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
