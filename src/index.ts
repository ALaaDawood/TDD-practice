const world = 'world';

export function hello(name: string = world): string {
    return `Hello ${name}! `;
}
