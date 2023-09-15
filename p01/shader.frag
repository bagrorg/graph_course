#version 330 core

layout (location = 0) out vec4 out_color;

const int MUL = 10;

in vec2 pos;

void main()
{
    float xx = pos.x * MUL;
    float yy = pos.y * MUL;
    
    int xxx = int(floor(xx));
    int yyy = int(floor(yy));

    out_color = vec4((xxx + yyy) % 2, (xxx + yyy) % 2, (xxx + yyy) % 2, 1.0);
}
