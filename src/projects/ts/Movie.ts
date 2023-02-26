export default class Movie {
    id: number | undefined;
    name: string = '';
    description: string  = '';
    type: string = '';

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.name) this.id = initializer.name;
        if (initializer.description) this.id = initializer.description;
        if (initializer.type) this.id = initializer.type;
      }
}