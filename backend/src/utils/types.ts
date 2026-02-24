export type RouteHandler = (request: Request) => Response | Promise<Response>;

export type MethodMap = {
    GET?: RouteHandler;
    POST?: RouteHandler;
    PUT?: RouteHandler;
    DELETE?: RouteHandler;
    PATCH?: RouteHandler;
    [method: string]: RouteHandler | undefined; // Allow for additional HTTP methods
}

export type RouteMap = {
    [path: string]: RouteHandler | MethodMap;
}

//Data Types

export interface User {
    id: string;
    username: string;
    email: string;
    passwordHash: string; // Store hashed passwords, not plain text
    teamId: string; // Reference to Team ID
    role: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Team {
    id: string;
    name: string;
    members: string[]; // Array of User IDs
    createdAt: Date;
    updatedAt: Date;
}

export interface Article {
    id: string;
    title: string;
    content: string;
    authorId: string; // Reference to User ID
    createdAt: Date;
    updatedAt: Date;
}

export interface Site {
    id: string;
    name: string;
    location: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Customer {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}