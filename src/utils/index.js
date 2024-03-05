export const uuid = (len, radix) => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [], i;
    radix = radix || chars.length;

    if (len) {
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
        let r;

        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');
}

class _Socket {
    #url = `ws://localhost:8787/websocket?userId=${uuid(5, 16)}`
    #socket;
    #onmessageQue = {};

    constructor() {
        this.#socket = new WebSocket(this.#url);

        this.#socket.onopen = event => {
            console.log('WebSocket connection opened:', event);
        };

        this.#socket.onclose = event => {
            console.log('WebSocket connection closed:', event);
        };

        this.#socket.onmessage = event => {
            Object.keys(this.#onmessageQue).forEach(v => this.#onmessageQue[v](event, JSON.parse(event.data)));
        };
    }

    installOnmessage(callbackName, callbackFn) {
        this.#onmessageQue[callbackName] = callbackFn;
    }

    sendMessage(message) {
        this.#socket.send(message);
    }
}

export const Socket = new _Socket;
