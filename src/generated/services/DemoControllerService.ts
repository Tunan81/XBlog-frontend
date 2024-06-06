/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DemoControllerService {

    /**
     * doLogin
     * @param password password
     * @param username username
     * @returns string OK
     * @throws ApiError
     */
    public static doLoginUsingGet(
password?: string,
username?: string,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/demo/doLogin',
            query: {
                'password': password,
                'username': username,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * doLogin
     * @param password password
     * @param username username
     * @returns string OK
     * @throws ApiError
     */
    public static doLoginUsingHead(
password?: string,
username?: string,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/demo/doLogin',
            query: {
                'password': password,
                'username': username,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * doLogin
     * @param password password
     * @param username username
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static doLoginUsingPost(
password?: string,
username?: string,
): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/demo/doLogin',
            query: {
                'password': password,
                'username': username,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * doLogin
     * @param password password
     * @param username username
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static doLoginUsingPut(
password?: string,
username?: string,
): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/demo/doLogin',
            query: {
                'password': password,
                'username': username,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * doLogin
     * @param password password
     * @param username username
     * @returns string OK
     * @throws ApiError
     */
    public static doLoginUsingDelete(
password?: string,
username?: string,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/demo/doLogin',
            query: {
                'password': password,
                'username': username,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * doLogin
     * @param password password
     * @param username username
     * @returns string OK
     * @throws ApiError
     */
    public static doLoginUsingOptions(
password?: string,
username?: string,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/demo/doLogin',
            query: {
                'password': password,
                'username': username,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * doLogin
     * @param password password
     * @param username username
     * @returns string OK
     * @throws ApiError
     */
    public static doLoginUsingPatch(
password?: string,
username?: string,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/demo/doLogin',
            query: {
                'password': password,
                'username': username,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * isLogin
     * @returns string OK
     * @throws ApiError
     */
    public static isLoginUsingGet(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/demo/isLogin',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * isLogin
     * @returns string OK
     * @throws ApiError
     */
    public static isLoginUsingHead(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/demo/isLogin',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * isLogin
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static isLoginUsingPost(): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/demo/isLogin',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * isLogin
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static isLoginUsingPut(): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/demo/isLogin',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * isLogin
     * @returns string OK
     * @throws ApiError
     */
    public static isLoginUsingDelete(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/demo/isLogin',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * isLogin
     * @returns string OK
     * @throws ApiError
     */
    public static isLoginUsingOptions(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/demo/isLogin',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * isLogin
     * @returns string OK
     * @throws ApiError
     */
    public static isLoginUsingPatch(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/demo/isLogin',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
