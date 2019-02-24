import {HttpClient, HttpClientFactory} from './http/http';

export interface BuiltObject {
    client: HttpClient;
}

export class BaseBuilder {
    private readonly url: string;
    private readonly factory: HttpClientFactory;

    constructor(url: string, factory: HttpClientFactory) {
        this.url = url;
        this.factory = factory;
    }

    public build(): BuiltObject {
        return {
            client: this.factory.create(),
        };
    }
}
