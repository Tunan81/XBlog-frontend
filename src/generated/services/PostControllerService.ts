/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteRequest } from '../models/DeleteRequest';
import type { PostAddRequest } from '../models/PostAddRequest';
import type { PostAdminQueryRequest } from '../models/PostAdminQueryRequest';
import type { PostQueryRequest } from '../models/PostQueryRequest';
import type { PostUpdateRequest } from '../models/PostUpdateRequest';
import type { ResultBoolean } from '../models/ResultBoolean';
import type { ResultListPost } from '../models/ResultListPost';
import type { ResultLong } from '../models/ResultLong';
import type { ResultPagePost } from '../models/ResultPagePost';
import type { ResultPagePostVO } from '../models/ResultPagePostVO';
import type { ResultPostVO } from '../models/ResultPostVO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostControllerService {
    /**
     * @param requestBody
     * @returns ResultBoolean OK
     * @throws ApiError
     */
    public static updatePost(
        requestBody: PostUpdateRequest,
    ): CancelablePromise<ResultBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param categoryName
     * @returns ResultListPost OK
     * @throws ApiError
     */
    public static listPostVo(
        categoryName: string,
    ): CancelablePromise<ResultListPost> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/list/{categoryName}',
            path: {
                'categoryName': categoryName,
            },
        });
    }
    /**
     * @param requestBody
     * @returns ResultPagePost OK
     * @throws ApiError
     */
    public static listPostByPage(
        requestBody: PostAdminQueryRequest,
    ): CancelablePromise<ResultPagePost> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/list/page',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns ResultPagePostVO OK
     * @throws ApiError
     */
    public static listPostVoByPage(
        requestBody: PostQueryRequest,
    ): CancelablePromise<ResultPagePostVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/list/page/vo',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns ResultBoolean OK
     * @throws ApiError
     */
    public static deletePost(
        requestBody: DeleteRequest,
    ): CancelablePromise<ResultBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns ResultLong OK
     * @throws ApiError
     */
    public static addPost(
        requestBody: PostAddRequest,
    ): CancelablePromise<ResultLong> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/add',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns ResultPostVO OK
     * @throws ApiError
     */
    public static getPostVoById(
        id: number,
    ): CancelablePromise<ResultPostVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/get/vo/{id}',
            path: {
                'id': id,
            },
        });
    }
}
