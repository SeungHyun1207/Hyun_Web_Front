/**
 *  작성일 : 2025-02-02
 *  작성자 : SH.K
 *  내용 : 사용자 Game API
 *  https://openapi.nexon.com/ko/game/maplestory/?id=14
 */

import MapleCommonApiAxios from '../common/MapleCommonApiAxios';
// ============================================================
// 캐릭터 정보 (식별자) 조회
export interface IMapleCharacterOCIDFetchResponse {
  ocid: string;
}
// ============================================================

// ============================================================
// 내 계정 캐릭터 목록 조회
export interface IMapleCharacter {
  ocid: string;
  character_name: string;
  world_name: string;
  character_class: string;
  character_level: number;
}
export interface IMapleCharacterInfo {
  account_id: string;
  character_list: IMapleCharacter[];
}
export interface IMapleMyCharactersFetchResponse {
  account_list: IMapleCharacterInfo[];
}
// ============================================================

// ============================================================
// 공통 Parameters
export interface IMapleCharacterInfoParameters {
  ocid: string;
  date: string;
}
// ============================================================

// ============================================================
// 캐릭터 기본 정보
export interface IMapleCharacterBaseInfoFetchResponse {
  access_flag: boolean; // 접근 가능 여부
  character_class: string; // 캐릭터 직업
  character_class_level: string; // 캐릭터 직업 레벨 (?차)
  character_date_create: string; // 캐릭터 생성일
  character_exp: number; // 캐릭터 경험치
  character_exp_rate: string; // 캐릭터 경험치 퍼센트
  character_gender: string; // 캐릭터 성별
  character_guild_name: string; // 캐릭터 길드 이름
  character_image: string; // 캐릭터 이미지
  character_level: number; // 캐릭터 레벨
  character_name: string; // 캐릭터 이름
  date: string; // 검색 날짜
  liberation_quest_clear_flag: 'true' | 'false'; // 해방 퀘스트 완료 여부
  world_name: string; // 월드 이름
}
// ============================================================

// ============================================================
// 인기도 정보
export interface ICharacterPopularityFetchResponse {
  date: string; // 검색 날짜
  popularity: number; // 인기도
}
// ============================================================

// ============================================================
// 캐릭터 장착 장비 정보

// item_starforce_option
export interface IItemStarForceOption {
  str: string;
  dex: string;
  int: string;
  luk: string;
  max_hp: string;
  max_mp: string;
  attack_power: string;
  magic_power: string;
  armor: string;
  speed: string;
  jump: string;
}

// item_etc_option
export interface IItemEtcOptions {
  str: string;
  dex: string;
  int: string;
  luk: string;
  max_hp: string;
  max_mp: string;
  attack_power: string;
  magic_power: string;
  armor: string;
  speed: string;
  jump: string;
}

// item_add_option
export interface IItemAddOptions {
  str: string;
  dex: string;
  int: string;
  luk: string;
  max_hp: string;
  max_mp: string;
  attack_power: string;
  magic_power: string;
  armor: string;
  speed: string;
  jump: string;
  boss_damage: string;
  damage: string;
  all_stat: string;
  equipment_level_decrease: string;
}

// item_exceptional_option
export interface IItemExceptionalOptions {
  str: string;
  dex: string;
  int: string;
  luk: string;
  max_hp: string;
  max_mp: string;
  attack_power: string;
  magic_power: string;
  exceptional_upgrade: number;
}

// 아이템 Base Options
export interface IItemBaseOptions {
  str: string;
  dex: string;
  int: string;
  luk: string;
  max_hp: string;
  max_mp: string;
  attack_power: string;
  magic_power: string;
  armor: string;
  speed: string;
  jump: string;
  boss_damage: string;
  ignore_monster_armor: string;
  all_stat: string;
  max_hp_rate: string;
  max_mp_rate: string;
  base_equipment_level: string;
}

// 아이템 Total Options
export interface IItemTotalOptions {
  str: string;
  dex: string;
  int: string;
  luk: string;
  max_hp: string;
  max_mp: string;
  attack_power: string;
  magic_power: string;
  armor: string;
  speed: string;
  jump: string;
  boss_damage: string;
  ignore_monster_armor: string;
  all_stat: string;
  damage: string;
  equipment_level_decrease: string;
  max_hp_rate: string;
  max_mp_rate: string;
}

// 아이템 정보
export interface ICharacterItemEquipments {
  item_equipment_part: string;
  item_equipment_slot: string;
  item_name: string;
  item_icon: string;
  item_description: string;
  item_shape_name: string;
  item_shape_icon: string;
  item_gender: string;
  item_total_option: IItemTotalOptions;
  item_base_option: IItemBaseOptions;
  potential_option_grade: string;
  additional_potential_option_grade: string;
  potential_option_flag: 'true' | 'false';
  potential_option_1: string;
  potential_option_2: string;
  potential_option_3: string;
  additional_potential_option_flag: 'true' | 'false';
  additional_potential_option_1: string;
  additional_potential_option_2: string;
  additional_potential_option_3: string;
  equipment_level_increase: number;
  item_exceptional_option: IItemExceptionalOptions;
  item_add_option: IItemAddOptions;
  growth_exp: string;
  growth_level: string;
  scroll_upgrade: string;
  cuttable_count: string;
  golden_hammer_flag: string;
  scroll_resilience_count: string;
  scroll_upgradeable_count: string;
  soul_name: string;
  soul_option: string;
  item_etc_option: IItemEtcOptions;
  starforce: string;
  starforce_scroll_flag: string;
  item_starforce_option: IItemStarForceOption;
  special_ring_level: number;
  date_expire: string;
}
export interface ICharacterItemEquipmentFetchResponse {
  date: string;
  character_gender: string;
  character_class: string;
  perset_no: number;
  item_equipment: ICharacterItemEquipments[];
  title: {
    title_name: string;
    title_icon: string;
    title_description: string;
    date_expire: string;
    date_option_expired: string;
  };
  dragon_equipment: [];
  mechanic_equipment: [];
}
// ============================================================

// 캐릭터 식별자 조회
export const getCharacterOCIDFetchResponse = (characterName: string) => {
  return MapleCommonApiAxios.get<IMapleCharacterOCIDFetchResponse>(
    `/v1/id?character_name=${characterName}`
  ).then(({ data }) => data);
};

// 내 계정 캐릭터 목록 조회
export const getMyAccountCharacterListFetchResponse = () => {
  return MapleCommonApiAxios.get<IMapleMyCharactersFetchResponse>(
    '/v1/character/list'
  ).then(({ data }) => data);
};

// 캐릭터 기본 정보 조회
export const getCharacterInfoFetchResponse = (
  params: IMapleCharacterInfoParameters
) => {
  return MapleCommonApiAxios.get<IMapleCharacterBaseInfoFetchResponse>(
    `/v1/character/basic?ocid=${params.ocid}&date=${params.date}`
  ).then(({ data }) => data);
};

// 캐릭터 인기도 조회
export const getCharacterPopularityFetchResponse = (
  params: IMapleCharacterInfoParameters
) => {
  return MapleCommonApiAxios.get<ICharacterPopularityFetchResponse>(
    `/v1/character/popularity?ocid=${params.ocid}&date=${params.date}`
  ).then(({ data }) => data);
};

// 캐릭터 장착 장비 정보 조회 (캐시장비 제외)
export const getCharacterItemEquipmentFetchResponse = (
  params: IMapleCharacterInfoParameters
) => {
  return MapleCommonApiAxios.get<ICharacterItemEquipmentFetchResponse>(
    `/v1/character/item-equipment?ocid=${params.ocid}&date=${params.date}`
  ).then(({ data }) => data);
};
