/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagePostCategory } from '../models/PagePostCategory';
import type { PostCategory } from '../models/PostCategory';
import type { ResultBoolean } from '../models/ResultBoolean';
import type { ResultListPostCategory } from '../models/ResultListPostCategory';
import type { ResultPagePostCategory } from '../models/ResultPagePostCategory';
import type { ResultPostCategory } from '../models/ResultPostCategory';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostCategoryControllerService {
    /**
     * @param requestBody
     * @returns ResultBoolean OK
     * @throws ApiError
     */
    public static update(
        requestBody: PostCategory,
    ): CancelablePromise<ResultBoolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/post/category/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns ResultBoolean OK
     * @throws ApiError
     */
    public static save1(
        requestBody: PostCategory,
    ): CancelablePromise<ResultBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/category/save',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param page
     * @returns ResultPagePostCategory OK
     * @throws ApiError
     */
    public static page1(
        page: PagePostCategory,
    ): CancelablePromise<ResultPagePostCategory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/category/page',
            query: {
                'page': page,
            },
        });
    }
    /**
     * @returns ResultListPostCategory OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<ResultListPostCategory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/category/list',
        });
    }
    /**
     * @param id
     * @returns ResultPostCategory OK
     * @throws ApiError
     */
    public static getInfo(
        id: Record<string, any>,
    ): CancelablePromise<ResultPostCategory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/category/getInfo/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns ResultBoolean OK
     * @throws ApiError
     */
    public static remove(
        id: Record<string, any>,
    ): CancelablePromise<ResultBoolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/post/category/remove/{id}',
            path: {
                'id': id,
            },
        });
    }
}
