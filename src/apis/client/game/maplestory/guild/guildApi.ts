/**
 *  작성일 : 2025-02-06
 *  작성자 : SH.K
 *  내용 : 사용자 Game > MapleStory 길드 API
 *  길드식별자 : 2abcf7379d520b376ae6d9afce4c475c
 */

import MapleCommonApiAxios from '@/apis/common/MapleCommonApiAxios';

// ============================================================
// 길드 식별자 정보 파라미터
export interface IGuildOGuildIdFetchRequest {
  guild_name: string;
  world_name: string;
}
// ============================================================

// ============================================================
// 길드 식별자 정보 조회
export interface IGuildOGuildIdFetchResponse {
  oguild_id: string;
}
// ============================================================

// ============================================================
// 길드 식별자 정보 조회
export interface IGuildOGuildIdFetchResponse {
  oguild_id: string;
}
// ============================================================

// ============================================================
// 길드 기본 정보 파라미터
export interface IGuildBaseInfoFetchRequest {
  oguild_id: string;
  date: string;
}
// ============================================================

// ============================================================
// 길드 기본 정보 조회
export interface IGuildBaseInfoFetchResponse {
  date: string;
  world_name: string;
  guild_name: string;
  guild_level: number;
  guild_fame: string;
  guild_point: string;
  guild_master_name: string;
  guild_member_count: number;
  guild_member: string[];
  guild_skill: IGuildSkill[];
  guild_noblesse_skill: IGuildSkill[];
}
export interface IGuildSkill {
  skill_name: string;
  skill_description: string;
  skill_level: string;
  skill_effect: string;
  skill_icon: string;
}
// ============================================================

// 길드 식별자 정보 조회
export const getOGuildIdFetchResponse = (
  params: IGuildOGuildIdFetchRequest
) => {
  return MapleCommonApiAxios.get<IGuildOGuildIdFetchResponse>(
    `/v1/guild/id?guild_name=${params.guild_name}&world_name=${params.world_name}`
  ).then(({ data }) => data);
};

// 길드 기본 정보 조회
export const getGuildBaseInfoFetchResponse = (
  params: IGuildBaseInfoFetchRequest
) => {
  return MapleCommonApiAxios.get<IGuildBaseInfoFetchResponse>(
    `/v1/guild/basic?oguild_id=${params.oguild_id}&date=${params.date}`
  ).then(({ data }) => data);
};
