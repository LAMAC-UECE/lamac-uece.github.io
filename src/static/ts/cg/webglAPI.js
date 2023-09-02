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
