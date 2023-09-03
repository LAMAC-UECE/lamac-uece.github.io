/** @type {WebGLRenderingContext} */

/**
 * Function to create a shader
 * @param {WebGLRenderingContext} gl - WebGL rendering context
 * @param {number} type - The type of shader (gl.VERTEX_SHADER or gl.FRAGMENT_SHADER)
 * @param {string} source - The GLSL source code.
 * @returns {WebGLShader}
 */
export function createShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  let err = gl.getShaderInfoLog(shader);
  gl.deleteShader(shader);
  throw new Error(`Failed to create shader! Error: "${err}"`);
}

/**
 * Function to create a program
 * @param {WebGLRenderingContext} gl - WebGL rendering context
 * @param {WebGLShader} vertexShader - WebGL vertex Shader
 * @param {WebGLShader} fragmentShader - WebGL fragment Shader
 * @returns {WebGLProgram}
 */
export function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  let err = gl.getProgramInfoLog(program);
  gl.deleteProgram(program);
  throw new Error(`Failed to create program! Error: "${err}"`);
}

/**
 * Draw a rectangle on the screen
 * @param {WebGLRenderingContext} gl - WebGL rendering context
 * @param {number} x - bottom left corner x coordinate (if vertex shader directly convers pixel to clip space)
 * @param {number} y - bottom left corner y coordinate (if vertex shader directly convers pixel to clip space)
 * @param {number} width - Rect width
 * @param {number} height - Rect height
 */
export function drawRectangle(gl, x, y, width, height) {
  var x1 = x;
  var x2 = x + width;
  var y1 = y;
  var y2 = y + height;

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    x1, y1,
    x2, y1,
    x1, y2,
    x1, y2,
    x2, y1,
    x2, y2,
  ]), gl.STATIC_DRAW);

  // draw
  var primitiveType = gl.TRIANGLES;
  var offset = 0;
  var count = 6;
  gl.drawArrays(primitiveType, offset, count);
}
