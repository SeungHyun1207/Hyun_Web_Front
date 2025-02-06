/**
 *  작성일 : 2025-02-03
 *  작성자 : SH.K
 *  내용 : 사용자 Game Hook
 */

import {
  getCharacterAndroidEquipmentFetchResponse,
  getCharacterCashItemEquipmentFetchResponse,
  getCharacterDojangFetchResponse,
  getCharacterInfoFetchResponse,
  getCharacterItemEquipmentFetchResponse,
  getCharacterPopularityFetchResponse,
  getCharacterSetEffectFetchResponse,
  getCharacterSymbolEquipmentFetchResponse,
} from '@/apis/client/game/maplestory/character/characterApi';
import {
  getCharacterOCIDFetchResponse,
  IMapleCharacterInfoParameters,
} from '@/apis/client/game/maplestory/mapleCommonApi';
import {
  getUnionArtifactFetchResponse,
  getUnionAttackerInfoFetchResponse,
  getUnionInfoFetchResponse,
} from '@/apis/client/game/maplestory/union/unionApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useMapleCharacterAndroidStore,
  useMapleCharacterBaseInfoStore,
  useMapleCharacterCashItemEquipmentsStore,
  useMapleCharacterDojangStore,
  useMapleCharacterItemEquipmentsStore,
  useMapleCharacterOCIDStore,
  useMapleCharacterSetEffectStore,
  useMapleCharacterSymbolEquipmentsStore,
  useMapleUnionArtifactStore,
  useMapleUnionAttackerInfoStore,
  useMapleUnionInfoStore,
} from './stores/useGameStore';

export const equipmentOrder = [
  ['반지4', '', '모자', '', '엠블렘'],
  ['반지3', '펜던트', '얼굴장식', '', '뱃지'],
  ['반지2', '펜던트2', '눈장식', '귀고리', '훈장'],
  ['반지1', '무기', '상의', '어깨장식', '보조무기'],
  ['포켓 아이템', '벨트', '하의', '장갑', '망토'],
  ['', '', '신발', '안드로이드', '기계 심장'],
];

export const equipmentClassName = new Map([
  ['반지', 'ringInfo'],
  ['반지1', 'ringInfo'],
  ['반지2', 'ringInfo'],
  ['반지3', 'ringInfo'],
  ['반지4', 'ringInfo'],
  ['모자', 'capInfo'],
  ['엠블렘', 'emblemInfo'],
  ['펜던트', 'pendantInfo'],
  ['펜던트2', 'pendantInfo'],
  ['얼굴장식', 'foreheadInfo'],
  ['뱃지', 'badgeInfo'],
  ['눈장식', 'eyeInfo'],
  ['귀고리', 'earringInfo'],
  ['훈장', 'medalInfo'],
  ['무기', 'weaponInfo'],
  ['상의', 'clothesInfo'],
  ['어깨장식', 'shoulderInfo'],
  ['보조무기', 'subWeaponInfo'],
  ['포켓 아이템', 'pocketInfo'],
  ['벨트', 'beltInfo'],
  ['하의', 'pantsInfo'],
  ['장갑', 'glovesInfo'],
  ['망토', 'capeInfo'],
  ['신발', 'shoesInfo'],
  ['안드로이드', 'androidInfo'],
  ['기계 심장', 'heartInfo'],
]);

const useGame = () => {
  const navigate = useNavigate();

  const today = new Date();
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  // 캐릭터 검색하기 위한 변수
  const [characterSearchName, setCharacterSearchName] = useState<string>('');

  // 캐릭터 식별자
  const setCharacterOCID = useMapleCharacterOCIDStore(
    (ocid) => ocid.setCharacterOCID
  );

  // 캐릭터 기본 정보
  const setCharacterBaseInfo = useMapleCharacterBaseInfoStore(
    (baseInfo) => baseInfo.setCharacterBaseInfos
  );

  // 캐릭터 인기도
  const [characterPopularity, setCharacterPopularity] = useState<number>(0);

  // 캐릭터 장착 장비 정보
  const setCharacterItemEquipments = useMapleCharacterItemEquipmentsStore(
    (characterItemEquipments) =>
      characterItemEquipments.setCharacterItemEquipments
  );
  // 캐릭터 장착 캐시 장비 정보
  const setCharacterCashItemEquipments =
    useMapleCharacterCashItemEquipmentsStore(
      (characterCashItemEquipments) =>
        characterCashItemEquipments.setCharacterCashItemEquipments
    );

  // 캐릭터 장착 심볼 정보
  const setCharacterSymbolEquipments = useMapleCharacterSymbolEquipmentsStore(
    (characterSymbolEquipments) =>
      characterSymbolEquipments.setCharacterSymbolEquipments
  );

  // 캐릭터 적용 세트효과 정보
  const setCharacterSetEffect = useMapleCharacterSetEffectStore(
    (characterSetEffects) => characterSetEffects.setCharacterSetEffect
  );

  // 캐릭터 장착 안드로이드 정보
  const setCharacterAndroidEquipment = useMapleCharacterAndroidStore(
    (characterAndroidEquipment) =>
      characterAndroidEquipment.setCharacterAndroidEquipment
  );

  // 캐릭터 무릉도장 최고기록 정보
  const setCharacterDojang = useMapleCharacterDojangStore(
    (characterDojang) => characterDojang.setCharacterDojang
  );

  // ============================================================
  // 유니온 정보 조회
  const setUnionInfo = useMapleUnionInfoStore(
    (unionInfo) => unionInfo.setUnionInfo
  );
  // 유니온 공격대 조회
  const setUnionAttackerInfo = useMapleUnionAttackerInfoStore(
    (unionAttackerInfo) => unionAttackerInfo.setUnionAttackerInfo
  );
  // 유니온 아티팩트 조회
  const setUnionArtifact = useMapleUnionArtifactStore(
    (unionArtifact) => unionArtifact.setUnionArtifact
  );

  /**
   * 캐릭터 식별자 조회
   * @param characterName
   */
  const getCharacterOCID = async (characterName: string) => {
    try {
      const { ocid: ocid } = await getCharacterOCIDFetchResponse(characterName);
      if (ocid) {
        setCharacterOCID(ocid);
        // 기본 정보
        getCharacterInfo({
          ocid: ocid,
          date: yesterday.toISOString().split('T')[0],
        });
        // 인기도
        getCharacterPopularity({
          ocid: ocid,
          date: yesterday.toISOString().split('T')[0],
        });
        // 장착 장비 정보
        getCharacterItemEquipment({
          ocid: ocid,
          date: yesterday.toISOString().split('T')[0],
        });
        // 장착 캐시 장비 정보
        getCharacterCashItemEquipment({
          ocid: ocid,
          date: yesterday.toISOString().split('T')[0],
        });
        // 장착 심볼 정보
        getCharacterSymbolEquipment({
          ocid: ocid,
          date: yesterday.toISOString().split('T')[0],
        });
        // 적용 세트효과
        getCharacterSetEffect({
          ocid: ocid,
          date: yesterday.toISOString().split('T')[0],
        });
        // 장착 안드로이드 정보
        getCharacterAndroidEquipment({
          ocid: ocid,
          date: yesterday.toISOString().split('T')[0],
        });
        // 무릉도장 최고기록 정보
        getCharacterDojang({
          ocid: ocid,
          date: yesterday.toISOString().split('T')[0],
        });

        // ============================================================
        // 유니온 정보 조회
        getUnionInfo({
          ocid: ocid,
          date: yesterday.toISOString().split('T')[0],
        });
        // 유니온 공격대 정보 조회
        getUnionAttackerInfo({
          ocid: ocid,
          date: yesterday.toISOString().split('T')[0],
        });
        // 유니온 아티팩트 정보 조회
        getUnionArtifact({
          ocid: ocid,
          date: yesterday.toISOString().split('T')[0],
        });
      } else {
        console.log('캐릭터를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.log(error);
      alert('캐릭터를 찾을 수 없습니다.');
    }
  };

  // 캐릭터 검색 창 엔터 시
  const handleCharacterSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      getCharacterOCID(characterSearchName);
    }
  };

  /**
   *  캐릭터 기본 정보 조회
   * @param characterOCID
   * @param searchDate
   */
  const getCharacterInfo = async (params: IMapleCharacterInfoParameters) => {
    try {
      const baseInfoData = await getCharacterInfoFetchResponse({
        ocid: params.ocid,
        date: params.date,
      });
      if (baseInfoData) {
        setCharacterBaseInfo(baseInfoData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   *  캐릭터 인기도 조회
   * @param characterOCID
   * @param searchDate
   */
  const getCharacterPopularity = async (
    params: IMapleCharacterInfoParameters
  ) => {
    try {
      const popularityData = await getCharacterPopularityFetchResponse({
        ocid: params.ocid,
        date: params.date,
      });
      setCharacterPopularity(popularityData.popularity);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   *  캐릭터 장착 장비 정보 조회
   * @param characterOCID
   * @param searchDate
   */
  const getCharacterItemEquipment = async (
    params: IMapleCharacterInfoParameters
  ) => {
    try {
      const itemEquipmentData = await getCharacterItemEquipmentFetchResponse({
        ocid: params.ocid,
        date: params.date,
      });
      if (itemEquipmentData) {
        // 배열
        const ItemEquipment = itemEquipmentData.item_equipment;
        setCharacterItemEquipments(ItemEquipment);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   *  캐릭터 장착 캐시 장비 정보 조회
   * @param characterOCID
   * @param searchDate
   */
  const getCharacterCashItemEquipment = async (
    params: IMapleCharacterInfoParameters
  ) => {
    try {
      const itemEquipmentData =
        await getCharacterCashItemEquipmentFetchResponse({
          ocid: params.ocid,
          date: params.date,
        });
      if (itemEquipmentData) {
        const CashItemEquipment = itemEquipmentData.cash_item_equipment_base;
        setCharacterCashItemEquipments(CashItemEquipment);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   *  캐릭터 장착 심볼 정보 조회
   * @param characterOCID
   * @param searchDate
   */
  const getCharacterSymbolEquipment = async (
    params: IMapleCharacterInfoParameters
  ) => {
    try {
      const symbolEquipmentData =
        await getCharacterSymbolEquipmentFetchResponse({
          ocid: params.ocid,
          date: params.date,
        });
      if (symbolEquipmentData) {
        const symbolEquipment = symbolEquipmentData.symbol;
        setCharacterSymbolEquipments(symbolEquipment);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   *  캐릭터 적용 세트효과 정보 조회
   * @param characterOCID
   * @param searchDate
   */
  const getCharacterSetEffect = async (
    params: IMapleCharacterInfoParameters
  ) => {
    try {
      const setEffectData = await getCharacterSetEffectFetchResponse({
        ocid: params.ocid,
        date: params.date,
      });
      if (setEffectData) {
        const setEffect = setEffectData.set_effect;
        setCharacterSetEffect(setEffect);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   *  캐릭터 장착 안드로이드 정보 조회
   * @param characterOCID
   * @param searchDate
   */
  const getCharacterAndroidEquipment = async (
    params: IMapleCharacterInfoParameters
  ) => {
    try {
      const androidData = await getCharacterAndroidEquipmentFetchResponse({
        ocid: params.ocid,
        date: params.date,
      });
      if (androidData) {
        const androidCashItem = androidData.android_cash_item_equipment;
        setCharacterAndroidEquipment(androidData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   *  캐릭터 무릉도장 최고기록 정보 조회
   * @param characterOCID
   * @param searchDate
   */
  const getCharacterDojang = async (params: IMapleCharacterInfoParameters) => {
    try {
      const dojangData = await getCharacterDojangFetchResponse({
        ocid: params.ocid,
        date: params.date,
      });
      if (dojangData) {
        setCharacterDojang(dojangData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ============================================================

  /**
   *  유니온 정보 조회
   * @param characterOCID
   * @param searchDate
   */
  const getUnionInfo = async (params: IMapleCharacterInfoParameters) => {
    try {
      const unionInfoData = await getUnionInfoFetchResponse({
        ocid: params.ocid,
        date: params.date,
      });
      if (unionInfoData) {
        setUnionInfo(unionInfoData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   *  유니온 공격대 정보 조회
   * @param characterOCID
   * @param searchDate
   */
  const getUnionAttackerInfo = async (
    params: IMapleCharacterInfoParameters
  ) => {
    try {
      const unionAttackerInfoData = await getUnionAttackerInfoFetchResponse({
        ocid: params.ocid,
        date: params.date,
      });
      if (unionAttackerInfoData) {
        setUnionAttackerInfo(unionAttackerInfoData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   *  유니온 아티팩트 정보 조회
   * @param characterOCID
   * @param searchDate
   */
  const getUnionArtifact = async (params: IMapleCharacterInfoParameters) => {
    try {
      const unionArtifactData = await getUnionArtifactFetchResponse({
        ocid: params.ocid,
        date: params.date,
      });
      console.log('unionArtifactData', unionArtifactData);
      if (unionArtifactData) {
        setUnionArtifact(unionArtifactData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    // State
    characterSearchName,
    setCharacterSearchName,
    characterPopularity,
    // Handler
    handleCharacterSearch,
    getCharacterOCID,
  };
};

export default useGame;
