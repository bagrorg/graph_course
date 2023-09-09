#version 330 core

const vec2 VERTICES[3] = vec2[3](
    vec2(0.0, 0.0),
    vec2(1.0, 0.0),
    vec2(0.0, 1.0)
);

out vec2 pos;

void main()
{
    gl_Position = vec4(VERTICES[gl_VertexID], 0.0, 1.0);

    pos = gl_Position.xy;
}
