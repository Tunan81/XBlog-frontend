/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostCommentDTO } from '../models/PostCommentDTO';
import type { ResultListPostComment } from '../models/ResultListPostComment';
import type { ResultObject } from '../models/ResultObject';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostCommentControllerService {
    /**
     * @param requestBody
     * @returns ResultObject OK
     * @throws ApiError
     */
    public static save(
        requestBody: PostCommentDTO,
    ): CancelablePromise<ResultObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/comment/save',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param pageNum
     * @param pageSize
     * @param postId
     * @returns ResultListPostComment OK
     * @throws ApiError
     */
    public static page(
        pageNum: number,
        pageSize: number,
        postId: number,
    ): CancelablePromise<ResultListPostComment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/comment/page/{pageNum}/{pageSize}',
            path: {
                'pageNum': pageNum,
                'pageSize': pageSize,
            },
            query: {
                'postId': postId,
            },
        });
    }
}
