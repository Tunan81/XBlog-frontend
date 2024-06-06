/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteRequest } from '../models/DeleteRequest';
import type { PostAddRequest } from '../models/PostAddRequest';
import type { PostAdminQueryRequest } from '../models/PostAdminQueryRequest';
import type { PostQueryRequest } from '../models/PostQueryRequest';
import type { PostUpdateRequest } from '../models/PostUpdateRequest';
import type { Result_boolean_ } from '../models/Result_boolean_';
import type { Result_long_ } from '../models/Result_long_';
import type { Result_Page_Post_ } from '../models/Result_Page_Post_';
import type { Result_Page_PostVO_ } from '../models/Result_Page_PostVO_';
import type { Result_PostVO_ } from '../models/Result_PostVO_';
import type { Result_SearchVO_ } from '../models/Result_SearchVO_';
import type { SearchRequest } from '../models/SearchRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostControllerService {

    /**
     * addPost
     * @param postAddRequest postAddRequest
     * @returns Result_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addPostUsingPost(
postAddRequest: PostAddRequest,
): CancelablePromise<Result_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/add',
            body: postAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deletePost
     * @param deleteRequest deleteRequest
     * @returns Result_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deletePostUsingPost(
deleteRequest: DeleteRequest,
): CancelablePromise<Result_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getPostVOById
     * @param id id
     * @returns Result_PostVO_ OK
     * @throws ApiError
     */
    public static getPostVoByIdUsingGet(
id?: number,
): CancelablePromise<Result_PostVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/post/get/vo',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listPostByPage
     * @param postQueryRequest postQueryRequest
     * @returns Result_Page_Post_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listPostByPageUsingPost(
postQueryRequest: PostAdminQueryRequest,
): CancelablePromise<Result_Page_Post_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/list/page',
            body: postQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listPostVOByPage
     * @param postQueryRequest postQueryRequest
     * @returns Result_Page_PostVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listPostVoByPageUsingPost(
postQueryRequest: PostQueryRequest,
): CancelablePromise<Result_Page_PostVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/list/page/vo',
            body: postQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * searchAll
     * @param searchRequest searchRequest
     * @returns Result_SearchVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static searchAllUsingPost(
searchRequest: SearchRequest,
): CancelablePromise<Result_SearchVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/search/all',
            body: searchRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updatePost
     * @param postUpdateRequest postUpdateRequest
     * @returns Result_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updatePostUsingPost(
postUpdateRequest: PostUpdateRequest,
): CancelablePromise<Result_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/update',
            body: postUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
