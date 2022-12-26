
export interface Button{
    name: string;
    icon: string;
    tooltip: string;
    scriptPath: string;
}

export interface Shelf {
    name: string;
    buttons: Button[];
}

export interface Manifest {
     version: string;
     shelves: Shelf[];
}
