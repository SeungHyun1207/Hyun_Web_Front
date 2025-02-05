/**
 *  작성일 : 2025-02-02
 *  작성자 : SH.K
 *  내용 : 사용자 Game > MapleStory Common API
 *  https://openapi.nexon.com/ko/game/maplestory/?id=14
 *  // 식별자 079aa01facbb8124311c61f667e21dc8
 */

import MapleCommonApiAxios from '@/apis/common/MapleCommonApiAxios';

// ============================================================
// 캐릭터 정보 (식별자) 조회
export interface IMapleCharacterOCIDFetchResponse {
  ocid: string;
}
// ============================================================

// ============================================================
// 공통 Parameters
export interface IMapleCharacterInfoParameters {
  ocid: string;
  date: string;
}
// ============================================================

// 캐릭터 식별자 조회
export const getCharacterOCIDFetchResponse = (characterName: string) => {
  return MapleCommonApiAxios.get<IMapleCharacterOCIDFetchResponse>(
    `/v1/id?character_name=${characterName}`
  ).then(({ data }) => data);
};
