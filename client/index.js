
import { extend, interceptHeader } from './lib';

let HEADER_NAME = 'x-cookies';
let cookies = {};

export function setCookies(json) {
    extend(cookies, JSON.parse(cookies));
}

export function getCookies(newToken) {
    return JSON.stringify(cookies);
}

export function setHeaderName(name) {
    HEADER_NAME = name;
}

export function getHeaderName() {
    return HEADER_NAME;
}

export function patchXhr() {

    interceptHeader(HEADER_NAME, {

        get(value) {
            setCookies(value);
        },

        set() {
            return getCookies();
        }
    });
}
