/**
 *  작성일 : 2025-02-03
 *  작성자 : SH.K
 *  내용 : 사용자 Game Hook
 */

import {
  getCharacterInfoFetchResponse,
  getCharacterItemEquipmentFetchResponse,
  getCharacterOCIDFetchResponse,
  getCharacterPopularityFetchResponse,
  IMapleCharacterInfoParameters,
} from '@/apis/client/gameApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useMapleCharacterBaseInfoStore,
  useMapleCharacterItemEquipmentsStore,
  useMapleCharacterOCIDStore,
} from './stores/useGameStore';

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
      console.log(`Item : ${itemEquipmentData}`);
      if (itemEquipmentData) {
        // 배열
        const ItemEquipment = itemEquipmentData.item_equipment;
        setCharacterItemEquipments(ItemEquipment);
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
