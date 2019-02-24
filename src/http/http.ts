
export interface HttpClient {
    get(url: string): Promise<string>;
    post(url: string, payload: string): Promise<string>;
}

export interface HttpClientFactory {
    create(): HttpClient;
}

export class DefaultHttpClientFactory implements HttpClientFactory {
    private readonly client: HttpClient;

    constructor(client: HttpClient) {
        this.client = client;
    }

    public create() {
        return this.client;
    }
}
