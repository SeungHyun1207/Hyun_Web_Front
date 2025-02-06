/**
 *  작성일 : 2025-02-02
 *  작성자 : SH.K
 *  내용 : 사용자 Game > MapleStory 유니온 API
 */

import MapleCommonApiAxios from '@/apis/common/MapleCommonApiAxios';
import { IMapleCharacterInfoParameters } from '../mapleCommonApi';

// ============================================================
// 유니온 정보 조회
export interface IUnionInfoFetchResponse {
  date: string;
  union_artifact_exp: number;
  union_artifact_level: number;
  union_artifact_point: number;
  union_grade: string;
  union_level: number;
}
// ============================================================

// ============================================================
// 유니온 공격대 정보 조회
export interface IUnionAttackerInfoFetchResponse {
  date: string;
  union_raider_stat: string[];
  union_occupied_stat: string[];
  union_block: IUnionBlock[];
  union_inner_stat: IUnionInnerStat[];
  use_preset_no: number;
  union_raider_preset_1: IUnionPreset;
  union_raider_preset_2: IUnionPreset;
  union_raider_preset_3: IUnionPreset;
  union_raider_preset_4: IUnionPreset;
  union_raider_preset_5: IUnionPreset;
}

export interface IPosition {
  x: number;
  y: number;
}

export interface IUnionBlock {
  block_type: string;
  block_class: string;
  block_level: string;
  block_control_point: IPosition;
  block_position: IPosition[];
}

export interface IUnionInnerStat {
  stat_field_id: string;
  stat_field_effect: string;
}

export interface IUnionPreset {
  union_raider_stat: string[];
  union_occupied_stat: string[];
  union_block: IUnionBlock[];
  union_inner_stat: IUnionInnerStat[];
}
// ============================================================

// ============================================================
// 유니온 아티팩트 정보 조회
export interface IUnionArtifactFetchResponse {
  date: string;
  union_artifact_effect: IUnionArtifactEffect[];
  union_artifact_crystal: IUnionArtifactCrystal[];
  union_artifact_remain_ap: number;
}

export interface IUnionArtifactEffect {
  name: string;
  level: number;
}

export interface IUnionArtifactCrystal {
  name: string;
  validity_flag: string;
  date_expire: string;
  level: number;
  crystal_option_name_1: string;
  crystal_option_name_2: string;
  crystal_option_name_3: string;
}
// ============================================================

// 유니온 정보 조회
export const getUnionInfoFetchResponse = (
  params: IMapleCharacterInfoParameters
) => {
  return MapleCommonApiAxios.get<IUnionInfoFetchResponse>(
    `/v1/user/union?ocid=${params.ocid}&date=${params.date}`
  ).then(({ data }) => data);
};

// 유니온 공격대 정보 조회
export const getUnionAttackerInfoFetchResponse = (
  params: IMapleCharacterInfoParameters
) => {
  return MapleCommonApiAxios.get<IUnionAttackerInfoFetchResponse>(
    `/v1/user/union-raider?ocid=${params.ocid}&date=${params.date}`
  ).then(({ data }) => data);
};

// 유니온 아티팩트 정보 조회
export const getUnionArtifactFetchResponse = (
  params: IMapleCharacterInfoParameters
) => {
  return MapleCommonApiAxios.get<IUnionArtifactFetchResponse>(
    `/v1/user/union-artifact?ocid=${params.ocid}&date=${params.date}`
  ).then(({ data }) => data);
};
