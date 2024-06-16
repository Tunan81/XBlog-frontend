/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteRequest } from '../models/DeleteRequest';
import type { ResultBoolean } from '../models/ResultBoolean';
import type { ResultLoginUserVO } from '../models/ResultLoginUserVO';
import type { ResultLong } from '../models/ResultLong';
import type { ResultPageUser } from '../models/ResultPageUser';
import type { ResultPageUserVO } from '../models/ResultPageUserVO';
import type { ResultUser } from '../models/ResultUser';
import type { ResultUserVO } from '../models/ResultUserVO';
import type { UserAddRequest } from '../models/UserAddRequest';
import type { UserLoginRequest } from '../models/UserLoginRequest';
import type { UserQueryRequest } from '../models/UserQueryRequest';
import type { UserRegisterRequest } from '../models/UserRegisterRequest';
import type { UserUpdateMyRequest } from '../models/UserUpdateMyRequest';
import type { UserUpdateRequest } from '../models/UserUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserControllerService {
    /**
     * @param requestBody
     * @returns ResultBoolean OK
     * @throws ApiError
     */
    public static updateUser(
        requestBody: UserUpdateRequest,
    ): CancelablePromise<ResultBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns ResultBoolean OK
     * @throws ApiError
     */
    public static updateMyUser(
        requestBody: UserUpdateMyRequest,
    ): CancelablePromise<ResultBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/update/my',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns ResultLong OK
     * @throws ApiError
     */
    public static userRegister(
        requestBody: UserRegisterRequest,
    ): CancelablePromise<ResultLong> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns ResultBoolean OK
     * @throws ApiError
     */
    public static userLogout(): CancelablePromise<ResultBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/logout',
        });
    }
    /**
     * @param requestBody
     * @returns ResultLoginUserVO OK
     * @throws ApiError
     */
    public static userLogin(
        requestBody: UserLoginRequest,
    ): CancelablePromise<ResultLoginUserVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns ResultPageUser OK
     * @throws ApiError
     */
    public static listUserByPage(
        requestBody: UserQueryRequest,
    ): CancelablePromise<ResultPageUser> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/list/page',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns ResultPageUserVO OK
     * @throws ApiError
     */
    public static listUserVoByPage(
        requestBody: UserQueryRequest,
    ): CancelablePromise<ResultPageUserVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/list/page/vo',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns ResultBoolean OK
     * @throws ApiError
     */
    public static deleteUser(
        requestBody: DeleteRequest,
    ): CancelablePromise<ResultBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns ResultLong OK
     * @throws ApiError
     */
    public static addUser(
        requestBody: UserAddRequest,
    ): CancelablePromise<ResultLong> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/add',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns ResultUser OK
     * @throws ApiError
     */
    public static getUserById(
        id: number,
    ): CancelablePromise<ResultUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/get',
            query: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns ResultUserVO OK
     * @throws ApiError
     */
    public static getUserVoById(
        id: number,
    ): CancelablePromise<ResultUserVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/get/vo',
            query: {
                'id': id,
            },
        });
    }
    /**
     * @returns ResultUserVO OK
     * @throws ApiError
     */
    public static getMyUser(): CancelablePromise<ResultUserVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/get/my',
        });
    }
    /**
     * @returns ResultLoginUserVO OK
     * @throws ApiError
     */
    public static getLoginUser(): CancelablePromise<ResultLoginUserVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/get/login',
        });
    }
}
