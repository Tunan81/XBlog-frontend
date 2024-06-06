/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Result_boolean_ } from '../models/Result_boolean_';
import type { Result_List_TeamUserVO_ } from '../models/Result_List_TeamUserVO_';
import type { Result_long_ } from '../models/Result_long_';
import type { Result_Page_Team_ } from '../models/Result_Page_Team_';
import type { Result_Team_ } from '../models/Result_Team_';
import type { TeamAddRequest } from '../models/TeamAddRequest';
import type { TeamQuery } from '../models/TeamQuery';
import type { TeamQuitRequest } from '../models/TeamQuitRequest';
import type { TeamUpdateRequest } from '../models/TeamUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TeamControllerService {

    /**
     * addTeam
     * @param teamAddRequest teamAddRequest
     * @returns Result_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addTeamUsingPost(
teamAddRequest: TeamAddRequest,
): CancelablePromise<Result_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/team/add',
            body: teamAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getTeamById
     * @param id id
     * @returns Result_Team_ OK
     * @throws ApiError
     */
    public static getTeamByIdUsingGet(
id?: number,
): CancelablePromise<Result_Team_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/team/get',
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
     * listTeams
     * @param description 
     * @param id 
     * @param idList 
     * @param maxNum 
     * @param name 
     * @param pageNumber 
     * @param pageSize 
     * @param searchText 
     * @param sortField 
     * @param sortOrder 
     * @param status 
     * @param userId 
     * @returns Result_List_TeamUserVO_ OK
     * @throws ApiError
     */
    public static listTeamsUsingGet(
description?: string,
id?: number,
idList?: Array<number>,
maxNum?: number,
name?: string,
pageNumber?: number,
pageSize?: number,
searchText?: string,
sortField?: string,
sortOrder?: string,
status?: number,
userId?: number,
): CancelablePromise<Result_List_TeamUserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/team/list',
            query: {
                'description': description,
                'id': id,
                'idList': idList,
                'maxNum': maxNum,
                'name': name,
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'searchText': searchText,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'status': status,
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listMyCreateTeams
     * @param description 
     * @param id 
     * @param idList 
     * @param maxNum 
     * @param name 
     * @param pageNumber 
     * @param pageSize 
     * @param searchText 
     * @param sortField 
     * @param sortOrder 
     * @param status 
     * @param userId 
     * @returns Result_List_TeamUserVO_ OK
     * @throws ApiError
     */
    public static listMyCreateTeamsUsingGet(
description?: string,
id?: number,
idList?: Array<number>,
maxNum?: number,
name?: string,
pageNumber?: number,
pageSize?: number,
searchText?: string,
sortField?: string,
sortOrder?: string,
status?: number,
userId?: number,
): CancelablePromise<Result_List_TeamUserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/team/list/my/create',
            query: {
                'description': description,
                'id': id,
                'idList': idList,
                'maxNum': maxNum,
                'name': name,
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'searchText': searchText,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'status': status,
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listMyJoinTeams
     * @param description 
     * @param id 
     * @param idList 
     * @param maxNum 
     * @param name 
     * @param pageNumber 
     * @param pageSize 
     * @param searchText 
     * @param sortField 
     * @param sortOrder 
     * @param status 
     * @param userId 
     * @returns Result_List_TeamUserVO_ OK
     * @throws ApiError
     */
    public static listMyJoinTeamsUsingGet(
description?: string,
id?: number,
idList?: Array<number>,
maxNum?: number,
name?: string,
pageNumber?: number,
pageSize?: number,
searchText?: string,
sortField?: string,
sortOrder?: string,
status?: number,
userId?: number,
): CancelablePromise<Result_List_TeamUserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/team/list/my/join',
            query: {
                'description': description,
                'id': id,
                'idList': idList,
                'maxNum': maxNum,
                'name': name,
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'searchText': searchText,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'status': status,
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listTeamsByPage
     * @param teamQuery teamQuery
     * @returns Result_Page_Team_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listTeamsByPageUsingPost(
teamQuery: TeamQuery,
): CancelablePromise<Result_Page_Team_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/team/list/page',
            body: teamQuery,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * quitTeam
     * @param teamQuitRequest teamQuitRequest
     * @returns Result_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static quitTeamUsingPost(
teamQuitRequest: TeamQuitRequest,
): CancelablePromise<Result_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/team/quit',
            body: teamQuitRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateTeam
     * @param teamUpdateRequest teamUpdateRequest
     * @returns Result_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateTeamUsingPost(
teamUpdateRequest: TeamUpdateRequest,
): CancelablePromise<Result_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/team/update',
            body: teamUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
